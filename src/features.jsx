import fitur1 from "./asset/img/fitur1.svg";
import fitur2 from "./asset/img/fitur2.svg";
import fitur3 from "./asset/img/fitur3.svg";
import fitur4 from "./asset/img/fitur4.svg";
import fitur5 from "./asset/img/fitur5.svg";
import fitur6 from "./asset/img/fitur6.svg";
import "./App.css";

function Features() {
  return (

    <div className="container3">
        <div className="fiturAtas">
          <h1 id="featuresSection" className="fiturJudul">Our Features and Services</h1>
          <p className="fiturDesc">
            Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis
            aliquet purus <br /> sem ornare mollis vulputate. Sapien purus
            faucibus massa pharetra.
          </p>
        </div>
        <div className="fiturBawah">
          <div className="fiturBox">
            <img src={fitur1} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Life Time Access
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
          <div className="fiturBox">
            <img src={fitur2} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Online Classes
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
          <div className="fiturBox">
            <img src={fitur3} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Get Certificate
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
          <div className="fiturBox">
            <img src={fitur4} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Expert Trainers
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
          <div className="fiturBox">
            <img src={fitur5} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Great Result
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
          <div className="fiturBox">
            <img src={fitur6} alt="" />
            <h1 className="fontMed" style={{ fontSize: 20, marginTop: 10 }}>
              Best price
            </h1>
            <p className="fontReg" style={{ fontSize: 15, marginTop: 20 }}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Amet <br /> in porttitor in sit sem eu, nunc <br /> diam. Quis
              nisi,
            </p>
          </div>
        </div>
    </div>
  );
}

export default Features;
