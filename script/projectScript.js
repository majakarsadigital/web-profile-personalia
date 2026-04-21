const sampleProjects = [
  {
    id: 1,
    title: "The Sobat Gapai",
    slug: "ecommerce-platform",
    type: "fullstack",
    start_date: "2025-01-01T00:00:00Z",
    end_date: "2025-02-01T23:59:59Z",
    description: 'The Solusi Bantuan Tugas Gali Prestasi adalah projek yang dimana bertemakan platform digital pendidikan, seperti halnya forum "The Sobat Gapai" ini sama halnya dengan aplikasi-aplikasi forum pendidikan lainnya namun mungkin ada yang berbeda.',
    image: "https://raw.githubusercontent.com/NovriDev/Proyek-The-Sobat-Gapai/refs/heads/android/image/preview.png",
    status: "completed",
    team: [
      { id: 1, name: "NovriMulia Sourimuda Nasution", role: "FullStack", avatar: "assets/img/person_nov.png" },
    ]
  },
  {
    id: 2,
    title: "Chatting Bot (ChatLogic)",
    slug: "mobile-app",
    type: "mobile",
    start_date: "2024-02-01T00:00:00Z",
    end_date: "2024-05-15T23:59:59Z",
    description: "Aplikasi mobile untuk Sistem chatbot ringan dengan respon otomatis berdasarkan logika.",
    image: "https://raw.githubusercontent.com/NovriDev/chatbot_MJKDISOFT/refs/heads/master/app/src/main/ic_launcher-playstore.png",
    status: "completed",
    team: [
      { id: 1, name: "NovriMulia Sourimuda Nasution", role: "FullStack", avatar: "assets/img/person_nov.png" },
      { id: 2, name: "Rizky Bagus Firmansyah", role: "Frontend Developer & UI UX", avatar: "assets/img/person_riz.png" },
    ]
  },
  {
    id: 3,
    title: "Website Tabungan Siswa",
    slug: "analytics-dashboard",
    type: "web",
    start_date: "2025-01-01T00:00:00Z",
    end_date: "2025-02-01T23:59:59Z",
    description: "Projek ini saya buat untuk memudahkan sekolah dalam menghadapi pencatatan tabungan siswa secara open-source/gratis, dengan. <br> Fitur - fitur : <br> Admin : <br> Mengelola tabungan Update user(Admin, Wali kelas, dan Siswa) Input pembayaran & penarikan View riwayat transaksi Cetak Struk <br> Wali Kelas : <br> Melihat isi saldo dan melihat jumlah siswa yang menabung <br> Siswa : <br> Melihat isi saldo dan riwayat transaksi apabila melakukan transaksi.",
    image: "https://raw.githubusercontent.com/NovriDev/tabungan-siswa-laravel/refs/heads/main/screenshots/desain-layout.jpg",
    status: "completed",
    team: [
      { id: 1, name: "NovriMulia Sourimuda Nasution", role: "FullStack", avatar: "assets/img/person_nov.png" },
    ]
  },
  {
    id: 4,
    title: "KasirKu POS",
    slug: "POS App",
    type: "fullstack",
    start_date: "2025-06-01T00:00:00Z",
    end_date: "2025-07-01T23:59:59Z",
    description: "KasirKu adalah aplikasi kasir berbasis Android yang terintegrasi dengan backend Laravel. Dirancang untuk membantu UMKM dalam mengelola transaksi, produk, dan pelanggan. <br> <br> Fitur Utama : <br> ✅ Manajemen Produk (Tambah, Edit, Hapus) <br> ✅ Transaksi & Pembayaran <br> ✅ Riwayat Pembelian Pelanggan <br> ✅ Otentikasi dengan Token (Bearer Token) <br> ✅ Dashboard & Ringkasan Data.",
    image: "https://github.com/NovriDev/KasirKu-POS/blob/main/layout(wireframe).png?raw=true",
    status: "completed",
    team: [
      { id: 1, name: "NovriMulia Sourimuda Nasution", role: "FullStack", avatar: "assets/img/person_nov.png" },
    ]
  },
  {
    id: 5,
    title: "BeeLi",
    slug: "Marketplace App",
    type: "fullstack",
    start_date: "2024-02-01T00:00:00Z",
    end_date: "2024-06-01T23:59:59Z",
    description: "BeeLi adalah projek aplikasi kami duplikasi dari OLX, yang berfungsi bagi para pengguna untuk melihat isi dari promosi – promosi informasi, jasa, produk, DLL.",
    image: "https://raw.githubusercontent.com/dhika-desk16/app-olx-duplicate/refs/heads/master/preview.png",
    status: "completed",
    team: [
      { id: 1, name: "Dhika Karya Prasetya", role: "BackEnd", avatar: "assets/img/person_dhik.png" },
      { id: 2, name: "NovriMulia Sourimuda Nasution", role: "FrontEnd", avatar: "assets/img/person_nov.png" },
      { id: 3, name: "Nabil Faruq Shalahuddin", role: "FrontEnd", avatar: "assets/img/person_nab.png" },
    ]
  }
];

