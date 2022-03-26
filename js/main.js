let section1 = document.querySelector("#arrow-down section");
let video = document.querySelector(".our-story-card-animation-container");
let allTv = document.querySelector(".alltv");
let alltvh4 = document.querySelector(".alltv h4");
let alltvh1 = document.querySelector(".alltv h1");
let alltvh2 = document.querySelector(".alltv h2");
let alltvspan = document.querySelector(".alltv span");
let alltva = document.querySelector(".alltv a");
window.onscroll = function() {
    if (window.scrollY >= section1.offsetTop - 100) {
        section1.style = " transform: translateX(0); transition: 1.5s all;"
        video.style = " transform: translateX(0); transition: 2s all;"
    }
    if (window.scrollY >= allTv.offsetTop - 100) {
        alltvh4.style = " transform: translateY(0); transition: 1s all;"
        alltvh1.style = " transform: translateY(0); transition: 2s all;"
        alltvh2.style = " transform: translateY(0); transition: 3s all;"
        alltvspan.style = " transform: translateY(0); transition: 4s all;"
        alltva.style = " transform: translateY(0); transition: 5s all;"

    }
}
let imgs = document.querySelectorAll(".box1  .img");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
        let allImage = document.querySelectorAll(".box1 .img");
        allImage.forEach(ele => {
            ele.classList.remove("active-image")
            this.classList.add("active-image");
        })

        let allCard = document.querySelectorAll(".card");
        allCard.forEach(element => {
            element.classList.remove("active")
        });
        let card = document.querySelector(`.card${i}`);
        card.classList.add("active");
    })
}