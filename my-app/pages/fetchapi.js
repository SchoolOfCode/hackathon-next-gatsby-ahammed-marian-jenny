

function fetchapi({ posts }) {
 
  return (
    <ul>
      {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
}




export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  
  const res = await fetch("https://poetrydb.org/author/poe");
  const posts = await res.json();
  console.log(posts[0]);


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default fetchapi;