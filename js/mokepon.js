let ataqueJugador
let ataqueEnemigo
let seleccion = false
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    document.getElementById('seleccionar-ataque').style.display='none'
    document.getElementById('reiniciar').style.display='none'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)

}
function seleccionarMascotaJugador(){
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    


    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
        seleccion = true
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
        seleccion = true
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigüeya'
        seleccion = true
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
        seleccion = true
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
        seleccion = true
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
        seleccion = true
    } else {
        alert("Selecciona una mascota 🐾")
        seleccion = false
    }
    
    if(seleccion == true){
        document.getElementById('seleccionar-ataque').style.display='flex'
        document.getElementById('seleccionar-mascota').style.display='none'
        seleccionarMascotaEnemigo()

    }else{
        document.getElementById('seleccionar-ataque').style.display='none'
    }
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigüeya'
    } else if (mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else if (mascotaAleatoria == 6){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🤝🏻")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE 🤡")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! GANASTE! 🥳")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste 😢")
    } else {

    }
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesJugador = document.getElementById('ataques-Jugador')
    let ataquesEnemigo = document.getElementById('ataques-Jugador')

    // let notificacion = document.createElement('p') No queremos crearlo, así que lo borramos para que no se repitan
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    // sectionMensajes.appendChild(notificacion)
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal
    

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    document.getElementById('reiniciar').style.display='block'
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)