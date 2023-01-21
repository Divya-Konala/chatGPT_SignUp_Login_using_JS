let questionsArr = [
  {
    question: "what is a dog",
    answer: "Dog is a animal with 4 legs",
    imageLink:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
  },
  {
    question: "what is a cat",
    answer: "Cat is a animal with 4 legs",
    imageLink:
      "https://1.bp.blogspot.com/-OepoM7-pW6k/YMBOzg50OVI/AAAAAAAALUc/pigmTomxyEkyZmtbPMvb8NZO3xTDkoD_ACLcBGAsYHQ/s869/Beautiful%2BCat%2BPictures%2B%252820%2529.jpg",
  },
  {
    question: "what is a elephant",
    answer: "Elephant is a animal with 4 big legs",
    imageLink:
      "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00077427_yjtgnj.jpg",
  },
  {
    question: "what is a giraffe",
    answer: "Giraffe is a animal with 4 tall legs",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/1200px-Giraffe_standing.jpg",
  },
  {
    question: "what is a rhino",
    answer: "Rhino is a animal with 4 giant legs",
    imageLink:
      "https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_WW1106963/hero_small/5snbg63sls_Black_Rhino_WW1106963.jpg",
  },
  {
    question: "what is a ostrich",
    answer: "Ostrich is a bird with 2 thin and tall legs",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Struthio_Diversity.jpg",
  },
];
let noOfCallsLeft = 10;
var loginUserDetails = JSON.parse(sessionStorage.getItem("LoginUsers"));
console.log(loginUserDetails[loginUserDetails.length - 1].token);
document.querySelector("form").addEventListener("submit", chatGPTFn);
function chatGPTFn(e) {
  e.preventDefault();
  let questionknown = false;
  let question = document.querySelector("#question").value;
  questionsArr.map((ele, index) => {
    if (ele.question == question) {
      document.querySelector("#answer").textContent = ele.answer;
      let image = document.createElement("img");
      image.setAttribute("src", ele.imageLink);
      document.querySelector("div").append(image);
      let breakEle = document.createElement("br");
      document.querySelector("div").append(breakEle);
      let ipBox = document.createElement("input");
      ipBox.setAttribute("id", "token");
      ipBox.setAttribute("placeholder", "enter token");
      let spkTxtBtn = document.createElement("button");
      spkTxtBtn.textContent = "speakText";
      spkTxtBtn.addEventListener("click", verifyToken);
      document.querySelector("div").append(ipBox, spkTxtBtn);
      let msg = document.createElement("p");
      msg.setAttribute("id", "msg");
      let userName = document.createElement("p");
      userName.setAttribute("id", "userName");
      let callsLeft = document.createElement("p");
      callsLeft.setAttribute("id", "callsLeft");
      msg.append(userName, callsLeft);
      document.querySelector("div").append(msg);
      questionknown = true;
    }
  });
  if (questionknown == false) {
    document.querySelector("#answer").textContent = "I don't know!! :(";
  }
}
function verifyToken() {
  let token = document.querySelector("#token").value;
  if (
    noOfCallsLeft > 0 &&
    loginUserDetails[loginUserDetails.length - 1].token == token
  ) {
    document.querySelector("#userName").textContent =
      "User Name: " + loginUserDetails[loginUserDetails.length - 1].name;
    document.querySelector("#callsLeft").textContent =
      " No of calls left: " + --noOfCallsLeft;
  } else if (noOfCallsLeft == 0) {
    document.querySelector("#msg").textContent = "Alloted calls already used!";
    document.querySelector("#msg").style.color = "red";
  } else {
    document.querySelector("#msg").innerHTML = "Invalid token!";
    document.querySelector("#msg").style.color = "red";
  }
}
