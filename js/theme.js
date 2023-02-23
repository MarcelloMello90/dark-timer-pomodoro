function darkMode({ btnLight, btnDark, ctrlsGroup, timerDark, darkCards, bodyBg }) {
  btnLight.addEventListener('click', () => {
    btnDark.classList.remove('hide')
    btnLight.classList.add('hide')
    ctrlsGroup.classList.add('darkControls')
    timerDark.classList.add('darkTimer')
    darkCards.classList.add('btnCardDark')
    bodyBg.classList.add('darkBg')
  })

  btnDark.addEventListener('click', () => {
    btnDark.classList.add('hide')
    btnLight.classList.remove('hide')
    ctrlsGroup.classList.remove('darkControls')
    timerDark.classList.remove('darkTimer')
    darkCards.classList.remove('btnCardDark')
    bodyBg.classList.remove('darkBg')
  })
}

export { darkMode }