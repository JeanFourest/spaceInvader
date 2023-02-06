

const jeu = document.querySelector(".jeu");

for(let i = 0; i < 400; i++){
    const carre = document.createElement("div");
    jeu.appendChild(carre)
}

const carres = Array.from(document.querySelectorAll(".jeu div"))

const aliens = [
    0,1,2,3,4,5,6,7,8,9,10,11,
    20,21,22,23,24,25,26,27,28,29,30,31,
    40,41,42,43,44,45,46,47,48,49,50,51

]

function draw(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.add("invader")
    }
}

let posShooter = 389;

carres[posShooter].classList.add("shooter")

draw()


document.addEventListener("keydown", function(event) {
    switch(event.code){
        case "ArrowLeft":
            carres[posShooter].classList.remove("shooter")
            posShooter--;
            carres[posShooter].classList.add("shooter")
            break;
        
        case "ArrowRight":
            carres[posShooter].classList.remove("shooter")
            posShooter++;
            carres[posShooter].classList.add("shooter")
            break;

        case "ArrowUp":
            carres[posShooter].classList.remove("shooter")
            posShooter -= 20;
            carres[posShooter].classList.add("shooter")
            break;

        case "ArrowDown":
            carres[posShooter].classList.remove("shooter")
            posShooter += 20;
            carres[posShooter].classList.add("shooter")
            break;
    }
});
