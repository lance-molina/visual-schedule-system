const translations = {
    en: {
        dashboard: 'Dashboard',
        schedules: 'Schedule Creator',
        childView: 'Child View',
        talkingBoard: 'Talking Board',
        progress: 'Progress',
        settings: 'Settings',
        logout: 'Logout'
    },
    fil: {
        dashboard: 'Dashboard',
        schedules: 'Gawaan ng Iskedyul',
        childView: 'Para sa Bata',
        talkingBoard: 'Talking Board',
        progress: 'Progreso',
        settings: 'Mga Setting',
        logout: 'Mag-logout'
    }
};

// Natural Filipino (Tagalog) UI + Activities + Talking Board Cards Dictionary
const uiDictionaryFil = {
    // 1. Caregiver Dashboard (dashboard.html)
    'Caregiver Dashboard': 'Dashboard ng Tagapag-alaga',
    'Manage child profiles and daily visual schedules': 'Pamahalaan ang profile at araw-araw na iskedyul ng mga bata',
    'Add New Child': 'Magdagdag ng Bata',
    'Edit Child Profile': 'I-edit ang Profile ng Bata',
    'Total Children': 'Bilang ng Bata',
    'Tasks Completed Today': 'Natapos Ngayong Araw',
    'Upcoming Routines': 'Mga Susunod na Gawain',
    'Child Profiles': 'Profile ng mga Bata',
    'Daily Progress': 'Progreso Ngayong Araw',
    'Schedule': 'Iskedyul',
    'Child Name': 'Pangalan ng Bata',
    'Age': 'Edad',
    'Gender': 'Kasarian',
    'Boy (Male)': 'Lalaki (Boy)',
    'Girl (Female)': 'Babae (Girl)',
    'Boy': 'Lalaki',
    'Girl': 'Babae',
    'Delay Domain': 'Uri ng Developmental Delay',
    'Others (Specify)': 'Iba pa (Tukuyin)',
    'Specify Developmental Delay Domain': 'Tukuyin ang Developmental Delay',
    'Photo / Avatar URL (Optional)': 'Link ng Litrato o Avatar (Opsyonal)',
    'Caregiver / OT Notes': 'Mga Tala ng Tagapag-alaga / OT',
    'Cancel': 'Kanselahin',
    'Save Child Profile': 'I-save ang Profile',

    // 2. Schedule Creator (schedule-creator.html)
    'Visual Schedule Creator': 'Gawaan ng Visual Schedule',
    'Filter by category, then drag activities into the timeline or tap "+" to add': 'Pumili ng kategorya at i-drag ang gawain sa timeline o pindutin ang "+"',
    'Select Child:': 'Pumili ng Bata:',
    'Preview Schedule': 'I-preview ang Iskedyul',
    'Activity Library': 'Listahan ng mga Gawain',
    'Filter by Category': 'Salain ayon sa Kategorya',
    'All Categories (18)': 'Lahat ng Kategorya (18)',
    'Hygiene (Blue)': 'Kalinisan / Hygiene (Asul)',
    'Food / Meals (Green)': 'Pagkain / Meals (Berde)',
    'School / Learning (Yellow)': 'Pag-aaral / School (Dilaw)',
    'Play / Recreation (Purple)': 'Paglalaro / Play (Lila)',
    'hygiene': 'kalinisan',
    'food': 'pagkain',
    'school': 'pag-aaral',
    'play': 'paglalaro',
    'Daily Timeline': 'Iskedyul sa Araw na Ito',
    'Drag activities here or click "+" on any activity': 'I-drag ang mga gawain dito o pindutin ang "+" sa listahan',
    'Task Settings': 'Detalye ng Gawain',
    'Activity Name': 'Pangalan ng Gawain',
    'Category': 'Kategorya',
    'Scheduled Time': 'Oras ng Gawain',
    'Duration (Minutes)': 'Tagal (Minuto)',
    'Audio / Visual Reminder': 'Paalala (Tunog at Visual)',
    'Save Task Settings': 'I-save ang Detalye',
    'Save Schedule': 'I-save ang Iskedyul',
    'Continue Editing': 'Bumalik sa Pag-edit',
    'Switch to Full Child View': 'Buksan ang Para sa Bata',
    'Completed': 'Tapos Na',
    'Pending': 'Hindi Pa Tapos',

    // Visual Schedule Preset & Seeded Activities
    'Brushing Teeth': 'Pagsisipilyo ng Ngipin',
    'Washing Hands': 'Paghuhugas ng Kamay',
    'Taking a Bath': 'Paliligo',
    'Dressing Up': 'Pagbibihis',
    'Toileting': 'Paggamit ng Banyo',
    'Grooming & Hair': 'Pag-aayos at Pagsusuklay',
    'Eating Breakfast': 'Pagkain ng Almusal',
    'Eating Meal': 'Pagkain sa Hapag',
    'Drinking Water': 'Pag-inom ng Tubig',
    'Healthy Fruit Snack': 'Pagkain ng Prutas',
    'School Reading': 'Pagbabasa ng Libro',
    'School Reading Time': 'Oras ng Pagbabasa',
    'Writing & Drawing': 'Pagsusulat at Pagguhit',
    'Puzzle & Sorting': 'Pagbubuo ng Puzzle',
    'Speech Practice': 'Pagsasanay sa Pagsasalita',
    'Pack School Bag': 'Pag-aayos ng Bag',
    'Play with Blocks': 'Paglalaro ng Blocks',
    'Outdoor Ball Play': 'Paglalaro ng Bola',
    'Music & Listening': 'Pakikinig sa Musika',
    'Quiet Rest Time': 'Oras ng Pahinga',

    // 3. Child View & Visual Timer (child-view.html)
    'Visual Timer': 'Visual Timer',
    'Caregiver Mode': 'Mode ng Tagapag-alaga',
    'Tap the speaker, start the visual timer, or tap when finished!': 'Pindutin ang speaker para makinig, buksan ang timer, o pindutin kapag tapos na!',
    'Amazing Job! All Routines Finished!': 'Ang Galing! Tapos na Lahat ng Gawain!',
    'You earned all your stars for today!': 'Nakuha mo na lahat ng stars mo ngayong araw!',
    'No tasks scheduled yet!': 'Wala pang nakatakdang gawain!',
    'Ask a caregiver to add activities in the Schedule Creator.': 'Magpatulong sa tagapag-alaga na magdagdag ng gawain sa Gawaan ng Iskedyul.',
    'Tap When Done': 'Pindutin Kapag Tapos Na',
    'Done!': 'Tapos Na!',
    'Adult Confirmation Required': 'Kailangan ng Kumpirmasyon ng Matanda',
    'Stay in Child View': 'Manatili sa Para sa Bata',
    'Confirm (Adult Exit)': 'Kumpirmahin (Lumabas)',
    'Visual Countdown Timer': 'Visual Countdown Timer',
    'Ready': 'Handa Na',
    'Running...': 'Umaandar...',
    'Paused': 'Naka-pause',
    'Almost time!': 'Malapit nang matapos!',
    'Time is up!': 'Tapos na ang oras!',
    'Start': 'Simulan',
    'Pause': 'I-pause',
    'Reset': 'I-reset',
    'Caregiver Timer Setup': 'Setup ng Timer (Tagapag-alaga)',
    'Reminder text': 'Paalala sa Bata',
    'Icon': 'Icon',
    'Minutes': 'Minuto',
    'Warning (sec)': 'Babala (seg)',
    'Sound cues on': 'May tunog na paalala',
    'Set Timer': 'I-set ang Timer',
    'Save Preset': 'I-save ang Preset',
    'Saved Presets': 'Mga Naka-save na Preset',
    'Time to brush teeth': 'Oras na para magsipilyo',
    'Finish eating meal': 'Tapusin ang pagkain',
    'Pack up toys': 'Ilagay sa ayos ang mga laruan',

    // 4. My Talking Board UI & Default Cards (communication.html)
    'My Talking Board': 'Aking Talking Board',
    'Tap picture cards to speak aloud and express needs': 'Pindutin ang mga card para magsalita at magsabi ng kailangan',
    'Child Board': 'Board ng Bata',
    'Caregiver Tools': 'Tools ng Tagapag-alaga',
    'Food': 'Pagkain',
    'Emotions': 'Damdamin',
    'Activities': 'Gawain',
    'I want': 'Gusto ko ng',
    'I feel': 'Ako ay',
    'Tap any card below...': 'Pumili ng card sa ibaba...',
    'Speak': 'Bigkasin',
    'Add Picture Card': 'Magdagdag ng Picture Card',
    'Word to speak': 'Salitang bibigkasin',
    'Icon (Select Icon or Upload Photo)': 'Icon (Pumili ng Icon o Mag-upload ng Litrato)',
    'Upload own photo': 'Mag-upload ng litrato',
    'Save Card to Board': 'I-save ang Card sa Board',
    'New Category': 'Bagong Kategorya',
    'Add Category': 'Idagdag ang Kategorya',
    'Voice Settings': 'Setting ng Boses',
    'Language': 'Wika',
    'Speed': 'Bilis ng Boses',
    'Test Voice': 'Subukan ang Boses',
    'Reset Board to Defaults': 'Ibalik sa Default ang Board',

    // Talking Board Picture Card Items
    'Water': 'Tubig',
    'Rice': 'Kanin',
    'Milk': 'Gatas',
    'Bread': 'Tinapay',
    'Apple': 'Mansanas',
    'Banana': 'Saging',
    'Snack': 'Meryenda',
    'Play': 'Maglaro',
    'Toilet': 'CR / Banyo',
    'Watch TV': 'Manood ng TV',
    'Take a Bath': 'Maligo',
    'Music': 'Musika',
    'Go Home': 'Umuwi sa Bahay',
    'Happy': 'Masaya',
    'Sad': 'Malungkot',
    'Angry': 'Galit',
    'Sleepy': 'Inaantok',
    'Worried': 'Nag-aalala',
    'Surprised': 'Nagulat',

    // 5. Progress & Analytics (progress.html)
    'Progress & Analytics': 'Progreso at Analytics',
    'Track routine completion rates and behavioral trends': 'Subaybayan ang mga natapos na gawain at progreso ng bata',
    'Today': 'Ngayong Araw',
    'This Week': 'Ngayong Linggo',
    'This Month': 'Ngayong Buwan',
    'Export Report': 'I-download ang Report',
    'Overall Completion Rate': 'Kabuuang Porsyento ng Natapos',
    'Completed Tasks': 'Mga Natapos na Gawain',
    'Pending Tasks': 'Mga Hindi Pa Tapos',
    'Daily Completion by Child': 'Natapos Ngayong Araw bawat Bata',
    'Weekly Completion Trend': 'Lingguhang Progreso',
    'Most & Least Completed Tasks': 'Pinakamadalas at Pinakabihirang Matapos',

    // 6. Settings (settings.html)
    'Profile & Accessibility Settings': 'Mga Setting ng Profile at Accessibility',
    'Customize account details and sensory/interface preferences': 'I-customize ang iyong account, laki ng sulat, kulay, at wika',
    'Profile Settings': 'Setting ng Profile',
    'Full Name': 'Buong Pangalan',
    'Email Address': 'Email Address',
    'Role': 'Tungkulin (Role)',
    'Caregiver / Parent': 'Tagapag-alaga / Magulang',
    'Update Profile': 'I-update ang Profile',
    'Accessibility & Preferences': 'Accessibility at mga Kagustuhan',
    'Font Size': 'Laki ng Sulat (Font Size)',
    'Small (16px)': 'Maliit (16px)',
    'Medium (18px - Recommended)': 'Katamtaman (18px - Inirerekomenda)',
    'Large (21px - High Visibility)': 'Malaki (21px - Mas Madaling Basahin)',
    'Color Contrast': 'Kulay at Contrast',
    'Normal Soft Contrast': 'Normal na Kulay (Soft Contrast)',
    'High Contrast (Dark/Yellow)': 'Mataas na Contrast (Itim at Dilaw)',
    'Interface Language': 'Wika ng Interface',
    'Audio & Notification Toggles': 'Tunog at mga Paalala',
    'Sound Effects On Task Completion': 'Tunog Kapag Natapos ang Gawain',
    'Task Reminder Notifications': 'Abiso para sa Paalala ng Gawain',
    'Save Accessibility Preferences': 'I-save ang mga Kagustuhan'
};

