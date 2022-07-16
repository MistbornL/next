import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>

      <Link href={"/product"}>
        <a>product</a>
      </Link>
      <h2>
        to view Blog Click on button{" "}
        <button
          onClick={() => {
            router.push("/blog");
          }}
        >
          click here
        </button>
      </h2>
    </div>
  );
};

export default Home;
