const img = document.querySelector(".screen__boat-img");
const delay = 1500; // ms=

const handleDOMReady = () => {
  window.setTimeout(() => {
    img.classList.add("on");
  }, delay);
}

const handleAnimationEnd = () => {
	img.style.animation = "none"
  
  window.setTimeout(() => {
		img.style.animation = "";
  }, delay)
}

img.addEventListener("animationend", handleAnimationEnd);

window.addEventListener('DOMContentLoaded', handleDOMReady);

