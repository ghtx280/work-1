import voidElements from "void-elements";

export function $el(name, attrs, cnt) {
  // console.log(name, attrs, cnt);
  attrs ||= {};
  cnt ||= [];

  cnt = cnt.flat(Infinity);

  if (name === "template") {
    return cnt.join("");
  }

  let attrsStr = "";

  for (let key in attrs) {
    attrsStr += ` ${key == "className" ? "class" : key}="${attrs[key].trim?.()}"`;
  }

  if (name in voidElements) {
    return `\n<${name}${attrsStr} />\n`;
  }

  return `\n<${name}${attrsStr}>${cnt.join("")}</${name}>\n`;
}
