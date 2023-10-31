(function() {
  const times = count => Array.from("0".repeat(count))
  
  return (
    <Html>
      <Header />
      <main>
        <Latest
          type="video"
          title="Latest Videos on YouTube"
          btn="Load More Videos"
          count={21}
          graph={["long"]}
          card={<Video />}
        />
      </main>
      <Footer />
      <Copy />
    </Html>
  );
});
