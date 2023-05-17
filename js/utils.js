  let drawn = []
  const maximumValue = 5
  let animal
  
  function generateTip(guess, Animals) {
    
    if(drawn.length == maximumValue){
      drawn = []
      return
    }
  
    let randomNumber = Math.round(Math.random() * maximumValue)
    
    while (drawn.indexOf(randomNumber) >= 0) {  
      randomNumber = Math.round(Math.random() * maximumValue)
    }
  
    drawn.push(randomNumber)
  
    const tip = Animals().animals(randomNumber).tip
    animal = Animals().animals(randomNumber).animalName
    
    guess.innerHTML = tip
    
    return animal
  }


  export {generateTip}


