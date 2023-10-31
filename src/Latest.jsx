(function (prop = {}) {

  prop.graph = prop.graph || [];


  ;<style jsx>{`
    .pag_item {
      width: 32px;
      height: 32px;
      border-width: 1px;
      border-color: var(--pink);
      border-radius: 99px;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .pag_item a {
      color: var(--black);
    }
    .pag_item.pag_active {
      background-color: var(--pink);
    }
  `}</style>;

  return (
    <div className={`block_latest_${prop.type} py-30 lg:py-85 over-hidden`}>
      <div
        className={
          "container graphics " + (prop.graph.map(e => `graphics_${e}` || "").join(" "))
        }                                              
      >
        <div flex="30 lg:66 col">
          <h2
            className={`latest_${prop.type}_title title_48`}
            text="m-lg:24"
          >
            {prop.title}
          </h2>

          <div
            className={`latest_${prop.type}_grid`}
            grid="50+30 md:cols-2 lg:cols-3"
          >
            {times(prop.count).map(() => prop.card)}
          </div>

          {prop.btn ? (
            <div className={`latest_${prop.type}_btn`} flex="center">
              <a href="#" className="btn btn_pink">
                {prop.btn}
              </a>
            </div>
          ) : (
            <ul className={`pag`} flex="8 center">

              {[..."12345"].map((e) => (
                <li className={"pag_item " + (e == 1 ? "pag_active" : "")}>
                  <a href="#">{e}</a>
                </li>
              ))}

              <li className="pag_item pag_arrow">
                <a href="#">
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M1 4.35C0.641015 4.35 0.35 4.64101 0.35 5C0.35 5.35899 0.641015 5.65 1 5.65L1 4.35ZM14.4596 5.45962C14.7135 5.20578 14.7135 4.79422 14.4596 4.54038L10.323 0.403806C10.0692 0.149965 9.65765 0.149965 9.40381 0.403806C9.14997 0.657647 9.14997 1.0692 9.40381 1.32304L13.0808 5L9.40381 8.67696C9.14997 8.9308 9.14997 9.34235 9.40381 9.59619C9.65765 9.85003 10.0692 9.85003 10.323 9.59619L14.4596 5.45962ZM1 5.65L14 5.65V4.35L1 4.35L1 5.65Z" fill="black" />
                  </svg>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
});
