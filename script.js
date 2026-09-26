/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");

const heartsContainer = document.querySelector(".hearts");


/* =========================
   OPEN WEBSITE
========================= */

openBtn.addEventListener("click", async () => {

    /* =========================
       PLAY GLUE SONG
    ========================= */

    try {

        await music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } catch (error) {

        console.log("Music needs user interaction.");

    }


    /* =========================
       BIRTHDAY FALLING EFFECT
    ========================= */

    const icons = [
        "🩷",
        "♡",
        "♥",
        "✨",
        "🎀",
        "✦"
    ];

    for(let i = 0; i < 80; i++){

        const item = document.createElement("div");

        item.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        item.classList.add("falling");

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 18 + 16) + "px";

        item.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 5000);

    }


    /* =========================
       OPENING TRANSITION
    ========================= */

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "opacity 1s ease";

        setTimeout(() => {

            opening.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    }, 1800);

});


/* =========================
   MEMORY BUTTON
========================= */

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", async () => {

    if(music.paused){

        try {

            await music.play();

            musicBtn.innerHTML =
                "⏸ Pause Music";

        } catch(error){

            console.log("Unable to play music.");

        }

    }else{

        music.pause();

        musicBtn.innerHTML =
            "🎵 Play Music";

    }

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");


    const icons = [
        "🩷",
        "♡",
        "♥",
        "💗",
        "✦"
    ];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];


    /* RANDOM POSITION */

    heart.style.left =
        Math.random() * 100 + "%";


    /* RANDOM SIZE */

    heart.style.fontSize =
        (Math.random() * 16 + 14) + "px";


    /* RANDOM SPEED */

    heart.style.animationDuration =
        (Math.random() * 5 + 8) + "s";


    /* RANDOM DELAY */

    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartsContainer.appendChild(heart);


    /* REMOVE AFTER ANIMATION */

    setTimeout(() => {

        heart.remove();

    }, 15000);

}


/* =========================
   CREATE FLOATING HEARTS
========================= */

setInterval(createHeart, 900);


/* =========================
   INITIAL
========================= */

musicBtn.innerHTML = "🎵 Play Music";
