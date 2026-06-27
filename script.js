const PASSWORD = "adalay";

const frases = [
    "Esta página existe porque tú existes. 💖",
    "Este mundo sería más bonito si hubiera mas personas como tu.",
    "Se que eres una persona en la que todos pueden confiar, y que siempre estas para ayudar a los demás.",
    "Siempre intetnas que todos sean felices y se puedan sentir bien.",
    "Tienes una gran capacidad de amar y de hacer sentir bien a los demás.",
    "Siempre encuentras la forma de salir adelante no importa lo que pase.",
    "Eres alguien que realmente si se preocupa por ser una mejor persona.",
    "Tienes una gran empatia por otras personas.",
    "Tu sonrisa es de las cosas más bonitas que hay en este mundo.",
    "Te mereces solo lo mejor de este mundo, y espero que lo consigas.",
    "Lo das todo das todo de ti, pones todo tu corazón y eso es algo que no todos pueden hacer."
];


const loginScreen = document.getElementById("login-screen");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");

const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const errorMessage = document.getElementById("error-message");

const progressBar = document.querySelector(".progress-bar");
const loadingText = document.getElementById("loadingText");

const phrase = document.getElementById("phrase");

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

function showMainPage(){

    loadingScreen.classList.add("hidden");

    mainContent.classList.remove("hidden");

}

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
