const translations = {
    en: {
        dashboard: 'Dashboard',
        schedules: 'Schedule Creator',
        childView: 'Child View',
        progress: 'Progress',
        settings: 'Settings',
        logout: 'Logout'
    },
    fil: {
        dashboard: 'Dashboard',
        schedules: 'Gawaan ng Iskedyul',
        childView: 'Tingnan ng Bata',
        progress: 'Progreso',
        settings: 'Mga Setting',
        logout: 'Mag-logout'
    }
};

function applyAccessibilitySettings() {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    document.body.classList.remove('font-small', 'font-medium', 'font-large', 'high-contrast');

    const fontSize = prefs.fontSize || 'medium';
    document.body.classList.add(`font-${fontSize}`);

    if (prefs.contrast === 'high') {
        document.body.classList.add('high-contrast');
    }

    const lang = prefs.language || 'en';
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
}

function playSuccessSound() {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    if (prefs.sound === false) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24); // G5
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
        // Ignore audio context restrictions if not triggered by user click
    }
}

// Improvement #4: Web Speech API Text-to-Speech for Children
function speakText(text) {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    if (prefs.sound === false || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}

// Improvement #1: Non-Blocking Bootstrap Toast Notifications
function showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'position-fixed bottom-0 end-0 p-3';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }
    const toastEl = document.createElement('div');
    const bgClass = type === 'danger' ? 'bg-danger' : 'bg-success';
    toastEl.className = `toast align-items-center text-white ${bgClass} border-0 show mb-2 shadow`;
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body fw-semibold">
                <i class="fa-solid ${type === 'danger' ? 'fa-circle-exclamation' : 'fa-circle-check'} me-2"></i>${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>`;
    container.appendChild(toastEl);
    setTimeout(() => toastEl.remove(), 3000);
}

// Improvement #2: 24-Hour to 12-Hour AM/PM Formatter
function formatTime12Hr(time24) {
    if (!time24) return '';
    const [h, m] = time24.split(':').map(Number);
    const suffix = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${suffix}`;
}

function renderNavbarAndSidebar(activePage) {
    const user = api.getUser() || { name: 'Caregiver', role: 'Caregiver' };
    const navName = document.getElementById('navUserName');
    const navRole = document.getElementById('navUserRole');
    if (navName) navName.textContent = user.name;
    if (navRole) navRole.textContent = user.role;

    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });

    applyAccessibilitySettings();
}

