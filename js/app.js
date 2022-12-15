var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  let widthOfUserView = document.documentElement.clientWidth;
  if (widthOfUserView > 580) {
    if (document.body.scrollTop >= 685 || document.documentElement.scrollTop >= 685) {
      myNav.classList.add("scrolled");
      console.log("height", Math.round(scrollY), )
    } else {
      myNav.classList.remove("scrolled");
      console.log("height", Math.round(scrollY), document.documentElement.clientWidth)
    }
  }

  else if (widthOfUserView > 480) {
    // do stuff!
  }

  else {
    if (document.body.scrollTop >= 305 || document.documentElement.scrollTop >= 305) {
      myNav.classList.add("scrolled");
    } else {
      myNav.classList.remove("scrolled");
    }
  }
  
};
