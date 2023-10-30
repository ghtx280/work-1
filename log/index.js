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
        $el('body', null, [slot])
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
      $el('div', {className: "nav_section pt-25", flex: "space"}, [
        $el('a', {href: "/"}, [
          $el('img', {src: "img/logo.png", alt: "Logo"})
        ]),

        $el('nav', {className: "nav_list bg-$white p-15+30 round all:time-100"}, [

          $el('div', {className: "burger flex lg:hide", text: "hover:all:$red", onclick:
            /*js*/`this.classList.toggle('active')`
          }, [
            $el('span')," ", $el('span')," ", $el('span')
          ]),

          $el('ul', {className: "m-lg:hide", flex: "40", text: "all:$blue semibold"}, [
            $el('li', null, [Link("index", "Home")]),
            $el('li', null, [Link("about", "About")]),
            $el('li', null, [Link("video", "Videos")]),
            $el('li', null, [Link("blog", "Blog")]),
            $el('li', null, [Link("contact", "Contact")])
          ])
        ])
      ])
    ])
  );
})(),

      $el('div', {className: "hero_section container", flex: "center grow"}, [
        $el('div', {flex: "40 space m-lg:col-rev"}, [

          $el('div', {className: "hero_content", flex: "24 col lg:ai-s", text: "m-lg:center"}, [
            $el('h1', {className: "hero_title font_lilita", text: "50 lg:70 white"}, [
              "Welcome to GlenBob's Toy Learning"
            ]),

            $el('p', {className: "hero_text relative"}, [
              "Dive into a world where toys meet education, sparking creativity" + ' ' +
              "and learning in the young minds. Join us as we explore the" + ' ' +
              "adventures of Numberblocks and the magic of counting, all while" + ' ' +
              "incorporating interactive play with Mathlink cubes, magnet" + ' ' +
              "cubes, and more.",
              $el('br'),
              $el('br'),
              "Every video is tailored to encourage learning, blending fun with" + ' ' +
              "foundational knowledge essential for Pre-K and kindergarten."
            ]),

            $el('a', {href: "#", className: "h-50"}, [
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
      "h-full" + (prop.className ? " " + prop.className : ""),
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


  return (
    $el('div', {className: `block_latest_${prop.type} py-30 lg:py-85 over-hidden`}, [
      $el('div', {className: "container", flex: "30 lg:66 col"}, [

        $el('h2', {className: `latest_${prop.type}_title font_lilita`, text: "24 lg:48 $yellow center"}, [
          prop.title
        ]),

        $el('div', {className: `latest_${prop.type}_grid`, grid: "50+30 md:cols-2 lg:cols-3"}, [
          times(prop.count).map(() => prop.card)
        ]),

        $el('div', {className: `latest_${prop.type}_btn`, flex: "center"}, [
          $el('a', {href: "#", className: "btn btn_pink"}, [
            prop.btn
          ])
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
      href: "#",
      flex: "center",
      className: "card_video ratio-16/9",
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
    $el('div', {className: "block_promo clouds py-65"}, [
      $el('div', {className: "container", flex: "20 lg:55 m-lg:col"}, [

        $el('div', {className: "promo_img lg:h-360 shrink-0"}, [
          (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
        ]),

        $el('div', {className: "promo_divider w-1 bg-white"}),

        $el('div', {className: "promo_text", flex: "35 col ai-s"}, [
          $el('div', {className: "h-50"}, [
            (function (prop = {}) {
  ;


  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/yt.svg", alt: "YouTube"})
  );
})()
          ]),

          $el('h2', {className: "font_lilita", text: "54 white"}, [
            "Subscribe to GlenBob's Toy Learning on YouTube"
          ]),

          $el('p', {text: "20 white"}, [
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


  return (
    $el('div', {className: `block_latest_${prop.type} py-30 lg:py-85 over-hidden`}, [
      $el('div', {className: "container", flex: "30 lg:66 col"}, [

        $el('h2', {className: `latest_${prop.type}_title font_lilita`, text: "24 lg:48 $yellow center"}, [
          prop.title
        ]),

        $el('div', {className: `latest_${prop.type}_grid`, grid: "50+30 md:cols-2 lg:cols-3"}, [
          times(prop.count).map(() => prop.card)
        ]),

        $el('div', {className: `latest_${prop.type}_btn`, flex: "center"}, [
          $el('a', {href: "#", className: "btn btn_pink"}, [
            prop.btn
          ])
        ])

      ])
    ])
  );
})({type: "blog",
        title: "Latest Blog Posts",
        btn: "Read More Blogs",
        count: 9,
        card: (function () {
  ;

  return (
    $el('a', {href: "#", className: "card_blog r-16", flex: "col"}, [
      $el('img', {className: "rt-16 h-230", src: "./img/video.jpg"}),

      $el('p', {className: "rb-16 p-26+32 bg-white", text: "18 hover:$yellow"}, [
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
    home: "Home",
    about: "About Us",
    video: "Latest Videos",
    blog: "Latest Blogs",
    contact: "Contact Us",
    policy: "Privacy Policy",
    terms: "Terms of Service",
  };

  function Title(text, cls = "") {
    return (
      $el('h3', {className: "font_lilita mb-15 " + cls, text: "20 $black"}, [
        text
      ])
    );
  }

  return (
    $el('template', null, [

      $el('footer', {className: "clouds py-50"}, [
        $el('div', {className: "container", flex: "50 lg:130 space ai-s m-lg:col"}, [

          $el('div', {className: "info_section", flex: "20 col ai-s"}, [
            $el('div', {className: "h-150"}, [
              (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
            ]),

            $el('p', {text: "white"}, [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam" + ' ' +
              "consequat diam semper est semper sodales."
            ]),
            $el('a', {href: "#", flex: "10 ai-c"}, [
              $el('span', {className: "font_lilita", text: "18 white"}, ["Find Us on"]),
              (function (prop = {}) {
  ;


  return (
    $el('img', {className:
      "h-full" + (prop.className ? " " + prop.className : ""),
    src: "./img/yt.svg", alt: "YouTube"})
  );
})({h: "30"})
            ])
          ]),

          $el('div', {className: "links_quick_section shrink-0"}, [
            Title("Quick Links", "links_quick_title"),

            $el('div', {className: "links_quick_list", flex: "5 col", text: "16"}, [
              Object.entries(links).map(([link, text]) => (
                $el('a', {className: "links_quick_item", text: "white hover:$yellow 400", href: link}, [
                  text
                ])
              ))
            ])
          ]),

          $el('div', {className: "links_blog_section w-full"}, [
            Title("Latest Blog Feed", "links_blog_title"),

            $el('div', {className: "links_blog_list", flex: "15 col"}, [
              times(3).map(() => (
                $el('a', {href: "#", className: "links_blog_item", text: "all:white 400"}, [
                  $el('p', {className: "font_lilita mb-5", text: "18 white hover:$yellow"}, [
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
      ]),

      $el('div', {className: "block_copyright bg-$yellow h-50", flex: "center"}, [
        $el('p', {className: "copyright_text", text: "14 light"}, [
          "© GlenBob's Toy Learning"
        ])
      ])

    ])
  );
})()
    ])
  );
})