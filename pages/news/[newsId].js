function ExtractNewsById({ news, newsId }) {
  return (
    <>
      {/* rendering news by id form ssr fetching function */}
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

// SSR function for fetching data
export async function getServerSideProps(context) {
  // get dynamic parameter and fetch data
  const { params, req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Lasha"]);
  const { newsId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${newsId}`
  );
  const data = await response.json();

  return {
    props: {
      news: data,
      newsId,
    },
  };
}
