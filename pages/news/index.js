function News({ articles }) {
  return (
    <>
      <h1>
        <h1>News Article List</h1>
      </h1>
      {articles.map((news) => {
        return (
          <div>
            <p>news.title</p>
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
