import React, { useEffect } from "react";
import "../css/Channel.css";
import TextArea from "./TextArea";
import Post from "./Post";
import { getPosts } from "../redux/reducers/postSlice";
import { useSelector, useDispatch } from "react-redux";

const Channel = () => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.selectedChannel.channel);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (channel) {
      dispatch(getPosts(channel._id));
    }
  }, [channel]);

  return (
    <div className="channel">
      <div className="channel-header">
        <h2># {channel.name}</h2>
      </div>
      <div className=" channel-feed">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
      <div className="channel-message">
        <TextArea name={channel.name} />
      </div>
    </div>
  );
};

export default Channel;
