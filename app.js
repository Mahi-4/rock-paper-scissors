let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCurrent = document.querySelector("#user");
const botScoreCurrent = document.querySelector("#bot");
const botImages = document.querySelectorAll('.bot-choices img');

//Game Draw
const drawGame = () => {
  msg.innerText = "It's a Draw";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
}

const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    userScore++;
    userScoreCurrent.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${botChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    botScore++;
    botScoreCurrent.innerText = botScore;
    msg.innerText = `You Lose.  ${botChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const bot =(imgIdx)=>{
  botImages.forEach(img => img.classList.add('active'));
  botImages[imgIdx].classList.remove("active");
}

//generating Bot Choices
const genBotChoice = () => {
  const randomInd = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  bot(randomInd);
  return options[randomInd];
}

//Game Play
const playGame = (userChoice) => {
  //checking bot choice
  const botChoice = genBotChoice();
  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;
    //check winner 
    if (userChoice === "rock") {
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = botChoice === "scissors" ? false : true;
    } else {
      userWin = botChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
}

//Accessing user Choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
