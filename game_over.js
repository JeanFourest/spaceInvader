//le boutton permettant de redémarrer le jeu et de revenir à la page index.html
const button = document.getElementById("restartGame");
button.addEventListener("click", function() {
  window.location.assign("index.html");
});