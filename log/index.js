(function () {
  const times = (count) => Array.from("0".repeat(count));

  return (
    (function (prop, slot) {


  return (
    $el('template', null, [
      "<!DOCTYPE html>",
      $el('html', null, [
        $el('head', null, [
          $el('meta', {charset: "UTF-8"}),
          $el('meta', {name: "viewport", content: "width=device-width, initial-scale=1.0"}),
          $el('title', null, ["Document"]),
          $el('script', {src: "js/blick.js"}),
          $el('script', null, [/*js*/`
            blick.config({
              time: true,
              class: {
                rt: { _prop: "border-radius: $ $ 0 0", _unit: "px" },
                rr: { _prop: "border-radius: 0 $ $ 0", _unit: "px" },
                rb: { _prop: "border-radius: 0 0 $ $", _unit: "px" },
                rl: { _prop: "border-radius: $ 0 0 $", _unit: "px" },
              },
              colors: {
                yellow: { def: "#FFB703" },
                pink:   { def: "#BC54A1" },
                red:    { def: "#EE1B25" },
                blue:   { def: "#1771BA" },
                white:  { def: "#F5F5F5" },
                black:  { def: "#16252E" },
              },
              wrapper: ".container"
            })
          `]),
          $el('link', {rel: "stylesheet", href: "css/style.css"}),
          $el('link', {rel: "preconnect", href: "https://fonts.googleapis.com"}),
          $el('link', {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true}),
          $el('link', {
            href: "https://fonts.googleapis.com/css2?family=Lilita+One&family=Poppins:wght@400;500;600;700&display=swap",
            rel: "stylesheet"}
          )
        ]),
        $el('body', null, [
          slot,
          $el('script', null, [/*js*/`
            const btn = document.querySelector('.burger');
            const nav_list = document.querySelector(".nav_list");

            btn.addEventListener("click", () => {
              if (btn.classList.toggle("active")) {
                document.body.style.overflow = "hidden";
                nav_list.style.left = "0vw"
              }
              else {
                document.body.style.overflow = "";
                nav_list.style.left = "-100vw"
              }
            })
          `])
        ])

      ])
    ])
  );
})(null, [
      (function () {



  return (
    $el('header', {className:
      "block_header w-full h-full pb-30" + ($data.page == "index" ? " index_header" : ""),
    flex: "col"}, [

      (function (prop, slot) {



  function Link(link, text) {
    return (
      $el('a', {
        className: "nav_item" + ($data.page == link ? " nav_active" : ""),
        text: "hover:$red",
        href: link + ".html"
      }, [
        text
      ])
    );
  }

  return (
    $el('div', {className: "container"}, [
      $el('div', {className: "nav_section pt-16", flex: "space"}, [
        $el('a', {href: "/"}, [
          $el('img', {src: "img/logo.png", alt: "Logo"})
        ]),

        $el('nav', {className: "bg-$white p-10+30 round all:time-100"}, [

          $el('div', {className: "burger flex lg:hide"}, [
            $el('span'),
            $el('span'),
            $el('span')
          ]),

          $el('ul', {className: "nav_list", flex: "40", text: "all:$blue semibold"}, [
            $el('li', null, [Link("index",   "Home")]),
            $el('li', null, [Link("about",   "About")]),
            $el('li', null, [Link("videos",  "Videos")]),
            $el('li', null, [Link("blog",    "Blog")]),
            $el('li', null, [Link("contact", "Contact")])
          ])
        ])
      ])
    ])
  );
})(),

      $el('div', {className: "container mt-150 mb-80"}, [
        $el('div', {className: "hero_section", flex: "40 space ai-s m-lg:col-rev"}, [

          $el('div', {className: "hero_content", flex: "20 col lg:ai-s", text: "m-lg:center"}, [
            $el('h1', {className: "hero_title font_lilita mt-20", text: "50 lg:70 white"}, [
              "Welcome to GlenBob's Toy Learning"
            ]),

            $el('p', {className: "hero_text"}, [
              "Dive into a world where toys meet education, sparking creativity" + ' ' +
              "and learning in the young minds. Join us as we explore the" + ' ' +
              "adventures of Numberblocks and the magic of counting, all while" + ' ' +
              "incorporating interactive play with Mathlink cubes, magnet" + ' ' +
              "cubes, and more.",
            $el('br'),$el('br'),
              "Every video is tailored to encourage learning, blending fun with" + ' ' +
              "foundational knowledge essential for Pre-K and kindergarten."
            ]),

            $el('a', {href: "#", className: "h-45"}, [
              (function (prop = {}) {
  ;


  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/yt.svg", alt: "YouTube"})
  );
})()
            ])
          ]),

          $el('div', {className: "hero_image shrink-0 m-lg:h-200"}, [
            (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "img_children h-full " + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
          ])

        ])
      ])
    ])
  );
})(),

      (function (prop = {}) {

  prop.graph = prop.graph || [];


  ;;

  return (
    $el('div', {className: `block_latest_${prop.type} py-30 lg:py-85 over-hidden`}, [
      $el('div', {
        className:
          "container graphics " + (prop.graph.map(e => `graphics_${e}` || "").join(" "))

      }, [
        $el('div', {flex: "30 lg:66 col"}, [
          $el('h2', {
            className: `latest_${prop.type}_title title_48`,
            text: "m-lg:24"
          }, [
            prop.title
          ]),

          $el('div', {
            className: `latest_${prop.type}_grid`,
            grid: "50+30 md:cols-2 lg:cols-3"
          }, [
            times(prop.count).map(() => prop.card)
          ]),

          prop.btn ? (
            $el('div', {className: `latest_${prop.type}_btn`, flex: "center"}, [
              $el('a', {href: "#", className: "btn btn_pink"}, [
                prop.btn
              ])
            ])
          ) : (
            $el('ul', {className: `pag`, flex: "8 center"}, [

              [..."12345"].map((e) => (
                $el('li', {className: "pag_item " + (e == 1 ? "pag_active" : "")}, [
                  $el('a', {href: "#"}, [e])
                ])
              )),

              $el('li', {className: "pag_item pag_arrow"}, [
                $el('a', {href: "#"}, [
                  $el('svg', {width: "15", height: "10", viewBox: "0 0 15 10", fill: "none", xmlns: "http://www.w3.org/2000/svg"}, [
                    $el('path', {d: "M1 4.35C0.641015 4.35 0.35 4.64101 0.35 5C0.35 5.35899 0.641015 5.65 1 5.65L1 4.35ZM14.4596 5.45962C14.7135 5.20578 14.7135 4.79422 14.4596 4.54038L10.323 0.403806C10.0692 0.149965 9.65765 0.149965 9.40381 0.403806C9.14997 0.657647 9.14997 1.0692 9.40381 1.32304L13.0808 5L9.40381 8.67696C9.14997 8.9308 9.14997 9.34235 9.40381 9.59619C9.65765 9.85003 10.0692 9.85003 10.323 9.59619L14.4596 5.45962ZM1 5.65L14 5.65V4.35L1 4.35L1 5.65Z", fill: "black"})
                  ])
                ])
              ])
            ])
          )
        ])
      ])
    ])
  );
})({type: "video",
        title: "Latest Videos on YouTube",
        btn: "Watch More Videos",
        count: 9,
        card: (function () {
  ;

  return (
    $el('a', {
      className: "card_video ratio-16/9",
      href: "#",
      flex: "center",
      style: "background-image: url('./img/video.jpg')"
    }, [
      $el('img', {src: "./img/play.svg", alt: "Play Button"})
    ])
  );
})()}
      ),

      (function () {
  ;

  return (
    $el('div', {className: "block_promo clouds pt-60 pb-70"}, [
      $el('div', {className: "container", flex: "20 lg:55 m-lg:col"}, [

        $el('div', {className: "promo_img lg:h-360 shrink-0"}, [
          (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "img_children h-full " + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
        ]),

        $el('div', {className: "promo_divider w-1 bg-white"}),

        $el('div', {className: "promo_text", flex: "33 col ai-s"}, [
          $el('a', {href: "#", className: "h-50"}, [
            (function (prop = {}) {
  ;


  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/yt.svg", alt: "YouTube"})
  );
})()
          ]),

          $el('h2', {className: "font_lilita spacing-0", text: "40 lg:54 white"}, [
            "Subscribe to GlenBob's Toy Learning on YouTube"
          ]),

          $el('p', {text: "18 white"}, [
            "Join us as we explore the adventures of Numberblocks and the magic" + ' ' +
            "of counting"
          ]),

          $el('a', {href: "#", className: "btn btn_yellow"}, [
            "Subscribe Today"
          ])
        ])

      ])
    ])
  );
})(),

      (function (prop = {}) {

  prop.graph = prop.graph || [];


  ;;

  return (
    $el('div', {className: `block_latest_${prop.type} py-30 lg:py-85 over-hidden`}, [
      $el('div', {
        className:
          "container graphics " + (prop.graph.map(e => `graphics_${e}` || "").join(" "))

      }, [
        $el('div', {flex: "30 lg:66 col"}, [
          $el('h2', {
            className: `latest_${prop.type}_title title_48`,
            text: "m-lg:24"
          }, [
            prop.title
          ]),

          $el('div', {
            className: `latest_${prop.type}_grid`,
            grid: "50+30 md:cols-2 lg:cols-3"
          }, [
            times(prop.count).map(() => prop.card)
          ]),

          prop.btn ? (
            $el('div', {className: `latest_${prop.type}_btn`, flex: "center"}, [
              $el('a', {href: "#", className: "btn btn_pink"}, [
                prop.btn
              ])
            ])
          ) : (
            $el('ul', {className: `pag`, flex: "8 center"}, [

              [..."12345"].map((e) => (
                $el('li', {className: "pag_item " + (e == 1 ? "pag_active" : "")}, [
                  $el('a', {href: "#"}, [e])
                ])
              )),

              $el('li', {className: "pag_item pag_arrow"}, [
                $el('a', {href: "#"}, [
                  $el('svg', {width: "15", height: "10", viewBox: "0 0 15 10", fill: "none", xmlns: "http://www.w3.org/2000/svg"}, [
                    $el('path', {d: "M1 4.35C0.641015 4.35 0.35 4.64101 0.35 5C0.35 5.35899 0.641015 5.65 1 5.65L1 4.35ZM14.4596 5.45962C14.7135 5.20578 14.7135 4.79422 14.4596 4.54038L10.323 0.403806C10.0692 0.149965 9.65765 0.149965 9.40381 0.403806C9.14997 0.657647 9.14997 1.0692 9.40381 1.32304L13.0808 5L9.40381 8.67696C9.14997 8.9308 9.14997 9.34235 9.40381 9.59619C9.65765 9.85003 10.0692 9.85003 10.323 9.59619L14.4596 5.45962ZM1 5.65L14 5.65V4.35L1 4.35L1 5.65Z", fill: "black"})
                  ])
                ])
              ])
            ])
          )
        ])
      ])
    ])
  );
})({type: "blog",
        title: "Latest Blog Posts",
        btn: "Read More Blogs",
        count: 6,
        graph: ["invert"],
        card: (function () {
  ;

  return (
    $el('a', {href: "/blog-post.html", className: "card_blog r-16", flex: "col"}, [
      $el('img', {className: "rt-16 h-230", src: "./img/video.jpg"}),

      $el('p', {className: "rb-16 p-26+32 bg-white lh-30px", text: "18 $black hover:#109FDA"}, [
        "Improving staff productivity and turnaround with Digital Dictation and" + ' ' +
        "Outsourced Transcription"
      ])
    ])
  );
})()}
      ),

      (function () {
  ;

  const links = {
    home:    "Home",
    about:   "About Us",
    videos:  "Latest Videos",
    blog:    "Latest Blogs",
    contact: "Contact Us",
    policy:  "Privacy Policy",
    terms:   "Terms of Service",
  };

  function Title(text, cls = "") {
    return (
      $el('h3', {className: cls + " font_lilita mb-28 spacing-20", text: "18 $black"}, [
        text
      ])
    );
  }

  return (
      $el('footer', {className: "block_footer clouds py-50"}, [
        $el('div', {className: "container", flex: " space ai-s m-lg:col"}, [

          $el('div', {className: "info_section", flex: "20 col ai-s"}, [
            $el('div', {className: "h-150"}, [
              (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "img_children h-full " + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
            ]),

            $el('p', {text: "white"}, [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" + ' ' +
              "consequat diam semper est semper sodales."
            ]),
            $el('a', {href: "#", flex: "10 ai-c"}, [
              $el('span', {className: "font_lilita sp-0", text: "18 white"}, ["Find Us on"]),
              (function (prop = {}) {
  ;


  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/yt.svg", alt: "YouTube"})
  );
})({className: "h-30"})
            ])
          ]),

          $el('div', {className: "links_quick_section shrink-0 lg:ml-40 lg:mr-130 m-lg:my-50"}, [
            Title("Quick Links", "links_quick_title"),

            $el('ul', {className: "links_quick_list", flex: "10 col", text: "16"}, [
              Object.entries(links).map(([link, text]) => (
                $el('li', null, [
                  $el('a', {className: "links_quick_item", text: "white hover:$yellow 400", href: link + ".html"}, [
                    text
                  ])
                ])
              ))
            ])
          ]),

          $el('div', {className: "links_blog_section w-full"}, [
            Title("Latest Blog Feed", "links_blog_title"),

            $el('ul', {className: "links_blog_list", flex: "20 col"}, [
              times(3).map(() => (
                $el('li', {className: "links_blog_item", text: "all:white 400"}, [
                  $el('a', {href: "blog-post.html", className: "font_lilita mb-5 sp-0", text: "18 white hover:$yellow"}, [
                    "Numberblock Even Numbers Missing from step-squad!"
                  ]),
                  $el('p', null, [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + ' ' +
                    "Donec ornare, felis vel tempor vestibulum..."
                  ])
                ])
              ))
            ])
          ])
        ])
      ])
  );
})(),
      (function () {
  return (
    $el('div', {className: "block_copyright bg-$yellow h-50", flex: "center"}, [
      $el('p', {className: "copyright_text", text: "14 light"}, [
        "© GlenBob's Toy Learning"
      ])
    ])
  );
})()
    ])
  );
})