const icons = {
  calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  smartphone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
  globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  chevronUp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>'
};

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options = { day: 'numeric', month: 'short' };
  const startDayMonth = start.toLocaleDateString('id-ID', options);
  const endDayMonth = end.toLocaleDateString('id-ID', options);

  const startMonth = startDayMonth.split(' ')[1];
  const endMonth = endDayMonth.split(' ')[1];

  if (startMonth === endMonth) {
    return `${startDayMonth.split(' ')[0]} - ${endDayMonth}`;
  }
  return `${startDayMonth} - ${endDayMonth}`;
}

function formatFullDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

function formatNumber(num) {
  return num.toLocaleString('id-ID');
}

function doesTextOverflow(text, maxWidth = 320) {
  const tempDiv = document.createElement('div');
  tempDiv.style.position = 'absolute';
  tempDiv.style.visibility = 'hidden';
  tempDiv.style.whiteSpace = 'nowrap';
  tempDiv.style.fontSize = '1.25rem';
  tempDiv.style.fontWeight = '700';
  tempDiv.style.fontFamily = 'inherit';
  tempDiv.textContent = text;
  document.body.appendChild(tempDiv);

  const width = tempDiv.offsetWidth;
  document.body.removeChild(tempDiv);

  return width > (maxWidth - 40); 
}

