let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userResult = document.querySelector("#user-score");
const compResult = document.querySelector("#comp-score");

const genCompChoise = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoise,compChoise) => {
    if(userWin){
        console.log("user wins");
        console.log(userChoise);
        msg.innerText = `You Win!, ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green";
        userScore++;
    }else{
        console.log("comp wins");
        msg.innerText = `You Lose, ${compChoise} beats ${userChoise}`;
        msg.style.backgroundColor = "red";
        compScore++;
    }
    userResult.innerText = userScore ;
    compResult.innerText = compScore ;
}

const playGame = (userChoise) => {
    console.log("user choise =", userChoise);
    //Generate computer choise
    const compChoise = genCompChoise();
    console.log("comp choise =", compChoise);

    if(userChoise === compChoise){
        drawGame();
    }else{
        let userWin = true;
        if(userChoise === "rock"){
            //paper,scissors
            userWin = compChoise === "paper" ? false : true;
        }else if(userChoise === "paper"){
            //rock,scissors
            userWin = compChoise === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin,userChoise,compChoise);
    }
    
    
}

choises.forEach((choise) => {
    
    choise.addEventListener("click",() => {
        const userChoise = choise.getAttribute("id");
        playGame(userChoise);
    });
});

