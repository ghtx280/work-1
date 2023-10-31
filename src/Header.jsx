(function () {

  <style jsx>{`
    .hero_title {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .hero_image {
      height: 200px;
    }

    .hero_content {
      display: none;
    }

    .block_header {
      height: 500px;
      background-position: center;
      background-size: cover;
    }

    .index_header .hero_image {
      height: 450px;
    }

    .index_header .hero_content {
      display: flex;
    }

    .index_header.block_header {
      min-height: 100vh;
    }

    @media (max-width: 992px) {
      .index_header .hero_image {
        height: 300px;
      }
    }
  `}</style>

  return (
    <header  className={
      "block_header w-full h-full pb-30" + ($data.page == "index" ? " index_header" : "")
    } flex="col">

      <Nav />

      <div className="hero_section container" flex="center grow">
        <div flex="40 space m-lg:col-rev">

          <div className="hero_content" flex="24 col lg:ai-s" text="m-lg:center">
            <h1 className="hero_title font_lilita" text="50 lg:70 white">
              Welcome to GlenBob's Toy Learning
            </h1>

            <p className="hero_text relative">
              Dive into a world where toys meet education, sparking creativity
              and learning in the young minds. Join us as we explore the
              adventures of Numberblocks and the magic of counting, all while
              incorporating interactive play with Mathlink cubes, magnet
              cubes, and more.
              <br />
              <br />
              Every video is tailored to encourage learning, blending fun with
              foundational knowledge essential for Pre-K and kindergarten.
            </p>

            <a href="#" className="h-50">
              <YouTube />
            </a>
          </div>

          <div className="hero_image shrink-0 m-lg:h-200">
            <Hero />
          </div>

        </div>
      </div>
    </header>
  );
});
