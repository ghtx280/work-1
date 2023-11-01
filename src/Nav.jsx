(function (prop, slot) {

  <style jsx>{`
  
  .burger {
    position: relative;

    width: 24px;
    height: 24px;

    flex-direction: column;
    justify-content: center;
    gap: 3.2px;

    z-index: 99;

    cursor: pointer;
  }
  
  .burger span {
    color: var(--blue);
    width: 100%;
    height: 3.2px;
    position: relative;
    background-color: currentColor;
    transition: all 0.3s;
    border-radius: 99px;
  }
  
  .burger.active span:nth-of-type(1) {
    transform: translateY(100%) rotate(45deg);  
  }
  .burger.active span:nth-of-type(2) {
    
    display: none;
  }
  .burger.active span:nth-of-type(3) {
    transform: translateY(-100%) rotate(-45deg); 
  }

  @media (max-width: 992px) {
    .nav_list {
      position: fixed;
      top: 0;
      left: -100vw;
      width: 100vw;
      height: 100vh;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      z-index: 9;
    }
  }
  
  
  `}</style>

  function Link(link, text) {
    return (
      <a
        className={"nav_item" + ($data.page == link ? " nav_active" : "")}
        text="hover:$red"
        href={link + ".html"}
      >
        {text}
      </a>
    );
  }

  return (
    <div className="container">
      <div className="nav_section pt-16" flex="space">
        <a href="/">
          <img src="img/logo.png" alt="Logo" />
        </a>

        <nav className="bg-$white p-10+30 round all:time-100">

          <div className="burger flex lg:hide">
            <span />
            <span />
            <span />
          </div>

          <ul className="nav_list" flex="40" text="all:$blue semibold">
            <li>{Link("index",   "Home")}</li>
            <li>{Link("about",   "About")}</li>
            <li>{Link("videos",  "Videos")}</li>
            <li>{Link("blog",    "Blog")}</li>
            <li>{Link("contact", "Contact")}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
