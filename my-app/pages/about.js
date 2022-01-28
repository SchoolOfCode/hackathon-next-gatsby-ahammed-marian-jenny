import Navbar from "../src/components/Navbar";
import style from '../styles/about.module.css'

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
    </div>
  );
}
export default about;
