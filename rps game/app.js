let userscore =0;
let compscore=0;

const msg = document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","Paper","scissor"];
    const randInd= Math.floor(Math.random()*3);
    return options[randInd];
};

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText= "draw";
};

const showWinner=(userWin, userChoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win");
        msg.innerText = "You win!";

    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="You Lose";
    }
};
const playGame = (userChoice)=>{
        console.log("user choice",userChoice); 
        
        const compchoice = genCompChoice();
        console.log("comp choice",compchoice); 
       
        if(userChoice === compchoice){
            //Draw Game
            drawgame();
        }
        else{
            let userWin = true;
            if(userChoice ==="rock"){
               userWin= compchoice === "Paper"? false:true;
            }
            else if(userChoice ==="Paper"){
                userWin=compchoice==="scissor"? false:true;
            }
            else{
                userWin = compchoice ==="rock"?false:true;
            }
            showWinner(userWin, userChoice,compchoice);
        }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);    
});
});