
import React,{useState} from "react";
import authors from "./data";
import Link from "next/link";
import styles from "../styles/about.module.css";
import Navbar from "../src/components/Navbar";

function about() {
  const [author, setAuthor] = useState(authors)

    return (
      <div>
        <Navbar/>
        <ul>
          {author.map((e, index) => (
            <li key={index}>{e.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default about;
