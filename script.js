const preguntas = [
    {
        pregunta: "¿En qué año comenzó la Revolución Francesa?",
        respuesta_correcta: "1789"
    },
    {
        pregunta: "¿Qué bastilla fue tomada por los revolucionarios?",
        respuesta_correcta: "La Bastilla de Saint-Antoine"
    },
    // Agrega más preguntas aquí
];

const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const enviarBtn = document.getElementById("enviar");
const mensajeElement = document.getElementById("mensaje");
const puntajeElement = document.getElementById("puntaje");

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
    preguntaElement.textContent = preguntas[preguntaActual].pregunta;
}

function verificarRespuesta() {
    const respuestaUsuario = respuestaElement.value.trim();
    if (respuestaUsuario.toLowerCase() === preguntas[preguntaActual].respuesta_correcta.toLowerCase()) {
        mensajeElement.textContent = "¡Correcto!";
        puntaje++;
    } else {
        mensajeElement.textContent = "Incorrecto. La respuesta correcta es: " + preguntas[preguntaActual].respuesta_correcta;
    }

    preguntaActual++;
    respuestaElement.value = "";
    puntajeElement.textContent = "Puntaje: " + puntaje + " de " + preguntas.length;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        preguntaElement.textContent = "¡Has completado el juego!";
        respuestaElement.style.display = "none";
        enviarBtn.style.display = "none";
    }
}

mostrarPregunta();
enviarBtn.addEventListener("click", verificarRespuesta);
