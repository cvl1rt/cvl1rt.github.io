let bricks = document.querySelectorAll("[box-id]")
bricks = Array.from(bricks)
    .sort((a, b) => {

        return a.getAttribute("box-id") - b.getAttribute("box-id")
    })
const startBtn = document.querySelector(".btn")
const msg = document.querySelector("#msg")
const answer = document.querySelector("#answer")
const img = document.querySelector("#img")

let steps = 0;
let allsteps = 0;
let currentIndex = 0;
let speed = 10;


startBtn.addEventListener('click', function () {

    speed = 50;
    random = Math.floor(Math.random() * bricks.length) + 1

    steps = random + 2 * bricks.length
    allsteps = steps

    turnAround()


})


function showSelectedOption() {
    //包含選項的視窗
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <h3>請把這隻${bricks[currentIndex].textContent}帶回家</h3>
        </div>
    `;

    //關閉按鈕
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "x"
    closeButton.addEventListener("click", () => {
        modal.remove(); //關閉
    });

    modal.querySelector(".modal-content").appendChild(closeButton);

    
    document.body.appendChild(modal);
}

function turnAround() {
    bricks[currentIndex].classList.remove("active");
    currentIndex++;

    if (currentIndex >= bricks.length) {
        currentIndex = 0;
    }

    bricks[currentIndex].classList.add("active");
    answer.innerHTML = `${bricks[currentIndex].textContent}`;
    steps--;

    if (steps > 0) {
        setTimeout(turnAround, speed);

        if (steps < Math.floor(allsteps / 3)) {
            speed += 5;
        }
    } else {
        //轉完顯示結果視窗
        showSelectedOption();
    }
}

