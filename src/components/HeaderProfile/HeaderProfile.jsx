import "./HeaderProfile.scss";
import { IconContext } from "react-icons";
import { FaAngleLeft, FaEllipsis } from "react-icons/fa6";

const HeaderProfile = () => {
  return (
      <IconContext.Provider value={{ size: "2rem", color: "#FF7674" }}>
        <header className="header">
          <section>
            <img
              className="header__banner"
              src="https://img2.yna.co.kr/etc/inner/SP/2022/10/07/ASP20221007001900883_02_i_P2.jpg"
              alt="Banner Profile"
            />
            <span className="header__banner-icon">
              <FaAngleLeft />
              <FaEllipsis />
            </span>
          </section>
          <section className="header__profile">
            <div>
              <p className="header__profile-personalInfo--title">10.7 M</p>
              <p>Followers</p>
            </div>
            <div>
              <figure className="header__profile-contImg">
                <img
                className="header__profile-img"
                  src="https://static.vecteezy.com/system/resources/previews/009/185/052/non_2x/skz-letter-logo-design-with-polygon-shape-skz-polygon-and-cube-shape-logo-design-skz-hexagon-logo-template-white-and-black-colors-skz-monogram-business-and-real-estate-logo-vector.jpg"
                  alt="Profile Img"
                />
                <figcaption className="header__profile-personalInfo">
                <p className="header__profile-personalInfo--title">Stray Kids</p>
                <p className="header__profile-personalInfo--description"> Hello Stay 🤗 </p>
                <p className="header__profile-personalInfo--description">SKZ in the building</p>
              </figcaption>
              </figure>
            </div>
            <div>
                <p className="header__profile-personalInfo--title">108.3 M</p>
                <p>Likes</p>
            </div>
          </section>
          <section className="header__buttons">
            <button className="header__buttons-button">Follow</button>
            <button className="header__buttons-button">Message</button>
          </section>
        </header>
      </IconContext.Provider>
  );
};

export default HeaderProfile;
