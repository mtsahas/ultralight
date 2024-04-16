const colors=["#072AC8", "#1360E2", "#1E96FC", "#60B6FB", "#A2D6F9", "#CFE57D", "#FCF300","#FEDD00", "#FFC600"]
var color_index = 0;
function updateTimeStatus() {
    var now = new Date();
    var seconds = now.getSeconds();
    //Keep in code - Written by Computerhope.com
    //Place this script in your HTML heading section
    var elements = document.getElementsByClassName('color1');
    for (var i = 0; i < elements.length; i++){
        if (color_index == colors.length) color_index=0;
        elements[i].style.backgroundColor = colors[color_index++];

    }
    var hour = now.getHours();
    var element = document.getElementById("home");
    if (hour >= 6 && hour < 12) {
        element.style.opacity = "50%";
      } else if (hour >= 12 && hour < 17) {
        element.style.opacity = "75%";
      } else if (hour >= 17 && hour < 21) {
        element.style.opacity = "100%";
      } else {
        element.style.opacity = "25%";
      }

  }
  
  updateTimeStatus(); // Call the function to set initial status
  
  // Update status every second
  setInterval(updateTimeStatus, 1000);