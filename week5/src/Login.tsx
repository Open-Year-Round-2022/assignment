import React from "react";
import logo from "./logo.svg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div style={{ top: 100 }}>
        <div style={{ alignItems: "center" }}>
          <div style={{ flexDirection: "row" }}>
            <div className="phoneContainer">
              {" "}
              {/* 휴대폰 이미지 */}
              <div>
                {/*이미지 컨테이너*/}
                <div style={{ margin: "27px 0 0 113px" }}>
                  <img
                    src="images/phones/screenshot1.png"
                    style={{ height: "538.84px", width: "250px" }}
                  />
                </div>
              </div>
            </div>
            <div className="loginContainer">
              <div className="loginBox">
                {" "}
                {/* 로그인 박스 */}
                <h1 className="headline sprite spriteHeadline">Instagram</h1>
                <div className="inputsContainer">
                  {" "}
                  {/* 로그인 입력 박스 */}
                  <form action="/" method="get">
                    <div className="inputs">
                      {" "}
                      {/* 로그인 입력들 */}
                      <div className="inputContainer">
                        {" "}
                        {/* 아이디 입력 */}
                        <div className="inputInner">
                          <label>
                            <span className="inputPlaceHolder">
                              전화번호, 사용자 이름 또는 이메일
                            </span>
                            <input
                              autoCapitalize="off"
                              autoCorrect="off"
                              maxLength={75}
                              type="text"
                            />
                          </label>
                          <div />
                        </div>
                      </div>
                      <div className="inputContainer">
                        {" "}
                        {/* 비밀번호 입력 */}
                        <div className="inputInner">
                          <label>
                            <span className="inputPlaceHolder">비밀번호</span>
                            <input />
                          </label>
                          <div />
                        </div>
                      </div>
                      <div className="loginButtonContainer">
                        <Link to="feed" style={{ width: "100%" }}>
                          <button
                            className="loginButton"
                            style={{ width: "100%" }}
                          >
                            <div className="loginButtonInner">로그인</div>
                          </button>
                        </Link>
                      </div>
                      {/* 로그인 버튼 */}
                      <div className="divider">
                        {" "}
                        {/* 또는 */}
                        <div className="divLine" />
                        <div style={{ margin: "0 18px" }}>또는</div>
                        <div className="divLine" />
                      </div>
                      <div className="fbLoginContainer">
                        {" "}
                        {/* facebook login 버튼 */}
                        <button className="fbLoginButton">
                          <span className="sprite fbIcon" />
                          <span style={{ color: "#385185" }}>
                            Facebook으로 로그인
                          </span>
                        </button>
                      </div>
                    </div>
                    <a className="forgetPassword">비밀번호를 잊으셨나요?</a>
                  </form>
                </div>
              </div>
              <div className="loginBox">
                {" "}
                {/* 가입하기 박스*/}
                <div>
                  <p
                    style={{
                      color: "rgba(38, 38, 38, 1)",
                      fontSize: "14px",
                      margin: "15px",
                      textAlign: "center",
                    }}
                  >
                    계정이 없으신가요?
                    <a style={{ color: "#0095f6", textDecoration: "none" }}>
                      <span style={{ fontWeight: 600 }}>가입하기</span>
                    </a>
                  </p>
                </div>
              </div>
              <div>
                {" "}
                {/* 앱 다운로드 뱃지 */}
                <p
                  style={{
                    color: "rgba(38, 38, 38, 1)",
                    fontSize: "14px",
                    margin: "10px 20px 10px 20px",
                    textAlign: "center",
                  }}
                >
                  앱을 다운로드 하세요
                </p>
                <div
                  style={{
                    justifyContent: "center",
                    margin: "10px 0 10px 0",
                    flexDirection: "row",
                  }}
                >
                  {" "}
                  {/* badges */}
                  <a style={{ marginRight: "8px" }}>
                    <img
                      alt="appstore"
                      src="images/badges/android_playstore_badge.png"
                      style={{ height: "40px" }}
                    />
                  </a>
                  <a>
                    <img
                      alt="playstore"
                      src="images/badges/ios_appstore_badge.png"
                      style={{ height: "40px" }}
                    />
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* 로그인 창 */}
          </div>
          <div>
            <div
              style={{
                backgroundColor: "rgba(var(--bg-default), 1)",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  marginTop: "52px",
                  flex: "0 0 auto",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                }}
              >
                {" "}
                {/* 하단 링크 모음 */}
                <div className="footerItemContainer">
                  <div className="footerItem">Meta</div>
                  <div className="footerItem">소개</div>
                  <div className="footerItem">블로그</div>
                  <div className="footerItem">채용 정보</div>
                  <div className="footerItem">API</div>
                </div>
                <div className="footerItemContainer">
                  <div className="footerItem">댄스</div>
                  <div className="footerItem">식음료</div>
                  <div className="footerItem">블로그</div>
                  <div className="footerItem">채용 정보</div>
                </div>
              </div>
              <div
                style={{
                  margin: "12px 0",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                {" "}
                {/* copyright */}
                <div
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(142, 142, 142)",
                      fontWeight: 400,
                      fontSize: "12px",
                    }}
                  >
                    한국어
                  </span>
                  <div style={{ marginLeft: "4px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        transform: "rotate(180deg)",
                      }}
                    >
                      <svg
                        style={{
                          display: "block",
                          position: "relative",
                          color: "rgb(142, 142, 142)",
                          fill: "rgb(142, 142, 142)",
                          height: 12,
                          width: 12,
                        }}
                      >
                        <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z" />
                      </svg>
                    </span>
                  </div>
                  <select
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      opacity: 0,
                    }}
                  >
                    <option>Afrikaans</option>
                    <option>Deutsch</option>
                    <option>English</option>
                  </select>
                </div>
                <div
                  style={{
                    marginLeft: "16px",
                    color: "rgb(142, 142, 142)",
                    fontSize: "12px",
                  }}
                >
                  © 2022 Instagram from Meta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
