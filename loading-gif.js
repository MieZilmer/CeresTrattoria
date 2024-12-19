document.addEventListener("DOMContentLoaded", function() {
 const loadingScreen = document.getElementById("loading-screen");
 const links = document.querySelectorAll("a");

 links.forEach(link => {
     link.addEventListener("click", function(event) {
         if (link.getAttribute("href") !== "#") {
             event.preventDefault();
             loadingScreen.style.display = "flex";
             setTimeout(() => {
                 window.location.href = link.href;
             }, 1300);
         }
     });
 });
});