//EASY MODE==================================================================================================================
//controle du vaisseau
//le vaisseau avance de 20 dans le tableau
document.getElementById("ez").addEventListener("click", ()=>{

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

                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20 //360 c'es la limite du vaisseau
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite 500
                    //le son pour le tir
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });
    //function qui permet au aliens de bouger
    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 300);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 300);//augmente le temps pour plus de facilite
        }
    }
    }

    setInterval(bougerAliens, 600);//augmente le temps pour plus de facilite

    //function aliens tire permettant de tirer aleatoirement
    function aliensTire(){
        let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];
        let alienShootChoice = Math.floor(Math.random() * 3);

        if(alienShootChoice == 0){
            if(!shootingAliens){

                shootingAliens = true;
                setTimeout(function () {
                    shootingAliens = false;
                    
                }, 300); //reduit le temps pour plus de difficulte 
                var posBulletAlien = selectedAlien;

            }        
        }

        //function bulletAlienMove permettant de faire bouger les bullets
        function bulletAlienMove(){
            carres[posBulletAlien].classList.remove("bulletAliens")
            posBulletAlien += 20;
            if (posBulletAlien<0){
                clearInterval(bulletAlienId);
            }
            carres[posBulletAlien].classList.add("bulletAliens")

            if(carres[posBulletAlien].classList.contains("shooter")){            
                window.location.href="game_over.html";
            }
        }
        let bulletAlienId = setInterval(bulletAlienMove, 200);
    }

    //setInterval permettant de verifier si le joueur a gagne ou perdu
    setInterval(() => {
        victoireEz();
        gameOverEz();
    }, 100);

    //les documents qui sont cachés des le debut de la partie
    document.getElementsByClassName("decorButton")[0].style.display = "none";
    document.getElementsByClassName("decorButton")[1].style.display = "none";
    document.getElementsByClassName("decorButton")[2].style.display = "none";

    //musique de fond du jeu en boucle
    musiqueBackground.loop = true;
    musiqueBackground.play();
});

//MEDIUM MODE================================================================================================================
//controle du vaisseau
//le vaisseau avance de 20 dans le tableau
document.getElementById("medium").addEventListener("click", ()=>{

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
                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20 //360 c'es la limite du vaisseau
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite
                    //le son pour le tir
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });
    //function qui permet au aliens de bouger
    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 200);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 200);//augmente le temps pour plus de facilite
        }
    }
    }

    setInterval(bougerAliens, 400);//augmente le temps pour plus de facilite

    //function aliens tire permettant de tirer aleatoirement
    function aliensTire(){
        let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];
        let alienShootChoice = Math.floor(Math.random() * 3);

        if(alienShootChoice == 0){
            if(!shootingAliens){

                shootingAliens = true;
                setTimeout(function () {
                    shootingAliens = false;
                    
                }, 300); //reduit le temps pour plus de difficulte 
                var posBulletAlien = selectedAlien;

            }        
        }

        //function bulletAlienMove permettant de faire bouger les bullets
        function bulletAlienMove(){
            carres[posBulletAlien].classList.remove("bulletAliens")
            posBulletAlien += 20;
            if (posBulletAlien<0){
                clearInterval(bulletAlienId);
            }
            carres[posBulletAlien].classList.add("bulletAliens")

            if(carres[posBulletAlien].classList.contains("shooter")){            
                window.location.href="game_over.html";
            }
        }
        let bulletAlienId = setInterval(bulletAlienMove, 200);
    }

    //setInterval permettant de faire bouger les bullets et de verifier si le joueur a gagne ou perdu
    setInterval(() => {
        victoireM();
        aliensTire();
        gameOverM();
    }, 100);

    //les documents qui sont cachés des le debut de la partie
    document.getElementsByClassName("decorButton")[0].style.display = "none";
    document.getElementsByClassName("decorButton")[1].style.display = "none";
    document.getElementsByClassName("decorButton")[2].style.display = "none";

    //musique de fond du jeu en boucle
    musiqueBackground.loop = true;
    musiqueBackground.play();
});


