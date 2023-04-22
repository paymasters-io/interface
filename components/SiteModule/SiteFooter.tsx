import Link from "next/link";
import SiteLogo from "./SiteLogo";

const SiteFooter = () => {
  return (
    <footer
      className="site-footer site-section"
      aria-label="site footer"
    >
      <div className="wrapper">
        <section className="logo-form-section">
          <SiteLogo />
          <form className="newsletter-form">
            <div className="form-header">Subscribe to our news letter</div>
            <div className="form-group">
              <div className="form-control">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter your Email"
                />
              </div>
              <button className="cta">Subscribe</button>
            </div>
          </form>
        </section>
        <section className="links-section">
          <p className="copy">Ⓒ {(new Date().getFullYear())} Paymasters. All rights reserved</p>
          <div className="links">
            <ul className="socials links-list">
              <li className="link-item">
                <a href="#">Discord</a>
              </li>
              <li className="link-item">
                <a href="https://t.me/paymasters_io">Telegram</a>
              </li>
              <li className="link-item">
                <a href="https://twitter.com/paymasters_io">Twitter</a>
              </li>
              <li className="link-item">
                <a href="https://github.com/paymasters-io">GitHub</a>
              </li>
            </ul>
            <ul className="site links-list">
              <li className="link-item">
                <Link href="mailto:hello@paymasters.io, ross@paymasters.io">Contact</Link>
              </li>
              <li className="link-item">
                <Link href="https://docs.paymasters.io/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default SiteFooter;
