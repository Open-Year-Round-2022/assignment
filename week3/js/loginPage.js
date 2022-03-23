module.exports = {
    HTML: () => {
        return `
        <!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="/reset.css">
    <link rel="stylesheet" href="/loginPage.css">
</head>

<body>
    <main id="main">
        <div class="display_left">
            <img src="/main_phone.png" alt="phone">
        </div>
        <div class="display_right">
            <div class="login_box">
                <header>
                    <div class="logo_img"><img src="/logo_text.png" alt=""></div>
                </header>
                <div class="login_form">
                    <input type="id" placeholder="전화번호, 사용자 이름 또는 이메일">
                    <input type="password" placeholder="비밀번호">
                    <form action="login_process" method="post">
                        <div class="loginBtn">
                        <input type="submit" value="로그인">
                        </div>
                    </form>
                </div>
                <div class="login_perforation">
                    <div class="login_line"></div>
                    <div class="login_line_text">또는</div>
                    <div class="login_line"></div>
                </div>
                <div class="facebook_login">
                <img src="/facebook_icon.png" class="" alt="">
                    <button class="facebook_btn">
                        <span class="facebook_text">Facebook으로 로그인</span>
                    </button>
                </div>
                <footer>비밀먼호를 잊으셨나요 ?</footer>
            </div>
            <div class="signup_box">
                <div class="signup_text">계정이 없으신가요? <a>가입하기</a></div>
            </div>
            <div class="application_download">
                <div class="download_text">
                    <div>앱을 다운로드하세요.</div>
                </div>
                <div class="store_img">
                    <img src="/appStore.png" alt="appstore" class="appstore">
                    <img src="/googlePlay.png" alt="playstore" class="playstore">
                </div>
            </div>
        </div>
    </main>

    <footer id="footer">
        <ul>
            <li>Meta</li>
            <li>소개</li>
            <li>블로그</li>
            <li>채용정보</li>
            <li>도움말</li>
            <li>API</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>인기</li>
            <li>계정</li>
            <li>해시태그</li>
            <li>위치</li>
        </ul>
        <ul>
            <li>댄스</li>
            <li>식음료</li>
            <li>집 및 정원</li>
            <li>음악</li>
            <li>시각 예술</li>
        </ul>
        <ul>
            <li>한국어 © 2022 Instagram from Meta</li>
        </ul>
    </footer>
</body>
        `
    }
}