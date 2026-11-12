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
    'Toilet': 'Mag-CR / Banyo',
    'Watch TV': 'Manood ng TV',
    'Take a Bath': 'Maligo',
    'Music': 'Makinig sa musika',
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
            if (node.parentElement && node.parentElement.id === 'sentencePrefixBadge') continue;

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

// Converts abbreviations & symbols into natural Filipino phonetics for TTS audio only
function applyFilipinoSpeechPhonetics(text) {
    return text
        .replace(/Mag-CR\s*\/\s*Banyo/gi, 'Mag si ar, o banyo')
        .replace(/CR\s*\/\s*Banyo/gi, 'si ar, o banyo')
        .replace(/\bMag-CR\b/gi, 'Mag si ar')
        .replace(/\bCR\b/g, 'si ar')
        .replace(/\bTV\b/gi, 'ti vi')
        .replace(/\s+\/\s+/g, ' o ');
}

// Converts "8:00 AM" or "8:30 PM" into phonetic English words so BlessicaNeural
// reads time in the natural English way instead of translating digits into Tagalog
function timeToEnglishPhonetics(timeStr) {
    const match = String(timeStr).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return timeStr;

    const hour = parseInt(match[1], 10);
    const min = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase() === 'PM' ? 'pi em' : 'ey em';

    const ones = [
        '', 'wan', 'tu', 'tri', 'for', 'fayv',
        'siks', 'seven', 'eyt', 'nayn', 'ten',
        'ileven', 'twelv', 'tertin', 'fortin', 'fiftin',
        'sikstin', 'seventin', 'eytin', 'nayntin'
    ];
    const tens = ['', '', 'twenti', 'terti', 'forti', 'fifti'];

    const hourWord = ones[hour] || String(hour);
    let minWord = '';

    if (min === 0) {
        minWord = ''; // e.g., "8:00 AM" -> "eyt ey em"
    } else if (min < 10) {
        minWord = `oh ${ones[min]}`; // e.g., "8:05 AM" -> "eyt oh fayv ey em"
    } else if (min < 20) {
        minWord = ones[min]; // e.g., "8:15 AM" -> "eyt fiftin ey em"
    } else {
        const tenPart = tens[Math.floor(min / 10)];
        const onePart = min % 10 !== 0 ? ` ${ones[min % 10]}` : '';
        minWord = `${tenPart}${onePart}`; // e.g., "8:30 AM" -> "eyt terti ey em"
    }

    return minWord ? `${hourWord} ${minWord} ${ampm}` : `${hourWord} ${ampm}`;
}

// Automatically localizes spoken phrases when Filipino mode is active
function localizeSpokenPhrase(rawText, isFil) {
    const text = String(rawText).trim();
    if (!isFil) return text;

    let result = uiDictionaryFil[text] || text;

    // Pattern 1: "<Task Name> at <Time>" (from Child View & Preview speaker button)
    const atMatch = text.match(/^(.+)\s+at\s+(\d{1,2}:\d{2}\s*(?:AM|PM))$/i);
    if (atMatch) {
        const taskName = t(atMatch[1].trim());
        const spokenTime = timeToEnglishPhonetics(atMatch[2].trim());
        result = `${taskName}, ${spokenTime}`;
    }

    // Pattern 2: "Great job finishing <Task Name>!" (from Child View completion)
    const doneMatch = text.match(/^Great job finishing\s+(.+)!$/i);
    if (doneMatch) {
        const taskName = t(doneMatch[1].trim());
        result = `Magaling! Natapos mo na ang ${taskName}!`;
    }

    // Pattern 3: Visual Timer alerts
    if (text === 'Almost time! Wrap up soon.') {
        result = 'Malapit nang matapos ang oras!';
    }
    const timeUpMatch = text.match(/^Time is up for\s+(.+)!$/i);
    if (timeUpMatch) {
        const taskName = t(timeUpMatch[1].trim());
        result = `Tapos na ang oras para sa ${taskName}!`;
    }

    return applyFilipinoSpeechPhonetics(result);
}

function speakText(text, forceSpeak = false, overrideLang = null, overrideRate = null) {
    const prefs = JSON.parse(localStorage.getItem('vs_prefs') || '{}');
    if (!forceSpeak && prefs.sound === false) return;
    if (!text) return;

    const isFil = overrideLang !== null
        ? (overrideLang === 'fil' || overrideLang === 'fil-PH')
        : (getCurrentLang() === 'fil');
    const voiceCfg = JSON.parse(localStorage.getItem('vs_voice_cfg') || '{}');
    const targetLang = isFil ? 'fil-PH' : 'en-US';
    const targetRate = overrideRate !== null
        ? parseFloat(overrideRate)
        : parseFloat(voiceCfg.rate || 0.9);
    const spokenText = localizeSpokenPhrase(text, isFil);

    if (currentTtsAudio) {
        currentTtsAudio.pause();
        currentTtsAudio = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    // Stream natural female neural voice (Blessica for Tagalog / Jenny for US English)
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
            v.name.includes('Jenny') ||
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

function hasCustomPhoto(child) {
    return Boolean(
        child &&
        child.photo_url &&
        child.photo_url.trim() !== '' &&
        !child.photo_url.includes('4140/41400')
    );
}

function getChildAvatarHTML(child, size = 68) {
    if (hasCustomPhoto(child)) {
        return `<img src="${child.photo_url}" alt="${child.name}" class="rounded-circle border flex-shrink-0" style="width:${size}px; height:${size}px; object-fit:cover; background:#fff;">`;
    }
    const isFemale = child && child.gender === 'Female';
    const iconClass = isFemale ? 'fa-child-dress' : 'fa-child';
    const bgColor = isFemale ? '#FDEDEC' : '#EBF4FC';
    const iconColor = isFemale ? '#EC407A' : '#4A90D9';
    const fontSize = Math.round(size * 0.48);

    return `
        <div class="rounded-circle border border-2 border-white d-inline-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
             style="width:${size}px; height:${size}px; background:${bgColor}; color:${iconColor}; font-size:${fontSize}px;">
            <i class="fa-solid ${iconClass}"></i>
        </div>`;
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
