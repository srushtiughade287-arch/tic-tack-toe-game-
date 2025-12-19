// Get DOM elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; 
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(e) {
    const box = e.currentTarget;
    if (box.disabled) return;
    box.innerText = turnO ? "O" : "X";
    box.disabled = true;
    turnO = !turnO;
    checkWinner();
}

boxes.forEach((box) => box.addEventListener("click", handleClick));

function checkWinner() {
    for (let pattern of winpatterns) {
        const [a, b, c] = pattern;
        const vA = boxes[a].innerText;
        if (vA !== "" && vA === boxes[b].innerText && vA === boxes[c].innerText) {
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");
            disableAll();
            setTimeout(() => alert(vA + " wins!"), 50);
            return;
        }
    }
    // tie
    const filled = Array.from(boxes).every((b) => b.innerText !== "");
    if (filled) {
        setTimeout(() => alert("It's a tie!"), 50);
    }
}

function disableAll() {
    boxes.forEach((b) => (b.disabled = true));
}

function resetGame() {
    boxes.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
        b.classList.remove("win");
    });
    turnO = true;
}

if (resetBtn) resetBtn.addEventListener("click", resetGame);
