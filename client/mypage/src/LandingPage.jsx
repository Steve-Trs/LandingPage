import React from "react";
import "./assets/landingpage.css";
import Form from "./components/Form";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  return (
    <>
      <main>
        <header>
          <div className="brand">
            <span className="logo">
              <FontAwesomeIcon icon={faUtensils} />
            </span>
            <span className="brand-name">deluxe delivery</span>
          </div>
          <div className="social-media">
            <span>follow us</span>
            <SocialIcon
              url="https://facebook.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
            <SocialIcon
              url="https://instagram.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
            <SocialIcon
              url="https://twitter.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
          </div>
        </header>
        <section className="section">
          <div className="pic-chef">
            <img
              src="./src/assets/image-chef.png"
              alt="chef"
              className="chef-img"
            />
          </div>
          <div className="content">
            <div className="text">
              <h2>Coming soon!</h2>
              <h3>
                Dine in luxury,<br></br> at home.
              </h3>
              <p>
                Be the first to get the app and get access to hundreds of
                luxurous restaurants from top chef's in your area, ready to
                deliver to your door.
              </p>
            </div>
            <div className="form-container">
              <Form />
            </div>
          </div>
        </section>
        <footer>
          <div className="social-media footer">
            <span>follow us</span>
            <SocialIcon
              url="https://facebook.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
            <SocialIcon
              url="https://instagram.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
            <SocialIcon
              url="https://twitter.com"
              className="social-icon"
              style={{ width: 45, height: 45 }}
            />
          </div>
          <div className="copyright">
            &copy; 2024. DELUXE DELIVERY. All right reserved
          </div>
        </footer>
      </main>
    </>
  );
}
