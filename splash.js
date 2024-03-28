document.addEventListener("DOMContentLoaded", function () { 
    setTimeout(function () {
      document.querySelector(".splash").style.display = "none";
      window.location.href = "shop.html"; //put the home page here.
    }, 4000); //waits for 4000ms which = 4s
  });