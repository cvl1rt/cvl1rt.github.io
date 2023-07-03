let answer = '';
let input = document.querySelector("input");
let screen = document.querySelector(".screen");
let count = 0;
input.disabled = true;

document.querySelectorAll(".btn-num").forEach(x => {
    x.disabled = true;
    x.addEventListener('click', function (a) {
        a.target.disabled = true;
        input.value += a.target.innerText;
    })
})
let btnStart = document.querySelector(".btn-start")
btnStart.addEventListener('click', function () {
    answer = createNum();
    btnAnswer.disabled = false;
    btnRestart.disabled = false;
    press.disabled = false;
    btnStart.disabled = true;
    input.disabled = false;

    document.querySelectorAll(".btn-num").forEach(x => {
        x.disabled = false;
    })
})
let btnAnswer = document.querySelector(".btn-answer")
btnAnswer.addEventListener('click', function () {
    alert(answer);
    input.value = '';
})
btnAnswer.disabled = true;

let btnRestart = document.querySelector(".btn-restart")
btnRestart.disabled = true;
btnRestart.addEventListener('click', function () {
    answer = createNum();
    clear();
    btnStart.disabled = true;
    screen.innerText = '';
    
    count = 0;
    numButtonAble();
})


let press = document.querySelector('.btn-press');
press.disabled = true;
press.addEventListener('click', function () {
    win();
    input.value = '';
    numButtonAble();
})



document.querySelector('.btn-clear').addEventListener('click', clearInput);


function createNum() {
    let numbers = [];
    while (numbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10).toString();
        if (numbers.indexOf(randomNumber) === -1) {
            numbers.push(randomNumber);
        }
    }

    let uniqueNumber = numbers.join("");
    return uniqueNumber;
}

function win() {
    let a = 0;
    let b = 0;
    inputNum = input.value.trim()
    if (!isNaN(inputNum) && inputNum.length == 4 && !isRepeat(inputNum)) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] == inputNum[i]) {
                a++;
            }
            else if (inputNum.includes(answer[i])) {
                b++;
            }
        }
        count++;
        screen.innerText += `${inputNum} --- ${a}A${b}B\n`
        if (a == 4) {
            alert(`答對惹`);
        }
    }
    else {
        alert("請輸入4個不重複的數字");
    }
}

function clear() {
    input.value = '';
}

function isRepeat(num) {
    let numArray = num.split('');
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[i] === numArray[j]) {
                return true;
            }
        }
    }
    return false;
}


function numButtonAble() {
    document.querySelectorAll(".btn-num").forEach(x => {
        x.disabled = false;
    })
}

function clearInput() {
    clear();
    numButtonAble();
}