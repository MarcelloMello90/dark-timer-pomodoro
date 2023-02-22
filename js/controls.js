export default function Controls({
  btnPause,
  btnPlay,
  reset,
  // btnDark,
  // btnForest
}) {

  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  
  function reset() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }

  function actBtn(btnSelected, btn1, btn2, btn3) {
    btnSelected.classList.add("btnActive")
    btn1.classList.remove("btnActive")
    btn2.classList.remove("btnActive")
    btn3.classList.remove("btnActive")
  }

  function onOffDark() {
    // btnLignt.classList.toggle("hide")
    btnDark.classList.toggle("hide")
    // darkBody.classList.toggle("darkBg")

  }

  return {
    reset,
    play,
    pause,
    actBtn,
    onOffDark,
  }
}


// 
//     
//     wrapperControls.toggle("darkControls")
    


// <div class="cards-sound btnCardDark"></div>

// <div class="wrapper darkControls">

// <body class="darkBg">

// <button class="imgDark hide " 