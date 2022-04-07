import React, { useState } from "react";
import FeedReply from "./FeedReply";
import { ReplyFull } from "../type/ReplyFull";

type Props = {
  replies: ReplyFull[];
};
function FeedReplyLines(props: Props) {
  const [replies] = useState(props.replies);
  return (
    <>
      <div style={{ marginBottom: "4px" }}>
        {replies.length ? (
          <span style={{ color: "rgb(142, 142, 142)" }}>
            댓글 {replies.length}개 모두 보기
          </span>
        ) : undefined}
      </div>
      <div
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "flex-start",
          marginBottom: "4px",
        }}
      ></div>
      {replies.map((r, i) => (
        <FeedReply reply={r} key={i}/>
      ))}
    </>
  );
}

export default FeedReplyLines;
