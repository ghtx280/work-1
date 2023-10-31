(function() {
  const times = count => Array.from("0".repeat(count));

  <style jsx>{`
    .block_post .card_video img {
      height: 80px;
    }
    .marked > * {
      margin-bottom: 15px;
      font-size: 16px;
    }
    .marked p {
      line-height: 24px;
    }
    .marked ol {
      list-style: inside decimal;
    }
    .marked ul {
      list-style: inside disc;
    }
    .marked :is(ol, ul) li  {
      list-style: unset;
    }
    .marked h1,
    .marked h2,
    .marked h3,
    .marked h4,
    .marked h5,
    .marked h6 {
      font-family: var(--font-lilita);
      font-size: 20px;
      color: var(--color-yellow);
    }
    .marked h1 {
      font-size: 30px;
      padding-top: 20px;
    }
    .marked h2 {
      font-size: 24px;
    }
  `}</style>
  
  return (
    <Html>
      <Header />
      <main>
        <div className="block_post py-60 over-hidden">
          <div className="container graphics graphics_long">
            <h1 className="title_48 mb-54"> Privacy Policy </h1>
            <div className="post_content marked">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at sem a sem congue consectetur nec at mauris. Aliquam ut erat et ante bibendum pulvinar id quis enim. Nunc at ante et turpis placerat laoreet sit amet id libero. <strong>Aliquam euismod</strong> ornare laoreet. Donec neque sapien, convallis sit amet porta et, tincidunt sit amet neque. Suspendisse maximus tortor sit 
              </p>
              <p>
                amet ipsum fringilla vulputate. Cras interdum lacus in tortor rhoncus, nec eleifend felis facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et <a href="#">ultrices posuere</a> cubilia curae; Integer non odio non nisi eleifend sodales id sit amet risus. In vestibulum dignissim metus varius blandit. In hac habitasse platea dictumst. Proin vel turpis eget lectus venenatis sodales. Phasellus scelerisque non elit quis lacinia. Nullam magna ex, mollis at leo id, commodo blandit dolor. Etiam eu lobortis diam. Nulla hendrerit ipsum et turpis tincidunt, blandit interdum mauris mattis.
              </p>
              <h2>
                H2 - Cras pellentesque urna a lacus vulputate feugiat
              </h2>
              <p>
                Integer tempus, mi vel lacinia volutpat, quam nulla vulputate felis, a mattis diam libero eget diam. Donec at mollis augue. Vestibulum ut scelerisque arcu, ut ornare nibh. Quisque id quam tellus. Curabitur ac consequat metus, sed porta justo. Praesent ullamcorper neque viverra congue feugiat. Sed dignissim vitae mi at molestie. Nulla nisl nulla, lobortis ac dolor a, hendrerit lacinia magna. Nulla feugiat tincidunt nunc, a mollis metus tincidunt eu. Maecenas augue
              </p>
              <p>
                sapien, luctus at feugiat a, convallis et magna. Fusce lobortis ipsum ut dolor imperdiet dapibus. Curabitur molestie aliquet tincidunt. Donec maximus non dolor quis mollis. Proin enim justo, ultrices ut ornare vitae, tincidunt in lorem. Donec pulvinar felis vel venenatis tempor. Ut consectetur, eros at bibendum consectetur, massa nibh facilisis magna, id hendrerit dolor augue eget felis.
              </p>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ol>
              <h3>H3 - Cras pellentesque urna a lacus vulputate feugiat</h3>
              <p>
                Cras ex ante, malesuada non enim sed, sagittis finibus lacus. Praesent congue mollis tellus vel auctor. Cras pharetra elit ex, nec imperdiet velit dignissim et. Cras id lorem ac nunc mattis mattis. Vivamus iaculis arcu interdum erat rhoncus fringilla. Cras tristique tristique magna id pellentesque. Praesent mattis felis sed dui dignissim molestie. Donec sit amet sapien odio. Integer accumsan enim sem, blandit aliquet dui mollis vel. Integer lacinia imperdiet purus sed venenatis. Etiam non enim metus.
              </p>
              <h4>H4 - Cras pellentesque urna a lacus vulputate feugiat</h4>
              <p>
                Donec ornare, libero ut vestibulum ullamcorper, velit odio rhoncus nunc, vel convallis ante eros ac urna. Nam sed leo sit amet risus tristique sagittis eget a ipsum. Pellentesque cursus turpis in imperdiet luctus. Vivamus convallis, urna eu mattis elementum, metus purus dictum erat, vel auctor urna sapien at tellus. Donec ornare semper nunc quis lobortis. Morbi imperdiet dictum
              </p>
              <p>
                lobortis. Integer accumsan, odio ut finibus ullamcorper, lorem nunc consequat purus, non molestie mauris diam in nibh. Quisque quis hendrerit risus. Integer erat nibh, viverra ac elit et, porttitor scelerisque erat. Nunc at consectetur sapien. Nulla facilisi.
              </p>
              <h5>
                H5 - Cras pellentesque urna a lacus vulputate feugiat
              </h5>
              <p>
                Morbi elementum efficitur nibh, ut accumsan augue consequat quis. Sed ultrices nisl quis lacus iaculis, at dignissim ante rhoncus. Vivamus a lectus feugiat, ornare metus vitae, posuere ex. Curabitur urna risus, sollicitudin ac sollicitudin eu, aliquet a tortor. Fusce finibus nisl eu odio 
              </p>
              <p>
                volutpat posuere. Etiam eu sagittis eros, vel fermentum purus. Nulla faucibus sagittis lacinia. In accumsan neque cursus maximus elementum. Vestibulum est odio, tristique ac dolor id, rutrum varius erat. In pulvinar vestibulum lacu.
              </p>
              <h6>H6- Cras pellentesque urna a lacus vulputate feugiat</h6>
              <p>
                Sed eu pulvinar quam. Aliquam mi nunc, aliquet eu lacus in, interdum rutrum enim. Praesent id est et est porta gravida id sollicitudin ex. In sed quam eget nulla pharetra lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id eros vitae neque condimentum.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</li>
              </ul>
              <p>
                Vivamus vulputate nisl ut eleifend tempus. Praesent interdum vulputate lorem at lacinia. Sed nulla dui, bibendum sit amet augue et, facilisis pulvinar magna. Curabitur tempus
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Copy />
    </Html>
  );
});
