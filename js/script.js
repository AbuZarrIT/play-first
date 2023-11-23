const box = document.querySelectorAll('.box');
const restart = document.querySelector('.btn-rest');
const x = 'x';
const o = 'o';
let playFirst = 0,
    playSecond = 0,
    winX = 0,
    winO = 0;
    
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
            test();
            checkWinO();
            checkWinX();
        });
    })
}

add()

restart.addEventListener('click', () => {
    clear();
    result(o,winO = 0);
    result(x,winX = 0);
    nol();
});

function result(name, player){
    document.getElementById(name).textContent = player;
};

function test(){
    if(checkWinX() || checkWinO() || playFirst == 5 || playSecond == 5){
        nol();
        clear();
        alert('draw');
    };
};

function nol(){
    playFirst = 0;
    playSecond = 0;
};

function clear(){
    box.forEach(element => {
        element.textContent = '';
    });
};

function checkWinX() {
    let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    arr.forEach(element => {
        if(element.every(item => box[item].textContent === x)){
            winX++;
            result(x,winX);
            nol();
            clear();
            return true;
        } else {
            return false;
        }
    });
};

function checkWinO() {
    let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    arr.forEach(element => {
        if(element.every(item => box[item].textContent === o)){
            winO++;
            result(o,winO);
            nol();
            clear();
            return true;
        } else {
            return false;
        };
    });
};