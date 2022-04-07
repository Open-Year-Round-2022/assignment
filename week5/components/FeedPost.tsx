import React from "react";
import FeedReplyLines from "./FeedReplyLines";
import { fromDate } from "../src/utils/date";
import { Post } from "@prisma/client";

type Props = {
  post: Post;
};
function FeedPost(props: Props) {
  const [post, setPost] = React.useState(props.post.props);
  const [isLiked, setIsLiked] = React.useState(false);

  const likeOnClick = () => {
    if(isLiked) return;
    post.likers.push(new UserModel());
    setPost({ ...post });
    setIsLiked(true);
  };

  return (
    <div className="postArticle">
      <div className="post">
        <div className="postHeaderDiv">
          <div className="postHeader">
            <div
              style={{
                height: "fit-content",
                width: "fit-content",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img src={post.user.avatarUrl} />
              </div>
            </div>
            <div
              style={{
                marginLeft: "14px",
                alignItems: "flex-start",
                flex: "1 1 auto",
              }}
            >
              <div
                style={{
                  color: "rgb(38, 38, 38)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {post.user.name}
              </div>
              <div
                style={{
                  color: "rgb(142, 142, 142)",
                  fontSize: "12px",
                  fontWeight: 400,
                }}
              >
                {post.user.alias}
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              paddingRight: "8px",
            }}
          >
            <button
              style={{
                alignItems: "center",
                justifyContent: "center",
                border: 0,
                backgroundColor: "white",
              }}
            >
              <div style={{ height: "24px", width: "24px" }}>
                <svg
                  aria-label="옵션 더 보기"
                  className="_8-yf5"
                  color="#262626"
                  fill="#262626"
                  height={24}
                  role="img"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <circle cx={12} cy={12} r="1.5" />
                  <circle cx={6} cy={12} r="1.5" />
                  <circle cx={18} cy={12} r="1.5" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          {/* 사진 */}
          <div>
            <img
              src={post.imageUrl}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              minWidth: "355px",
            }}
          >
            <div className="postButtonDiv">
              <span>
                <div
                  className="postButton"
                  style={{ marginLeft: "-8px" }}
                  onClick={likeOnClick}
                >
                  <svg
                    aria-label="좋아요"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                  </svg>
                </div>
              </span>
              <span>
                <div className="postButton">
                  <svg
                    aria-label="댓글 달기"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </span>
              <span>
                <div className="postButton">
                  <svg
                    aria-label="게시물 공유"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1={22}
                      x2="9.218"
                      y1={3}
                      y2="10.083"
                    />
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  marginRight: "-8px",
                }}
              >
                <div className="postButton">
                  <svg
                    aria-label="저장"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </span>
            </div>
            {post.likers.length > 0 && (
              <div
                style={{
                  padding: "0 16px",
                  marginBottom: "8px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "4px",
                    alignContent: "stretch",
                    flex: "0 0 auto",
                  }}
                  className="circleBorder"
                >
                  <img src={post.likers[0].avatarUrl} />
                </div>
                <div style={{ flex: "1 1 auto" }}>
                  <span>
                    <strong>{post.likers[0].name}</strong>님
                    <strong>외 {post.likers.length}명</strong>이 좋아합니다
                  </span>
                </div>
              </div>
            )}
            <div style={{ padding: "0 16px" }}>
              <div style={{ marginBottom: "4px" }}>
                <span>
                  <strong>{post.user.name}</strong>&nbsp;
                  {post.content}
                </span>
              </div>
              <FeedReplyLines replies={post.replies} />
            </div>
          </div>
          <div
            style={{
              color: "rgb(142, 142, 142)",
              marginBottom: "16px",
              padding: "0 16px",
            }}
          >
            {fromDate(post.createdAt)}
          </div>
          <div
            style={{
              borderTop: "rgb(239, 239, 239)",
              padding: "6px 16px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                padding: "8px 16px 8px 0",
                flexDirection: "row",
                alignItems: "stretch",
                flex: "0 0 auto",
              }}
            >
              <svg
                aria-label="이모티콘"
                className="_8-yf5"
                color="#262626"
                fill="#262626"
                height={24}
                role="img"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
              </svg>
            </div>
            <textarea
              aria-label="댓글 달기..."
              style={{
                flex: "1 1 auto",
                height: "18px",
                outline: 0,
                padding: 0,
                fontSize: "14px",
                border: "none",
              }}
              defaultValue={""}
            />
            <div
              style={{
                flex: "0 0 auto",
                color: "rgb(0, 149, 246)",
              }}
            >
              게시
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
