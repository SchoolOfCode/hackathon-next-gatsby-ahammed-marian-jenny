import React, { useState } from "react";
import authors from "./data";
import Navbar from "../src/components/Navbar";
import style from "../styles/about.module.css";

function about() {
  const [author, setAuthor] = useState(authors);

  return (
    <div>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div>
        <ul className={style.listItem}>
          {author.map((e, index) => (
            <li className={style.li} key={index}>{e.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default about;
