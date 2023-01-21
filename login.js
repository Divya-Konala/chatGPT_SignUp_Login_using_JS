document.querySelector("form").addEventListener("submit", loginFn);
var userDetails = JSON.parse(localStorage.getItem("Signupdetails"));
var loginUserDetails = JSON.parse(sessionStorage.getItem("LoginUsers")) || [];
function loginFn(e) {
  e.preventDefault();
  let user_mail = document.getElementById("email").value;
  let user_password = document.getElementById("password").value;
  for (let i = 0; i < userDetails.length; i++) {
    if (
      userDetails[i].email == user_mail &&
      userDetails[i].password == user_password
    ) {
      let message = document.querySelector(".msg");
      message.textContent = "Login Success :)";
      message.style.color = "green";
      let user_name = userDetails[i].username;
      const rand = () => Math.random(0).toString(36).substr(2);
      const token = () => {
        let randStr = (rand() + rand() + rand() + rand()).substr(0, 10);
        console.log(randStr);
        alert("Your token ID is: "+randStr);
        return randStr;
      };
      let loginobj = {
        name: user_name,
        email: user_mail,
        password: user_password,
        token: token(),
      };
      loginUserDetails.push(loginobj);
      sessionStorage.setItem("LoginUsers", JSON.stringify(loginUserDetails));
      document.querySelector("form").reset();
      window.location.href = "./chatGPT.html";
      break;
    } else {
      let message = document.querySelector(".msg");
      message.textContent = "Invalid Credentials!";
      message.style.color = "red";
    }
  }
}
