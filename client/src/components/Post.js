import React from "react";
import "../css/Post.css"

const Post = ({post}) => {

  return (
    <div className="post">
      <p>{post.userId}</p>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
    </div>
  )
}

export default Post;