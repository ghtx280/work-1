(function (prop = {}) {
  <style jsx>{``}</style>;

  return (
    <img className={
      (prop.h ? "h-" + prop.h : "") +
      (prop.class ? " " + prop.class : "")
    } src="./img/hero.png" alt="Hero image" />
  );
});
