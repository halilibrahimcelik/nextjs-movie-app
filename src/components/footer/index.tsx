import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <div className="text-center">
            <span>
              Made with <span className={styles.heart}>❤</span> by{" "}
            </span>
            <br />
            <br />
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/halil-ibrahim-celik/"
            >
              Halil İbrahim Celik
            </Link>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
