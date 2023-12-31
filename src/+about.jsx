(function() {
  const times = count => Array.from("0".repeat(count))
  
  return (
    <Html>
      <Header />
      
      <AboutContent />

      <Promo />

      <Latest
        type="video"
        title="Latest Videos on YouTube"
        btn="Watch More Videos"
        count={9}
        card={<Video />}
      />

      <Footer />
      <Copy />
    </Html>
  );
});