//HARD MODE==================================================================================================================
//controle du vaisseau
//le vaisseau avance de 20 dans le tableau
document.getElementById("hard").addEventListener("click", ()=>{

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
                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20 //360 c'es la limite du vaisseau
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite
                    //le son pour le tir
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });
    //function qui permet au aliens de bouger
    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 125);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        //limite pour que les aliens ne puissent pas sortir du tableau
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 125);//augmente le temps pour plus de facilite
        }
    }
    }

    setInterval(bougerAliens, 250);//augmente le temps pour plus de facilite

    //function aliens tire permettant de tirer aleatoirement
    function aliensTire(){
        let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];

            if(!shootingAliens){

            shootingAliens = true;
            setTimeout(function () {
                shootingAliens = false;
                
            }, 100); //reduit le temps pour plus de difficulte 
            var posBulletAlien = selectedAlien;

        }        
        
        //function bulletAlienMove permettant de faire bouger les bullets
        function bulletAlienMove(){
            carres[posBulletAlien].classList.remove("bulletAliens")
            posBulletAlien += 20;
            if (posBulletAlien<0){
                clearInterval(bulletAlienId);
            }
            carres[posBulletAlien].classList.add("bulletAliens")

            if(carres[posBulletAlien].classList.contains("shooter")){            
                window.location.href="game_over.html";
            }
        }
        let bulletAlienId = setInterval(bulletAlienMove, 200);
    }

    //setInterval permettant de faire bouger les bullets et de verifier si le joueur a gagne ou perdu
    setInterval(() => {
        victoireH();
        aliensTire();
        gameOverH();
    }, 100);

    //les documents qui sont cachés des le debut de la partie
    document.getElementsByClassName("decorButton")[0].style.display = "none";
    document.getElementsByClassName("decorButton")[1].style.display = "none";
    document.getElementsByClassName("decorButton")[2].style.display = "none";

    //musique de fond du jeu en boucle
    musiqueBackground.loop = true;
    musiqueBackground.play();
});

//===========================================================================================================================

const jeu = document.querySelector(".jeu");
let width = 20;
let height = 20;
let shooting = false;
let shootingAliens = false;
let score = 0;
let highscoreEz = 0;
let highscoreM = 0;
let highscoreH = 0;

//les highscores sont stockés dans le local storage
let highScoreEz = localStorage.getItem("highscoreEz");
document.querySelector(".highscoreEz").textContent = highScoreEz;
let highScoreM = localStorage.getItem("highscoreM");
document.querySelector(".highscoreM").textContent = highScoreM;
let highScoreH = localStorage.getItem("highscoreH");
document.querySelector(".highscoreH").textContent = highScoreH;

//les sons du jeu
let SoundGame = new Audio();
SoundGame.src = "/ressources/Never_gonna_Meow_you_up.mp3";
let soundBullet = new Audio();
soundBullet.src = "/ressources/Pewsoundeffect.mp3";
let soundDeath = new Audio();
soundDeath.src = "/ressources/boom.mp3";
let musiqueBackground = new Audio();
musiqueBackground.src = "/ressources/MusiqueArrierePlan.mp3";

//creation du tableau
for(let i = 0; i < 400; i++){
    const carre = document.createElement("div");
    jeu.appendChild(carre)
}

const carres = Array.from(document.querySelectorAll(".jeu div"))

//les aliens sont stockés dans un tableau
let aliens = [
    0,1,2,3,4,5,6,7,8,9,10,11,
    20,21,22,23,24,25,26,27,28,29,30,31,
    40,41,42,43,44,45,46,47,48,49,50,51
]

//les aliens ne peuvent pas sortir du tableau vers le bas
let alienLimits = [399,398,397,396,395,394,393,392,391,390,389,388,387,386,385,384,383,382,381,380]

//creation des limites pour les aliens
function createAlienLimits(){
    for(let i = 0; i < alienLimits.length; i++){
        carres[alienLimits[i]].classList.add("limits")
    }
}

//function qui permet de voir les aliens
function draw(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.add("invader")
    }
}

//position du shooter par defaut
let posShooter = 389;
let posBullet = posShooter;

carres[posShooter].classList.add("shooter")

