import dp from "../images/MyDP.jpg";
import linkedinLogo from "../icons/linkedinWhite.png";
import gmailLogo from "../icons/envelope-solid.svg";

function Info() {
  return (
    <div className="info">
      <img src={dp} className="info--img" />
      <h1>Vivek Raj</h1>
      <h4>Frontend Developer</h4>
      <div className="btns">
        <a
          href="https://www.linkedin.com/in/vivekrajsundar"
          target="_blank"
          className="btn btn--link"
        >
          <img src={linkedinLogo} className="btn--image" />
          LinkedIn
        </a>

        <a
          href="mailto:vivekrajsundar@gmail.com"
          target="_blank"
          className="btn btn--link"
        >
          <img src={gmailLogo} className="btn--image" />
          Email
        </a>
      </div>
    </div>
  );
}

export default Info;
