import React from "react";
import Head from 'next/head';
import Image from 'next/image';

import FeedPost from '../components/FeedPost';
import { PostModel } from "../src/model/Post";
import Img_MyAvatar from '../public/avatar.jpg';
import Img_Instagram from '../public/logo.png';

const dummyPosts = new Array(100)
  .fill(0)
  .splice(0, 5)
  .map(() => PostModel.createRandom());

function Feed() {
  const [posts, setPosts] = React.useState(dummyPosts);

  const MyAvatar = () => (
    <Image alt="kyuuw님의 프로필 사진" draggable="false" src={Img_MyAvatar} />
  );

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ width: "100%" }}>
        <nav style={{ alignItems: "stretch" }}>
          <div
            style={{
              position: "fixed",
              height: "60px",
              zIndex: 3,
              color: "white",
              flexBasis: "60px",
              width: "100%",
              alignItems: "center",
              borderBottom: "1px solid rgb(219, 219, 219)",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                maxWidth: "975px",
                flexDirection: "row",
                padding: "0 20px",
                width: "100%",
                height: "60px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: "1 0 127px",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ height: "36px" }}>
                  <Image src={Img_Instagram} objectFit={"contain"} />
                </div>
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  flex: "0 1 auto",
                  height: "36px",
                  minWidth: "125px",
                  width: "268px",
                  backgroundColor: "rgb(239, 239, 239)",
                }}
              >
                <input
                  placeholder="검색"
                  type="text"
                  style={{
                    fontSize: "16px",
                    background: "rgb(239, 239, 239)",
                    padding: "3px 16px",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    outline: 0,
                    border: 0,
                    marginLeft: "22px",
                  }}
                />
                <div style={{ position: "absolute", padding: "10px 16px" }}>
                  <svg
                    aria-label="검색"
                    className="_8-yf5"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height={16}
                    role="img"
                    viewBox="0 0 24 24"
                    width={16}
                  >
                    <path
                      d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1="16.511"
                      x2={22}
                      y1="16.511"
                      y2={22}
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  flex: "1 0 127px",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="navButton">
                  <svg
                    aria-label="홈"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z" />
                  </svg>
                </div>
                <div className="navButton">
                  <svg
                    aria-label="Direct"
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
                <div className="navButton">
                  <svg
                    aria-label="새로운 게시물"
                    className="_8-yf5"
                    color="#262626"
                    fill="#262626"
                    height={24}
                    role="img"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path
                      d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1="6.545"
                      x2="17.455"
                      y1="12.001"
                      y2="12.001"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      x1="12.003"
                      x2="12.003"
                      y1="6.545"
                      y2="17.455"
                    />
                  </svg>
                </div>
                <div className="navButton">
                  <svg
                    aria-label="사람 찾기"
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
                      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <polygon
                      fillRule="evenodd"
                      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                    />
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="navButton">
                  <svg
                    aria-label="활동 피드"
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
                <div className="navButton circleBorder">
                  <MyAvatar />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          style={{
            backgroundColor: "rgb(250, 250, 250)",
            alignItems: "stretch",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              paddingTop: "30px",
              flexFlow: "row nowrap",
              maxWidth: "935px",
              width: "100%",
              margin: "0 auto",
              flex: "0 1 auto",
            }}
          >
            <div
              style={{
                float: "left",
                marginRight: "28px",
                maxWidth: "614px",
                width: "100%",
              }}
            >
              <div style={{ paddingBottom: "24px" }}>
                <div style={{ height: "50px" }}></div>
                {posts.map((p, i) => (
                  <FeedPost post={p} key={i} />
                ))}
              </div>
            </div>
            <div
              style={{
                top: "100px",
                maxWidth: "293px",
                flexGrow: 1,
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div style={{ flexDirection: "row" }}>
                  <div
                    style={{ width: "56px", height: "56px" }}
                    className="circleBorder"
                  >
                    <MyAvatar />
                  </div>
                </div>
                <div
                  style={{
                    flex: "1 0 auto",
                    justifyContent: "center",
                    paddingLeft: "12px",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "rgb(38, 38, 38)" }}>
                    kyuuuw
                  </div>
                  <div style={{ color: "rgb(142, 142, 142)" }}>이규원</div>
                </div>
                <div
                  style={{
                    flex: "0 0 auto",
                    marginLeft: "auto",
                    color: "rgb(0, 149, 246)",
                    fontWeight: 800,
                    fontSize: "12px",
                  }}
                >
                  전환
                </div>
              </div>
              <div style={{ flexDirection: "row", marginTop: "24px" }}>
                <div
                  style={{
                    color: "rgb(142, 142, 142)",
                    fontWeight: 600,
                    flex: "1 1 auto",
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  회원님을 위한 추천
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(38, 38, 28)",
                  }}
                >
                  모두보기
                </div>
              </div>
              <div>
                <div className="recommendedUserContainer">
                  <div className="circleBorder recommendedUserImage">
                    <MyAvatar />
                  </div>
                  <div className="recommendedUserIdAndDescriptionContainer">
                    <div className="recommendedUserId">kyuuw</div>
                    <div className="recommendedUserDescription">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="recommendeUserFollowButton">팔로우</div>
                </div>
                <div className="recommendedUserContainer">
                  <div className="circleBorder recommendedUserImage">
                    <MyAvatar />
                  </div>
                  <div className="recommendedUserIdAndDescriptionContainer">
                    <div className="recommendedUserId">kyuuw</div>
                    <div className="recommendedUserDescription">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="recommendeUserFollowButton">팔로우</div>
                </div>
                <div className="recommendedUserContainer">
                  <div className="circleBorder recommendedUserImage">
                    <MyAvatar />
                  </div>
                  <div className="recommendedUserIdAndDescriptionContainer">
                    <div className="recommendedUserId">kyuuw</div>
                    <div className="recommendedUserDescription">
                      회원님을 위한 추천
                    </div>
                  </div>
                  <div className="recommendeUserFollowButton">팔로우</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
