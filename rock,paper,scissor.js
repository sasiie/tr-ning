//we must give option to users
const getUserChoice = (userInput) => {
  //make the answers to lower case
  userInput = userInput.toLowerCase();
  //make an if statement so if answered wrong there is an else
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("wrong input");
  }
};

//we must make the computerschoice random
const getComputerChoice = () => {
  //must add floor , *3 and random so the numbers are between 0-2
  const randomNumber = Math.floor(Math.random() * 3);
  // we put the inputs to a number
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// put the choices against eachother here
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "this is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "you won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won";
    } else {
      return "you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won";
    } else {
      return "you won!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("you threw:" + userChoice);
  console.log("the computer threw:" + computerChoice);

  console.log(determineWinner(getUserChoice, getComputerChoice));
};

console.log(playGame());
