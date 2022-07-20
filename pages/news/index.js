function News({ articles }) {
  return (
    <>
      <h1>News Article List</h1>
      {articles.map((news, index) => {
        return (
          <div key={index}>
            <h2>{news.title}</h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}

export default News;
