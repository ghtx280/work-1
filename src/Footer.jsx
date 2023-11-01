(function () {
  <style jsx>{`
    .links_quick_item, 
    .links_blog_item a {
      transition: all 200ms;
    }
  `}</style>;

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
      <h3 className={cls + " font_lilita mb-28 spacing-20"} text="18 $black">
        {text}
      </h3>
    );
  }

  return (
      <footer className="block_footer clouds py-50">
        <div className="container" flex=" space ai-s m-lg:col">
          
          <div className="info_section" flex="20 col ai-s">
            <div className="h-150">
              <Hero />
            </div>

            <p text="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consequat diam semper est semper sodales.
            </p>
            <a href="#" flex="10 ai-c">
              <span className="font_lilita sp-0" text="18 white">Find Us on</span>
              <YouTube className="h-30" />
            </a>
          </div>

          <div className="links_quick_section shrink-0 lg:ml-40 lg:mr-130 m-lg:my-50">
            {Title("Quick Links", "links_quick_title")}

            <ul className="links_quick_list" flex="10 col" text="16">
              {Object.entries(links).map(([link, text]) => (
                <li>
                  <a className="links_quick_item" text="white hover:$yellow 400" href={link + ".html"}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links_blog_section w-full">
            {Title("Latest Blog Feed", "links_blog_title")}

            <ul className="links_blog_list" flex="20 col">
              {times(3).map(() => (
                <li className="links_blog_item" text="all:white 400">
                  <a href="blog-post.html" className="font_lilita mb-5 sp-0" text="18 white hover:$yellow">
                    Numberblock Even Numbers Missing from step-squad!
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ornare, felis vel tempor vestibulum...
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
  );
});
