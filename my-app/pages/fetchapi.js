import Navbar from "../src/components/Navbar";
import style from "../styles/about.module.css"
function fetchapi({ posts }) {
  return (
    <div>
      <Navbar />
       <ul className={style.listItem}>
      {posts.map((post, index) => (
          <li className={style.li} key={index}>{post}</li>
      ))}
    </ul> 
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch("https://poetrydb.org/author");
  const data = await res.json();
  const posts = data.authors;
  console.log(posts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default fetchapi;
