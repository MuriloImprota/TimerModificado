import state from "./state.js"
import * as el from "./elements.js"
import { stopRunning } from "./actions.js"


export function countDown(){

    clearTimeout(state.countdownID)

   if (!state.isRunning) {
     return
   }
   
   let minutes = Number(el.minutes.textContent)
   let seconds = Number(el.seconds.textContent)
   seconds--

   if (seconds < 0) {
    seconds = 59
    minutes--
   }

   if (minutes < 0) {
    stopRunning()
    kitchenTimer.play()
    return
    
   }

   updateDisplay(minutes, seconds)
   state.countdownID = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds){
minutes = minutes ?? state.minutes /*Nullish coalescing assignment. Caso o primeiro argumento seja null, ele vai passar o outro valor de referencia no caso state.minutes */
seconds = seconds ?? state.seconds

el.minutes.textContent = String(minutes).padStart(2, "0")
el.seconds.textContent = String(seconds).padStart(2, "0")

}
