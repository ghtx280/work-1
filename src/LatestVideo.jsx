(function () {
  

  return (
    <div className="block_latest_video py-85 over-x-hidden">
      <div className="container" flex="66 col">
        <h2 className="font_lilita" text="48 $yellow center">
          Latest Videos on YouTube
        </h2>

        <div grid="50+30 cols-3">{
          times(9).map(() => <Video />)
        }</div>

        <div className="flex-center">
          <a href="#" className="btn btn_pink my-auto">
            Watch More Videos
          </a>
        </div>
      </div>
    </div>
  );
});
