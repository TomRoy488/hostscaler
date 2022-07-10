
const sliderRight = document.querySelector(".navigation__plus")
const cardHolder = document.querySelector(".compareCloud-cards-hold ")
const sliderLeft = document.querySelector(".navigation__minus")
const totalCards = document.querySelectorAll(".compareCloud-card")
//slidr event
console.log(sliderRight);
let x = 1
sliderRight.addEventListener("click",function() {

    console.log(1);
    if (x === 0 || x ==3) return
    totalCards[x].classList.add("activecard")
    x+= 1
    cardHolder.setAttribute("style",`transform:translateX(${x*200}px)`)
})


// slide left 
sliderLeft.addEventListener("click",function() {

    console.log(x);
    if (x === -5 ) return 
    totalCards[x].classList.add("activecard")

    x-= 1
    cardHolder.setAttribute("style",`transform:translateX(${x*200}px)`)
})
