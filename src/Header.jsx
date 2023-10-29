(function (prop, slot) {
  return (
    <div class="w-full h-100vh" flex="col">
      <Nav></Nav>

      <div class="container grow" flex="center">
        <div flex="space">
          <div flex="24 col">
            <h1 class="hero_h1 font_lilita c-f">
              Welcome to GlenBob's Toy Learning
            </h1>
            <div>
              <p>
                Dive into a world where toys meet education, sparking creativity and learning in the young minds. Join us as we explore the adventures of Numberblocks and the magic of counting, all while incorporating interactive play with Mathlink cubes, magnet cubes, and more.
              </p>
              <p>
                Every video is tailored to encourage learning, blending fun with foundational knowledge essential for Pre-K and kindergarten.
              </p>
            </div>
            <img src="img/yt.svg" alt="YouTube" />
          </div>
          <div className="shrink-0">
            <img class="h-450" src="img/hero.png" alt="Hero image" />
          </div>
        </div>
      </div>

      <img src="./img/clouds.jpg" alt="" class="abs sq-full top-0 z--9" />
    </div>
  );
});
