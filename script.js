/*==================================
    CONFIGURACIÓN
==================================*/

const PASSWORD = "adalay"; // Cambia aquí la contraseña

const frases = [

    "Cada momento contigo se convirtió en mi favorito. ❤️",

    "No eres una casualidad, eres mi lugar favorito.",

    "Si pudiera volver a elegir, volvería a elegirte.",

    "Gracias por hacer mi vida mucho más bonita.",

    "Contigo descubrí que el amor también puede sentirse como hogar.",

    "Esta página existe porque tú existes. 💖"

];

/*==================================
    ELEMENTOS DEL DOM
==================================*/

const loginScreen = document.getElementById("login-screen");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");

const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const errorMessage = document.getElementById("error-message");

const progressBar = document.querySelector(".progress-bar");
const loadingText = document.getElementById("loadingText");

const phrase = document.getElementById("phrase");

const music = document.getElementById("music");

const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");

/*==================================
    INICIO DE SESIÓN
==================================*/

loginBtn.addEventListener("click", login);

passwordInput.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        login();

    }

});

function login(){

    const password = passwordInput.value.trim();

    if(password === PASSWORD){

        errorMessage.textContent = "";

        loginScreen.classList.add("hidden");

        loadingScreen.classList.remove("hidden");

        startLoading();

    }else{

        errorMessage.textContent = "❌ Contraseña incorrecta";

        passwordInput.value = "";

    }

}

/*==================================
    PANTALLA DE CARGA
==================================*/

function startLoading(){

    let progress = 0;

    const mensajes = [

        "Buscando usuario...",

        "Analizando recuerdos...",

        "Verificando identidad...",

        "Acceso encontrado...",

        "Preparando sorpresa..."

    ];

    let index = 0;

    loadingText.textContent = mensajes[0];

    const interval = setInterval(()=>{

        progress += 2;

        progressBar.style.width = progress + "%";

        if(progress % 20 === 0 && index < mensajes.length-1){

            index++;

            loadingText.textContent = mensajes[index];

        }

        if(progress >= 100){

            clearInterval(interval);

            setTimeout(showMainPage,600);

        }

    },70);

}

/*==================================
    MOSTRAR CONTENIDO
==================================*/

function showMainPage(){

    loadingScreen.classList.add("hidden");

    mainContent.classList.remove("hidden");

}

/*==================================
    FRASES AUTOMÁTICAS
==================================*/

let currentPhrase = 0;

setInterval(()=>{

    currentPhrase++;

    if(currentPhrase >= frases.length){

        currentPhrase = 0;

    }

    phrase.style.opacity = 0;

    setTimeout(()=>{

        phrase.textContent = frases[currentPhrase];

        phrase.style.opacity = 1;

    },400);

},5000);

/*==================================
    MODAL CARTA
==================================*/

openLetter.addEventListener("click",()=>{

    letterModal.classList.remove("hidden");

});

closeLetter.addEventListener("click",()=>{

    letterModal.classList.add("hidden");

});

window.addEventListener("click",(e)=>{

    if(e.target === letterModal){

        letterModal.classList.add("hidden");

    }

});

/*==================================
    MÚSICA
==================================*/

function playMusic(){

    if(music){

        music.volume = 0.3;

        music.play();

    }

}

/*==================================
    EFECTOS FUTUROS
==================================*/

// Aquí agregaremos:
//
// ❤️ Corazones flotando
// ✨ Partículas
// ⌨️ Máquina de escribir
// 🌸 Animaciones de fotos
// 🎆 Fuegos artificiales
// 💗 Cursor brillante
// 🌙 Fondo animado