// Reverse lookup (Filipino -> English) so cards/tasks always know their base key
const reverseUiDictionaryFil = {};
Object.entries(uiDictionaryFil).forEach(([en, fil]) => {
    reverseUiDictionaryFil[fil] = en;
});

const placeholderDictionaryFil = {
    'Click a task in the timeline': 'Pumili ng gawain sa timeline',
    'e.g. Apple': 'hal. Mansanas o Tubig',
    'e.g. Toys': 'hal. Mga Laruan',
    'Leave blank for default boy/girl avatar': 'Iwanang blangko para sa default na avatar',
    'Sensory preferences, favorite rewards...': 'Mga tala tungkol sa bata o paboritong reward...',
    'e.g. Down Syndrome, Auditory Processing Delay': 'hal. Down Syndrome, Auditory Processing Delay'
};

// Unified Language Getter ('en' or 'fil')
function getCurrentLang() {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    return prefs.language === 'fil' ? 'fil' : 'en';
}

// Unified Language Setter (keeps Settings & Talking Board Voice Language in sync)
function setAppLanguage(langInput) {
    const isFil = langInput && (langInput === 'fil' || langInput === 'fil-PH');
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    prefs.language = isFil ? 'fil' : 'en';
    localStorage.setItem('vs_prefs', JSON.stringify(prefs));

    const voiceCfg = JSON.parse(localStorage.getItem('vs_voice_cfg') || '{}');
    voiceCfg.lang = isFil ? 'fil-PH' : 'en-US';
    localStorage.setItem('vs_voice_cfg', JSON.stringify(voiceCfg));

    applyAccessibilitySettings();
}

