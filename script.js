const coinArr = ['Heads', 'Tails'];
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
let score = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', gilToss);
}

function gilToss(e) {
  let playerGuess = e.target.innerText;
  let compuntahToss = Math.floor(Math.random() * coinArr.length);
  let compuntahGuess = coinArr[compuntahToss];
  message.innerHTML = `Computer Selected ${compuntahGuess} <br>`;
  let outPut;

  if (playerGuess === compuntahGuess) {
    outPut = 'Player Wins';
    score[0]++;
  } else {
    outPut = 'Computer Wins';
    score[1]++;
  }

  message.innerHTML +=
    outPut + '<br>Play ' + score[0] + ' Computer ' + score[1];
}
