(function () {

  <style jsx>{`
    .hero_title {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .hero_image {
      margin-top: -90px;
      margin-right: 5px;
      height: 200px;
    }

    .hero_content {
      display: none;
    }

    .block_header {
      height: 500px;
      background-position: center;
      // background-size: cover;
    }
    .hero_section {
      justify-content: center;
    }

    .index_header .hero_image {
      height: 440px;
      margin-top: 0px;
      margin-right: 20px;
    }

    .index_header .hero_content {
      display: flex;
    }
    
    .index_header .hero_section {
      justify-content: space-between;
    }

    .index_header.block_header {
      // min-height: 100vh;
      background-position: center 100%;
      height: 100%;
    }

    @media (max-width: 992px) {
      .index_header .hero_image {
        height: 300px;
      }
      .index_header.block_header {
        background-size: cover;
      }
      .hero_section {
        align-items: center;
      }
    }
  `}</style>

  return (
    <header  className={
      "block_header w-full h-full pb-30" + ($data.page == "index" ? " index_header" : "")
    } flex="col">

      <Nav />

      <div className="container mt-150 mb-80">
        <div className="hero_section" flex="40 space ai-s m-lg:col-rev">

          <div className="hero_content" flex="20 col lg:ai-s" text="m-lg:center">
            <h1 className="hero_title font_lilita mt-20" text="50 lg:70 white">
              Welcome to GlenBob's Toy Learning
            </h1>

            <p className="hero_text">
              Dive into a world where toys meet education, sparking creativity
              and learning in the young minds. Join us as we explore the
              adventures of Numberblocks and the magic of counting, all while
              incorporating interactive play with Mathlink cubes, magnet
              cubes, and more.
            <br /><br />
              Every video is tailored to encourage learning, blending fun with
              foundational knowledge essential for Pre-K and kindergarten.
            </p>

            <a href="#" className="h-45">
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
