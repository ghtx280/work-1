(function () {
  const times = (count) => Array.from("0".repeat(count));

  return (
    <Html>
      <Header />

      <Latest
        type="video"
        title="Latest Videos on YouTube"
        btn="Watch More Videos"
        count={9}
        card={<Video />}
      />

      <Promo />

      <Latest
        type="blog"
        title="Latest Blog Posts"
        btn="Read More Blogs"
        count={9}
        card={<Blog />}
      />
      
      <Footer />
    </Html>
  );
});
