(function () {


  return (
    <div className="block_latest_blog py-85 over-x-hidden">
      <div className="container" flex="66 col">

        <h2 className="latest_blog_title font_lilita" text="48 $yellow center">
          Latest Blog Posts
        </h2>

        <div className="latest_blog_grid" grid="50+30 cols-3">
          {times(9).map(() => <Blog />)}
        </div>

        <div className="latest_blog_btn" flex="center">
          <a href="#" className="btn btn_pink">
            Read More Blogs
          </a>
        </div>

      </div>
    </div>
  );
});
