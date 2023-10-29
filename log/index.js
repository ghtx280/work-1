(function () {
  const times = (count) => Array.from("0".repeat(count));

 

  return (function (prop, slot) {
    return $el("template", null, [
      "<!DOCTYPE html>",
      $el("html", null, [
        $el("head", null, [
          $el("meta", { charset: "UTF-8" }),
          $el("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          $el("title", null, ["Document"]),
          $el("script", { src: "js/blick.js" }),
          $el("script", null, [
            /*js*/ `
            blick.config({
              class: {
                rt: { _prop: "border-radius: $ $ 0 0", _unit: "px" },
                rr: { _prop: "border-radius: 0 $ $ 0", _unit: "px" },
                rb: { _prop: "border-radius: 0 0 $ $", _unit: "px" },
                rl: { _prop: "border-radius: $ 0 0 $", _unit: "px" },
              },
              colors: {
                yellow: { def: "#FFB703" },
                pink:   { def: "#BC54A1" },
                black:  { def: "#16252E" },
                red:    { def: "#EE1B25" },
                blue:   { def: "#1771BA" },
              }
            })
          `,
          ]),
          $el("link", { rel: "stylesheet", href: "css/style.css" }),
          $el("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          $el("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          }),
          $el("link", {
            href: "https://fonts.googleapis.com/css2?family=Lilita+One&family=Poppins:wght@400;500;600;700&display=swap",
            rel: "stylesheet",
          }),
        ]),
        $el("body", null, [slot]),
      ]),
    ]);
  })(null, [
    (function () {
      return $el(
        "header",
        { class: "w-full h-100vh index_header", flex: "col" },
        [
          (function (prop, slot) {
            return $el("div", { className: "container" }, [
              $el("div", { class: "pt-25", flex: "space" }, [
                $el("img", { src: "img/logo.png", alt: "" }),

                $el(
                  "nav",
                  {
                    class: "bg-#F5F5F5 p-15+30 round",
                    flex: "40",
                    text: "*:$blue semibold",
                  },
                  [
                    $el("a", { href: "#", class: "nav_active" }, ["Home"]),
                    $el("a", { href: "#" }, ["About"]),
                    $el("a", { href: "#" }, ["Videos"]),
                    $el("a", { href: "#" }, ["Blog"]),
                    $el("a", { href: "#" }, ["Contact"]),
                  ]
                ),
              ]),
            ]);
          })(),

          $el("div", { class: "container grow", flex: "center" }, [
            $el("div", { flex: "40 space" }, [
              $el("div", { flex: "24 col ai-s" }, [
                $el("h1", { class: "hero_h1 font_lilita c-f" }, [
                  "Welcome to GlenBob's Toy Learning",
                ]),
                $el("div", { className: "rel" }, [
                  $el("p", null, [
                    "Dive into a world where toys meet education, sparking creativity" +
                      " " +
                      "and learning in the young minds. Join us as we explore the" +
                      " " +
                      "adventures of Numberblocks and the magic of counting, all while" +
                      " " +
                      "incorporating interactive play with Mathlink cubes, magnet" +
                      " " +
                      "cubes, and more.",
                  ]),
                  $el("p", { className: "mt-10" }, [
                    "Every video is tailored to encourage learning, blending fun with" +
                      " " +
                      "foundational knowledge essential for Pre-K and kindergarten.",
                  ]),
                  (function (prop = {}) {
                    return $el("img", {
                      className:
                        (prop.h ? "h-" + prop.h : "") +
                        (prop.class ? " " + prop.class : ""),
                      src: "./img/yt.svg",
                      alt: "YouTube",
                    });
                  })({ h: "50", class: "abs bottom--70" }),
                ]),
              ]),
              $el("div", { className: "shrink-0" }, [
                (function (prop = {}) {
                  return $el("img", {
                    className:
                      (prop.h ? "h-" + prop.h : "") +
                      (prop.class ? " " + prop.class : ""),
                    src: "./img/hero.png",
                    alt: "Hero image",
                  });
                })({ h: "450" }),
              ]),
            ]),
          ]),
        ]
      );
    })(),
    (function () {
      return $el(
        "div",
        { className: "block_latest_video py-85 over-x-hidden" },
        [
          $el("div", { className: "container", flex: "66 col" }, [
            $el("h2", { className: "font_lilita", text: "48 $yellow center" }, [
              "Latest Videos on YouTube",
            ]),

            $el("div", { grid: "50+30 cols-3" }, [
              times(9).map(() =>
                (function () {
                  return $el(
                    "a",
                    {
                      href: "#",
                      className: "ratio-16/9 bg-url('./img/video.jpg')",
                      flex: "center",
                    },
                    [$el("img", { src: "./img/play.svg", alt: "" })]
                  );
                })()
              ),
            ]),

            $el("div", { className: "flex-center" }, [
              $el("a", { href: "#", className: "btn btn_pink my-auto" }, [
                "Watch More Videos",
              ]),
            ]),
          ]),
        ]
      );
    })(),
    (function () {
      return $el("div", { className: "block_promo clouds py-65" }, [
        $el("div", { className: "container", flex: "55" }, [
          (function (prop = {}) {
            return $el("img", {
              className:
                (prop.h ? "h-" + prop.h : "") +
                (prop.class ? " " + prop.class : ""),
              src: "./img/hero.png",
              alt: "Hero image",
            });
          })({ class: "w-490 shrink-1" }),

          $el("div", { className: "w-1 bg-f shrink-1 grow-1" }),

          $el("div", { flex: "35 col ai-s" }, [
            (function (prop = {}) {
              return $el("img", {
                className:
                  (prop.h ? "h-" + prop.h : "") +
                  (prop.class ? " " + prop.class : ""),
                src: "./img/yt.svg",
                alt: "YouTube",
              });
            })({ h: "50" }),
            $el("h2", { className: "fs-54 c-f font_lilita" }, [
              "Subscribe to GlenBob's Toy Learning on YouTube",
            ]),
            $el("p", { className: "fs-20 c-f" }, [
              "Join us as we explore the adventures of Numberblocks and the magic" +
                " " +
                "of counting",
            ]),
            $el("a", { href: "#", className: "btn btn_yellow" }, [
              "Subscribe Today",
            ]),
          ]),
        ]),
      ]);
    })(),
    (function () {
      return $el(
        "div",
        { className: "block_latest_blog py-85 over-x-hidden" },
        [
          $el("div", { className: "container", flex: "66 col" }, [
            $el("h2", { className: "font_lilita", text: "48 $yellow center" }, [
              "Latest Blog Posts",
            ]),

            $el("div", { grid: "50+30 cols-3" }, [
              times(9).map(() =>
                (function () {
                  return $el(
                    "a",
                    {
                      href: "#",
                      className: "blog_item bg-f r-16",
                      flex: "col",
                    },
                    [
                      $el("img", {
                        className: "h-230 rt-16",
                        src: "./img/video.jpg",
                      }),
                      $el("p", { className: "p-26+32 fs-18" }, [
                        "Improving staff productivity and turnaround with Digital Dictation and" +
                          " " +
                          "Outsourced Transcription",
                      ]),
                    ]
                  );
                })()
              ),
            ]),

            $el("div", { className: "flex-center" }, [
              $el("a", { href: "#", className: "btn btn_pink" }, [
                "Read More Blogs",
              ]),
            ]),
          ]),
        ]
      );
    })(),
    (function () {
      const links = {
        home: "Home",
        about: "About Us",
        video: "Latest Videos",
        blog: "Latest Blogs",
        contact: "Contact Us",
        policy: "Privacy Policy",
        terms: "Terms of Service",
      };

      function Title(text) {
        return $el(
          "h3",
          { className: "font_lilita mb-15", text: "20 $black" },
          [text]
        );
      }

      function Link([href, text]) {
        return $el("a", { className: "c-f h:c-$yellow fw-400", href: href }, [
          text,
        ]);
      }

      function Blog() {
        return $el("a", { className: "*:c-f fw-400", href: "#" }, [
          $el("p", { className: "font_lilita h:c-$yellow fs-18 mb-5" }, [
            "Numberblock Even Numbers Missing from step-squad!",
          ]),
          $el("p", null, [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare," +
              " " +
              "felis vel tempor vestibulum...",
          ]),
        ]);
      }

      return $el("template", null, [
        $el("footer", { className: "clouds py-50" }, [
          $el("div", { className: "container", flex: "130 space ai-s" }, [
            $el("div", { flex: "20 col ai-s" }, [
              (function (prop = {}) {
                return $el("img", {
                  className:
                    (prop.h ? "h-" + prop.h : "") +
                    (prop.class ? " " + prop.class : ""),
                  src: "./img/hero.png",
                  alt: "Hero image",
                });
              })({ h: "150" }),
              $el("p", { className: "c-f" }, [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" +
                  " " +
                  "consequat diam semper est semper sodales.",
              ]),
              $el("a", { href: "#", flex: "10 ai-c" }, [
                $el("span", { className: "font_lilita fs-18 c-f" }, [
                  "Find Us on",
                ]),
                (function (prop = {}) {
                  return $el("img", {
                    className:
                      (prop.h ? "h-" + prop.h : "") +
                      (prop.class ? " " + prop.class : ""),
                    src: "./img/yt.svg",
                    alt: "YouTube",
                  });
                })({ h: "30" }),
              ]),
            ]),

            $el("div", { className: "shrink-0" }, [
              Title("Quick Links"),

              $el("div", { flex: "5 col", text: "16" }, [
                Object.entries(links).map(Link),
              ]),
            ]),

            $el("div", { className: "w-full" }, [
              Title("Latest Blog Feed"),

              $el("div", { flex: "15 col" }, [times(3).map(Blog)]),
            ]),
          ]),
        ]),

        $el("div", { className: "bg-$yellow h-50 flex-center" }, [
          $el("p", { text: "14 light" }, ["© GlenBob's Toy Learning"]),
        ]),
      ]);
    })(),
  ]);
});
