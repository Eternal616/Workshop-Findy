import React from "react";
import "./NavigationBar.scss";

import Home from "../NavigationBar/assets/Home.png";
import Seeker from "../NavigationBar/assets/Seeker.png";
import Notification from "../NavigationBar/assets/Notification.png";
import Profile from "../NavigationBar/assets/Profile.png";
import ImgFooter from "../NavigationBar/assets/ImgFooter.png";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <button
          className="footer_button footer_button--home"
          style={{ backgroundImage: `url(${Home})` }}
        ></button>

        <button
          className="footer_button footer_button--seeker"
          style={{ backgroundImage: `url(${Seeker})` }}
        ></button>
        
        <button className="button__footer">+</button>

        <button
          className="footer_button footer_button--notification"
          style={{ backgroundImage: `url(${Notification})` }}
        ></button>

        <button
          className="footer_button footer_button--profile"
          style={{ backgroundImage: `url(${Profile})` }}
        ></button>
      </div>

      <div className="img__footer">
        <img src={ImgFooter} className="footer" alt="footer" />
      </div>
    </div>
  );
};

export default NavigationBar;