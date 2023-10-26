import React, { useState } from "react";
import "../style/footer.css";
const Footer = () => {
  const [country, setCountry] = useState("Engglish");
  const ubahBahsa = (e) => {
    setCountry(e);
  };

  return (
    <>
      <div className="footer d-flex justify-content-start ">
        <div className="kolom kolom_1 ">
          <p className="question">question?Call 081-222-3187</p>
          <ul>
            <li>
              <a>Faq</a>
            </li>
            <li>
              <a>Investor Relation</a>
            </li>
            <li>
              <a>Ways To Wach</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
            <li>
              <a>Only on Netflix</a>
            </li>
            <li>
              <div className="">
                <select
                  className="selectbox bg-dark"
                  onChange={({ target }) => ubahBahsa(target.value)}
                >
                  <option>Engglish</option>
                  <option>Indonesia</option>
                  <option>Arabic</option>
                </select>
              </div>
            </li>

            <div className="countryName">Movie {country}</div>
          </ul>
        </div>
        <div className="kolom kolom_2 ">
          <ul>
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Terms Of Use</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="kolom kolom_3 ">
          <ul>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Redeem Gift Cards</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Speed Test</a>
            </li>
          </ul>
        </div>
        <div className="kolom kolom_4">
          <ul>
            <li>
              <a>Media Center</a>
            </li>
            <li>
              <a>Buy Gift Cards</a>
            </li>
            <li>
              <a>Cookie Preferences</a>
            </li>
            <li>
              <a>Legal Notice</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