draw()
createAlienLimits()

//function qui permet de detecter si les aliens ont atteint les limites
function detectInvadLimit(){
    for(let i = 0; i < aliens.length; i++){
        if(carres[aliens[i]].classList.contains("limits")){
            return true;
        }
    }
    return false;
}

//function deleteInvaders permettant de supprimer les aliens
function deleteInvaders(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.remove("invader")
    }
}

//function bougerAliensDroite permettant de faire bouger les aliens vers la droite
function bougerAliensDroite(){
    deleteInvaders()
    
    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 1;
        carres[aliens[i]].classList.add("invader");
    }
}

//function bougerAliensGauche permettant de faire bouger les aliens vers la gauche
function bougerAliensGauche(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] -= 1;
        carres[aliens[i]].classList.add("invader");
    }
}

//function bougerAliensDown permettant de faire bouger les aliens vers le bas
function bougerAliensDown(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 20;
        carres[aliens[i]].classList.add("invader");
    }
}


let direction = "right";

//function shootBullets permettant de faire tirer le shooter
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
            carres[posBullet].classList.add("boom");
            soundDeath.cloneNode().play();

            setTimeout(()=> carres[posBullet].classList.remove('boom'), 300);
            clearInterval(bulletId);

            score += 100;
            document.querySelector(".score").textContent = score;
        }

    }
    let bulletId = setInterval(moveBullets, 200);
}

//audioOnce permet de ne pas relancer le son de victoire
let audioOnce = 0;

//function victoireEz permettant de lancer la victoire en mode facile
function victoireEz(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreEz) {
                highscoreEz = score;
                localStorage.setItem("highscoreEz", highscoreEz);
                document.querySelector(".highscoreEz").textContent = highscoreEz;
            }
        }
        audioOnce++;
    }
}

//function victoireM permettant de lancer la victoire en mode moyen
function victoireM(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreM) {
                highscoreM = score;
                localStorage.setItem("highscoreM", highscoreM);
                document.querySelector(".highscoreM").textContent = highscoreM;
                
            }
        }
        audioOnce++;
    }
}

//function victoireH permettant de lancer la victoire en mode difficile
function victoireH(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreH) {
                highscoreH = score;
                localStorage.setItem("highscoreH", highscoreH);
                document.querySelector(".highscoreH").textContent = highscoreH;
                
            }
        }
        audioOnce++;
    }
}

//restartGame permet de relancer le jeu
document.getElementById("restartGame").addEventListener("click", ()=>{
    location.reload();
});

//gameOverEz permet de lancer la page game over en mode facile
function gameOverEz(){
    if(carres[posShooter].classList.contains("invader")){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreEz) {
            highscoreEz = score;
            localStorage.setItem("highscoreEz", highscoreEz);
            document.querySelector(".highscoreEz").textContent = highscoreEz;

        }
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreEz) {
            highscoreEz = score;
            localStorage.setItem("highscoreEz", highscoreEz);
            document.querySelector(".highscoreEz").textContent = highscoreEz;
            
        }
    }

}

//gameOverEz permet de lancer la page game over en mode facile
function gameOverM(){
    if(carres[posShooter].classList.contains("invader")){
        
        musiqueBackground.pause();

        if (score > highscoreM){
            highscoreM = score;
            localStorage.setItem("highscoreM", highscoreM);
            document.querySelector(".highscoreM").textContent = highscoreM;

        }
        window.location.href="game_over.html";
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreM){
            highscoreM = score;
            localStorage.setItem("highscoreM", highscoreM);
            document.querySelector(".highscoreM").textContent = highscoreM;
            
        }
        window.location.href="game_over.html";
    }

}

//gameOverEz permet de lancer la page game over en mode facile
function gameOverH(){
    if(carres[posShooter].classList.contains("invader")){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreH) {
            highscoreH = score;
            localStorage.setItem("highscoreH", highscoreH);
            document.querySelector(".highscoreH").textContent = highscoreH;
        }
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreH) {
            highscoreH = score;
            localStorage.setItem("highscoreH", highscoreH);
            document.querySelector(".highscoreH").textContent = highscoreH;
        }
    }

}