import './Mainpage.css';
import { Row, Container, Col, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BsPlusSquare, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiMessageCircle, FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { GrWaypoint } from "react-icons/gr";


function Mainpage() {

    let [Heartstate, setHeartstate] = useState(false);
    let [BookmarkState, setBookmarkState] = useState(false);

    let [moreModalShow, setMoreModalShow] = useState(false);
    let [postModalShow, setPostModalShow] = useState(false);

    return (
        <div className="App">

            <header>
                <nav className="navbar fixed-top navbar-container">
                    <div className="Navbar-item"><img className="App-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="인스타그램 로고"></img></div>
                    <div className="Navbar-item"> <input className="search-box" type="text" placeholder='검색'></input></div>
                    <div className="Navbar-item">
                        <div className="icon-container">
                            <AiFillHome className="icon" />
                            <GrWaypoint className="icon" />
                            <BsPlusSquare className="icon" />
                            <AiOutlineCompass className="icon" />
                            <FiHeart className="icon" />
                            <IoPersonCircleOutline className="icon" />
                        </div>
                    </div>
                </nav>
            </header>

            <section>

                <div className="main-container">
                    <div className="main-item1">
                        <header>
                            <div className="story-container">
                                <div className="story-profile">
                                    <img className="profile-icon" alt="프로필사진" src="http://file3.instiz.net/data/cached_img/upload/2019/06/22/13/c2cc93ca8ef4d57180a1d45c59f31720.jpg"></img>
                                    <p>계정이름</p>
                                </div>
                            </div>
                        </header>

                        <section>
                            <Post setHeartstate={setHeartstate} Heartstate={Heartstate} setBookmarkState={setBookmarkState} BookmarkState={BookmarkState} moreModalShow={moreModalShow} setMoreModalShow={setMoreModalShow} setPostModalShow={setPostModalShow} />
                            <Post setHeartstate={setHeartstate} Heartstate={Heartstate} setBookmarkState={setBookmarkState} BookmarkState={BookmarkState} moreModalShow={moreModalShow} setMoreModalShow={setMoreModalShow} postModalShow={postModalShow} setPostModalShow={setPostModalShow} />
                            


                        </section>
                    </div>

                    <div className="main-item2">
                        <div className="aside-container">
                            <div className="self-profile">
                                <IoPersonCircleOutline className="profile-icon m-2" />
                                <div className="profile-text-container">
                                    <a>계정 이름</a>
                                    <div className="profile-text-container-second">계정 설명</div>
                                </div>
                                <button className="submit-button">전환</button>
                            </div>
                            <Container >
                                <Row className="aside-text-box">
                                    <Col className="first-text" md={8}><b>회원님을 위한 추천</b></Col>
                                    <Col className="second-text" md={4}><b>모두 보기</b></Col>
                                </Row>
                            </Container>


                            <AnotherProfile /><AnotherProfile /><AnotherProfile /><AnotherProfile /><AnotherProfile />


                        </div>

                    </div>



                </div>
            </section>

        </div>


    );
}

function Post(props) {
    return (
        <div className="post mt-3">
            <div className="post-bar-container">
                <div className="post-bar-profile-container">
                    <img className="post-bar-profile-img" alt="프로필 사진" src="http://file3.instiz.net/data/cached_img/upload/2019/06/22/13/c2cc93ca8ef4d57180a1d45c59f31720.jpg"></img>
                    <span>계정 이름</span>
                </div>
                <button className="icon-morebutton" onClick={() => props.setMoreModalShow(true)}><FiMoreHorizontal className="post-react-bar-icon" /></button>


                <MoreModal
                    show={props.moreModalShow}
                    onHide={() => props.setMoreModalShow(false)}
                />
            </div>
            <img className="post-img" alt="게시글 이미지" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCHb0U%2FbtqxrW04Y5b%2FmzimBHhLuGMBYvCS33uyh0%2Fimg.jpg"></img>
            <div className="post-react-bar-container">
                <button className="icon-button" onClick={() => { props.setHeartstate(!props.Heartstate); }}>
                    {
                        props.Heartstate ? (
                            <AiFillHeart className="post-react-bar-icon-fill-red" />
                        ) : (
                            <AiOutlineHeart className="post-react-bar-icon" />
                        )
                    }
                </button>
                <button className="icon-button" onClick={() => { props.setPostModalShow(true) }}><FiMessageCircle className="post-react-bar-icon" /></button>
                <PostModal  show={props.postModalShow}
                    onHide={() => props.setPostModalShow(false)}
                />

                <button className="icon-button"><GrWaypoint className="post-react-bar-icon" /></button>
                <button className="icon-button" id="last" onClick={() => { props.setBookmarkState(!props.BookmarkState); }}>
                    {
                        props.BookmarkState ? (
                            <BsFillBookmarkFill className="post-react-bar-icon-fill-black" />
                        ) : (
                            <BsBookmark className="post-react-bar-icon" />
                        )
                    }</button>
            </div>
            <div className="post-react-text-container">
                <IoPersonCircleOutline className="post-react-profile mt-1" />
                <span><p className="mt-1 ml-2"><b>계정이름</b>님 <b>외 N명</b>이 좋아합니다.</p></span>
            </div>
            <article>
                <div className="post-article ml-2 mr-2 mb-2">
                    <span className="mr-3"><b>계정이름</b> 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용  </span>
                </div>
            </article>
            <form>
                <div className="post-comment-bar">
                    <span>
                        <FaRegSmile className="icon m-2" /></span>
                    <input className="comment" type="text" placeholder="댓글 달기..."></input>
                    <button className="submit-button" type="submit">게시</button>
                </div>
            </form>
        </div>
    )
}

function AnotherProfile() {
    return (
        <Container>
            <Row className="another-profile-container mt-2">
                <Col className="p-0">
                    <IoPersonCircleOutline className="another-profile-icon" /></Col>
                <Col className="p-0" xs={7}>
                    <div className="profile-text-container">
                        <a>계정 이름</a>
                        <div className="profile-text-container-second">계정 설명</div>
                    </div></Col>
                <Col className="p-0"><button className="follow-button">팔로우</button></Col>
            </Row>
        </Container>
    )
}


function MoreModal(props) {
    return (
        <Modal className="more-button-modal"
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <button className="modal-button-red">신고</button>
            <button className="modal-button-red">팔로우 취소</button>
            <button className="modal-button-black">게시물로 이동</button>
            <button className="modal-button-black">퍼가기</button>
            <button className="modal-button-black" onClick={props.onHide}>취소</button>
        </Modal>
    );
}

function PostModal(props) {
    return (
        
        <div>

        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >

            <button className="close-button" onClick={props.onHide}><AiOutlineClose className="close-icon" /></button>
            <Container>
                <Row>
                    <Col xs={6} className="p-0">
                        <img className="post-modal-img" alt="게시글 이미지" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCHb0U%2FbtqxrW04Y5b%2FmzimBHhLuGMBYvCS33uyh0%2Fimg.jpg"></img>

                    </Col>
                    <Col xs={6} className="p-0">
                        <div className="post-modal-main">
                            <div className="post-bar-container m-1">
                                <div className="post-bar-profile-container">
                                    <IoPersonCircleOutline className="ml-1 mt-2 icon" />

                                    <span>계정 이름</span>
                                </div>
                                <button className="icon-morebutton" onClick={() => props.setMoreModalShow(true)}><FiMoreHorizontal className="post-react-bar-icon" /></button>


                                <MoreModal
                                    show={props.moreModalShow}
                                    onHide={() => props.setMoreModalShow(false)}
                                />
                            </div>

                            <div className="postmodal-post-container mt-2">
                                <span><IoPersonCircleOutline className="icon ml-2" /></span>
                                <span className="post-modal-post-text">
                                    <span><b>계정이름</b> 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용</span>
                                </span>
                            </div>

                            <footer>
                                <div className="react-section">
                                    <div className="post-react-bar-container">
                                        <button className="icon-button" onClick={() => { props.setHeartstate(!props.Heartstate); }}>
                                            {
                                                props.Heartstate ? (
                                                    <AiFillHeart className="post-react-bar-icon-fill-red" />
                                                ) : (
                                                    <AiOutlineHeart className="post-react-bar-icon" />
                                                )
                                            }
                                        </button>
                                        <button className="icon-button" onClick={() => { props.setPostModalShow(true) }}><FiMessageCircle className="post-react-bar-icon" /></button>
                                        <PostModal
                                            show={props.postModalShow}
                                            onHide={() => props.setPostModalShow(false)}
                                        />

                                        <button className="icon-button"><GrWaypoint className="post-react-bar-icon" /></button>
                                        <button className="icon-button" id="last" onClick={() => { props.setBookmarkState(!props.BookmarkState); }}>
                                            {
                                                props.BookmarkState ? (
                                                    <BsFillBookmarkFill className="post-react-bar-icon-fill-black" />
                                                ) : (
                                                    <BsBookmark className="post-react-bar-icon" />
                                                )
                                            }</button>
                                    </div>

                                    <div className="post-react-text-container">
                                        <IoPersonCircleOutline className="post-react-profile mt-1" />
                                        <span><p className="mt-1 ml-2"><b>계정이름</b>님 <b>외 N명</b>이 좋아합니다.</p></span>
                                    </div>


                                    <form>
                                        <div className="post-comment-bar">
                                            <span>
                                                <FaRegSmile className="icon m-2" /></span>
                                            <input className="comment" type="text" placeholder="댓글 달기..."></input>
                                            <button className="submit-button p-0" type="submit">게시</button>
                                        </div>
                                    </form>

                                </div>
                            </footer>
                        </div>
                    </Col>
                </Row>
            </Container>


        </Modal></div>
    );
}



export default Mainpage;