// Translate a single word or phrase based on active language
function t(text) {
    if (!text) return '';
    const trimmed = String(text).trim();
    const lang = getCurrentLang();
    if (lang === 'fil') {
        return uiDictionaryFil[trimmed] || trimmed;
    }
    return reverseUiDictionaryFil[trimmed] || trimmed;
}

let translationObserver = null;

function translateDOMNodes(lang) {
    if (!document.body) return;

    if (translationObserver) {
        translationObserver.disconnect();
    }

    try {
        // 1. Translate data-i18n sidebar attributes
        const dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] && el.textContent !== dict[key]) {
                el.textContent = dict[key];
            }
        });

        // 2. Translate text nodes safely without touching Font Awesome <i> icons
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while ((node = walker.nextNode())) {
            const parentTag = node.parentElement ? node.parentElement.tagName : '';
            if (parentTag === 'SCRIPT' || parentTag === 'STYLE') continue;

            const currentTrimmed = node.nodeValue.trim();
            if (!currentTrimmed) continue;

            if (node._origEn === undefined) {
                if (uiDictionaryFil[currentTrimmed]) {
                    node._origEn = currentTrimmed;
                } else if (reverseUiDictionaryFil[currentTrimmed]) {
                    node._origEn = reverseUiDictionaryFil[currentTrimmed];
                }
            }

            if (node._origEn) {
                const targetText = lang === 'fil' ? (uiDictionaryFil[node._origEn] || node._origEn) : node._origEn;
                if (currentTrimmed !== targetText) {
                    const leadingSpace = node.nodeValue.match(/^\s*/)[0];
                    const trailingSpace = node.nodeValue.match(/\s*$/)[0];
                    node.nodeValue = leadingSpace + targetText + trailingSpace;
                }
            }
        }

        // 3. Translate input placeholders
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
            const currentPh = el.getAttribute('placeholder');
            if (!el.dataset.origPh && placeholderDictionaryFil[currentPh]) {
                el.dataset.origPh = currentPh;
            }
            if (el.dataset.origPh) {
                const targetPh = lang === 'fil'
                    ? (placeholderDictionaryFil[el.dataset.origPh] || el.dataset.origPh)
                    : el.dataset.origPh;
                if (currentPh !== targetPh) {
                    el.setAttribute('placeholder', targetPh);
                }
            }
        });
    } finally {
        if (translationObserver && document.body) {
            translationObserver.observe(document.body, { childList: true, subtree: true });
        }
    }
}

