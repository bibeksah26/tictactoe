let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector(".resetbutt");
let newGameBtn=document.querySelector("#btn");
let msgContainer=document.querySelector(".winner");
let msg=document.querySelector("#msg");
let gameBox=document.querySelector(".gameBox");

let Button=document.querySelector("#drawButton");
let drawMsg=document.querySelector("#drawMsg");
let draw=document.querySelector(".draw");

let turnO=true;

let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() =>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    draw.style.display='none';
    gameBox.style.display='block';
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
           
        }

        else{
            box.innerText="X";
            box.style.color="blue";
            turnO=true;
            
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

const gameDrawn=() =>{
    drawMsg.innerText=`This game is a Draw!!`;
    draw.style.display='block';
    gameBox.style.display='none';

}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameBox.style.display='none';
    draw.style.display='none';
    disableBoxes();
}

const checkWinner=() =>{

    let winnerFound=false;

    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                winnerFound=true;
                break;
            }
        }
        if(!winnerFound  &&  count === 9){
            gameDrawn();
        }
    }
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
Button.addEventListener("click",resetGame);

