(function () {
  

  return (
    <div className="block_latest_video py-30 lg:py-85 over-hidden">
      <div className="container" flex="30 lg:66 col">

        <h2 className="latest_video_title font_lilita" text="24 lg:48 $yellow center">
          Latest Videos on YouTube
        </h2>

        <div className="latest_video_grid" grid="50+30 md:cols-2 lg:cols-3">
          {times(9).map(() => <Video />)}
        </div>

        <div className="latest_video_btn" flex="center">
          <a href="#" className="btn btn_pink my-auto">
            Watch More Videos
          </a>
        </div>

      </div>
    </div>
  );
});
