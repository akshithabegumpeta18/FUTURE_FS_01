document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
    const text = "Future Software Developer 🚀";
    let index = 0;
    const hero = document.querySelector(".hero p");

    function typeEffect() {
        if (index < text.length) {
            hero.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    hero.innerHTML = "";
    typeEffect();

});