const DEFAULT_CHILD_AVATARS = {
    Male: "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <defs>
                <clipPath id="circleClipBoy"><circle cx="60" cy="60" r="60"/></clipPath>
                <linearGradient id="bgBoy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#EBF5FB"/>
                    <stop offset="100%" stop-color="#AED6F1"/>
                </linearGradient>
            </defs>
            <g clip-path="url(#circleClipBoy)">
                <rect width="120" height="120" fill="url(#bgBoy)"/>
                <circle cx="60" cy="48" r="28" fill="#4E342E"/>
                <rect x="52" y="74" width="16" height="18" rx="6" fill="#E5B887"/>
                <path d="M52 78 Q60 85 68 78 L68 84 L52 84 Z" fill="#D4A373" opacity="0.6"/>
                <path d="M24 122 C24 93 40 88 60 88 C80 88 96 93 96 122 Z" fill="#F5A623"/>
                <path d="M28 106 L92 106" stroke="#FFFFFF" stroke-width="3" opacity="0.6"/>
                <path d="M38 89 L42 122 L78 122 L82 89 L73 89 L71 103 L49 103 L47 89 Z" fill="#3B82F6"/>
                <circle cx="45" cy="108" r="2.5" fill="#FDE047"/>
                <circle cx="75" cy="108" r="2.5" fill="#FDE047"/>
                <path d="M48 88 Q60 98 72 88" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                <circle cx="33" cy="57" r="7" fill="#F5CBA7"/>
                <circle cx="33" cy="57" r="3.5" fill="#E59866" opacity="0.45"/>
                <circle cx="87" cy="57" r="7" fill="#F5CBA7"/>
                <circle cx="87" cy="57" r="3.5" fill="#E59866" opacity="0.45"/>
                <rect x="35" y="29" width="50" height="52" rx="25" fill="#FAD7A0"/>
                <ellipse cx="44" cy="62" rx="5.5" ry="3.5" fill="#F1948A" opacity="0.5"/>
                <ellipse cx="76" cy="62" rx="5.5" ry="3.5" fill="#F1948A" opacity="0.5"/>
                <path d="M33 52 C31 30 45 21 60 21 C75 21 89 30 87 52 C83 40 73 36 62 39 C50 36 39 41 33 52 Z" fill="#5D4037"/>
                <path d="M35 45 Q47 34 61 41 Q73 35 85 45 Q77 27 60 27 Q43 27 35 45 Z" fill="#6D4C41"/>
                <path d="M57 22 Q61 12 69 17 Q64 21 62 23 Z" fill="#5D4037"/>
            </g>
        </svg>`),
    Female: "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <defs>
                <clipPath id="circleClipGirl"><circle cx="60" cy="60" r="60"/></clipPath>
                <linearGradient id="bgGirl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#FDEDEC"/>
                    <stop offset="100%" stop-color="#F5B7B1"/>
                </linearGradient>
            </defs>
            <g clip-path="url(#circleClipGirl)">
                <rect width="120" height="120" fill="url(#bgGirl)"/>
                <path d="M32 45 C14 42 12 68 25 74 C32 77 36 65 35 55 Z" fill="#4E342E"/>
                <path d="M88 45 C106 42 108 68 95 74 C88 77 84 65 85 55 Z" fill="#4E342E"/>
                <circle cx="32" cy="48" r="5.5" fill="#EC407A"/>
                <circle cx="30" cy="44" r="4" fill="#F48FB1"/>
                <circle cx="88" cy="48" r="5.5" fill="#EC407A"/>
                <circle cx="90" cy="44" r="4" fill="#F48FB1"/>
                <rect x="52" y="74" width="16" height="18" rx="6" fill="#E5B887"/>
                <path d="M52 78 Q60 85 68 78 L68 84 L52 84 Z" fill="#D4A373" opacity="0.6"/>
                <path d="M24 122 C24 93 40 88 60 88 C80 88 96 93 96 122 Z" fill="#EC407A"/>
                <path d="M46 88 C46 98 58 98 60 91 C62 98 74 98 74 88 Z" fill="#FFFFFF"/>
                <circle cx="60" cy="103" r="2.2" fill="#FCE4EC"/>
                <circle cx="60" cy="112" r="2.2" fill="#FCE4EC"/>
                <circle cx="34" cy="57" r="6.5" fill="#F5CBA7"/>
                <circle cx="34" cy="57" r="3" fill="#E59866" opacity="0.45"/>
                <circle cx="86" cy="57" r="6.5" fill="#F5CBA7"/>
                <circle cx="86" cy="57" r="3" fill="#E59866" opacity="0.45"/>
                <rect x="35" y="29" width="50" height="52" rx="25" fill="#FAD7A0"/>
                <ellipse cx="44" cy="62" rx="5.5" ry="3.5" fill="#F1948A" opacity="0.55"/>
                <ellipse cx="76" cy="62" rx="5.5" ry="3.5" fill="#F1948A" opacity="0.55"/>
                <path d="M33 54 C31 29 45 21 60 21 C75 21 89 29 87 54 C82 40 69 36 60 43 C51 36 38 40 33 54 Z" fill="#4E342E"/>
                <path d="M38 43 Q49 32 60 39 Q71 32 82 43 Q73 27 60 27 Q47 27 38 43 Z" fill="#6D4C41"/>
            </g>
        </svg>`)
};

function getChildAvatar(child) {
    if (child && child.photo_url && child.photo_url.trim() !== '' && !child.photo_url.includes('4140/41400')) {
        return child.photo_url;
    }
    const gender = (child && child.gender === 'Female') ? 'Female' : 'Male';
    return DEFAULT_CHILD_AVATARS[gender];
}

document.addEventListener('DOMContentLoaded', () => {
    applyAccessibilitySettings();
});
