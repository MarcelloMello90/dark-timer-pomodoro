
// function darkMode({ btnLight, btnDark, darkBody, ctrlsGroup, timerDark}) {
//   btnLight.addEventListener('click', () => {
//     btnDark.classList.add('hide')
//     btnLight.classList.remove('hide')
//     darkBody.classList.remove('darkBg')
//     ctrlsGroup.classList.remove('darkControls')
//     timerDark.classList.remove('darkTimer')

// import { timerDark } from "./elements"

// import Controls from "./controls"

// import { bodyBg } from "./elements"

//   })

//   btnDark.addEventListener('click', () => {
//     btnDark.classList.remove('hide')
//     btnLight.classList.add('hide')
//     darkBody.classList.add('darkBg')
//     ctrlsGroup.classList.add('darkControls')
//     timerDark.classList.add('darkTimer')

//   })
// }

// export { darkMode }


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