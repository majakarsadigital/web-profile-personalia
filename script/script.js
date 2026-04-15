const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");

// cek apakah sudah pernah tampil
const hasVisited = sessionStorage.getItem("hasVisited");

if (hasVisited) {
  splash.style.display = "none";
  mainContent.style.opacity = "1";
} else {
  sessionStorage.setItem("hasVisited", "true");

  // jalankan splash seperti biasa
  window.addEventListener("load", () => {
    setTimeout(() => {
      splash.style.opacity = "0";
      mainContent.style.opacity = "1";

      setTimeout(() => {
        splash.style.display = "none";
        clearInterval(interval);
      }, 400);

    }, 1000);
  });
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "アァカサタナハマヤャラワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = letters.split("");

const fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

const interval = setInterval(draw, 50);

/* HIDE SPLASH */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.opacity = "0";
    document.getElementById("main-content").style.opacity = "1";

    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
      clearInterval(interval);
    }, 400);

  }, 1000); // durasi splash
});

const links = document.querySelectorAll(".nav-link");

let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
  currentPage = "index.html";
}

links.forEach(link => {
  let linkPage = link.getAttribute("href");

  // Hilangkan slash jika ada
  linkPage = linkPage.replace("/", "");

  if (currentPage === linkPage) {
    link.classList.add("active");
  }
});

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});
