export default function() {
  
  const buttonPressAudio = new Audio("./sounds/audio_buttonPress.mp3")
  const kitchenTimer = new Audio("./sounds/audio_kichenTimer.mp3")
  const bgFirePlace = new Audio("./sounds/firePlace.mp3")
  const bgforest = new Audio("./sounds/forest.mp3")
  const bgCoffee = new Audio("./sounds/coffee.mp3")
  const bgRain = new Audio("./sounds/rain.mp3")

  const btnVolForest = document.querySelector('.inputrange-forest')
  const btnVolRain = document.querySelector('.inputrange-rain')
  const btnVolCoffee = document.querySelector('.inputrange-coffee')
  const btnVolFirePlace = document.querySelector('.inputrange-firePlace')

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function cardFirePlace () {
    bgFirePlace.play()
    bgforest.pause()
    bgCoffee.pause()
    bgRain.pause()

    bgFirePlace.loop = true

    btnVolFirePlace.addEventListener("input",() => {
      bgFirePlace.volume = Number(btnVolFirePlace.value)
    })
  }
  
  function cardForest () {
    bgFirePlace.pause()
    bgforest.play()
    bgCoffee.pause()
    bgRain.pause()

    bgforest.loop = true

    btnVolForest.addEventListener("input",() => {
      bgforest.volume = Number(btnVolForest.value)
    })
  }

  function cardCoffee () {
    bgFirePlace.pause()
    bgforest.pause()
    bgCoffee.play()
    bgRain.pause()

    bgCoffee.loop = true

    btnVolCoffee.addEventListener("input",() => {
      bgCoffee.volume = Number(btnVolCoffee.value)
    })
  }

  function cardRain () {
    bgFirePlace.pause()
    bgforest.pause()
    bgCoffee.pause()
    bgRain.play()

    bgRain.loop = true

    btnVolRain.addEventListener("input",() => {
      bgRain.volume = Number(btnVolRain.value)
    })
  }

  return {
    pressButton,
    timeEnd,
    cardFirePlace,
    cardForest,
    cardCoffee,
    cardRain,
  }
}

