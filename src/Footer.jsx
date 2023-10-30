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
      <h3 className={"font_lilita mb-15 " + cls} text="20 $black">
        {text}
      </h3>
    );
  }

  return (
    <template>
      
      <footer className="clouds py-50">
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

            <div className="links_quick_list" flex="5 col" text="16">
              {Object.entries(links).map(([link, text]) => (
                <a className="links_quick_item" text="white hover:$yellow 400" href={link}>
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div className="links_blog_section w-full">
            {Title("Latest Blog Feed", "links_blog_title")}

            <div className="links_blog_list" flex="15 col">
              {times(3).map(() => (
                <a href="#" className="links_blog_item" text="all:white 400">
                  <p className="font_lilita mb-5" text="18 white hover:$yellow">
                    Numberblock Even Numbers Missing from step-squad!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ornare, felis vel tempor vestibulum...
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="block_copyright bg-$yellow h-50" flex="center">
        <p className="copyright_text" text="14 light">
          &copy; GlenBob's Toy Learning
        </p>
      </div>

    </template>
  );
});
