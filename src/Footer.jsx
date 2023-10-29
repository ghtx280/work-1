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

  function Title(text) {
    return (
      <h3 className="font_lilita mb-15" text="20 $black">
        {text}
      </h3>
    );
  }

  function Link([href, text]) {
    return (
      <a className="c-f h:c-$yellow fw-400" href={href}>
        {text}
      </a>
    );
  }

  function Blog() {
    return (
      <a className="*:c-f fw-400" href="#">
        <p className="font_lilita h:c-$yellow fs-18 mb-5">
          Numberblock Even Numbers Missing from step-squad!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare,
          felis vel tempor vestibulum...
        </p>
      </a>
    );
  }

  return (
    <template>
      <footer className="clouds py-50">
        <div className="container" flex="130 space ai-s">
          <div flex="20 col ai-s">
            <Hero h="150" />
            <p className="c-f">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consequat diam semper est semper sodales.
            </p>
            <a href="#" flex="10 ai-c">
              <span className="font_lilita fs-18 c-f">Find Us on</span>
              <YouTube h="30" />
            </a>
          </div>

          <div className="shrink-0">
            {Title("Quick Links")}

            <div flex="5 col" text="16">
              {Object.entries(links).map(Link)}
            </div>
          </div>

          <div className="w-full">
            {Title("Latest Blog Feed")}

            <div flex="15 col">{times(3).map(Blog)}</div>
          </div>
        </div>
      </footer>

      <div className="bg-$yellow h-50 flex-center">
        <p text="14 light">&copy; GlenBob's Toy Learning</p>
      </div>
    </template>
  );
});
