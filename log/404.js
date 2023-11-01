(function () {
  const times = (count) => Array.from("0".repeat(count));

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
      $el('main', {className: "bg-#F1F9FD py-90 over-hidden"}, [
        $el('div', {className: "container graphics"}, [
          $el('div', {flex: " col center"}, [
            $el('div', {flex: "16 col"}, [
              $el('h2', {className: "title_48"}, ["Ooops!"]),
              $el('p', {text: "24 regular center"}, [
                "The page you're looking for does not exist."
              ])
            ]),
            $el('div', {flex: "16 col"}, [
              $el('p', {className: "mt-48", text: "18 light center"}, [
                "Here are some helpful links"
              ]),
              $el('div', {flex: "24 wrap center"}, [
                [["/","Homepage"],["videos","Videos"], ["blog","Blog"]].map(([link, text]) => (
                  $el('a', {href: link, className: "btn btn_yellow_round"}, [text])
                ))
              ])
            ])
          ])
        ])
      ]),
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