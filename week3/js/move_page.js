function goToMainPage() {
  history.pushState(null, null, '/');
}

let login_button = document.getElementById('login-button');
login_button.addEventListener('click', goToMainPage);