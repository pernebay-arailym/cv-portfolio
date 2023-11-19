import ScrollService from "../../utilities/ScrollService";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="ContactMe" className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService?.scrollHandler?.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
