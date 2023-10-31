(function() {
  const times = count => Array.from("0".repeat(count));

  <style jsx>{`

    .inp {
      position: relative;
    }
    .inp :is(input, textarea, select) {
      width: 100%;
      padding: 14px;
      border-width: 1px;
      border-color: #CED3D9;
      border-radius: 3px;
    }
    .inp label {
      pointer-events: none;
      color: #6F7680;
      position: absolute;
      top: 14px;
      left: 14px;
      font-size: 14px;
    }

    .inp label::after {
      content: "*";
      color: #F21B3F;
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
      <main className="py-70 over-hidden">
        <div className={"container graphics graphics_invert"}>
          
        <h2 className="title_40 mb-24">Message received :)</h2>
        <p text="18 regular"> 
          A member of our team will be in touch shortly.
          <br />
          <br />
          In the meantime, subscribe to our channel on <a href="#">YouTube</a>.
        </p>

        </div>
      </main>
      <Promo />
      <Copy />
    </Html>
  );
});
