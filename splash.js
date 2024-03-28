document.addEventListener("DOMContentLoaded", function () { 
    setTimeout(function () {
      document.querySelector(".splash").style.display = "none";
      window.location.href = "home.html";
    }, 4000); //waits for 4000ms which = 4s
  });
