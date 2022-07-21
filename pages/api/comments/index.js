import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      postId: 1,
      id: Date.now(),
      name: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
