import { Animals } from './animals.js'
import { Modal } from './modal.js'
import { generateTip } from './utils.js'

const buttonGuess = document.querySelector('.btn-guess')
const buttonTry = document.querySelector('.btn-try')
const guess = document.querySelector('.guess')
const inputResponse = document.querySelector('.input-response')
const btnContinue = document.querySelector('.btn-continue')
const message = document.querySelector('.text-msg')
const modal = document.querySelector('.modal-wrapper')
const txtPoint = document.querySelector('.txt-point')
const tipAppears = document.querySelector('.tip-appears')
const buttonPlay = document.querySelector('.btn-play')
const titleHeader = document.querySelector('.title-header')

let points = 0

let animal = generateTip(guess, Animals)

buttonPlay.addEventListener('click', function(e) {
  e.preventDefault()

  points = 0
  txtPoint.innerText = `Pontos: ${points}`

  titleHeader.innerText = "Qual é o bicho?"

  tipAppears.classList.remove('hide')
  buttonPlay.classList.add('hide')
  
})

buttonGuess.addEventListener('click', function(e) {
  e.preventDefault()
  
  const response = inputResponse.value
  console.log(animal)
  if(response.toLocaleLowerCase() == animal.toLocaleLowerCase()){
    
    animal = generateTip(guess, Tips)
    points++
    txtPoint.innerText = `Pontos: ${points}`

    Modal.open(modal)
    message.innerText = "Parabéns você acertou!"
    btnContinue.classList.remove('hide')
    buttonTry.classList.add('hide')
  }else{
    Modal.open(modal)
    message.innerText = "Que pena, você errou!"
    btnContinue.classList.add('hide')
    buttonTry.classList.remove('hide')
    
  }
  
})

btnContinue.addEventListener('click', function() {
   
    Modal.close(modal)
    btnContinue.classList.remove('hide')

    inputResponse.value = ""

    if(points == 5){
      tipAppears.classList.add('hide')
      buttonPlay.classList.remove('hide')
      titleHeader.innerText = "Parabéns você ganhou!"
      buttonPlay.innerHTML = "Jogar Novamente"
    }

})

buttonTry.addEventListener('click', function() {
  Modal.close(modal)
  inputResponse.value = ""
})


