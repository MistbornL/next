import React from "react";
import { useRouter } from "next/dist/client/router";
const ReviewId = () => {
  const router = useRouter();
  const { reviewId } = router.query;
  return <h1>reviewId {reviewId}</h1>;
};

export default ReviewId;
