import { listaCanciones } from "../controllers/dependecies.js";


console.log(listaCanciones)

const audioPlayer = document.getElementById('audioPlayer');
const btnAnterior = document.getElementById('anterior');
const btnPlayPause = document.getElementById('playPause');
const btnSiguiente = document.getElementById('siguiente');
const btnPlay = document.getElementById('play');


btnPlay.addEventListener("click",function(){
  reproducirCancionActual()
})


btnPlayPause.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play().catch(error => {
            console.error("Error al reproducir:", error.message);
        });
        btnPlayPause.textContent = '⏸️';
    } else {
        audioPlayer.pause();
        btnPlayPause.textContent = '⏺';
    }
});


btnAnterior.addEventListener('click', () => {
  listaCanciones.anterior();
  reproducirCancionActual();
});


btnSiguiente.addEventListener('click', () => {
  listaCanciones.siguiente();
  reproducirCancionActual();
});

function reproducirCancionActual(){
  const cancionActual = listaCanciones.obtenerCancionActual();
  console.log(cancionActual.getData());
  if (cancionActual) {
    audioPlayer.src = cancionActual.getData(); 
    audioPlayer.play(); 
    btnPlayPause.textContent = '⏸️'; // Actualizar el botón de reproducción/pausa
  }
}



