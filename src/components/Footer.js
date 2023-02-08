import twitterIcon from "../icons/twitter-120.png";
import instagramIcon from "../icons/instagram-100.png";
import githubIcon from "../icons/github-128.png";

function Footer() {
  return (
    <div className="footer">
      <ul className="nav-footer">
        <li>
          <a href="https://www.twitter.com/vivekrajsundar" target="_blank">
            <img className="footer-icon" src={twitterIcon} />
          </a>
        </li>

        <li>
          <a href="https://www.github.com/vivekrajsundar" target="_blank">
            <img className="footer-icon" src={githubIcon} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/vivekrajsundar" target="_blank">
            <img className="footer-icon" src={instagramIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
