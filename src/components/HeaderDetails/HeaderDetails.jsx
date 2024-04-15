import "./HeaderDetails.scss";
import { IconContext } from "react-icons";
import { FaAngleLeft, FaEllipsis } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";

import React, { useState } from "react";

const HeaderDetails = () => {
  const [heartColor, setHeartColor] = useState("#2F2F2F");
  const [commentColor, setCommentColor] = useState("#2F2F2F");
  const [planeColor, setPlaneColor] = useState("#2F2F2F");

  const toggleHeartColor = () => {
    setHeartColor(heartColor === "#2F2F2F" ? "#FF7674" : "#2F2F2F");
  };
  const handleMouseEnter = (setState) => {
    setState("#FF7674");
  };

  const handleMouseLeave = (setState) => {
    setState("#2F2F2F");
  };

  return (
    <IconContext.Provider
      value={{ size: "1rem", color: "#2F2F2F", className: "react-icons" }}
    >
      <header className="headerDetails">
        <figure className="headerDetails__banner">
          <img
            className="headerDetails__banner-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCw2b2l7g98U1IDr6RtGZ5Br7i0tMP_5FZW12sqNhJbg&s"
            alt="Details Post"
          />
        </figure>

        <div className="headerDetails__navegation">
          <FaAngleLeft size="2rem" color="#FF7674" />
          <FaEllipsis size="2rem" color="#FF7674" />
        </div>

        <section className="headerDetails__container">
          <div className="headerDetails__container-group">
            <figure className="headerDetails__container-profile">
              <img
                className="headerDetails__container-profile-img"
                src="https://static.vecteezy.com/system/resources/previews/009/185/052/non_2x/skz-letter-logo-design-with-polygon-shape-skz-polygon-and-cube-shape-logo-design-skz-hexagon-logo-template-white-and-black-colors-skz-monogram-business-and-real-estate-logo-vector.jpg"
                alt="Image profile"
              />
            </figure>
            <figcaption className="headerDetails__container-description">
              <h1 className="headerDetails__container-description-title">Stray Kids</h1>
            </figcaption>
            <span className="headerDetails__container-icons">
                <button onClick={toggleHeartColor}>
                  <FaHeart color={heartColor} />
                  <p className="headerDetails__container-icons-subtitle">108K</p>
                </button>
                <button onMouseEnter={() => handleMouseEnter(setCommentColor)} onMouseLeave={() => handleMouseLeave(setCommentColor)}>
                    <FaRegComment color={commentColor}/>
                    <p className="headerDetails__container-icons-subtitle">54K</p>
                </button>
                <button onMouseEnter={()=> handleMouseEnter(setPlaneColor)} onMouseLeave={() => handleMouseLeave(setPlaneColor)}>
                    <FaRegPaperPlane color={planeColor}/>
                    <p className="headerDetails__container-icons-subtitle">10k</p>
                </button>
              </span>
          </div>
        </section>
      </header>
    </IconContext.Provider>
  );
};

export default HeaderDetails;
