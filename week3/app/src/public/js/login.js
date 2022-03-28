const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  login_button = document.querySelector("#login-button");


login_button.addEventListener("click", login);


function login() {
  const req = {
    id: id.value,
    password: password.value,
  }

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";

      } else {
        alert(res.msg);
      }
    })

}

