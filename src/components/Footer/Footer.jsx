import "./Footer.css";
import navImage from "../../assets/navbarLogo.png";
import { Link } from "react-router-dom";

export const SOCIAL_ICONS = [
  { title: "Facebook", target: "https://www.facebook.com" },
  { title: "Instagram", target: "https://www.instagram.com" },
  { title: "Twitter", target: "https://www.twitter.com" },
  { title: "Reddit", target: "https://www.reddit.com" },
];

export const SUPPORT_MENU_OPTIONS = [
  { title: "Customer Service", target: "/" },
  { title: "Returns & Refunds", target: "/" },
  { title: "Shipping Info", target: "/" },
  { title: "FAQ", target: "/" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__columns">
          <div className="footer__col">
            <div className="nav_logo_wrapper">
              <img src={navImage} alt="nav logo" />
            </div>
            <h3 className="footer__col-description">
              Make your shopping easy with ShopEase,
            </h3>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Help & Support</h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                {!!SUPPORT_MENU_OPTIONS &&
                  SUPPORT_MENU_OPTIONS?.map((support) => {
                    return (
                      <li className="footer__nav-item">
                        <Link to={support?.target} className="footer__nav-link">
                          {support?.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Socials</h3>
            <ul className="footer__nav-list">
              {!!SOCIAL_ICONS &&
                SOCIAL_ICONS?.map((social) => {
                  return (
                    <li className="footer__nav-item">
                      <a
                        href={social?.target}
                        target="_blank"
                        className="footer__nav-link"
                      >
                        {social?.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="footer__col footer-section newsletter">
            <h3 className="footer__col-title">Contact</h3>
            <nav className="footer__nav">
              <p className="footer__col-description py-1 mb-1">
                Sign up for our newsletter and get 10% off your first order!
              </p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
