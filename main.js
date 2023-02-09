const jeu = document.querySelector(".jeu");
let width = 20;
let height = 20;
let game_over = false


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

const bullets = []

function draw(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.add("invader")
    }
}

function drawBullet(){

}

let posShooter = 389;
let posBullet = posShooter;

carres[posShooter].classList.add("shooter")

draw()


document.addEventListener("keydown", function(event) {
    switch(event.code){
        case "ArrowLeft":
            carres[posShooter].classList.remove("shooter")
            if (posShooter % width !==0) posShooter -=1
            carres[posShooter].classList.add("shooter")
            break;
        
        case "ArrowRight":
            carres[posShooter].classList.remove("shooter")
            if (posShooter % width < width -1) posShooter +=1
            carres[posShooter].classList.add("shooter")
            break;

        case "ArrowUp":
            carres[posShooter].classList.remove("shooter")
            if (posShooter - height >= 0 && posShooter > 0) posShooter -= 20
            carres[posShooter].classList.add("shooter")
            break;

        case "ArrowDown":
            carres[posShooter].classList.remove("shooter")
            if (posShooter + height < height * height) posShooter += 20
            carres[posShooter].classList.add("shooter")
            break;
        case "Space":
            shootBullets();
            break;
    }
});

function deleteInvaders(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.remove("invader")
    }
}


function bougerAliensDroite(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 1;
        carres[aliens[i]].classList.add("invader");
    }
}

function bougerAliensGauche(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] -= 1;
        carres[aliens[i]].classList.add("invader");
    }
}

function bougerAliensDown(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 20;
        carres[aliens[i]].classList.add("invader");
    }
}


let direction = "right";

function bougerAliens() {
    if (direction === "right") {
        bougerAliensDroite();
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 400);
        }

    } else {
        bougerAliensGauche();
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 400);
        }
    }
}

let aliensId = setInterval(bougerAliens, 800);

function shootBullets(){
    let posBullet = posShooter;
    function moveBullets(){
        carres[posBullet].classList.remove("bullet");
        posBullet -= 20;
        if (posBullet<0){
            clearInterval(bulletId);
        }
        carres[posBullet].classList.add("bullet");

        if(carres[posBullet].classList.contains("invader")){
            carres[posBullet].classList.remove("invader");
            
            let index = aliens.indexOf(posBullet);
            aliens.splice(index, 1);

            carres[posBullet].classList.remove("bullet");

            clearInterval(bulletId);
        }

    }
    let bulletId = setInterval(moveBullets, 200);
}

function victoire(){
    if(aliens.length == 0){
        document.getElementsByClassName("jeu")[0].style.display = "none";
        document.getElementById("victoire").style.display = "block";
    }
}


function gameOver(){
    if(carres[posShooter].classList.contains("invader")){
        document.getElementsByClassName("jeu")[0].style.display = "none";
        document.getElementById("gameOver").style.display = "flex"
        window.location.href="game_over.html"; 
    }
}

setInterval(() => {
    victoire();
    gameOver();
}, 100);

