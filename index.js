//TODO select all the drum elements and addevent lintener
//add animataaion when a button is clicked
//play music()

var audio_volume = 0.6;

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)
}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume
        audio.play();
}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})

//theme 1
const theme_1__background = "#098713";
const theme_1__text = "#f5f5f9";


//theme 2
const theme_2__background = "#ffc0cb";
const theme_2__text = "#8A2BE2";

const change_theme = (theme) => {
    let root = document.documentElement;
    if(theme === "theme_1") {
        root.style.setProperty('--background', theme_1__background);
        root.style.setProperty('--text', theme_1__text);
    } else {
        root.style.setProperty('--background', theme_2__background);
        root.style.setProperty('--text', theme_2__text);
    }
};

var current_theme = "theme_1"
const theme_changer = document.getElementById("util__button-theme")
theme_changer.addEventListener("click", () => {
    theme_changer.classList.add("change_theme__pressed")
    setTimeout(()=>{
        theme_changer.classList.remove("change_theme__pressed")
    },200)
    if(current_theme == "theme_1"){
        change_theme("theme_2")
        current_theme = "theme_2"
    } else {
        change_theme("theme_1")
        current_theme = "theme_1"
    }
})



var auto_music_id;
var auto_music_on =false;
const start_auto_music = () => {
    const letters = ["w", "a", "s", "d", "j", "k", "l"]

    auto_music_id = setInterval(() => {
    const current_key = letters[Math.floor(Math.random() * letters.length)]
    makeSound(current_key)
    animate(current_key)
    }, 200)
}


const auto_music_button = document.getElementById("util__button-auto")
auto_music_button.addEventListener("click", () => {
    if(auto_music_on){
        clearInterval(auto_music_id)
        auto_music_on = false
        auto_music_button.innerText = "Start Auto Music"
        auto_music_button.classList.remove("auto music on")
    }
    else{
    start_auto_music()
    auto_music_on = true
    auto_music_button.innerText = "Stop Auto Music"
    auto_music_button.classList.add("auto music on")
    }
})

const slider = document.getElementById("volume__slider")
slider.oninput = (event) => {
    audio_volume = event.target.value / 100
} 


const makeSound = (key) => {
    
    switch(key){
        case "w":
            playMusic("sound-1.mp3");
            break;
        case "a":
            playMusic("sound-2.mp3");
            break;
        case "s":
            playMusic("sound-3.mp3");
            break;
        case "d":
            playMusic("sound-4.mp3");
            break;
        case "j":
            playMusic("sound-5.mp3");
            break;
        case "k":
            playMusic("sound-6.mp3");
            break;
        case "l":
            playMusic("sound-7.mp3");
            break;
        default:
            console.log("hey wrong button!!");
    }
}

const handleDrumClick = (event) => {
    var innerHTML = event.target.innerHTML;
    console.log(innerHTML);
    animate(innerHTML)
    makeSound(innerHTML)
}

var drums = document.querySelectorAll(".drum")
for(let i=0;i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}