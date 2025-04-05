const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let lastScrollTop = 0;
const topHeader = document.getElementById("top-header");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling Down
    topHeader.style.transform = "translateY(-100%)";
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.zIndex = "1000";
    header.style.background = "#ffebd0";
    header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  } else {
    // Scrolling Up
    topHeader.style.transform = "translateY(0)";
    header.style.position = "relative";
    header.style.boxShadow = "none";
    header.style.background = "#fff";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scroll
});
const slider = document.querySelector(".right-slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
const logoSlider = document.querySelector(".company-logos");
let isLogoSliderDown = false;
let logoSliderStartX;
let logoSliderScrollLeft;

logoSlider.addEventListener("mousedown", (e) => {
  isLogoSliderDown = true;
  logoSlider.classList.add("active");
  logoSliderStartX = e.pageX - logoSlider.offsetLeft;
  logoSliderScrollLeft = logoSlider.scrollLeft;
});

logoSlider.addEventListener("mouseleave", () => {
  isLogoSliderDown = false;
  logoSlider.classList.remove("active");
});

logoSlider.addEventListener("mouseup", () => {
  isLogoSliderDown = false;
  logoSlider.classList.remove("active");
});

logoSlider.addEventListener("mousemove", (e) => {
  if (!isLogoSliderDown) return;
  e.preventDefault();
  const x = e.pageX - logoSlider.offsetLeft;
  const walk = (x - logoSliderStartX) * 1.5; // Adjust scroll speed here
  logoSlider.scrollLeft = logoSliderScrollLeft - walk;
});
