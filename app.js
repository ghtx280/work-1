import jsx from "jsx-transform";
import path from "path";
import fs from "fs";
import { $el } from "./createElement.js";
import { minify } from "csso";
import js_beautify from "js-beautify";

let css = "";

function render(file) {
  let code = fs.readFileSync(file, "utf-8");

  code = code.replace(/<style jsx>{`(.*?)`}<\/style>/gs, (_, style) => {
    css += style;

    return "";
  });

  let ast = jsx.fromString(code, {
    factory: "$el",
    // passUnknownTagsToFactory: true,
    unknownTagsAsString: true,
    unknownTagPattern: "$cmp({tag})",
  });

  ast = ast.replace(/\$cmp\((.+?)\)/g, (_, name) => {
    return render(path.join(path.dirname(file), name + ".jsx"));
  });

  return ast.trim().replace(/;$/s, "");
}

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const pages = ["index"];

let fsTimeout;

function formatHTML(compressedHTML) {
  // Розділити рядки за тегами
  const lines = compressedHTML.split("><");
  let indentLevel = 0; // Рівень відступу
  let formattedHTML = "";

  for (const line of lines) {
    if (line.startsWith("/")) {
      indentLevel--; // Зменшити рівень відступу для закриваючих тегів
    }

    formattedHTML += "  ".repeat(indentLevel) + "<" + line + ">\n";

    if (!line.endsWith("/") && !line.startsWith("/")) {
      indentLevel++; // Збільшити рівень відступу для відкриваючих тегів
    }
  }

  return formattedHTML;
}

async function run() {
  try {
    if (!fsTimeout) {
      fs.rmSync("./dist/", { recursive: true, force: true });

      if (!fs.existsSync("dist")) {
        fs.mkdirSync("dist");
      }

      for (const page of pages) {
        const js = render(`src/+${page}.jsx`);

        if (!fs.existsSync("log")) {
          fs.mkdirSync("log");
        }

        fs.writeFileSync(`./log/${page}.js`, 8888888);

        let html = Function("$el", "$data", `return ${js}`)($el, {})();

        fs.writeFileSync(
          `dist/${page}.html`,
          js_beautify.html(html.replace(/^\s+/gm, ""))
        );
      }

      fs.cpSync("./static", "./dist/", { recursive: true });

      fs.writeFileSync(
        `./dist/css/style.css`,
        js_beautify.css(
          minify(fs.readFileSync(`./dist/css/style.css`) + css, {
            restructure: true,
            forceMediaMerge: true,
          }).css
        )
      );

      css = "";

      console.log("=== Code updated ===");

      fsTimeout = setTimeout(() => (fsTimeout = null), 100);
    }
  } catch (error) {
    console.log(error);
  }
}
run();

fs.watch("./src/", run);
fs.watch("./static/", run);

for (const folder of getDirectories("./static/")) {
  fs.watch("./static/" + folder, run);
}
