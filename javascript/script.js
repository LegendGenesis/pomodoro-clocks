const timeInput = document.querySelector('.timer-main_input');
const btnTime = document.querySelector('.time-btn');
const selectTime = document.querySelector('.select-time-sounds')
const selectOptValue = document.querySelector('.select-time option');
const startWorkBtn = document.querySelector('.timer-change_btn');
const outCycles = document.querySelector('p');


// Input funtcion and others
let timeStr = '';
let timeArr = [];
timeInput.addEventListener('input', (e) => {
    timeStr = e.target.value;
    timeArr.unshift(timeStr);
    localStorage.setItem('timeStrValue', timeStr);
    if (timeArr.length > 1) {
        timeArr.pop();
    }
})
// 
let checkSet;
let cucleCount = 0;
let multCount = 0;
let multArr = []; // Возможно убрать

function multiplyCounts() {
    if (checkSet === false) {
        multCount += 1;
        multArr.push(multCount) // Возможно убрать
        outCycles.textContent = `${multCount} цикл закончен, так держать!`;
        cucleCount = 0;
    }
}
// 

function checkEndCycle() {
    cucleCount++;
    if (cucleCount >= 2) return;
    else {
        let timeEventStr = ++timeArr;
        console.log('Вы начали цикл')
        const statusInt = setInterval(() => {
            if (timeEventStr !== 0) {
                timeEventStr = timeEventStr - 1
                checkSet = true;
                if (timeEventStr === 0) {
                    console.log(checkSet);
                    clearInterval(statusInt);
                    checkSet = false;
                    multiplyCounts();
                    return;
                }
            }
        }, 1000 * 60);
    }

}
// Start round cycle
startWorkBtn.addEventListener('click', checkEndCycle)
// Checking if localstorage has information about value of before inputs
if (localStorage.getItem('timeStrValue')) {
    timeInput.value = localStorage.getItem('timeStrValue')
    timeArr.push(timeInput.value);
}
// Notification permission
// soon...



// Audio
// let bellArr = [];
// function getAudio(src) {
//     let audio = new Audio();
//     audio.src = src;
//     audio.play();
// }
// selectTime.addEventListener('click', (e) => {
//     let value = e.target.value;
//     let startBells = setInterval(getAudio(value));
//     setTimeout(() => {
//         clearInterval(startBells);
//         bellArr.push('Stop');
//         console.log(bellArr)
//     }, 3000);

// })






// 