const box = document.querySelectorAll('.box');
const x = 'x';
const o = 'o';
let playFirst = 0,
    playSecond = 0,
    winX = 0;
    winO = 0;

function checkWin() {
    if (
        (box[0].textContent === x && box[1].textContent === x && box[2].textContent === x) ||
        (box[3].textContent === x && box[4].textContent === x && box[5].textContent === x) ||
        (box[6].textContent === x && box[7].textContent === x && box[8].textContent === x) ||
        (box[0].textContent === x && box[3].textContent === x && box[6].textContent === x) ||
        (box[1].textContent === x && box[4].textContent === x && box[7].textContent === x) ||
        (box[2].textContent === x && box[5].textContent === x && box[8].textContent === x) ||
        (box[0].textContent === x && box[4].textContent === x && box[8].textContent === x) ||
        (box[2].textContent === x && box[4].textContent === x && box[6].textContent === x)
    ) {
        winX++,
        clear();
        result('.result-first','X',winX)
    } else if (
        (box[0].textContent === o && box[1].textContent === o && box[2].textContent === o) ||
        (box[3].textContent === o && box[4].textContent === o && box[5].textContent === o) ||
        (box[6].textContent === o && box[7].textContent === o && box[8].textContent === o) ||
        (box[0].textContent === o && box[3].textContent === o && box[6].textContent === o) ||
        (box[1].textContent === o && box[4].textContent === o && box[7].textContent === o) ||
        (box[2].textContent === o && box[5].textContent === o && box[8].textContent === o) ||
        (box[0].textContent === o && box[4].textContent === o && box[8].textContent === o) ||
        (box[2].textContent === o && box[4].textContent === o && box[6].textContent === o)
    ) {
        clear();
        winO++;
        result('.result-second','O',winO)
    }
}
    
function add(){
    box.forEach(element => {
        element.addEventListener('click', e => {
            const clickEl = e.target;
            if(clickEl.textContent === x || clickEl.textContent === o){
                alert('выберите другой вариант')
            } else if ( playFirst >= playSecond){
                playSecond += +1;
                element.append(x)
            } else if (playSecond >= playFirst){
                playFirst += +1;
                element.append(o)
            };
            checkWin();
        });
    })
}

add()

function clear(){
    box.forEach(element => {
        element.textContent = '';
    })
}
function result(name, play, num){
    document.querySelector(name).textContent = `Игрок ${play} выйграл: ${num} раз`;
}
const rest = document.querySelector('.btn-rest');
rest.addEventListener('click', clear);

/* function test(){
    box.forEach(element => {
        if(!Object.keys(element).length === 0){
            console.log('error')
        } else {
            console.log(typeof(clickEl))
        } 
    });
} */