function renderProjectCard(project) {
  const isMobile = window.innerWidth < 768;
  const statusConfig = {
    completed: {
      class: 'status-badge completed',
      label: 'Selesai',
      pulse: false,
      icon: icons.code
    },
    in_progress: {
      class: 'status-badge ongoing',
      label: 'Berlangsung',
      pulse: true,
      icon: null
    },
    upcoming: {
      class: 'status-badge upcoming',
      label: 'Akan Datang',
      pulse: false,
      icon: icons.calendar
    }
  };

  const typeConfig = {
    fullstack: { label: 'Full Stack', icon: icons.globe },
    web: { label: 'Web', icon: icons.globe },
    mobile: { label: 'Mobile', icon: icons.smartphone },
    app: { label: 'App', icon: icons.code }
  };

  const status = statusConfig[project.status];
  const type = typeConfig[project.type];
  const isTextOverflowing = doesTextOverflow(project.title);
  const showTeamOnLoad = project.status === 'completed' && isMobile;

  const teamHtml = project.team.length > 0
    ? project.team.map((member) => `
            <div class="winner-item">
                <div class="winner-avatar">
                    <img src="${member.avatar}" alt="${member.name}" loading="lazy">
                </div>
                <div class="winner-info">
                    <p class="winner-name">${member.name}</p>
                    <p class="winner-votes">${member.role}</p>
                </div>
                <div class="winner-badge">${member.role.split(' ')[0]}</div>
            </div>
        `).join('')
    : '<div class="winners-empty">Data tim belum tersedia</div>';

  const toggler = !isMobile ? `
        <button class="toggle-winners-btn" aria-expanded="false" aria-label="Tampilkan tim">
            <div class="toggle-winners-btn-left">
                <span>${icons.users}</span>
                <span class="toggle-winners-btn-text">Lihat Tim (${project.team.length})</span>
            </div>
            <span class="chevron-icon down">${icons.chevronDown}</span>
        </button>
    ` : '';

  const teamSection = `
        <div class="winners-section">
            ${toggler}
            <div class="winners-content ${showTeamOnLoad ? '' : 'hidden'}">
                <div class="winners-list">
                    ${teamHtml}
                </div>
            </div>
        </div>
    `;

  const html = `
        <a href="#/project/${project.slug}" class="event-card status-${project.status}">
            <div class="status-ribbon">
                <div class="${status.class}">
                    ${status.pulse ? '<span class="pulse-dot"></span>' : ''}
                    ${status.icon ? `<span class="icon">${status.icon}</span>` : ''}
                    <span>${status.label}</span>
                </div>
            </div>

            ${project.image ? `
                <div class="card-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">
                </div>
            ` : ''}
            
            <div class="card-content">
                <div class="date-range">
                    <span class="icon">${type.icon}</span>
                    ${type.label}
                </div>

                <div class="event-title-wrapper">
                    ${isTextOverflowing ? `
                        <div class="marquee-container">
                            <div class="marquee">
                                <div class="event-title">${project.title}</div>
                            </div>
                        </div>
                    ` : `
                        <div class="event-title">${project.title}</div>
                    `}
                </div>

                ${project.description ? `
                  <div class="event-description-wrapper">
                      <p class="event-description">${project.description}</p>
                      <span class="read-more" style="display: none;">Baca selengkapnya...</span>
                  </div>
              ` : ''}

                ${teamSection}

                <div class="date-details">
                    <div class="date-detail-item">
                        <p>Mulai</p>
                        <p>${formatFullDate(project.start_date)}</p>
                    </div>
                    <div class="date-detail-item">
                        <p>Selesai</p>
                        <p>${formatFullDate(project.end_date)}</p>
                    </div>
                </div>
            </div>
        </a>
    `;

  return html;
}

function initializeCards() {
  const container = document.getElementById('eventCardsContainer');
  if (!container) return;

  const cardsHTML = sampleProjects.map(project => renderProjectCard(project)).join('');
  container.innerHTML = cardsHTML;

  attachWinnersToggleListeners();
}

function attachWinnersToggleListeners() {
  const toggleButtons = document.querySelectorAll('.toggle-winners-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const card = button.closest('.event-card');
      const winnersContent = card.querySelector('.winners-content');
      const chevronIcon = button.querySelector('.chevron-icon');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        winnersContent.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Tampilkan pemenang');
        chevronIcon.classList.remove('up');
        chevronIcon.classList.add('down');
      } else {
        winnersContent.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Sembunyikan pemenang');
        chevronIcon.classList.remove('down');
        chevronIcon.classList.add('up');
      }
    });
  });
}

function handleResponsive() {
  const isMobile = window.innerWidth < 768;
  const winnersContents = document.querySelectorAll('.winners-content');

  winnersContents.forEach(content => {
    const card = content.closest('.event-card');
    if (card.classList.contains('status-completed')) {
      if (isMobile) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
        const button = card.querySelector('.toggle-winners-btn');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResponsive, 250);
});

document.addEventListener('DOMContentLoaded', initializeCards);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCards);
  document.addEventListener('DOMContentLoaded', initReadMore);
} else {
  initializeCards();
  initReadMore();
}



const links = document.querySelectorAll(".nav-link");

// Ambil path terakhir
let currentPage = window.location.pathname.split("/").pop();

// Kalau kosong, anggap index
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


// Trigger function 'Baca selengkapnya...'
function initReadMore() {
  document.querySelectorAll('.event-description').forEach(desc => {
    const readMore = desc.parentElement.querySelector('.read-more');

    if (!readMore) return;

    if (desc.scrollHeight > desc.clientHeight) {
      readMore.style.display = 'inline';

      readMore.addEventListener('click', () => {
        desc.classList.toggle('expanded');

        readMore.textContent = desc.classList.contains('expanded')
          ? 'Tutup'
          : 'Baca selengkapnya...';
      });
    }
  });
}
