(function() {
  const times = count => Array.from("0".repeat(count))
  
  return (
    <Html>
      <Header />
      <main>
        <Latest
          type="blog"
          title="Latest Blog Posts"
          btn={false}
          count={12}
          graph={["long"]}
          card={<Blog />}
        />
      </main>
      <Footer />
      <Copy />
    </Html>
  );
});
