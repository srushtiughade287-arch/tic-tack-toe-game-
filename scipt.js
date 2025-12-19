let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "0";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
     });
});

const showWinner = (winner) => {
    msg.innerText = `congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pod1val = boxes[pattern[0]].innerText;
        let pod2val = boxes[pattern[1]].innerText;
        let pod3val = boxes[pattern[2]].innerText;

        if (pod1val !== "" && pod2val !== "" && pod3val !== "") {
            if (pod1val === pod2val && pod2val === pod3val) {
               console.log("winner",pod1val);
               showWinner(pod1val);
        }
    }
};  