function applyAccessibilitySettings() {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    document.body.classList.remove('font-small', 'font-medium', 'font-large', 'high-contrast');

    const fontSize = prefs.fontSize || 'medium';
    document.body.classList.add(`font-${fontSize}`);

    if (prefs.contrast === 'high') {
        document.body.classList.add('high-contrast');
    }

    const lang = prefs.language === 'fil' ? 'fil' : 'en';
    // Keep vs_voice_cfg.lang synchronized with vs_prefs.language
    const voiceCfg = JSON.parse(localStorage.getItem('vs_voice_cfg') || '{}');
    const expectedVoiceLang = lang === 'fil' ? 'fil-PH' : 'en-US';
    if (voiceCfg.lang !== expectedVoiceLang) {
        voiceCfg.lang = expectedVoiceLang;
        localStorage.setItem('vs_voice_cfg', JSON.stringify(voiceCfg));
    }

    translateDOMNodes(lang);
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

let currentTtsAudio = null;

// Automatically localizes spoken phrases when Filipino mode is active
function localizeSpokenPhrase(rawText, isFil) {
    const text = String(rawText).trim();
    if (!isFil) return text;

    if (uiDictionaryFil[text]) return uiDictionaryFil[text];

    // Pattern 1: "<Task Name> at <Time>" (from Child View & Preview speaker button)
    const atMatch = text.match(/^(.+)\s+at\s+(\d{1,2}:\d{2}\s*(?:AM|PM))$/i);
    if (atMatch) {
        const taskName = t(atMatch[1].trim());
        return `${taskName}, ${atMatch[2]}`;
    }

    // Pattern 2: "Great job finishing <Task Name>!" (from Child View completion)
    const doneMatch = text.match(/^Great job finishing\s+(.+)!$/i);
    if (doneMatch) {
        const taskName = t(doneMatch[1].trim());
        return `Magaling! Natapos mo na ang ${taskName}!`;
    }

    // Pattern 3: Visual Timer alerts
    if (text === 'Almost time! Wrap up soon.') {
        return 'Malapit nang matapos ang oras!';
    }
    const timeUpMatch = text.match(/^Time is up for\s+(.+)!$/i);
    if (timeUpMatch) {
        const taskName = t(timeUpMatch[1].trim());
        return `Tapos na ang oras para sa ${taskName}!`;
    }

    return text;
}

function speakText(text, forceSpeak = false) {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    if (!forceSpeak && prefs.sound === false) return;
    if (!text) return;

    const isFil = getCurrentLang() === 'fil';
    const voiceCfg = JSON.parse(localStorage.getItem('vs_voice_cfg') || '{}');
    const targetLang = isFil ? 'fil-PH' : 'en-US';
    const targetRate = parseFloat(voiceCfg.rate || 0.9);
    const spokenText = localizeSpokenPhrase(text, isFil);

    if (currentTtsAudio) {
        currentTtsAudio.pause();
        currentTtsAudio = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    // Stream natural Filipina female neural voice (Blessica / Rosa) from Flask backend
    const ttsUrl = `${API_BASE}/tts?text=${encodeURIComponent(spokenText)}&lang=${encodeURIComponent(targetLang)}&rate=${targetRate}`;
    currentTtsAudio = new Audio(ttsUrl);
    currentTtsAudio.play().catch(() => {
        if (!('speechSynthesis' in window)) return;
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.rate = targetRate;
        utterance.pitch = 1.1;
        utterance.lang = targetLang;

        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(v =>
            v.name.includes('Blessica') ||
            v.name.includes('Rosa') ||
            v.name.includes('Zira') ||
            v.name.toLowerCase().includes('female')
        );
        if (femaleVoice) utterance.voice = femaleVoice;
        window.speechSynthesis.speak(utterance);
    });
}

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

    const sidebarNav = document.querySelector('.sidebar .nav');
    if (sidebarNav && !sidebarNav.querySelector('a[href="communication.html"]')) {
        const childViewLink = sidebarNav.querySelector('a[href="child-view.html"]');
        const commLink = document.createElement('a');
        commLink.className = 'nav-link';
        commLink.href = 'communication.html';
        commLink.innerHTML = '<i class="fa-solid fa-comments"></i> <span data-i18n="talkingBoard">Talking Board</span>';
        if (childViewLink && childViewLink.nextSibling) {
            sidebarNav.insertBefore(commLink, childViewLink.nextSibling);
        } else {
            sidebarNav.appendChild(commLink);
        }
    }

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
    translationObserver = new MutationObserver(() => {
        const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
        if (prefs.language === 'fil') {
            translateDOMNodes('fil');
        }
    });

    applyAccessibilitySettings();
});
