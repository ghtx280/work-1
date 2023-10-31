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
      resize: vertical;
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
      <main className="bg-#F1F9FD py-50 over-hidden">
        <div className={"container"} flex="center">
          <form action="/send-contact.php" method="POST">
            <div className="bg-white max-w-480 p-60 graphics" flex="32 col center">
              <h3 className="font_lilita" text="30 #22A0D9 center">Contact GlenBob</h3>

              <div flex="17 col">
                <div className="inp">
                  <input type="text" placeholder="*" required/>
                  <label>First Name</label>
                </div>

                <div className="inp">
                  <input type="text" placeholder="*" required/>
                  <label>Last Name</label>
                </div>

                <div className="inp">
                  <input type="email" placeholder="*" required/>
                  <label>Email</label>
                </div>

                <div className="inp">
                  <textarea placeholder="*" required/>
                  <label>Message</label>
                </div>

                <p text="11 regular">
                  <strong>Glenbob</strong>
                  needs the contact information you provide to us to contact you about our services. For information on how to unsubscribe, as well as our privacy practices, review our
                  <a href="#">Privacy Policy</a>.
                </p> 
              
              </div>

              <button className="btn btn_green" type="submit">Say Hello</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <Copy />
    </Html>
  );
});
