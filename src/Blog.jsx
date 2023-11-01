(function () {
  <style jsx>{`
    .card_blog {
      box-shadow: 0px 6px 20px rgba(160, 180, 200, 0.4);
    }
    .card_blog, .card_blog * {
      transition: all 200ms;
    }
  `}</style>;

  return (
    <a href="/blog-post.html" className="card_blog r-16" flex="col">
      <img className="rt-16 h-230" src="./img/video.jpg" />

      <p className="rb-16 p-26+32 bg-white lh-30px" text="18 $black hover:#109FDA">
        Improving staff productivity and turnaround with Digital Dictation and
        Outsourced Transcription
      </p>
    </a>
  );
});
