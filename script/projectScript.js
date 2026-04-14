const sampleProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    type: "fullstack",
    start_date: "2024-01-15T00:00:00Z",
    end_date: "2024-03-31T23:59:59Z",
    description: "Platform e-commerce lengkap dengan fitur katalog produk, keranjang belanja, pembayaran, dan dashboard admin untuk mengelola produk dan pesanan.",
    image: "https://i.ytimg.com/vi/apn6JrbSMCg/maxresdefault.jpg",
    status: "completed",
    team: [
      { id: 1, name: "Nabil Faaruq", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 2, name: "Nabil Santoso", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 3, name: "Nabil Henggar", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
    ]
  },
  {
    id: 2,
    title: "Mobile Travel App",
    slug: "mobile-travel-app",
    type: "mobile",
    start_date: "2024-02-01T00:00:00Z",
    end_date: "2024-05-15T23:59:59Z",
    description: "Aplikasi mobile untuk booking perjalanan dengan fitur pencarian destinasi, pemesanan tiket, dan manajemen itinerary yang intuitif.",
    image: "https://images.unsplash.com/photo-1512941691920-25bda36ae95e?w=400&h=250&fit=crop",
    status: "in_progress",
    team: [
      { id: 1, name: "Nabil Faaruq", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 2, name: "Nabil Santoso", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 3, name: "Nabil Henggar", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
    ]
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    type: "web",
    start_date: "2024-03-01T00:00:00Z",
    end_date: "2024-06-30T23:59:59Z",
    description: "Dashboard analytics real-time untuk visualisasi data dengan charts, filters, dan export functionality untuk reporting yang komprehensif.",
    image: "https://i.ytimg.com/vi/apn6JrbSMCg/maxresdefault.jpg",
    status: "in_progress",
    team: [
      { id: 1, name: "Nabil Faaruq", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 2, name: "Nabil Santoso", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 3, name: "Nabil Henggar", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
    ]
  },
  {
    id: 4,
    title: "Social Media Platform",
    slug: "social-media-platform",
    type: "fullstack",
    start_date: "2024-04-01T00:00:00Z",
    end_date: "2024-08-31T23:59:59Z",
    description: "Platform media sosial dengan fitur posting, comments, likes, user profiles, dan real-time notifications untuk engagement maksimal.",
    image: "https://i.ytimg.com/vi/apn6JrbSMCg/maxresdefault.jpg",
    status: "upcoming",
    team: [
      { id: 1, name: "Nabil Faaruq", role: "Backend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 2, name: "Nabil Santoso", role: "Frontend Developer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { id: 3, name: "Nabil Henggar", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
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
                    <p class="event-description">${project.description}</p>
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
} else {
  initializeCards();
}
