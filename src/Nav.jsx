(function (prop, slot) {

  <style jsx>{`
  
  .burger {
    width: 24px;
    height: 24px;

    flex-direction: column;
    justify-content: center;
    gap: 3.2px;
  }
  
  .burger span {
    color: var(--blue);
    width: 100%;
    height: 3.2px;
    position: relative;
    background-color: currentColor;
    transition: all 0.3s;
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
      <div className="nav_section pt-25" flex="space">
        <a href="/">
          <img src="img/logo.png" alt="Logo" />
        </a>

        <nav className="nav_list bg-$white p-15+30 round all:time-100">

          <div className="burger flex lg:hide" text="hover:all:$red" onclick={
            /*js*/`this.classList.toggle('active')`
          }>
            <span /> <span /> <span />
          </div>

          <ul className="m-lg:hide" flex="40" text="all:$blue semibold">
            <li>{Link("index", "Home")}</li>
            <li>{Link("about", "About")}</li>
            <li>{Link("videos", "Videos")}</li>
            <li>{Link("blog", "Blog")}</li>
            <li>{Link("contact", "Contact")}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
