document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".home span");
  const texts = [
      "Early Detection Saves Lives",
      "Your Health Our Mission.",
      "Breathe Easy Detect Early",
      "Hope Starts With Detection",
      "Every Breath Matters"
  ];

  const sentenceColors = ["#70161e", "#252323", "#006d77", "#290628", "#00554a", ""];
  let index = 0;

  function createWaveText() {
      textElement.innerHTML = "";
      let newText = texts[index];
      let words = newText.split(" ");
      let sentenceColor = sentenceColors[index % sentenceColors.length];
      index = (index + 1) % texts.length;

      let fullSentenceSpan = document.createElement("span");

      words.forEach((word, i) => {
          let wordSpan = document.createElement("span");

          word.split("").forEach((letter, j) => {
              let span = document.createElement("span");
              span.textContent = letter;
              span.style.opacity = "0";
              span.style.display = "inline-block";
              span.style.transform = "translateY(15px)";
              span.style.transition = `opacity 0.5s ease ${j * 50}ms, transform 0.5s ease ${j * 50}ms`;
              span.style.fontSize = "2rem";
              span.style.fontWeight = "bold";
              span.style.textShadow = "2px 2px 10px rgba(0,0,0,0.3)";
              span.style.color = sentenceColor;

              wordSpan.appendChild(span);
          });

          fullSentenceSpan.appendChild(wordSpan);
          fullSentenceSpan.appendChild(document.createTextNode(" "));
      });

      textElement.appendChild(fullSentenceSpan);

      setTimeout(() => {
          textElement.querySelectorAll("span span").forEach(span => {
              span.style.opacity = "1";
              span.style.transform = "translateY(0)";
          });
      }, 50);
  }

  function changeText() {
      textElement.style.transition = "opacity 0.8s";
      textElement.style.opacity = "0";

      setTimeout(() => {
          createWaveText();
          textElement.style.opacity = "1";
      }, 700);
  }

  createWaveText();
  setInterval(changeText, 2500);
  let menu = document.querySelector('#menu-bar');
  let nav = document.querySelector('.nav');

  menu.onclick = () => {
      menu.classList.toggle('fa-times');
      nav.classList.toggle('active');
  }

  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .nav a');

  window.onscroll = () => {
      menu.classList.remove('fa-times');
      nav.classList.remove('active');

      section.forEach(sec => {
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header .nav a[href*=' + id + ']').classList.add('active');
              });
          };
      });
  }
  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("custom-button");
  const customTxt = document.getElementById("custom-text");

  customBtn.addEventListener("click", function () {
      realFileBtn.click();
  });

  realFileBtn.addEventListener("change", function () {
      if (realFileBtn.value) {
          customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
      } else {
          customTxt.innerHTML = "No file chosen, yet.";
      }
  });
});