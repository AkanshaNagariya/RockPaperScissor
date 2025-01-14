let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userscorePara = document.querySelector("#user-score");
let compscorePara = document.querySelector("#comp-score");
const getCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3); // math.random gives random values bet 0-1 in pointer i.e 0.37353
    // * 3 will make it in range of 0-2 i.e 1.4566 or2.36558 and floor will remove decimal so randomly 0,1,2 will be
    //generated and we will use them as index of options array
    return options[randIdx]; // 
};

const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw. Play Again";
    msg.style.backgroundColor = "#073B4C"; 
};

const showWinner = (userWin, userchoice, compChoice) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compscorePara.innerText = compScore;
        console.log("You Lost!");
        msg.innerText = `You Lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"; 
    }
};

const playGame = (userchoice) => {
    console.log('user choice = ', userchoice);
    const compChoice = getCompChoice();
    console.log("computer choice = ", compChoice);
     
    if(userchoice === compChoice){
        // draw
        drawGame();
    } else {
    let userWin = true;
    if(userchoice === "rock"){
        // scissors paper option
        userWin = compChoice === "paper"? false: true;
    } else if(userchoice === "paper"){
        // rock scissor option
        userWin = compChoice === "scissor"? false:true;
    } else { // userchoice = scissor
        // rock paper option
        userWin = compChoice === "rock"? false:true;
    }  
    showWinner(userWin , userchoice, compChoice);
}
};

choices.forEach((choice) => { // in choices class we have 3 divs rock paper scissor , this is for each lop for 3 of them
       console.log(choice);
       choice.addEventListener("click" , () => { // whatever the choice currently is , when we click on it , add event , and callback func will be executed
            const userchoice = choice.getAttribute("id"); // rock paper scissor each choice we gave diff id , whatever choice
            // we have we accessed it's id
           //  console.log("choice was clicked",userchoice); 
           playGame(userchoice);
       });
});
