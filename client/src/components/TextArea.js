import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPosts } from "../redux/reducers/postSlice";
import { FaRegPaperPlane } from "react-icons/fa";
import "../css/TextArea.css";

const TextArea = ({ name }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const channelId = useSelector((state) => state.selectedChannel.channel._id);

  const onSendClick = () => {
    let obj = {
      content: message,
      userId: "01",
      channelId: channelId,
      created: new Date(),
    };
    dispatch(postPosts(obj));
    console.log(obj, "obj");
    setMessage("");
  };

  return (
    <div className="text-area">
      <div className="text-area-container">
        <input
          placeholder={`Message #${name}`}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="text-area-actions">
          <div className="text-area-left"></div>
          <div className="text-area-right">
            <div className="send-button" onClick={() => onSendClick()}>
              <FaRegPaperPlane className="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
