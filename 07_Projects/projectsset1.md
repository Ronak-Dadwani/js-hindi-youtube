## Project 1
```Javascript
console.log("ronak")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click' , function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
``` 

## Project 2
```Javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${weight}`
  }
  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
  }

  const bmi = ((weight / (height * height/10000)).toFixed(2))
  results.innerHTML = `<span>${bmi}</span>`
    if (bmi <= 18.6 ){
      results.innerHTML = `Under Weight ${bmi}`
    } else if (bmi <= 24.9){
      results.innerHTML = `Normal range ${bmi}`
    } else {
      results.innerHTML = `Overweight ${bmi}`
    }
})

```
## Project 3
```Javascript
const clock = document.getElementById('clock')
let date = new Date()
console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
} , 1000)
```
## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi  = document.querySelector('.lowOrHi');
const startOver  = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if (guess < 1){
    alert('Please enter a number more than 1')
  } else if (guess > 100){
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()

  } else if (guess < randomNumber){
    displayMessage(`Number is Tooo low`)

  } else if (guess > randomNumber){
    displayMessage(`Number is too HIGH`)
  }

}
function displayGuess(guess){
  userInput.value = ''
  guesslot.innerHTML += `${guess} , `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id = "newgame">Start New Game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(){
 const newButton =  document.querySelector('#newgame')
 newButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guesslot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
  playGame = true;

 })
}

```


## PROJECT 5
``Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){
  insert.innerHTML = `
  <div class = "color"> 
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'Space' : e.key}</td>
    <td>${e.keyCode} </td>
    <td>${e.code}</td>
  </tr>
  <tr>
    
  </tr>
</table>
  </div>
  `
})
```
## PROJECT 6 SOLUTION
// 0-9 and a-f
//generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++){
   color += hex[Math.floor(Math.random()*16)] 
  }
  return color;
};
let intervalID
const startChanginColor = function(){
  if(!intervalID){
    intervalID = setInterval(changeBgColor , 1000)
  }
  function changeBgColor(){
     document.body.style.backgroundColor = randomColor()
  }
};

const stopChangingColor = function(){
  clearInterval(intervalID)
  intervalID = null
}


document.getElementById('start').addEventListener('click' ,startChanginColor )

document.getElementById('stop').addEventListener('click', stopChangingColor)

```