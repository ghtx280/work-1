(function () {


  return (
    <div className="block_latest_blog py-85 over-x-hidden">
      <div className="container" flex="66 col">
        <h2 className="font_lilita" text="48 $yellow center">
          Latest Blog Posts
        </h2>

        <div grid="50+30 cols-3">
          {times(9).map(() => <Blog />)}
        </div>

        <div className="flex-center">
          <a href="#" className="btn btn_pink">
            Read More Blogs
          </a>
        </div>
      </div>
    </div>
  );
});
