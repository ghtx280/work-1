(function (prop = {}) {
  <style jsx>{``}</style>;

  return (
    <img className={
      "h-full" + (prop.className ? " " + prop.className : "")
    } src="./img/hero.png" alt="Hero image" />
  );
});
