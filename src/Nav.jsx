(function (prop, slot) {

  function Link(link, text) {
    return (
      <a
        className={"nav_item" + ($data.page == link ? " nav_active" : "")}
        href={link + ".html"}
      >
        {text}
      </a>
    );
  }

  return (
    <div className="container">
      <div className="nav_section pt-25" flex="space">
        <img src="img/logo.png" alt="Logo" />

        <nav
          className="nav_list bg-$white p-15+30 round"
          flex="40"
          text="all:$blue semibold"
        >
          {Link("index",   "Home"   )}
          {Link("about",   "About"  )}
          {Link("video",   "Videos" )}
          {Link("blog",    "Blog"   )}
          {Link("contact", "Contact")}
        </nav>
      </div> 
    </div>
  );
});
