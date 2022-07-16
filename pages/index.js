import Link from "next/link";

import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/blog"}>
        <a>Blog</a>
      </Link>
      <Link href={"/product"}>
        <a>product</a>
      </Link>
    </div>
  );
};

export default Home;
