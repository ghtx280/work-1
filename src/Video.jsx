(function () {
  <style jsx>{`
    .card_video {
      background-size: contain;
    }

    .card_video:hover {
      box-shadow: 0 0 20px red;
      transition: box-shadow 200ms;
    }
  `}</style>;

  return (
    <a
      href="#"
      flex="center"
      className="card_video ratio-16/9"
      style="background-image: url('./img/video.jpg')"
    >
      <img src="./img/play.svg" alt="Play Button" />
    </a>
  );
});
