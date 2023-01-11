import "./App.css";
import Logo from "./asset/img/logo.svg";
import fb from "./asset/img/fb.svg";
import twit from "./asset/img/twit.svg";
import ig from "./asset/img/ig.svg";
import yt from "./asset/img/yt.svg";
import copy from "./asset/img/copyright.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerPrimary">
        <div className="footerLogo">
          <img src={Logo} alt="" />
          <p className="fontReg" style={{marginTop: 10}}>Lorem ipsum dolor sit amet <br /> consectetur. Magna integer enim <br /> vitae vulputate eu vitae tristique.</p>
        </div>
      </div>
      <div className="footerMenu">
        <div className="menuGeneral">
            <div className="menuMargin">
                <h1 className="fontMed textwhite" style={{fontSize: 18}}>General</h1>
                <ul className="fontReg ultype" style={{fontSize: 13, marginTop: 5}}>
                    <a href="/" className="textdecoration"><li className="textwhite">About us</li></a>
                    <a href="/" className="textdecoration"><li className="textwhite">Pricing</li></a>
                    <a href="/" className="textdecoration"><li className="textwhite">Contact us</li></a>
                    <a href="/" className="textdecoration"><li className="textwhite">Course</li></a>
                </ul>
            </div>
        </div>
        <div className="menuPolicies">
            <div className="menuMargin">
                    <h1 className="fontMed textwhite" style={{fontSize: 18}}>Policies</h1>
                    <ul className="fontReg ultype" style={{fontSize: 13, marginTop: 5}}>
                        <a href="/" className="textdecoration"><li className="textwhite">Security safeguards</li></a>
                        <a href="/" className="textdecoration"><li className="textwhite">Term of services</li></a>
                        <a href="/" className="textdecoration"><li className="textwhite">Privacy</li></a>
                        <a href="/" className="textdecoration"><li className="textwhite">Accessibility</li></a>
                    </ul>
                </div>
        </div>
        <div className="menuTouch">
            <div className="menuMargin">
                <h1 className="fontMed textwhite" style={{fontSize: 18}}>Get in touch</h1>
                <p className="fontReg ultype textwhite" style={{fontSize: 13, marginTop: 5}}>Follow us on social media and stay updated with the latest information about our services</p>
                <div className="sosmed">
                    <a href="/"><img src={fb} alt="" /></a>
                    <a href="/"><img src={twit} alt="" /></a>
                    <a href="/"><img src={ig} alt="" /></a>
                    <a href="/"><img src={yt} alt="" /></a>
                </div>
            </div>
        </div>
      </div>
      <div className="footerCopyright textwhite"><img src={copy} alt="" />2022 - @OUTSCHOOL all right deserved
      </div>
    </div>
  );
};

export default Footer;
