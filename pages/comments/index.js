import React, { useEffect } from "react";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {}, [comments]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
    console.log(comments);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "Post",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/Json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={submitComment}>Submit Comment</button>
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
