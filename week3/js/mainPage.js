module.exports = {
    HTML: () => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        
            <link rel="stylesheet" href="/reset.css">
            <link rel="stylesheet" href="/mainPage.css">
            <link rel="stylesheet" href="/feed_more_modal.css">
            <link rel="stylesheet" href="/feed_detail_modal.css">
        </head>
        
        <body>
            <section id="container">
                <!-- header -->
                <header id="header">
                    <section class="inner">
                        <h1 class="logo">
                            <!-- 로고는 보통 h1태그를 사용함 -->
                            <a href="mainPage.html">
                                <img src="/logo_text.png" class="insta_logo" alt="">
                            </a>
                        </h1>
        
                        <div class="search_box">
                            <input type="text" id="search-field" placeholder="검색">
                            <div class="fake_field">
                                <!-- <img src="" alt=""> -->
                            </div>
                        </div>
        
                        <div class="right_icons">
                            <img src="/home.png" alt="">
                            <img src="/direct.png" alt="">
                            <img src="/더보기.png" alt="">
                            <img src="/나침반.png" alt="">
                            <img src="/heart.png" alt="">
                            <img src="/profile_img1.jpg" alt="" class="profile_img">
                        </div>
                    </section>
                </header>
                <!-- /header -->
        
                <!-- /body -->
                <section id="main_container">
                    <article>
                        <div class="inner">
                            <div class="story">
                                <ul class="story_list">
                                    <li>
                                        <div class="sub_story">
                                            <div class="story_userId">
                                                <img src="/profile_img2.jpg" alt="프로필">
                                                <span>kihoonyou</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sub_story">
                                            <div class="story_userId">
                                                <img src="/인스타기본프사.png">
                                                <span>user1</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sub_story">
                                            <div class="story_userId">
                                                <img src="/인스타기본프사.png" alt="프로필">
                                                <span>user2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sub_story">
                                            <div class="story_userId">
                                                <img src="/인스타기본프사.png" alt="프로필">
                                                <span>user3</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sub_story">
                                            <div class="story_userId">
                                                <img src="/인스타기본프사.png" alt="프로필">
                                                <span>user4</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="empty_box"></div>
                            <div class="contents_box">
                                <div class="contents">
                                    <header class="top">
                                        <div class="user_container">
                                            <div class="profile_img">
                                                <img src="/profile_img1.jpg" alt="프로필">
                                            </div>
                                            <div class="user_name">
                                                <div class="userId">62hoon99</div>
                                                <div class="country">Seoul, South Korea</div>
                                            </div>
                                        </div>
                                        <div class="feed_more_bttn">
                                            <img src="/more.png" alt="">
                                        </div>
                                    </header>
        
                                    <div class="img_section">
                                        <div class="trans_inner">
                                            <div>
                                                <img src="/feed_img1.JPG" alt="피드게시물" class="feed_img">
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="feed_bottom_icons">
                                        <div class="left_icons">
                                            <div class="hart_icon">
                                                <img src="/하트.png" alt="" class="hart_img" data-clicked="0">
                                            </div>
                                            <div class="bubble_icon">
                                                <img src="/말풍선.png" alt="" class="bubble_img">
                                            </div>
                                            <div class="airplane_icon">
                                                <img src="/종이비행기.png" alt="">
                                            </div>
                                        </div>
        
                                        <div class="right_icon">
                                            <img src="/bookmark.png" alt="" data-clicked="0" class="bookmark_img">
                                        </div>
                                    </div>
        
                                    <div class="likes">
                                        좋아요 38개
                                    </div>
        
                                    <div class="comment_container">
                                        <div class="comment">
                                            <div class="userId">5doong2</div>
                                            <div>역시 베라는 민초지-!</div>
                                        </div>
                                        <div class="small_heart">
                                            <img src="/흐린하트.png" alt="">
                                        </div>
                                    </div>
        
                                    <div class="timer">1시간 전</div>
        
                                    <div class="comment_field">
                                        <div class="smile_icon">
                                            <img src="/smile.png" alt="">
                                        </div>
                                        <input type="text" placeholder="댓글달기...">
                                        <div class="upload_btn">게시</div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="contents_box">
                                <div class="contents">
                                    <header class="top">
                                        <div class="user_container">
                                            <div class="profile_img">
                                                <img src="/인스타기본프사.png" alt="프로필">
                                            </div>
                                            <div class="user_name">
                                                <div class="userId">user4</div>
                                                <div class="country">Seoul, South Korea</div>
                                            </div>
                                        </div>
                                        <div class="feed_more_bttn">
                                            <img src="/more.png" alt="">
                                        </div>
                                    </header>
        
                                    <div class="img_section">
                                        <div class="trans_inner">
                                            <div>
                                                <img src="/feed_img2.jpg" alt="피드게시물" class="feed_img">
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="feed_bottom_icons">
                                        <div class="left_icons">
                                            <div class="hart_icon">
                                                <img src="/하트.png" alt="" class="hart_img" data-clicked="0">
                                            </div>
                                            <div class="bubble_icon">
                                                <img src="/말풍선.png" alt="" class="bubble_img">
                                            </div>
                                            <div class="airplane_icon">
                                                <img src="/종이비행기.png" alt="">
                                            </div>
                                        </div>
        
                                        <div class="right_icon">
                                            <img src="/bookmark.png" alt="" data-clicked="0" class="bookmark_img">
                                        </div>
                                    </div>
        
                                    <div class="likes">
                                        좋아요 32개
                                    </div>
        
                                    <div class="comment_container">
                                        <div class="comment">
                                            <div class="userId">5doong2</div>
                                            <div>~~~</div>
                                        </div>
                                        <div class="small_heart">
                                            <img src="/흐린하트.png" alt="">
                                        </div>
                                    </div>
        
                                    <div class="timer">1시간 전</div>
        
                                    <div class="comment_field">
                                        <div class="smile_icon">
                                            <img src="/smile.png" alt="">
                                        </div>
                                        <input type="text" placeholder="댓글달기...">
                                        <div class="upload_btn">게시</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
        
                    <aside>
                        <div class="side_box">
                            <div class="user_profile">
                                <div class="profile_thumb">
                                    <img src="/profile_img1.jpg" alt="내프로필">
                                </div>
                                <div class="detail">
                                    <div class="id">62hoon99</div>
                                </div>
                            </div>
                            <div class="users">
                                <header class="recommendation_box">
                                    <div class="recommendation">회원님을 위한 추천</div>
                                    <div class="comment">모두 보기</div>
                                </header>
        
                                <div class="friend_container">
                                    <div class="friend">
                                        <div class="user_profile_box">
                                            <img src="/calmdownman.jpg" alt="친구프로필">
                                        </div>
                                        <div class="user_profile_main_box">
                                            <div class="user_profile_id_box">
                                                <div class="user_profile_id1">calmdownman</div>
                                                <div class="user_profile_id2">instagram 신규 가입</div>
                                            </div>
                                            <div class="follow">팔로우</div>
                                        </div>
                                    </div>
        
                                    <div class="friend">
                                        <div class="user_profile_box">
                                            <img src="/인스타기본프사.png" alt="친구프로필">
                                        </div>
                                        <div class="user_profile_main_box">
                                            <div class="user_profile_id_box">
                                                <div class="user_profile_id1">user5</div>
                                                <div class="user_profile_id2">회원님을 위한 추천</div>
                                            </div>
                                            <div class="follow">팔로우</div>
                                        </div>
                                    </div>
        
                                    <div class="friend">
                                        <div class="user_profile_box">
                                            <img src="/인스타기본프사.png" alt="친구프로필">
                                        </div>
                                        <div class="user_profile_main_box">
                                            <div class="user_profile_id_box">
                                                <div class="user_profile_id1">user6</div>
                                                <div class="user_profile_id2">회원님을 위한 추천</div>
                                            </div>
                                            <div class="follow">팔로우</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="other_box">
                                <ul>
                                    <li>소개</li>
                                    <li class="gap">.</li>
                                    <li>도움말</li>
                                    <li class="gap">.</li>
                                    <li>홍보 센터</li>
                                    <li class="gap">.</li>
                                    <li>API</li>
                                    <li class="gap">.</li>
                                    <li>채용 정보</li>
                                    <li class="gap">.</li>
                                    <li>개인정보처리방침</li>
                                    <li class="gap">.</li>
                                    <li>약관</li>
                                    <li class="gap">.</li>
                                    <li>위치</li>
                                    <li class="gap">.</li>
                                    <li>인기 계정</li>
                                    <li class="gap">.</li>
                                    <li>해시태그</li>
                                    <li class="gap">.</li>
                                    <li>언어</li>
                                </ul>
                            </div>
                            <div class="other_box2">
                                <span>© 2022 INSTAGRAM FROM META</span>
                            </div>
                        </div>
                    </aside>
                </section>
                <!-- body -->
        
            </section>
        
            <!-- modal -->
            <div class="feed_more_modal">
                <div class="feed_more_modal_wrapper">
                    <div class="feed_more_modal_box">
                        <button class="text_red">신고</button>
                        <div class="line"></div>
                        <button class="text_red">팔로우 취소</button>
                        <div class="line"></div>
                        <button>게시물로 이동</button>
                        <div class="line"></div>
                        <button>공유 대상...</button>
                        <div class="line"></div>
                        <button>링크 복사</button>
                        <div class="line"></div>
                        <button>퍼가기</button>
                        <div class="line"></div>
                        <button class="feed_more_close">취소</button>
                    </div>
                </div>
            </div>
        
            <div class="feed_detail_modal">
                <div class="feed_detail_modal_wrapper">
                    <div class="feed_detail_modal_box">
                        <div class="feed_detail_left_container">
                            <img src="" alt="" id="feed_detail_left_img">
                        </div>
                        <div class="feed_detail_right_container">
                            <div class="detail_right_header">
                                <div class="detail_top">
                                </div>
                            </div>
                            <div class="detail_right_body">
        
                            </div>
                            <div class="detail_right_footer">
                                <div class="feed_bottom_icons">
                                    <div class="left_icons">
                                        <div class="hart_icon">
                                            <img src="/하트.png" alt="" class="hart_img" data-clicked="0">
                                        </div>
                                        <div class="bubble_icon">
                                            <img src="/말풍선.png" alt="" class="bubble_img">
                                        </div>
                                        <div class="airplane_icon">
                                            <img src="/종이비행기.png" alt="">
                                        </div>
                                    </div>
        
                                    <div class="right_icon">
                                        <img src="/bookmark.png" alt="" data-clicked="0" class="bookmark_img">
                                    </div>
                                </div>
        
                                <div class="detail_likes">
                                </div>
        
                                <div class="timer">1시간 전</div>
        
                                <div class="comment_field">
                                    <div class="smile_icon">
                                        <img src="/smile.png" alt="">
                                    </div>
                                    <input type="text" placeholder="댓글달기...">
                                    <div class="upload_btn">게시</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feed_detail_modal_close">
                    <img src="/창닫기.png" alt="">
                </div>
            </div>
        
            <script src="/mainPageEvent.js"></script>
            <script src="/feed_more_modal.js"></script>
            <script src="/feed_detail_modal.js"></script>
        </body>
        
        </html>
        `
    }
}