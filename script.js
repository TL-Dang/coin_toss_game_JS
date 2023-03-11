const coinArr = ['Heads', 'Tails'];
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener('click', gilToss);
}

function gilToss(e) {
  console.log('Player: ' + e.target.innerText);
  let compuntahToss = Math.floor(Math.random() * 2);
  console.log('Computer: ' + coinArr[compuntahToss]);
}
