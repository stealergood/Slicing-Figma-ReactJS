import "./App.css";
import logo from "./asset/img/logo.svg";
import cart from "./asset/img/cart.svg";
import user from "./asset/img/user.svg";
import Saly from "./asset/img/Saly-10.png";
import micro from "./asset/img/microsoft.svg";
import tree from "./asset/img/tree-house.svg";
import amaz from "./asset/img/amazon.svg";
import slack from "./asset/img/slack.svg";
import goog from "./asset/img/google.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="container1">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt=" " />
          </div>
          <div className="menu">
            <a href="#CourseSection" className="text nav-text">
              Course
            </a>
            <a href="#CourseSection" className="text nav-text">
              Pricing
            </a>
            <a href="#featuresSection" className="text nav-text">
              Features
            </a>
            <a href="/" className="text nav-text">
              Contact us
            </a>
          </div>
          <div className="ujung">
            <img src={user} style={{ marginLeft: 20 }} alt=" " />
            <a href=" " className="text acc">
              Account
            </a>
            <img src={cart} style={{ marginLeft: 30 }} alt=" " />
            <a href=" " className="text cart">
              Cart
            </a>
          </div>
        </div>
        <div className="component">
          <div className="tulisan">
            <h1 className="judul">
              Upgrade YOUR skills <br /> for better future
            </h1>
            <p className="text desc">
              Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit
              interdum mi felis laoreet sagittis.
            </p>
          </div>
          <div style={{ marginLeft: 55, marginTop: 25 }}>
            <button className="text button1">Check Course</button>
            <button className="text button2">Learn More</button>
          </div>
        </div>
        <div className="gambar">
          <img src={Saly} style={{ width: 570 }} alt=" " />
        </div>
      </div>
      <div className="company">
        <h1 className="ourCompany">Our Company and Partners</h1>
        <div className="partners">
          <img
            src={micro}
            alt=" "
            style={{ marginLeft: 80, marginBottom: 20 }}
          />
          <img
            src={tree}
            alt=" "
            style={{ marginLeft: 80, marginBottom: 20 }}
          />
          <img
            src={amaz}
            alt=" "
            style={{ marginLeft: 80, marginBottom: 20 }}
          />
          <img
            src={slack}
            alt=" "
            style={{ marginLeft: 80, marginBottom: 20 }}
          />
          <img
            src={goog}
            alt=" "
            style={{ marginLeft: 80, marginBottom: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
