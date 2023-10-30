(function (prop = {}) {


  return (
    <div className={`block_latest_${prop.type} py-30 lg:py-85 over-hidden`}>
      <div className="container" flex="30 lg:66 col">

        <h2 className={`latest_${prop.type}_title font_lilita`} text="24 lg:48 $yellow center">
          {prop.title}
        </h2>

        <div className={`latest_${prop.type}_grid`} grid="50+30 md:cols-2 lg:cols-3">
          {times(prop.count).map(() => prop.card)}
        </div>

        <div className={`latest_${prop.type}_btn`} flex="center">
          <a href="#" className="btn btn_pink">
            {prop.btn}
          </a>
        </div>

      </div>
    </div>
  );
});
