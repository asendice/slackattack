import React from "react";
import "../css/Post.css";
import Avatar from "./Avatar";
import { readTime } from "../utils/utils";

const Post = ({ post }) => {
  console.log(post, "post")
  return (
    <div className="post">
      <Avatar />
      <div className="post-content">
        <div className="post-header">
          <h4>Murphy</h4>
          <p className="post-time">{readTime(post.created)}</p>
        </div>
        <p className="post-content-content">{post.content}</p>
      </div>
      <div />
    </div>
  );
};

export default Post;
