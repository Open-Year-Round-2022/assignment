import './Mainpage.css';
import { Row, Container, Col, Modal, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BsPlusSquare, BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiMessageCircle, FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { GrWaypoint } from "react-icons/gr";
import { connect, useDispatch } from 'react-redux';


function Mainpage(props) {

    let dispatch = useDispatch();

    return (
        <div className="App">

            <header>
                <nav className="navbar fixed-top navbar-container">
                    <div className="Navbar-item"><img className="App-logo2" src="https://fontmeme.com/images/instagram-new-logo.png" alt="인스타그램 로고"></img></div>
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
            <main>

                <div className="main-container">
                    <div className="main-item1">
                        <header>
                            <div className="story-container">
                                <div className="story-profile">
                                 <Image className="profile-icon" alt="프로필사진" src="https://image.onstove.com/850x0/d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/600bc2f6e4c040eb8f36956fb26303e3/2ad09e3395bf43a1b5cc2d9747d64353_1575887808.png" roundedCircle />
                                <div>tmdwn.jpg</div>
                                </div>
                            </div>
                        </header>

                        <section>
                            {
                                props.postData.map((post, i) => {
                                    return (
                                        <Post key={post.postId} post={post} dispatch={dispatch} />
                                    )
                                })
                            }
                        </section>
                    </div>

                    <div className="main-item2">
                        <div className="self-profile">
                            <IoPersonCircleOutline className="profile-icon m-2" />
                            <div className="profile-text-container">
                                <a>계정 이름</a>
                                <div className="profile-text-container-second">계정 설명</div>
                            </div>
                            <button className="submit-button">전환</button>
                        </div>
                        <Container>
                            <Row className="aside-text-box">
                                <Col className="first-text" md={8}><b>회원님을 위한 추천</b></Col>
                                <Col className="second-text" md={4}><b>모두 보기</b></Col>
                            </Row>
                        </Container>

                        <AnotherProfile /><AnotherProfile /><AnotherProfile /><AnotherProfile /><AnotherProfile />
                    </div>

                </div>
            </main>
        </div>

    );
}

function Post(props) {
    

    return (
        <div className="post mt-3">
            <div className="post-bar-container">
                <div className="post-bar-profile-container">
                <Image className="post-bar-profile-img" alt="프로필사진" src="https://image.onstove.com/850x0/d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/600bc2f6e4c040eb8f36956fb26303e3/2ad09e3395bf43a1b5cc2d9747d64353_1575887808.png" roundedCircle />
                    <span><b>{props.post.userId}</b></span>
                </div>
                <button className="icon-morebutton" onClick={ () => {props.dispatch({type:"더보기모달여닫기", payload: {postId: props.post.postId, moremodal:props.post.moremodal}})} }><FiMoreHorizontal className="post-react-bar-icon" /></button>
                <MoreModal
                    show={props.post.moremodal}
                    onHide={() => {props.dispatch({type:"더보기모달여닫기", payload: {postId: props.post.postId, moremodal:props.post.moremodal}})}}
                />
            </div>


            <img className="post-img" alt="게시글 이미지" src={props.post.img}></img>
            <div className="post-react-bar-container">
                <button className="icon-button" onClick={() => { props.dispatch({type:"하트누르기", payload: {postId: props.post.postId, postHeart: props.post.heart, postLikes: props.post.like}}); }}>
                    {
                        props.post.heart ? (
                            <AiFillHeart className="post-react-bar-icon-fill-red" />
                        ) : (
                            <AiOutlineHeart className="post-react-bar-icon" />
                        )
                    }
                </button>
                <button className="icon-button" onClick={() => { props.dispatch({type:"post모달여닫기", payload:{postId:props.post.postId, postmodal:props.post.postmodal}}) }}><FiMessageCircle className="post-react-bar-icon" /></button>
                <PostModal  post={props.post} show={props.post.postmodal} dispatch={props.dispatch} onHide={() => { props.dispatch({type:"post모달여닫기", payload:{postId:props.post.postId, postmodal:props.post.postmodal}}) }} />
                <button className="icon-button"><GrWaypoint className="post-react-bar-icon" /></button>
                <button className="icon-button" id="last" onClick={() => { props.dispatch({type:"북마크누르기", payload: {postId: props.post.postId, postBookmark:props.post.bookmark}}); }}>
                    {
                        props.post.bookmark ? (
                            <BsFillBookmarkFill className="post-react-bar-icon-fill-black" />
                        ) : (
                            <BsBookmark className="post-react-bar-icon" />
                        )
                    }</button>
            </div>
            <div className="post-react-text-container">
                <span><p className="mt-1 ml-2"><b>좋아요 {props.post.like}개</b></p></span>
            </div>
            <article>
                <div className="post-article ml-2 mr-2 mb-3">
                    <span className="mr-1"><b>{props.post.userId}</b></span><span>{props.post.content}</span>
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

    let [commentText, setCommentText] = useState('');

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
                    <Row className="post-modal">
                        <Col sm={7} className="p-0 post-img-container ">
                            <img className="post-modal-img" alt="게시글 이미지" src={props.post.img}></img>

                        </Col>
                        <Col sm={4} className="p-0 post-modal-main-container">
                                <div className="post-bar-container">
                                    <div className="post-bar-profile-container">
                                        <IoPersonCircleOutline className="ml-1 mt-2 icon" />
                                        <span>{props.post.userId}</span>
                                    </div>
                                    <button className="icon-morebutton"><FiMoreHorizontal className="post-react-bar-icon" /></button>
                                    <MoreModal/>
                                </div>

                                <div className="postmodal-post-container mt-2">
                                    <span><IoPersonCircleOutline className="icon ml-2" /></span>
                                    <span className="post-modal-post-text">
                                        <span><b>{props.post.userId}</b> {props.post.content}</span>
                                    </span>
                                </div>

                            <div className="comment-container">
                                {
                                    props.post.comment.map((comment, i)=>{
                                        return(<Comment key={i} comment={comment}/>)
                                    })
                                }
                            </div>

                                <footer>
                                    <div className="react-section">
                                        <div className="post-react-bar-container">
                                            <button className="icon-button"onClick={() => { props.dispatch({type:"하트누르기", payload: {postId: props.post.postId, postHeart: props.post.heart, postLikes: props.post.like}}); }}>
                                                {
                                                    props.post.heart ? (
                                                        <AiFillHeart className="post-react-bar-icon-fill-red" />
                                                    ) : (
                                                        <AiOutlineHeart className="post-react-bar-icon" />
                                                    )
                                                }
                                            </button>
                                            <button className="icon-button"><FiMessageCircle className="post-react-bar-icon" /></button>
                                            <button className="icon-button"><GrWaypoint className="post-react-bar-icon" /></button>
                                            <button className="icon-button" id="last2" onClick={() => { props.dispatch({type:"북마크누르기", payload: {postId: props.post.postId, postBookmark:props.post.bookmark}}); }}>
                                                {
                                                    props.post.bookmark ? (
                                                        <BsFillBookmarkFill className="post-react-bar-icon-fill-black" />
                                                    ) : (
                                                        <BsBookmark className="post-react-bar-icon" />
                                                    )
                                                }
                                            </button>
                                        </div>

                                        <div className="post-react-text-container">
                                            <span><p className="mt-1 ml-2"><b>좋아요 {props.post.like}개</b></p></span>
                                        </div>


                                        <div className="post-comment-bar">
                                            <span>
                                                <FaRegSmile className="icon m-2" /></span>
                                            <input className="comment" type="text" placeholder="댓글 달기..." onChange={(e) => { setCommentText(e.target.value);
                                            console.log(commentText) }}></input>
                                            <button className="submit-button p-0" onClick={() => {
                                                props.dispatch({
                                                    type: "댓글달기", payload: {
                                                        postId: props.post.postId, newComment: {
                                                            userId: 'tmdwn.jpg',
                                                            content: commentText,
                                                            time: "지금",
                                                            heart: false
                                                        }
                                                    }
                                                });
                                            }}>게시</button>
                                        </div>

                                    </div>
                                </footer>
                        </Col>
                    </Row>
                </Container>


            </Modal></div>
    );
}

function Comment(props) {
    return (
        <div className="comment-item mt-1 mb-1">
            <Image className="comment-profile-img" alt="프로필사진" src="https://image.onstove.com/850x0/d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/600bc2f6e4c040eb8f36956fb26303e3/2ad09e3395bf43a1b5cc2d9747d64353_1575887808.png" roundedCircle />
            <div>
            <div className="comment-content"><span className="mr-2"><b>{props.comment.userId}</b></span>{props.comment.content}</div>
            <div className="comment-bottom-content mt-1"><span className="m-2 mr-3">{props.comment.time}</span>답글달기</div>
            </div>
            <div>
                {
                    props.comment.heart ? (
                        <AiFillHeart className="comment-icon-red" />
                    ) : (
                        <AiOutlineHeart className="comment-icon" />
                    )
                }
            </div>
        </div>
    )
}


function initialState(state){
    return{
        postData:state
    }
}


export default connect(initialState)(Mainpage);