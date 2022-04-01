import React, { useState } from "react";
import { ReplyModel } from "../model/Reply";
import FeedReply from "./FeedReply";

type Props = {
  replies: ReplyModel[];
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
      {replies.map((r) => (
        <FeedReply reply={r} />
      ))}
    </>
  );
}

export default FeedReplyLines;
