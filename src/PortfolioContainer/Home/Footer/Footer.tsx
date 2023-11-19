import "./Footer.css";
import ShapeBg from "../../../assets/Home/shape-bg.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={ShapeBg}
          alt="not internet connection"
        />
      </div>
    </div>
  );
};

export default Footer;
