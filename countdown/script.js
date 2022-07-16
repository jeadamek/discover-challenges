// Gets date to counting down to
const countDownDate = new Date("Dec 25, 2022 00:00:01").getTime()

// Update the countdown every 1 second
let interval = setInterval(function(){
  // Gets today date and time
  const now = new Date().getTime();

  // Find the remaining time between now and the count down date
  let remainingTime = countDownDate - now

  // Time calculations for days, hours, minutes and seconds  
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the result 
  document.querySelector("#days div").innerHTML = days < 10 ? "0" + days : days
  document.querySelector("#hours div").innerHTML = (hours < 10 ? "0" + hours : hours) 
  document.querySelector("#minutes div").innerHTML = (minutes < 10 ? "0" + minutes : minutes) 
  document.querySelector("#seconds div").innerHTML = seconds < 10 ? "0" + seconds : seconds

  // If the count down is finished, write some text
  if (remainingTime < 0) {
    clearInterval(interval);
    document.querySelector('#days div').innerHTML = "00"
    document.querySelector('#hours div').innerHTML = "00"
    document.querySelector('#minutes div').innerHTML = "00"
    document.querySelector('#seconds div').innerHTML = "00"
  }
}, 1000)