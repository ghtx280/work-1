(function () {
  const times = (count) => Array.from("0".repeat(count));

  <style jsx>{`
    .inp {
      position: relative;
    }
    .inp :is(input, textarea, select) {
      width: 100%;
      padding: 14px;
      border-width: 1px;
      border-color: #ced3d9;
      border-radius: 3px;
    }
    .inp label {
      pointer-events: none;
      color: #6f7680;
      position: absolute;
      top: 14px;
      left: 14px;
      font-size: 14px;
    }

    .inp label::after {
      content: "*";
      color: #f21b3f;
    }

    .inp :is(input, textarea, select)::placeholder,
    .inp :is(input, textarea, select):focus + label,
    .inp :is(input, textarea, select):not(:placeholder-shown) + label {
      opacity: 0;
    }

    form > div {
      border-radius: 4px;
      box-shadow: 0px 4px 20px 0px rgba(69, 75, 84, 0.07);
    }
  `}</style>;

  // " "

  return (
    <Html>
      <Header />
      <main className="bg-#F1F9FD py-70 over-hidden">
        <div className={"container graphics"}>
          <div flex="48 col center">
            <div flex="16 col">
              <h2 className="title_48 mb-24">Ooops!</h2>
              <p text="24 regular center">
                The page you're looking for does not exist.
              </p>
            </div>
            <div flex="16 col">
              <p className="mt-48" text="18 light center">
                Here are some helpful links
              </p>
              <div flex="24 wrap center">
                {[["/","Homepage"],["videos","Videos"], ["blog","Blog"]].map(([link, text]) => (
                  <a href={link} className="btn btn_yellow_round">{text}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Promo />
      <Copy />
    </Html>
  );
});
