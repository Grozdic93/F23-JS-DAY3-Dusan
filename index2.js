let playerleft = document.querySelector('.playerLeft');
let playerright = document.querySelector('.playerRight');

let player1 = window.prompt("enter name for Player 1");
let player2 = window.prompt("enter name for Player 2");

playerleft.innerHTML = `p1 : ${player1}`;
playerright.innerHTML = `p2: ${player2}`;


//selecting btns

let btn1 = document.querySelector('#player1');
let btn2 = document.querySelector('#player2');



function rollDie(element = 6) {

    return Math.floor(Math.random() * element + 1)




}

let field1 = document.querySelector('#playerRollField1')
let field2 = document.querySelector('#playerRollField2')

//selecting result field
resultVisible = false

let resultField = document.querySelector('.resultField')
let end = "";

btn1.addEventListener('click', () => {
    field1.textContent = rollDie()
    if (field2.textContent) {
        resultVisible = true;
        if (field1.textContent > field2.textContent) {
            end = "Player 1 WINS!"

        }
        else if (field1.textContent == field2.textContent) {
            end = "Draw"

        } else {
            end = 'Player 2 WINS!'

        }
        resultField.textContent = end;
    }
    if (resultVisible == true) {
        resultField.style.opacity = '1'

    }

});
btn2.addEventListener('click', () => {
    field2.textContent = rollDie()
    if (field1.textContent) {
        resultVisible = true;
        if (field1.textContent > field2.textContent) {
            end = "Player 1 WINS!"

        }
        else if (field1.textContent == field2.textContent) {
            end = "Draw"

        } else {
            end = 'Player 2 WINS!'

        }
        resultField.textContent = end;
    }
    if (resultVisible == true) {
        resultField.style.opacity = '1'
    }
});



