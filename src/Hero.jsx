(function (prop = {}) {
  <style jsx>{`
    @media (max-width:992px) {
      .img_children {
        object-fit: contain;
      }
    }
  `}</style>;

  return (
    <img className={
      "img_children h-full " + (prop.className ? " " + prop.className : "")
    } src="./img/hero.png" alt="Hero image" />
  );
});
