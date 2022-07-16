import React from "react";
import Link from "next/dist/client/link";
const Index = ({ productId = 100 }) => {
  return (
    <div>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>Product 100</a>
        </Link>
      </h1>
    </div>
  );
};

export default Index;
