
import React,{useState} from "react";
import authors from "./data";

function about() {
  const [author, setAuthor] = useState(authors)

    return <div>
      <ul>
       <li>{author}</li>
      </ul>
       
  </div>;
}

export default about;
