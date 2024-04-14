// Función para reproducir el sonido de un elemento de audio
function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Seleccionar todas las teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Asignar colores únicos a cada tecla
listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1]; // Obtener el nombre del instrumento desde la segunda clase
    const idAudio = `#sonido_${instrumento}`; // Construir el ID del elemento de audio correspondiente

    // Función para manejar el evento de clic en la tecla
    function manejarClic() {
        // Remover la clase activa de todas las teclas
        listaDeTeclas.forEach(t => {
            t.classList.remove('activa');
            t.style.backgroundColor = ''; // Restaurar el color original de la tecla
        });

        // Agregar la clase activa a la tecla clicada
        tecla.classList.add('activa');

        // Obtener el nombre de la variable de color correspondiente al nombre de la clase de la tecla
        const colorVariable = `--color-${instrumento}`;
        // Obtener el valor del color usando la variable CSS
        const color = getComputedStyle(document.documentElement).getPropertyValue(colorVariable);

        // Aplicar el color obtenido como fondo de la tecla clicada
        tecla.style.backgroundColor = color;

        // Reproducir el sonido asociado a la tecla
        playSonido(idAudio);
    }

    // Asignar evento onclick a cada tecla
    tecla.addEventListener('click', manejarClic);

    // Asignar evento keydown a cada tecla
    tecla.addEventListener('keydown', (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            manejarClic(); // Manejar el clic al presionar la tecla (simular clic)
        }
    });

    // Asignar evento keyup a cada tecla
    tecla.addEventListener('keyup', () => {
        // Remover la clase activa al soltar la tecla
        tecla.classList.remove('activa');
        tecla.style.backgroundColor = ''; // Restaurar el color original de la tecla
    });
});


/*function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')

    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}*/



