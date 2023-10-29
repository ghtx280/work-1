(function () {

  <style jsx>{`
    .hero_title {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 70px;
    }

    .hero_img img {
      height: 200px;
    }

    .hero_text {
      display: none;
    }

    .block_header {
      height: 500px;
      background-position: center;
      background-size: cover;
    }

    .index_page .hero_img img {
      height: 450px;
    }

    .index_page .hero_text {
      display: flex;
    }

    .index_page .block_header {
      height: 100vh;
    }
  `}</style>

  return (
    <header className="block_header w-full" flex="col">
      <Nav />

      <div className="hero_section container" flex="center grow">
        <div flex="40 space">

          <div className="hero_text" flex="24 col ai-s">
            <h1 className="hero_title font_lilita" text="white">
              Welcome to GlenBob's Toy Learning
            </h1>

            <div className="relative">
              <p>
                Dive into a world where toys meet education, sparking creativity
                and learning in the young minds. Join us as we explore the
                adventures of Numberblocks and the magic of counting, all while
                incorporating interactive play with Mathlink cubes, magnet
                cubes, and more.
              </p>
              <p className="mt-10">
                Every video is tailored to encourage learning, blending fun with
                foundational knowledge essential for Pre-K and kindergarten.
              </p>
              <a href="#">
                <YouTube h="50" class="absolute bottom--70" />
              </a>
            </div>
          </div>

          <div className="hero_img shrink-0">
            <Hero />
          </div>

        </div>
      </div>
    </header>
  );
});
