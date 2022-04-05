import './Login.css';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Login() {

  let history = useHistory();

  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  return (
    <div className="App">

      <main className="loginpage-container">
        <section>
          <div className="image-box">
            <img className="back" alt="인스타그램 이미지2" src="images/instagram_img1.jpg"></img>
            <img className="front" alt="인스타그램 이미지1" src="images/instagram_img1.jpg"></img>
          </div>
        </section>
        <section>
          <div className="login-container">
            <img className="App-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="인스타그램 로고"></img>
            <form className="form-container">
              <label><input name="id" className="input-item" type="text" placeholder='전화번호, 사용자 이름 또는 이메일' onChange={(e) => { setId(e.target.value) }}></input></label>
              <label><input name="pw" className="input-item" type="password" placeholder='비밀번호' onChange={(e) => { setPw(e.target.value) }}></input></label>
              <Button type="submit" className="login-item" variant="primary" onClick={()=>{history.push('/mainpage')}}>
                로그인
              </Button>
              <div className="orbox">
                <hr /> <span className="pt-1">또는</span> <hr />
              </div>
              <Button className="login-item" variant="light">
                <span><img className="icon" src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="페이스북 로고"></img></span><span className="ml-2 facebook-color"><b>Facebook으로 로그인</b></span>
              </Button>
              <a>
                <div className="textbox mt-2">
                  <p>비밀번호를 잊으셨나요?</p>
                </div>
              </a>
            </form>
          </div>

          <div className="sign-up-box">
            <p>계정이 없으신가요? <a href=""><span><b>가입하기</b></span></a></p>
          </div>

          <p className="mt-3 mb-3">앱을 다운로드하세요.</p>

          <span><img className="download-icon mr-3" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="앱스토어에서 다운로드하기"></img><img className="download-icon ml-3" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="구글플레이에서 다운로드하기"></img></span>

        </section>
      </main>

      <footer className="mt-3">
        <p>
          <a className="footer-icon" href="https://about.facebook.com/meta">Meta</a>
          <a className="footer-icon" href="https://about.instagram.com/">소개</a>
          <a className="footer-icon" href="https://about.instagram.com/blog/">블로그</a>
          <a className="footer-icon" href="https://www.instagram.com/about/jobs/">채용정보</a>
          <a className="footer-icon" href="https://help.instagram.com/">도움말</a>
          <a className="footer-icon" href="https://developers.facebook.com/docs/instagram">API</a>
          <a className="footer-icon" href="https://www.instagram.com/legal/privacy/">개인정보처리방침</a>
          <a className="footer-icon" href="https://www.instagram.com/legal/terms/">약관</a>
          <a className="footer-icon" href="https://www.instagram.com/directory/profiles/">인기 계정</a>
          <a className="footer-icon" href="https://www.instagram.com/directory/hashtags/">해시태그</a>
          <a className="footer-icon" href="https://www.instagram.com/explore/locations/">위치</a>
        </p>
        <p>
          <a className="footer-icon" href="https://www.instagram.com/topics/dance-and-performance/">댄스</a>
          <a className="footer-icon" href="https://www.instagram.com/topics/food-and-drink/">식음료</a>
          <a className="footer-icon" href="https://www.instagram.com/topics/home-and-garden/">집 및 정원</a>
          <a className="footer-icon" href="https://www.instagram.com/topics/music/">음악</a>
          <a className="footer-icon" href="https://www.instagram.com/topics/visual-arts/">시각 예술</a>
        </p>
        <p className="footer-icon">
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <span className="ml-4">© 2022 Instagram from Meta</span>
        </p>
      </footer>

    </div>

  );
}



export default Login;
