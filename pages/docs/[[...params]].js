import React from "react";
import { useRouter } from "next/dist/client/router";
const Doc = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(router.query);
  return <h1>Doc home page</h1>;
};

export default Doc;
