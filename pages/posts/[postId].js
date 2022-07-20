import { useRouter } from "next/dist/client/router";
function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  var response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.slice(0, 50).map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
