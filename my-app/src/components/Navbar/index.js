import React from 'react';
import styles from "../../../styles/about.module.css"
import Link from "next/link";

function Navbar() {
    return (
      <div>
        <nav>
          <Link href="/">
            <a className={styles.card}>Home</a>
          </Link>
          <Link href="/about">
            <a className={styles.card}>List of Poets</a>
          </Link>
          <Link href="/fetchapi">
            <a className={styles.card}>Edgar Allen Poe</a>
          </Link>
          <Link href="/useEffect">
            <a className={styles.card}>Search by Poet</a>
          </Link>
        </nav>
      </div>
    );
}

export default Navbar;
