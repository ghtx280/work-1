(function() {
  const times = count => Array.from("0".repeat(count));



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
      $el('div', {className: "nav_section pt-25", flex: "space"}, [
        $el('a', {href: "/"}, [
          $el('img', {src: "img/logo.png", alt: "Logo"})
        ]),

        $el('nav', {className: "bg-$white p-15+30 round all:time-100"}, [

          $el('div', {className: "burger flex lg:hide"}, [
            $el('span')," ", $el('span')," ", $el('span')
          ]),

          $el('ul', {className: "nav_list", flex: "40", text: "all:$blue semibold"}, [
            $el('li', null, [Link("index", "Home")]),
            $el('li', null, [Link("about", "About")]),
            $el('li', null, [Link("videos", "Videos")]),
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
      "h-full " + (prop.className ? " " + prop.className : ""),
    src: "./img/hero.png", alt: "Hero image"})
  );
})()
          ])

        ])
      ])
    ])
  );
})(),
      $el('main', null, [
        $el('div', {className: "block_post py-60 over-hidden"}, [
          $el('div', {className: "container graphics graphics_long"}, [
            $el('div', {className: "post_content marked max-w-770 mx-auto"}, [
              (function () {
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
})(),

              $el('h1', null, [
                "H1 - Let's Build Numberblocks Complete Mathlink Cubes and learn how to count"
              ]),
              $el('p', null, [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sem a sem congue consectetur nec at mauris. Aliquam ut erat et ante bibendum pulvinar id quis enim. Nunc at ante et turpis placerat laoreet sit amet id libero. ", $el('strong', null, ["Aliquam euismod"])," ornare laoreet. Donec neque sapien, convallis sit amet porta et, tincidunt sit amet neque. Suspendisse maximus tortor sit"
              ]),
              $el('p', null, [
                "amet ipsum fringilla vulputate. Cras interdum lacus in tortor rhoncus, nec eleifend felis facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ", $el('a', {href: "#"}, ["ultrices posuere"])," cubilia curae; Integer non odio non nisi eleifend sodales id sit amet risus. In vestibulum dignissim metus varius blandit. In hac habitasse platea dictumst. Proin vel turpis eget lectus venenatis sodales. Phasellus scelerisque non elit quis lacinia. Nullam magna ex, mollis at leo id, commodo blandit dolor. Etiam eu lobortis diam. Nulla hendrerit ipsum et turpis tincidunt, blandit interdum mauris mattis."
              ]),
              $el('h2', null, [
                "H2 - Cras pellentesque urna a lacus vulputate feugiat"
              ]),
              $el('p', null, [
                "Integer tempus, mi vel lacinia volutpat, quam nulla vulputate felis, a mattis diam libero eget diam. Donec at mollis augue. Vestibulum ut scelerisque arcu, ut ornare nibh. Quisque id quam tellus. Curabitur ac consequat metus, sed porta justo. Praesent ullamcorper neque viverra congue feugiat. Sed dignissim vitae mi at molestie. Nulla nisl nulla, lobortis ac dolor a, hendrerit lacinia magna. Nulla feugiat tincidunt nunc, a mollis metus tincidunt eu. Maecenas augue"
              ]),
              $el('p', null, [
                "sapien, luctus at feugiat a, convallis et magna. Fusce lobortis ipsum ut dolor imperdiet dapibus. Curabitur molestie aliquet tincidunt. Donec maximus non dolor quis mollis. Proin enim justo, ultrices ut ornare vitae, tincidunt in lorem. Donec pulvinar felis vel venenatis tempor. Ut consectetur, eros at bibendum consectetur, massa nibh facilisis magna, id hendrerit dolor augue eget felis."
              ]),
              $el('ol', null, [
                $el('li', null, ["Lorem ipsum dolor sit amet"]),
                $el('li', null, ["Lorem ipsum dolor sit amet"]),
                $el('li', null, ["Lorem ipsum dolor sit amet"]),
                $el('li', null, ["Lorem ipsum dolor sit amet"]),
                $el('li', null, ["Lorem ipsum dolor sit amet"])
              ]),
              $el('h3', null, ["H3 - Cras pellentesque urna a lacus vulputate feugiat"]),
              $el('p', null, [
                "Cras ex ante, malesuada non enim sed, sagittis finibus lacus. Praesent congue mollis tellus vel auctor. Cras pharetra elit ex, nec imperdiet velit dignissim et. Cras id lorem ac nunc mattis mattis. Vivamus iaculis arcu interdum erat rhoncus fringilla. Cras tristique tristique magna id pellentesque. Praesent mattis felis sed dui dignissim molestie. Donec sit amet sapien odio. Integer accumsan enim sem, blandit aliquet dui mollis vel. Integer lacinia imperdiet purus sed venenatis. Etiam non enim metus."
              ]),
              $el('h4', null, ["H4 - Cras pellentesque urna a lacus vulputate feugiat"]),
              $el('p', null, [
                "Donec ornare, libero ut vestibulum ullamcorper, velit odio rhoncus nunc, vel convallis ante eros ac urna. Nam sed leo sit amet risus tristique sagittis eget a ipsum. Pellentesque cursus turpis in imperdiet luctus. Vivamus convallis, urna eu mattis elementum, metus purus dictum erat, vel auctor urna sapien at tellus. Donec ornare semper nunc quis lobortis. Morbi imperdiet dictum"
              ]),
              $el('p', null, [
                "lobortis. Integer accumsan, odio ut finibus ullamcorper, lorem nunc consequat purus, non molestie mauris diam in nibh. Quisque quis hendrerit risus. Integer erat nibh, viverra ac elit et, porttitor scelerisque erat. Nunc at consectetur sapien. Nulla facilisi."
              ]),
              $el('h5', null, [
                "H5 - Cras pellentesque urna a lacus vulputate feugiat"
              ]),
              $el('p', null, [
                "Morbi elementum efficitur nibh, ut accumsan augue consequat quis. Sed ultrices nisl quis lacus iaculis, at dignissim ante rhoncus. Vivamus a lectus feugiat, ornare metus vitae, posuere ex. Curabitur urna risus, sollicitudin ac sollicitudin eu, aliquet a tortor. Fusce finibus nisl eu odio"
              ]),
              $el('p', null, [
                "volutpat posuere. Etiam eu sagittis eros, vel fermentum purus. Nulla faucibus sagittis lacinia. In accumsan neque cursus maximus elementum. Vestibulum est odio, tristique ac dolor id, rutrum varius erat. In pulvinar vestibulum lacu."
              ]),
              $el('h6', null, ["H6- Cras pellentesque urna a lacus vulputate feugiat"]),
              $el('p', null, [
                "Sed eu pulvinar quam. Aliquam mi nunc, aliquet eu lacus in, interdum rutrum enim. Praesent id est et est porta gravida id sollicitudin ex. In sed quam eget nulla pharetra lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id eros vitae neque condimentum."
              ]),
              $el('ul', null, [
                $el('li', null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit?"]),
                $el('li', null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit?"]),
                $el('li', null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit?"]),
                $el('li', null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit?"]),
                $el('li', null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit?"])
              ]),
              $el('p', null, [
                "Vivamus vulputate nisl ut eleifend tempus. Praesent interdum vulputate lorem at lacinia. Sed nulla dui, bibendum sit amet augue et, facilisis pulvinar magna. Curabitur tempus"
              ])
            ])
          ])
        ]),
        (function () {
  return (
    $el('div', {className: "block_related bg-#F1F9FD"}, [
      $el('div', {className: "container py-93", flex: "30 col"}, [
        $el('h2', {className: "related_title title_48"}, ["Blog Posts"]),
        $el('div', {className: "related_content", flex: "30"}, [
          (function () {
  ;

  return (
    $el('a', {href: "#", className: "card_blog r-16", flex: "col"}, [
      $el('img', {className: "rt-16 h-230", src: "./img/video.jpg"}),

      $el('p', {className: "rb-16 p-26+32 bg-white", text: "18 $black hover:#109FDA"}, [
        "Improving staff productivity and turnaround with Digital Dictation and" + ' ' +
        "Outsourced Transcription"
      ])
    ])
  );
})(),
          (function () {
  ;

  return (
    $el('a', {href: "#", className: "card_blog r-16", flex: "col"}, [
      $el('img', {className: "rt-16 h-230", src: "./img/video.jpg"}),

      $el('p', {className: "rb-16 p-26+32 bg-white", text: "18 $black hover:#109FDA"}, [
        "Improving staff productivity and turnaround with Digital Dictation and" + ' ' +
        "Outsourced Transcription"
      ])
    ])
  );
})(),
          (function () {
  ;

  return (
    $el('a', {href: "#", className: "card_blog r-16", flex: "col"}, [
      $el('img', {className: "rt-16 h-230", src: "./img/video.jpg"}),

      $el('p', {className: "rb-16 p-26+32 bg-white", text: "18 $black hover:#109FDA"}, [
        "Improving staff productivity and turnaround with Digital Dictation and" + ' ' +
        "Outsourced Transcription"
      ])
    ])
  );
})()
        ])
      ])
    ])
  );
})()
      ]),
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
      $el('h3', {className: cls + " font_lilita mb-15", text: "20 $black"}, [
        text
      ])
    );
  }

  return (
      $el('footer', {className: "block_footer clouds py-50"}, [
        $el('div', {className: "container", flex: "50 lg:130 space ai-s m-lg:col"}, [

          $el('div', {className: "info_section", flex: "20 col ai-s"}, [
            $el('div', {className: "h-150"}, [
              (function (prop = {}) {
  ;

  return (
    $el('img', {className:
      "h-full " + (prop.className ? " " + prop.className : ""),
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

            $el('ul', {className: "links_quick_list", flex: "5 col", text: "16"}, [
              Object.entries(links).map(([link, text]) => (
                $el('li', null, [
                  $el('a', {className: "links_quick_item", text: "white hover:$yellow 400", href: link}, [
                    text
                  ])
                ])
              ))
            ])
          ]),

          $el('div', {className: "links_blog_section w-full"}, [
            Title("Latest Blog Feed", "links_blog_title"),

            $el('ul', {className: "links_blog_list", flex: "15 col"}, [
              times(3).map(() => (
                $el('li', {className: "links_blog_item", text: "all:white 400"}, [
                  $el('a', {href: "#", className: "font_lilita mb-5", text: "18 white hover:$yellow"}, [
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