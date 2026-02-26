// Ультимейт
function ultimate() {

    const sound = document.getElementById("ultSound");
    sound.currentTime = 0;
    sound.play();

    const flash = document.createElement("div");
    flash.classList.add("ultimate-flash");
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 2000);
}

// Параллакс
document.addEventListener("mousemove", (e) => {
    const img = document.querySelector(".hero-img");
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    img.style.transform = `translate(${x}px, ${y}px)`;
});

// Анимация появления карточек
const cards = document.querySelectorAll(".ability-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.classList.add("show");
        }
    });
}); document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".ability-card");

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300);
    });
});window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});