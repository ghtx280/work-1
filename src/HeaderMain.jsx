(function () {
  return (
    <header class="w-full h-100vh index_header" flex="col">
      <Nav />

      <div class="container grow" flex="center">
        <div flex="40 space">
          <div flex="24 col ai-s">
            <h1 class="hero_h1 font_lilita c-f">
              Welcome to GlenBob's Toy Learning
            </h1>
            <div className="rel">
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
              <YouTube h="50" class="abs bottom--70" />
            </div>
          </div>
          <div className="shrink-0">
            <Hero h="450" />
          </div>
        </div>
      </div>
    </header>
  );
});
