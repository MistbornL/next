function ExtractNewsById({ news, newsId }) {
  return (
    <>
      <h1>News By userId {newsId}</h1>
      {news.map((newsId) => {
        return (
          <div key={newsId.id}>
            <h2>{newsId.title}</h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ExtractNewsById;

export async function getServerSideProps(context) {
  const { params } = context;
  const { newsId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${newsId}`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      news: data,
      newsId,
    },
  };
}
