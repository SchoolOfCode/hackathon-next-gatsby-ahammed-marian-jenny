
import React,{useState} from "react";
import authors from "./data";

function about() {
  const [author, setAuthor] = useState(authors)

    return <div>
      <ul>
       {author.map((e,index)=>
       <li key={index}>{e.name}</li>
       )}
      </ul>
       
  </div>;
}

export default about;
