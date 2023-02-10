const button = document.getElementById("restartGame");//permet de select les élément qui correspond a L'id restartGame
button.addEventListener("click", function() {
  window.location.assign("index.html");//permet grace a un événement click de rediriger vers la page index.html
});