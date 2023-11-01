(function () {
  <style jsx>{``}</style>;

  return (
    <div className="block_promo clouds pt-60 pb-70">
      <div className="container" flex="20 lg:55 m-lg:col">

        <div className="promo_img lg:h-360 shrink-0">
          <Hero />
        </div>

        <div className="promo_divider w-1 bg-white" />

        <div className="promo_text" flex="33 col ai-s">
          <a href="#" className="h-50">
            <YouTube />
          </a>

          <h2 className="font_lilita spacing-0" text="54 white">
            Subscribe to GlenBob's Toy Learning on YouTube
          </h2>

          <p text="18 white">
            Join us as we explore the adventures of Numberblocks and the magic
            of counting
          </p>
          
          <a href="#" className="btn btn_yellow">
            Subscribe Today
          </a>
        </div>

      </div>
    </div>
  );
});
