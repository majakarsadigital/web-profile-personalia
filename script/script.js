const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");
const hasVisited = sessionStorage.getItem("hasVisited");
const waterInner = document.getElementById('waterInner');
const waterBody  = document.getElementById('waterBody');
const wavePath   = document.getElementById('wavePath');
const pctLabel   = document.getElementById('pctLabel');
const statusText = document.getElementById('statusText');
let animFrame, startTime;
const DURATION = 3400;
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-link");
let currentPage = window.location.pathname.split("/").pop();

if (hasVisited) {
  splash.style.display = "none";
  mainContent.style.opacity = "1";
} else {
  sessionStorage.setItem("hasVisited", "true");
  startFill();
  window.addEventListener("load", () => {
    setTimeout(() => {
      splash.style.opacity = "0";
      mainContent.style.opacity = "1";
      setTimeout(() => { splash.style.display = "none"; }, 1000);
    }, 4000);
  });
}

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

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function getWaveD(pct, ts) {
  const amp    = (pct < 5 || pct > 95) ? 3 : 9;
  const speed  = 0.0016;
  const offset = ts * speed;
  let pts = [];
  for (let x = 0; x <= 200; x += 10) {
    const y = 15 + amp * Math.sin((x / 50) * Math.PI * 2 + offset);
    pts.push([x, y]);
  }
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    d += ` Q${(px + cx) / 2},${(py + cy) / 2} ${cx},${cy}`;
  }
  d += ' L200,30 L0,30 Z';
  return d;
}

function setColor(pct) {
  let r, g, b;
  if (pct < 50) {
    const t = pct / 50;
    r = Math.round(33  + t * (2   - 33));
    g = Math.round(150 + t * (119 - 150));
    b = Math.round(243 + t * (182 - 243));
  } else {
    const t = (pct - 50) / 50;
    r = Math.round(2  + t * (13  - 2));
    g = Math.round(119 + t * (71 - 119));
    b = Math.round(182 + t * (161 - 182));
  }
  const c = `rgb(${r},${g},${b})`;
  wavePath.setAttribute('fill', c);
  waterBody.style.background = c;
}

function startFill() {
  cancelAnimationFrame(animFrame);
  statusText.textContent  = 'Memuat halaman...';
  waterInner.style.height = '0%';
  pctLabel.textContent    = '0%';
  startTime = null;

  function tick(ts) {
    if (!startTime) startTime = ts;
    const raw = Math.min((ts - startTime) / DURATION, 1);
    const pct = Math.round(easeInOut(raw) * 100);

    waterInner.style.height = pct + '%';
    pctLabel.textContent    = pct + '%';
    wavePath.setAttribute('d', getWaveD(pct, ts));
    setColor(pct);

    if (raw < 1) {
      animFrame = requestAnimationFrame(tick);
    } else {
      pctLabel.textContent   = '100%';
      statusText.textContent = 'Selamat Datang!';
    }
  }

  animFrame = requestAnimationFrame(tick);
}