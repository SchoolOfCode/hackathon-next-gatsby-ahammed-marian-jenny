/* eslint-disable react/no-unescaped-entities */
import Navbar from "../src/components/Navbar";
import style from '../styles/about.module.css'
import Image from 'next/image'
import Button from "../src/components/Button/counterButton";


function about() {
  return (
    <div>
      <Navbar />
          <h3 className={style.text}>
              This is our fabulous poem finder.</h3>
          <h3 className={style.text}>Click on the "List of Poets" to browse
        all the poets in our database.</h3><h3 className={style.text}> Search by poet name in the "Search by
        Poet" page to reveal a list of up to 10 poems by that poet.
      </h3>
      <div>
      <Image src="/music-tshirt-headphones-400x400.jpg" alt="t-shirt" width={200} height={200} />
      </div>
      <Button/>
     
    </div>
  );
}
export default about;
