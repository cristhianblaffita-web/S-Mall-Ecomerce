import "./Footer.css";
import { Link } from "react-router-dom";
import { MdStorefront, MdShoppingCart } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-primary text-light">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title text-accent font-bold">Explore</h3>
          <ul className="footer-list list-none flex flex-col gap-8">
            <li>
              <Link
                to="/products"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <MdStorefront size={18} />
                All products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <MdShoppingCart size={18} />
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <FiLogIn size={18} />
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title text-accent font-bold">Connect</h3>
          <ul className="footer-list list-none flex flex-col gap-8">
            <li>
              <a
                href="mailto:cristhianblaffita@gmail.com"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <MdEmail size={18} />
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cristhianblaffita-web"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cristhian-borges-298433239"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link decoration-none flex items-center gap-8"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center text-sm">
        <p>© {currentYear} S-Mall Ecommerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
