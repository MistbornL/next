import React from "react";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
    console.log(comments);
  };
  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>Comment Name: {comment.name}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
