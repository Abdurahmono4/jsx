import React from "react";

naame = "Humoyun Mirzo";
age = 19;
surname = "Abdurasuljonov";
imgUrl =
  "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj";

const Navbar = () => {
  return (
    <div>
      <section className="big-box">
        <img className="avatar" src="" alt="avatar" />
        <h1 className="name">{naame}</h1>
        <p className="surname">{surname}</p>
        <p className="age">{age}</p>
      </section>
    </div>
  );
};

export default Navbar;
