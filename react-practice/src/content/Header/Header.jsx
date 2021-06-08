import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "../Clock/Clock";
import styles from "./Header.module.css";

const HeaderNav = () => {
  

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.currentPage}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/imageGallery"
            className={styles.link}
            activeClassName={styles.currentPage}
          >
            ImageGallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/featuresSet"
            className={styles.link}
            activeClassName={styles.currentPage}
          >
            Features Set
          </NavLink>
          </li>
          <li>

          <NavLink
            to="/marvel"
            className={styles.link}
            activeClassName={styles.currentPage}
          >
            Marvel
          </NavLink>
        </li>
        <li>

          <NavLink
            to="/books"
            className={styles.link}
            activeClassName={styles.currentPage}
          >
            Books
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderNav />
      <Clock />
    </div>
  );
};

export default Header;
