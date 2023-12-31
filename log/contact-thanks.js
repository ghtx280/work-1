(function() {
  const times = count => Array.from("0".repeat(count));

  ;

  // " "

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
      $el('main', {className: "py-70 over-hidden"}, [
        $el('div', {className: "container graphics graphics_invert"}, [

        $el('h2', {className: "title_40 mb-24"}, ["Message received :)"]),
        $el('p', {text: "18 regular"}, [
          "A member of our team will be in touch shortly.",
          $el('br'),
          $el('br'),
          "In the meantime, subscribe to our channel on ", $el('a', {href: "#"}, ["YouTube"]),"."
        ])

        ])
      ]),
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