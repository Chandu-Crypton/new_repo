import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"></div>
          <div className="right">
            <p>Benz Circle, Vijayawada</p>
            <p>Open: 12:00 PM - 10:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By CHANDU</p>
          </div>
          <div className="right">
            {/* <p>All Rights Reserved By CodeWithZeeshu.</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;