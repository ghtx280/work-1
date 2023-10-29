(function () {
  

  return (
    <div className="block_latest_video py-85 over-x-hidden">
      <div className="container" flex="66 col">
        <h2 className="latest_video_title font_lilita" text="48 $yellow center">
          Latest Videos on YouTube
        </h2>

        <div className="latest_video_grid" grid="50+30 cols-3">{
          times(9).map(() => <Video />)
        }</div>

        <div className="latest_video_btn" flex="center">
          <a href="#" className="btn btn_pink my-auto">
            Watch More Videos
          </a>
        </div>
      </div>
    </div>
  );
});
