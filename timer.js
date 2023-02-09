
  let count = 10;
  const timerDisplay = document.getElementById("timer");
  const intervalId = setInterval(function() {
    count--;
    timerDisplay.innerHTML = count + " seconds remaining.";
    if (count === 0) {
      clearInterval(intervalId);
      timerDisplay.innerHTML = "Time's up!";
    }
  }, 1000);