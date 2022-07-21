import { comments } from "../../../data/comments";

export default function (req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(commentId);
  res.status(200).json(comment);
}
