let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usermsg=document.querySelector("#userScore");
const compmsg=document.querySelector("#compScore");

const drawGame=()=>{
    console.log("Game was Draw.");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userchoiceId,compChoice)=>{
    if(userWin){
        userScore++;
        console.log("you win!");
        usermsg.innerText=userScore;
        msg.innerText=`You Win! your ${userchoiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        console.log("You lose.");
        compmsg.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats your ${userchoiceId}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userchoiceId)=>{
    console.log("User choice =",userchoiceId);
    //generate compChoice
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);
    if(compChoice===userchoiceId)drawGame();
    else {
        let userWin=true;
        if(userchoiceId==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userchoiceId==="paper"){
            userWin=compChoice==="scissor"?false:true;         //Bug
        }else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoiceId,compChoice);
    }
    
};


const genCompChoice=()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoiceId=choice.getAttribute("id");
        // console.log("Choice was clicked.",userchoiceId);
        playGame(userchoiceId);
    });
});