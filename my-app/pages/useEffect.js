
import { useState, useEffect } from 'react'

import React from 'react';

export default function GetApi() {
    const []
    
    
    useEffect(() => {
        async function fetchData() {
          let url = `https://poetrydb.org/author/${nameInput}`;
          let response = await fetch(url);
          let data = await response.json();
          setPoet(data);
           }
        if (input) {
          fetchData();
        }
      }, [poet]);



  return <div>


  </div>;
}




// export default async function QueryPoet() {
//   let [query, setQuery] = useState("")
//   let data = await useQuery(query)
//   console.log(data);

// //   let poet = data.collection?.items[0] || null
// //   if (poet?.) {
// //     poet = title[0]
// //   }

// //   let info = data.collection?.items[0]?.data[0]

//   return (
//     <div >
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value)
//         }}
//       />
//       {/* <ul>
//           {data.map((e, index)=>
//           <li key={index}>{e.title}</li>)}
//       </ul> */}
//     </div>
//   )
// }