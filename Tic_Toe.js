let boxes = document.querySelectorAll(".box"); // access buttons
let newGameBtn = document.querySelector("#new-btn"); // access new game button
let msgContainer = document.querySelector(".msg-container"); // // access masage container
let msg = document.querySelector("#msg"); // access masage paragraf 

let resetBtn = document.querySelector("#reset-btn");
// console.log(boxes,resetBtn);
let turno = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = ()=> {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box Was Clicked");
        // box.innerText = "RK";
        if(turno === true){
            box.innerText = "O";
            box.style.color = "blue";
            turno = false;
        }else{
            box.innerText = "X";
            box.style.color = "yellow";
            turno = true;
        }
        box.disabled = true;
        checkWinner ();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);   
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner (pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
