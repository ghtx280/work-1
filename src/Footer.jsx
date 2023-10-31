(function () {
  <style jsx>{``}</style>;

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
      <h3 className={cls + " font_lilita mb-15"} text="20 $black">
        {text}
      </h3>
    );
  }

  return (
      <footer className="block_footer clouds py-50">
        <div className="container" flex="50 lg:130 space ai-s m-lg:col">
          
          <div className="info_section" flex="20 col ai-s">
            <div className="h-150">
              <Hero />
            </div>

            <p text="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consequat diam semper est semper sodales.
            </p>
            <a href="#" flex="10 ai-c">
              <span className="font_lilita" text="18 white">Find Us on</span>
              <YouTube h="30" />
            </a>
          </div>

          <div className="links_quick_section shrink-0">
            {Title("Quick Links", "links_quick_title")}

            <ul className="links_quick_list" flex="5 col" text="16">
              {Object.entries(links).map(([link, text]) => (
                <li>
                  <a className="links_quick_item" text="white hover:$yellow 400" href={link}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links_blog_section w-full">
            {Title("Latest Blog Feed", "links_blog_title")}

            <ul className="links_blog_list" flex="15 col">
              {times(3).map(() => (
                <li className="links_blog_item" text="all:white 400">
                  <a href="#" className="font_lilita mb-5" text="18 white hover:$yellow">
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
