import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as audio from "./sounds.js"



export function playRunning() {
    state.isRunning = true;
    document.documentElement.classList.add("running");
    timer.countDown();
}

export function stopRunning(){
    state.isRunning = false
    document.documentElement.classList.remove("running")
}



export function addTime() {
    // Converte o conteúdo atual de minutos em um número
    let currentMinutes = parseInt(el.minutes.textContent, 10);

    // Adiciona 5 minutos ao valor atual
    currentMinutes += 5;

    // Atualiza o elemento com o novo valor
    el.minutes.textContent = String(currentMinutes)
   
}

export function removeTime() {
    // Converte o conteúdo atual de minutos em um número
    let currentMinutes = parseInt(el.minutes.textContent, 10);

    // remove 5 minutos do valor atual
    currentMinutes -= 5;

    // Atualiza o elemento com o novo valor
    el.minutes.textContent = String(currentMinutes)
   
}

export function clickTree(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if (state.isMute) {
        audio.florestaAudio.play()
        return
    }
    audio.florestaAudio.pause()
}

export function clickRain(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if (state.isMute) {
        audio.chuvaAudio.play()
        return
    }
    audio.chuvaAudio.pause()
}

export function clickHouse(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if (state.isMute) {
        audio.cafeteriaAudio.play()
        return
    }
    audio.cafeteriaAudio.pause()
}

export function clickFire(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if (state.isMute) {
        audio.lareiraAudio.play()
        return
    }
    audio.lareiraAudio.pause()
}