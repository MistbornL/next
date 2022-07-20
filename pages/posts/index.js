import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h2 style={{ cursor: "pointer" }}>
                {post.id} {post.title}
              </h2>
            </Link>

            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
    // every 10 seconds page will reload and check for updates in data
    revalidate: 10,
  };
}
