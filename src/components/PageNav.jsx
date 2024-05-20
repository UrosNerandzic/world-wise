import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo.jsx";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/world-wise/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/world-wise/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/world-wise/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
