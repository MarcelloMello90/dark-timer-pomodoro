import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  btnPlay,
  btnPause,
  btnStop,
  btnForest,
  btnRain,
  btnCoffee,
  btnFirePlace,
  minutesDisplay,
  secondsDisplay,
  // btnUpTimer,
  // btnDownTimer,
  bodyBg,
  darkCards,
  ctrlsGroup,
  btnLight,
  btnDark,
  timerDark
} from "./elements.js"

import { darkMode } from "./theme.js"
darkMode({btnLight, btnDark, bodyBg, ctrlsGroup, timerDark, darkCards})

const controls = Controls({
  btnPause,
  btnPlay,
  btnStop,
  btnForest,
  btnRain,
  btnCoffee,
  btnFirePlace,
  // onOffDark,
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
