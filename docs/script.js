// ========== STORAGE KEYS ==========
const STORAGE_KEYS = {
  subjects: 'notenmanager_data',
  settings: 'notenmanager_settings',
  calendar: 'notenmanager_calendar'
};

// ========== STATE ==========
let subjects = [];
let calendarEvents = [];
let settings = {
  lang: 'de',
  showDate: true,
  gradingSystem: 'grades',
  targetAverage: 2,
  theme: 'dark',
  currentGrade: 10
};

let currentCalendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let selectedCalendarDate = formatISODate(new Date());

// ========== THEMES ==========
const themes = {
  dark: {
    '--bg-dark': '#0a0f1f',
    '--bg-deep': '#0d1117',
    '--card-bg': '#1a1f2e',
    '--card-alt': '#232b3d',
    '--card-border': '#2d3748',
    '--primary': '#6366f1',
    '--primary-hover': '#4f46e5',
    '--secondary': '#8b5cf6'
  },
  light: {
    '--bg-dark': '#f9fafb',
    '--bg-deep': '#f3f4f6',
    '--card-bg': '#ffffff',
    '--card-alt': '#f3f4f6',
    '--card-border': '#e5e7eb',
    '--primary': '#4f46e5',
    '--primary-hover': '#4338ca',
    '--secondary': '#7c3aed'
  },
  neon: {
    '--bg-dark': '#0a0a0f',
    '--bg-deep': '#0f0f1a',
    '--card-bg': '#1a1a2e',
    '--card-alt': '#16213e',
    '--card-border': '#00d4ff',
    '--primary': '#00ff88',
    '--primary-hover': '#00dd7f',
    '--secondary': '#ff006e'
  },
  ocean: {
    '--bg-dark': '#0f1419',
    '--bg-deep': '#131b26',
    '--card-bg': '#1a2332',
    '--card-alt': '#243147',
    '--card-border': '#2a5f7f',
    '--primary': '#00d4ff',
    '--primary-hover': '#00b8cc',
    '--secondary': '#00ff88'
  },
  forest: {
    '--bg-dark': '#0d1a0f',
    '--bg-deep': '#111f12',
    '--card-bg': '#1a2a1d',
    '--card-alt': '#243729',
    '--card-border': '#2d5a34',
    '--primary': '#10b981',
    '--primary-hover': '#059669',
    '--secondary': '#34d399'
  },
  sunset: {
    '--bg-dark': '#1a0f0a',
    '--bg-deep': '#1f1310',
    '--card-bg': '#2a1810',
    '--card-alt': '#3d2518',
    '--card-border': '#5a3a28',
    '--primary': '#f97316',
    '--primary-hover': '#ea580c',
    '--secondary': '#fb923c'
  },
  cyberpunk: {
    '--bg-dark': '#0d0221',
    '--bg-deep': '#16003d',
    '--card-bg': '#1e1447',
    '--card-alt': '#2d1b69',
    '--card-border': '#5a21b5',
    '--primary': '#d946ef',
    '--primary-hover': '#c026d3',
    '--secondary': '#06b6d4'
  },
  lavender: {
    '--bg-dark': '#1a0d2e',
    '--bg-deep': '#231a3d',
    '--card-bg': '#2d1b4e',
    '--card-alt': '#3d2860',
    '--card-border': '#6d4c8f',
    '--primary': '#a78bfa',
    '--primary-hover': '#8b5cf6',
    '--secondary': '#c4b5fd'
  }
};

// ========== TRANSLATIONS ==========
const translations = {
  de: {
    menuSettings: 'Einstellungen',
    menuStats: 'Statistik',
    menuAbout: 'Über NotenManager',
    appTitle: 'NotenManager',
    overallAverage: 'Gesamtdurchschnitt',
    bestSubject: 'Bestes Fach',
    worstSubject: 'Schwächstes Fach',
    totalGrades: 'Eingetragene Bewertungen',
    addSubject: 'Fach hinzufügen',
    addGrade: 'Bewertung hinzufügen',
    searchPlaceholder: 'Fach suchen...',
    sortNameAsc: 'Name (A-Z)',
    sortNameDesc: 'Name (Z-A)',
    sortAvgAsc: 'Durchschnitt (beste zuerst)',
    sortAvgDesc: 'Durchschnitt (schlechteste zuerst)',
    sortFav: 'Nur Favoriten',
    clearAll: 'Alle Daten löschen',
    back: '← Zurück',
    settingsTitle: 'Einstellungen',
    languageTitle: '🌐 Sprache',
    selectLanguage: 'Sprache auswählen:',
    displayTitle: '📅 Anzeige',
    showDateLabel: 'Datum bei Bewertungen anzeigen',
    gradingSystemTitle: '🎓 Bewertungssystem',
    gradingSystemGrades: 'Noten (1–6)',
    gradingSystemPoints: 'Punkte (0–15)',
    targetAverageLabel: 'Ziel-Durchschnitt',
    statsTitle: 'Statistik',
    schoolOverviewTitle: 'Schulübersicht',
    addEvent: '+ Termin',
    schoolBySubjectTitle: 'Fachübersicht',
    sortAlphabetic: 'Alphabetisch',
    sortBest: 'Bester Durchschnitt',
    sortWorst: 'Schlechtester Durchschnitt',
    dayEventsTitle: 'Termine am ausgewählten Tag',
    addEventTitle: 'Neuen Termin hinzufügen',
    eventTitleLabel: 'Titel:',
    eventSubjectLabel: 'Fach:',
    eventTypeLabel: 'Typ:',
    eventDateLabel: 'Datum:',
    eventDescriptionLabel: 'Beschreibung (optional):',
    aboutTitle: 'Über NotenManager',
    aboutText: 'Die App hilft dir dabei, Fächer, Bewertungen und schulische Termine übersichtlich zu verwalten.',
    aboutSystem: 'Aktuelles Bewertungssystem',
    aboutVersion: 'Version',
    close: 'Schließen',
    subjectsCount: 'Fächer',
    gradesCount: 'Bewertungen',
    addSubjectTitle: 'Neues Fach hinzufügen',
    editSubjectTitle: 'Fach bearbeiten',
    subjectNameLabel: 'Name des Fachs:',
    addGradeTitle: 'Bewertung hinzufügen',
    editGradeTitle: 'Bewertung bearbeiten',
    selectSubjectLabel: 'Fach auswählen:',
    gradeValueLabel: 'Bewertung (1 bis 6):',
    gradeWeightLabel: 'Gewichtung:',
    gradeDateLabel: 'Datum:',
    cancel: 'Abbrechen',
    save: 'Speichern',
    noGrades: 'Keine Bewertungen vorhanden',
    noSubjects: 'Keine Fächer vorhanden.',
    weight: 'Gewichtung',
    avgLabel: 'Durchschnitt:',
    confirmDeleteSubject: 'Möchtest du dieses Fach inklusive aller Bewertungen wirklich löschen?',
    confirmClearAll: 'Möchtest du WIRKLICH alle Fächer und Bewertungen löschen?',
    alertNoSubjects: 'Bitte erstelle zuerst mindestens ein Fach.',
    alertInvalidGrade: '⚠️ Bitte gib eine gültige Schulnote von 1 bis 6 ein.',
    alertInvalidPoints: '⚠️ Bitte gib eine gültige Punktzahl von 0 bis 15 ein.',
    alertInvalidTarget: '⚠️ Bitte gib einen gültigen Zielwert für das gewählte Bewertungssystem ein.',
    alertInvalidWeight: '⚠️ Bitte gib eine gültige Gewichtung größer als 0 ein.',
    targetAchieved: '✅ Zieldurchschnitt erreicht!',
    targetStatus: '🎯 Ziel:',
    yearDevelopmentTitle: '📈 Jahresentwicklung'
  },
  en: {
    menuSettings: 'Settings',
    menuStats: 'Statistics',
    menuAbout: 'About NotenManager',
    appTitle: 'NotenManager',
    overallAverage: 'Overall average',
    bestSubject: 'Best subject',
    worstSubject: 'Weakest subject',
    totalGrades: 'Recorded assessments',
    addSubject: '+ Add subject',
    addGrade: '+ Add assessment',
    searchPlaceholder: 'Search subject...',
    sortNameAsc: 'Name (A-Z)',
    sortNameDesc: 'Name (Z-A)',
    sortAvgAsc: 'Average (best first)',
    sortAvgDesc: 'Average (weakest first)',
    sortFav: 'Favorites only',
    clearAll: 'Delete all data',
    back: '← Back',
    settingsTitle: 'Settings',
    languageTitle: '🌐 Language',
    selectLanguage: 'Select language:',
    displayTitle: '📅 Display',
    showDateLabel: 'Show date on assessments',
    gradingSystemTitle: '🎓 Grading system',
    gradingSystemGrades: 'Grades (1–6)',
    gradingSystemPoints: 'Points (0–15)',
    targetAverageLabel: 'Target average',
    statsTitle: 'Statistics',
    schoolOverviewTitle: 'School overview',
    addEvent: '+ Add event',
    schoolBySubjectTitle: 'Subject overview',
    sortAlphabetic: 'Alphabetical',
    sortBest: 'Best average',
    sortWorst: 'Worst average',
    dayEventsTitle: 'Events on selected day',
    addEventTitle: 'Add new event',
    eventTitleLabel: 'Title:',
    eventSubjectLabel: 'Subject:',
    eventTypeLabel: 'Type:',
    eventDateLabel: 'Date:',
    eventDescriptionLabel: 'Description (optional):',
    aboutTitle: 'About NotenManager',
    aboutText: 'This app helps you keep subjects, assessments and school events in a clear overview.',
    aboutSystem: 'Current grading system',
    aboutVersion: 'Version',
    close: 'Close',
    subjectsCount: 'Subjects',
    gradesCount: 'Assessments',
    addSubjectTitle: 'Add new subject',
    editSubjectTitle: 'Edit subject',
    subjectNameLabel: 'Subject name:',
    addGradeTitle: 'Add assessment',
    editGradeTitle: 'Edit assessment',
    selectSubjectLabel: 'Select subject:',
    gradeValueLabel: 'Assessment (1 to 6):',
    gradeWeightLabel: 'Weighting:',
    gradeDateLabel: 'Date:',
    cancel: 'Cancel',
    save: 'Save',
    noGrades: 'No assessments yet',
    noSubjects: 'No subjects available.',
    weight: 'Weight',
    avgLabel: 'Average:',
    confirmDeleteSubject: 'Do you want to delete this subject and all of its assessments?',
    confirmClearAll: 'Do you really want to delete all subjects and assessments?',
    alertNoSubjects: 'Please create at least one subject first.',
    alertInvalidGrade: '⚠️ Please enter a valid school grade from 1 to 6.',
    alertInvalidPoints: '⚠️ Please enter a valid score from 0 to 15.',
    alertInvalidTarget: '⚠️ Please enter a valid target value for the selected grading system.',
    alertInvalidWeight: '⚠️ Please enter a valid weight larger than 0.',
    targetAchieved: '✅ Target average reached!',
    targetStatus: '🎯 Target:',
    yearDevelopmentTitle: '📈 Year development'
  }
};

// ========== DOM REFS ==========
const refs = {
  mainView: document.getElementById('main-view'),
  settingsView: document.getElementById('settings-view'),
  statsView: document.getElementById('stats-view'),
  dropdownMenu: document.getElementById('dropdown-menu'),
  menuToggle: document.getElementById('menu-toggle'),
  menuOptSettings: document.getElementById('menu-opt-settings'),
  menuOptStats: document.getElementById('menu-opt-stats'),
  menuOptAbout: document.getElementById('menu-opt-about'),
  btnBackFromSettings: document.getElementById('btn-back-from-settings'),
  btnBackFromStats: document.getElementById('btn-back-from-stats'),
  btnAddSubject: document.getElementById('btn-add-subject'),
  btnAddGrade: document.getElementById('btn-add-grade'),
  btnAddEvent: document.getElementById('btn-add-event'),
  btnClearAll: document.getElementById('btn-clear-all'),
  btnPrevMonth: document.getElementById('btn-prev-month'),
  btnNextMonth: document.getElementById('btn-next-month'),
  subjectModal: document.getElementById('subject-modal'),
  gradeModal: document.getElementById('grade-modal'),
  eventModal: document.getElementById('event-modal'),
  aboutModal: document.getElementById('about-modal'),
  subjectForm: document.getElementById('subject-form'),
  gradeForm: document.getElementById('grade-form'),
  eventForm: document.getElementById('event-form'),
  subjectContainer: document.getElementById('subjects-container'),
  searchInput: document.getElementById('search-input'),
  sortSelect: document.getElementById('sort-select'),
  languageSelect: document.getElementById('language-select'),
  toggleShowDate: document.getElementById('toggle-show-date'),
  overallAverage: document.getElementById('overall-average'),
  bestSubject: document.getElementById('best-subject'),
  worstSubject: document.getElementById('worst-subject'),
  totalGrades: document.getElementById('total-grades'),
  targetStatus: document.getElementById('target-status'),
  targetAverageInput: document.getElementById('target-average-input'),
  statsOverallAverage: document.getElementById('stats-overall-average'),
  statsTargetStatus: document.getElementById('stats-target-status'),
  statsTargetInternal: document.getElementById('stats-target-internal'),
  statsSubjectCount: document.getElementById('stats-subject-count'),
  statsGradeCount: document.getElementById('stats-grade-count'),
  nextEventsList: document.getElementById('next-events-list'),
  subjectOverviewSort: document.getElementById('subject-overview-sort'),
  subjectOverviewList: document.getElementById('subject-overview-list'),
  calendarGrid: document.getElementById('calendar-grid'),
  calendarMonthLabel: document.getElementById('calendar-month-label'),
  selectedDayEvents: document.getElementById('selected-day-events'),
  aboutSystemValue: document.getElementById('about-system-value'),
  yearGraph: document.getElementById('year-graph')
};

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  // Migration: Alte Daten (ohne Klassen) zu Klasse 10 migrieren
  const oldData = localStorage.getItem(STORAGE_KEYS.subjects);
  if (oldData && !localStorage.getItem(`${STORAGE_KEYS.subjects}_grade10`)) {
    localStorage.setItem(`${STORAGE_KEYS.subjects}_grade10`, oldData);
  }
  
  const oldCalendar = localStorage.getItem(STORAGE_KEYS.calendar);
  if (oldCalendar && !localStorage.getItem(`${STORAGE_KEYS.calendar}_grade10`)) {
    localStorage.setItem(`${STORAGE_KEYS.calendar}_grade10`, oldCalendar);
  }

  loadSettings();
  loadData();
  loadCalendar();
  bindEvents();
  applyLanguage();
  render();
}

// ========== EVENT BINDING ==========
function bindEvents() {
  // Menu
  refs.menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    refs.dropdownMenu.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!refs.dropdownMenu.contains(event.target) && event.target !== refs.menuToggle) {
      refs.dropdownMenu.classList.remove('open');
    }
  });

  // Menu items
  refs.menuOptSettings.addEventListener('click', () => {
    refs.dropdownMenu.classList.remove('open');
    showSettingsView();
  });

  refs.menuOptStats.addEventListener('click', () => {
    refs.dropdownMenu.classList.remove('open');
    showStatsView();
  });

  refs.menuOptAbout.addEventListener('click', () => {
    refs.dropdownMenu.classList.remove('open');
    refs.aboutSystemValue.textContent = settings.gradingSystem === 'points' ? 'Punkte (0–15)' : 'Noten (1–6)';
    refs.aboutModal.classList.add('open');
  });

  // Back buttons
  refs.btnBackFromSettings.addEventListener('click', () => showMainView());
  refs.btnBackFromStats.addEventListener('click', () => showMainView());

  // Add buttons
  refs.btnAddSubject.addEventListener('click', () => openSubjectModal());
  refs.btnAddGrade.addEventListener('click', () => openGradeModal());
  refs.btnAddEvent.addEventListener('click', () => openEventModal());
  refs.btnClearAll.addEventListener('click', clearAllData);

  // Calendar navigation
  refs.btnPrevMonth.addEventListener('click', () => {
    currentCalendarMonth = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  refs.btnNextMonth.addEventListener('click', () => {
    currentCalendarMonth = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  refs.subjectOverviewSort.addEventListener('change', renderSubjectOverview);

  // Settings
  refs.languageSelect.addEventListener('change', (event) => {
    settings.lang = event.target.value;
    saveSettings();
    applyLanguage();
    render();
  });

  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.addEventListener('change', (event) => {
      settings.theme = event.target.value;
      saveSettings();
      applyTheme();
    });
  }

  const gradeSelect = document.getElementById('grade-select');
  if (gradeSelect) {
    gradeSelect.addEventListener('change', (event) => {
      const newGrade = Number(event.target.value);
      if (newGrade !== settings.currentGrade) {
        settings.currentGrade = newGrade;
        saveSettings();
        loadData();
        loadCalendar();
        render();
      }
    });
  }

  refs.toggleShowDate.addEventListener('change', (event) => {
    settings.showDate = event.target.checked;
    saveSettings();
    render();
  });

  document.querySelectorAll('input[name="grading-system"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      settings.gradingSystem = radio.value;
      settings.targetAverage = getGradingSystemMeta().defaultTarget;
      saveSettings();
      updateTargetInput();
      render();
    });
  });

  refs.targetAverageInput.addEventListener('change', (event) => {
    const meta = getGradingSystemMeta();
    const inputValue = Number(event.target.value);
    if (!Number.isInteger(inputValue) || inputValue < meta.min || inputValue > meta.max) {
      alert(translations[settings.lang].alertInvalidTarget);
      event.target.value = settings.targetAverage;
      return;
    }
    settings.targetAverage = inputValue;
    saveSettings();
    render();
  });

  // Forms
  refs.subjectForm.addEventListener('submit', handleSubjectSubmit);
  refs.gradeForm.addEventListener('submit', handleGradeSubmit);
  refs.eventForm.addEventListener('submit', handleEventSubmit);

  // Search & sort
  refs.searchInput.addEventListener('input', renderSubjectList);
  refs.sortSelect.addEventListener('change', renderSubjectList);

  // Modal close buttons
  document.getElementById('btn-close-subject-modal').addEventListener('click', closeModals);
  document.getElementById('btn-close-grade-modal').addEventListener('click', closeModals);
  document.getElementById('btn-close-event-modal').addEventListener('click', closeModals);
  document.getElementById('btn-close-about-modal').addEventListener('click', closeModals);
}

// ========== VIEW NAVIGATION ==========
function showMainView() {
  refs.mainView.classList.remove('view-hidden');
  refs.settingsView.classList.add('view-hidden');
  refs.statsView.classList.add('view-hidden');
}

function showSettingsView() {
  refs.mainView.classList.add('view-hidden');
  refs.statsView.classList.add('view-hidden');
  refs.settingsView.classList.remove('view-hidden');
}

function showStatsView() {
  refs.mainView.classList.add('view-hidden');
  refs.settingsView.classList.add('view-hidden');
  refs.statsView.classList.remove('view-hidden');
  renderStatistics();
}

// ========== STORAGE ==========
function loadSettings() {
  const stored = localStorage.getItem(STORAGE_KEYS.settings);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      settings = {
        ...settings,
        ...parsed,
        lang: parsed.lang || 'de',
        showDate: parsed.showDate !== false,
        gradingSystem: parsed.gradingSystem === 'points' ? 'points' : 'grades',
        theme: parsed.theme || 'dark',
        currentGrade: Math.min(Math.max(Number(parsed.currentGrade) || 10, 1), 13),
        targetAverage: Number.isInteger(Number(parsed.targetAverage)) ? Number(parsed.targetAverage) : getGradingSystemMeta().defaultTarget
      };
    } catch (error) {
      console.error('Settings load error:', error);
    }
  }

  const meta = getGradingSystemMeta();
  settings.targetAverage = clampNumber(settings.targetAverage, meta.min, meta.max, meta.defaultTarget);
  refs.languageSelect.value = settings.lang;
  
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.value = settings.theme;
  }

  const gradeSelect = document.getElementById('grade-select');
  if (gradeSelect) {
    gradeSelect.value = settings.currentGrade;
  }
  
  refs.toggleShowDate.checked = settings.showDate;
  document.querySelectorAll('input[name="grading-system"]').forEach((radio) => {
    radio.checked = radio.value === settings.gradingSystem;
  });
  refs.targetAverageInput.value = settings.targetAverage;
  
  applyTheme();
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

function loadData() {
  const gradeDataKey = `${STORAGE_KEYS.subjects}_grade${settings.currentGrade}`;
  const stored = localStorage.getItem(gradeDataKey);
  if (stored) {
    try {
      subjects = JSON.parse(stored);
    } catch (error) {
      console.error('Data load error:', error);
      subjects = [];
    }
  } else {
    subjects = [];
  }
}

function saveData() {
  const gradeDataKey = `${STORAGE_KEYS.subjects}_grade${settings.currentGrade}`;
  localStorage.setItem(gradeDataKey, JSON.stringify(subjects));
  render();
}

function loadCalendar() {
  const gradeCalendarKey = `${STORAGE_KEYS.calendar}_grade${settings.currentGrade}`;
  const stored = localStorage.getItem(gradeCalendarKey);
  if (!stored) {
    calendarEvents = [];
    return;
  }
  try {
    calendarEvents = JSON.parse(stored);
  } catch (error) {
    console.error('Calendar load error:', error);
    calendarEvents = [];
  }
}

function saveCalendar() {
  const gradeCalendarKey = `${STORAGE_KEYS.calendar}_grade${settings.currentGrade}`;
  localStorage.setItem(gradeCalendarKey, JSON.stringify(calendarEvents));
}

// ========== RENDER ==========
function render() {
  applyLanguage();
  updateTargetInput();
  renderDashboard();
  renderSubjectList();
  renderStatistics();
}

function applyLanguage() {
  const dict = translations[settings.lang];
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      node.placeholder = dict[key];
    }
  });
}

function applyTheme() {
  const themeVars = themes[settings.theme] || themes.dark;
  Object.keys(themeVars).forEach((key) => {
    document.documentElement.style.setProperty(key, themeVars[key]);
  });
}

function updateTargetInput() {
  const meta = getGradingSystemMeta();
  refs.targetAverageInput.min = meta.min;
  refs.targetAverageInput.max = meta.max;
  refs.targetAverageInput.value = settings.targetAverage;
  document.querySelectorAll('input[name="grading-system"]').forEach((radio) => {
    radio.checked = radio.value === settings.gradingSystem;
  });
}

// ========== GRADING SYSTEM ==========
function getGradingSystemMeta() {
  if (settings.gradingSystem === 'points') {
    return { min: 0, max: 15, defaultTarget: 12 };
  }
  return { min: 1, max: 6, defaultTarget: 2 };
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

function formatAverage(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '-';
  const num = Number(value);
  const text = num.toFixed(1).replace('.', ',');
  return settings.gradingSystem === 'points' ? `${text} Punkte` : text;
}

function formatValue(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '-';
  return Number(value).toFixed(0).replace('.', ',');
}

// ========== DASHBOARD ==========
function renderDashboard() {
  const overall = getOverallAverage();
  refs.overallAverage.textContent = overall === null ? '-' : formatAverage(overall);

  const { bestLabel, worstLabel } = getBestWorstSubject();
  refs.bestSubject.textContent = bestLabel;
  refs.worstSubject.textContent = worstLabel;
  refs.totalGrades.textContent = String(getTotalGradeCount());

  if (overall === null) {
    refs.targetStatus.innerHTML = `<span class="status-warning">${translations[settings.lang].targetStatus} ${formatAverage(settings.targetAverage)}</span>`;
    return;
  }

  const reached = overall <= settings.targetAverage;
  refs.targetStatus.innerHTML = reached
    ? `<span class="status-success">${translations[settings.lang].targetAchieved}</span>`
    : `<span class="status-warning">${translations[settings.lang].targetStatus} ${formatAverage(settings.targetAverage)}</span>`;
}

// ========== SUBJECT LIST & CARDS ==========
function renderSubjectList() {
  const dict = translations[settings.lang];
  const searchValue = refs.searchInput.value.trim().toLowerCase();
  const sortValue = refs.sortSelect.value;

  let filtered = subjects.filter((subject) => subject.name.toLowerCase().includes(searchValue));

  if (sortValue === 'fav') {
    filtered = filtered.filter((subject) => subject.isFavorite);
  } else {
    filtered.sort((a, b) => {
      const avgA = calculateSubjectAverage(a.grades) ?? Number.MAX_SAFE_INTEGER;
      const avgB = calculateSubjectAverage(b.grades) ?? Number.MAX_SAFE_INTEGER;
      if (sortValue === 'name-asc') return a.name.localeCompare(b.name);
      if (sortValue === 'name-desc') return b.name.localeCompare(a.name);
      if (sortValue === 'avg-asc') return avgA - avgB;
      if (sortValue === 'avg-desc') return avgB - avgA;
      return 0;
    });
  }

  refs.subjectContainer.innerHTML = '';
  if (!filtered.length) {
    refs.subjectContainer.innerHTML = `<div class="empty-state">${dict.noSubjects}</div>`;
    return;
  }

  filtered.forEach((subject) => {
    const avg = calculateSubjectAverage(subject.grades);
    const avgText = avg === null ? '-' : formatAverage(avg);

    // Grades als Liste - zeige max 5 Noten, dann "mehr"
    const gradeDisplay = subject.grades.length === 0
      ? `<div class="grades-empty">${dict.noGrades}</div>`
      : `
        <div class="grades-grid">
          ${subject.grades.slice(0, 5).map((grade) => {
            const weight = grade.weight > 1 ? `×${grade.weight}` : '';
            const dateStr = settings.showDate && grade.date ? formatDate(grade.date) : '';
            return `
              <div class="grade-badge">
                <div class="grade-value-label">
                  <span class="grade-value-big">${formatValue(grade.value)}</span>
                </div>
                <div class="grade-meta-list">
                  ${weight ? `<div>${weight}</div>` : ''}
                  ${dateStr ? `<div>${dateStr}</div>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        ${subject.grades.length > 5 ? `<div class="grades-more">+ ${subject.grades.length - 5} weitere</div>` : ''}
      `;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-header">
        <div class="subject-title">
          <h3>${subject.name}</h3>
          <div class="subject-grade-big">${avg === null ? '-' : formatValue(avg)}</div>
        </div>
        <div class="subject-actions">
          <button class="btn-icon fav-btn ${subject.isFavorite ? 'active' : ''}" data-id="${subject.id}" aria-label="Favorit" title="Zu Favoriten hinzufügen">★</button>
          <button class="btn-icon edit-subject-btn" data-id="${subject.id}" aria-label="Bearbeiten" title="Fach bearbeiten">✏️</button>
          <button class="btn-icon delete-subject-btn" data-id="${subject.id}" aria-label="Löschen" title="Fach löschen">🗑️</button>
        </div>
      </div>

      <div class="subject-avg">
        <div class="subject-avg-label">${dict.avgLabel}</div>
        <div class="subject-avg-value">${avgText}</div>
      </div>

      <div class="grades-section">
        <div class="grades-header">
          <h4>Noten</h4>
          <span class="grades-count">${subject.grades.length}</span>
        </div>
        ${gradeDisplay}
      </div>

      <div class="subject-actions-bottom">
        <button class="btn btn-secondary add-grade-btn" data-id="${subject.id}">+ Note</button>
        <button class="btn btn-primary edit-subject-btn" data-id="${subject.id}" style="flex: 0;">Bearbeiten</button>
      </div>
    `;

    refs.subjectContainer.appendChild(card);
  });

  // Event listeners
  document.querySelectorAll('.fav-btn').forEach((btn) => {
    btn.addEventListener('click', () => toggleFavorite(btn.dataset.id));
  });

  document.querySelectorAll('.edit-subject-btn').forEach((btn) => {
    btn.addEventListener('click', () => openSubjectModal(btn.dataset.id));
  });

  document.querySelectorAll('.delete-subject-btn').forEach((btn) => {
    btn.addEventListener('click', () => deleteSubject(btn.dataset.id));
  });

  document.querySelectorAll('.add-grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => openGradeModal(btn.dataset.id));
  });
}

// ========== SUBJECT MODAL ==========
function openSubjectModal(subjectId = null) {
  const dict = translations[settings.lang];
  refs.subjectForm.reset();
  const hiddenId = document.getElementById('edit-subject-id');
  const title = document.getElementById('subject-modal-title');

  if (subjectId) {
    const subject = subjects.find((s) => s.id === subjectId);
    if (!subject) return;
    title.textContent = dict.editSubjectTitle;
    hiddenId.value = subject.id;
    document.getElementById('subject-name').value = subject.name;
  } else {
    title.textContent = dict.addSubjectTitle;
    hiddenId.value = '';
    document.getElementById('subject-name').value = '';
  }

  refs.subjectModal.classList.add('open');
}

function handleSubjectSubmit(event) {
  event.preventDefault();
  const hiddenId = document.getElementById('edit-subject-id').value;
  const name = document.getElementById('subject-name').value.trim();

  if (!name) return;

  if (hiddenId) {
    const subject = subjects.find((s) => s.id === hiddenId);
    if (subject) subject.name = name;
  } else {
    subjects.push({ id: Date.now().toString(), name, isFavorite: false, grades: [] });
  }

  saveData();
  closeModals();
}

function deleteSubject(subjectId) {
  if (confirm(translations[settings.lang].confirmDeleteSubject)) {
    subjects = subjects.filter((s) => s.id !== subjectId);
    saveData();
  }
}

function toggleFavorite(subjectId) {
  const subject = subjects.find((s) => s.id === subjectId);
  if (subject) {
    subject.isFavorite = !subject.isFavorite;
    saveData();
  }
}

// ========== GRADE MODAL ==========
function openGradeModal(subjectId = null, gradeId = null) {
  const dict = translations[settings.lang];
  refs.gradeForm.reset();

  if (!subjects.length) {
    alert(dict.alertNoSubjects);
    return;
  }

  const select = document.getElementById('grade-subject-select');
  select.innerHTML = subjects.map((s) => `<option value="${s.id}">${s.name}</option>`).join('');
  if (subjectId) select.value = subjectId;

  const meta = getGradingSystemMeta();
  const valueInput = document.getElementById('grade-value');
  valueInput.min = meta.min;
  valueInput.max = meta.max;
  valueInput.value = '';

  const valueLabel = document.querySelector('[for="grade-value"]');
  valueLabel.textContent = settings.gradingSystem === 'points'
    ? 'Punktzahl (0 bis 15):'
    : 'Bewertung (1 bis 6):';

  const weightInput = document.getElementById('grade-weight');
  weightInput.min = 1;
  weightInput.value = 1;

  if (gradeId && subjectId) {
    const subject = subjects.find((s) => s.id === subjectId);
    const grade = subject?.grades.find((g) => g.id === gradeId);
    if (!subject || !grade) return;

    document.getElementById('grade-modal-title').textContent = dict.editGradeTitle;
    document.getElementById('edit-grade-id').value = gradeId;
    select.value = subjectId;
    valueInput.value = grade.value;
    weightInput.value = grade.weight;
    document.getElementById('grade-date').value = grade.date || formatISODate(new Date());
  } else {
    document.getElementById('grade-modal-title').textContent = dict.addGradeTitle;
    document.getElementById('edit-grade-id').value = '';
    document.getElementById('grade-date').value = formatISODate(new Date());
  }

  bindNumericInput(valueInput, meta.min, meta.max);
  bindNumericInput(weightInput, 1, 99, true);
  refs.gradeModal.classList.add('open');
}

function bindNumericInput(input, min, max, allowZero = false) {
  input.addEventListener('keydown', (event) => {
    const allowed = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Escape'];
    if (event.ctrlKey || event.metaKey || allowed.includes(event.key)) return;
    if (!/^\d$/.test(event.key)) event.preventDefault();
  });

  input.addEventListener('paste', (event) => {
    const pasted = (event.clipboardData || window.clipboardData).getData('text');
    if (!/^\d*$/.test(pasted)) event.preventDefault();
  });

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
    const numeric = Number(input.value);
    if (input.value === '') {
      input.setCustomValidity('');
      return;
    }
    if (!Number.isInteger(numeric) || numeric < min || numeric > max || (!allowZero && numeric === 0)) {
      input.setCustomValidity('invalid');
    } else {
      input.setCustomValidity('');
    }
  });
}

function handleGradeSubmit(event) {
  event.preventDefault();
  const dict = translations[settings.lang];
  const subjectId = document.getElementById('grade-subject-select').value;
  const gradeId = document.getElementById('edit-grade-id').value;
  const rawValue = Number(document.getElementById('grade-value').value);
  const rawWeight = Number(document.getElementById('grade-weight').value);
  const rawDate = document.getElementById('grade-date').value;
  const meta = getGradingSystemMeta();

  if (!Number.isInteger(rawValue) || rawValue < meta.min || rawValue > meta.max) {
    alert(settings.gradingSystem === 'points' ? dict.alertInvalidPoints : dict.alertInvalidGrade);
    return;
  }

  if (!Number.isInteger(rawWeight) || rawWeight <= 0) {
    alert(dict.alertInvalidWeight);
    return;
  }

  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) return;

  const date = rawDate || formatISODate(new Date());

  if (gradeId) {
    const grade = subject.grades.find((g) => g.id === gradeId);
    if (grade) {
      grade.value = rawValue;
      grade.weight = rawWeight;
      grade.date = date;
    }
  } else {
    subject.grades.push({ id: Date.now().toString(), value: rawValue, weight: rawWeight, date });
  }

  saveData();
  closeModals();
}

function deleteGrade(subjectId, gradeId) {
  const subject = subjects.find((s) => s.id === subjectId);
  if (subject) {
    subject.grades = subject.grades.filter((g) => g.id !== gradeId);
    saveData();
  }
}

// ========== CALCULATIONS ==========
function calculateSubjectAverage(grades) {
  if (!grades || !grades.length) return null;
  let totalWeightedScore = 0;
  let totalWeight = 0;

  grades.forEach((grade) => {
    const weight = Number(grade.weight) || 1;
    totalWeightedScore += Number(grade.value) * weight;
    totalWeight += weight;
  });

  return totalWeight ? totalWeightedScore / totalWeight : null;
}

function getOverallAverage() {
  const values = subjects.flatMap((s) => s.grades.map((g) => ({
    value: Number(g.value),
    weight: Number(g.weight) || 1
  })));
  if (!values.length) return null;
  const weightedSum = values.reduce((sum, item) => sum + item.value * item.weight, 0);
  const totalWeight = values.reduce((sum, item) => sum + item.weight, 0);
  return totalWeight ? weightedSum / totalWeight : null;
}

function getBestWorstSubject() {
  const entries = subjects.filter((s) => calculateSubjectAverage(s.grades) !== null);
  if (!entries.length) return { bestLabel: '-', worstLabel: '-' };

  const sorted = [...entries].sort((a, b) => 
    (calculateSubjectAverage(a.grades) ?? Infinity) - (calculateSubjectAverage(b.grades) ?? Infinity)
  );

  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  return {
    bestLabel: `${best.name} (${formatAverage(calculateSubjectAverage(best.grades))})`,
    worstLabel: `${worst.name} (${formatAverage(calculateSubjectAverage(worst.grades))})`
  };
}

function getTotalGradeCount() {
  return subjects.reduce((sum, s) => sum + s.grades.length, 0);
}

// ========== STATISTICS ==========
function renderStatistics() {
  const overall = getOverallAverage();
  refs.statsOverallAverage.textContent = overall === null ? '-' : formatAverage(overall);
  refs.statsTargetInternal.textContent = formatAverage(settings.targetAverage);
  refs.statsSubjectCount.textContent = String(subjects.length);
  refs.statsGradeCount.textContent = String(getTotalGradeCount());

  if (overall === null) {
    refs.statsTargetStatus.innerHTML = `<span class="status-warning">${translations[settings.lang].targetStatus} ${formatAverage(settings.targetAverage)}</span>`;
  } else {
    refs.statsTargetStatus.innerHTML = overall <= settings.targetAverage
      ? `<span class="status-success">${translations[settings.lang].targetAchieved}</span>`
      : `<span class="status-warning">${translations[settings.lang].targetStatus} ${formatAverage(settings.targetAverage)}</span>`;
  }

  renderYearGraph();
  renderNextEvents();
  renderSubjectOverview();
  renderCalendar();
}

// ========== YEAR GRAPH ==========
function renderYearGraph() {
  const container = refs.yearGraph;
  container.innerHTML = '';

  const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#6366f1';
  const secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim() || '#8b5cf6';
  const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--card-border').trim() || '#2d3748';
  const axisColor = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#9ca3af';
  const pointStroke = getComputedStyle(document.documentElement).getPropertyValue('--card-bg').trim() || '#1a1f2e';

  const monthData = {};
  const currentYear = new Date().getFullYear();

  subjects.forEach((subject) => {
    subject.grades.forEach((grade) => {
      if (!grade.date) return;
      const gradeDate = new Date(grade.date + 'T00:00:00');
      const month = gradeDate.getMonth();
      const year = gradeDate.getFullYear();

      if (year < currentYear - 1) return;
      if (year === currentYear && month < 7) return;

      const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
      if (!monthData[monthKey]) {
        monthData[monthKey] = [];
      }
      monthData[monthKey].push(Number(grade.value));
    });
  });

  const sortedMonths = Object.keys(monthData).sort();
  if (!sortedMonths.length) {
    container.innerHTML = '<div class="empty-state">Keine Daten verfügbar. Füge Noten mit Datum ein.</div>';
    return;
  }

  const monthAverages = sortedMonths.map((monthKey) => {
    const values = monthData[monthKey];
    return values.reduce((a, b) => a + b, 0) / values.length;
  });

  const minAvg = Math.min(...monthAverages);
  const maxAvg = Math.max(...monthAverages);
  const range = maxAvg - minAvg || 1;
  const padding = range * 0.2;

  const chartMin = Math.max(minAvg - padding, settings.gradingSystem === 'points' ? 0 : 1);
  const chartMax = Math.min(maxAvg + padding, settings.gradingSystem === 'points' ? 15 : 6);
  const chartRange = chartMax - chartMin;

  const monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
  const chartWidth = 600;
  const chartHeight = 300;
  const marginX = 60;
  const marginY = 50;
  const plotWidth = chartWidth - marginX * 2;
  const plotHeight = chartHeight - marginY * 2;

  let svg = `<svg width="100%" height="100%" viewBox="0 0 ${chartWidth} ${chartHeight}" style="display:block; width:100%; height:100%; max-width:100%;">`;
  svg += `<rect width="${chartWidth}" height="${chartHeight}" fill="transparent"/>`;

  for (let i = 0; i <= 5; i++) {
    const yValue = chartMin + (chartRange / 5) * i;
    const yPos = chartHeight - marginY - (i / 5) * plotHeight;
    svg += `<line x1="${marginX}" y1="${yPos}" x2="${chartWidth - marginX}" y2="${yPos}" stroke="${gridColor}" stroke-opacity="0.45" stroke-width="1"/>`;
    svg += `<text x="${marginX - 10}" y="${yPos + 4}" font-size="12" fill="${axisColor}" text-anchor="end">${yValue.toFixed(1)}</text>`;
  }

  sortedMonths.forEach((monthKey, idx) => {
    const xPos = marginX + (idx / (sortedMonths.length - 1 || 1)) * plotWidth;
    const month = parseInt(monthKey.split('-')[1], 10);
    const monthName = monthNames[month - 1];
    svg += `<text x="${xPos}" y="${chartHeight - marginY + 20}" font-size="12" fill="${axisColor}" text-anchor="middle">${monthName}</text>`;
  });

  let pathD = '';
  monthAverages.forEach((avg, idx) => {
    const xPos = marginX + (idx / (monthAverages.length - 1 || 1)) * plotWidth;
    const yPos = chartHeight - marginY - ((avg - chartMin) / chartRange) * plotHeight;
    pathD += `${idx === 0 ? 'M' : 'L'}${xPos} ${yPos} `;
  });

  svg += `<path d="${pathD.trim()}" stroke="url(#gradientLine)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  svg += `
    <defs>
      <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${primary}" />
        <stop offset="100%" stop-color="${secondary}" />
      </linearGradient>
    </defs>
  `;

  monthAverages.forEach((avg, idx) => {
    const xPos = marginX + (idx / (monthAverages.length - 1 || 1)) * plotWidth;
    const yPos = chartHeight - marginY - ((avg - chartMin) / chartRange) * plotHeight;
    svg += `<circle cx="${xPos}" cy="${yPos}" r="5" fill="${primary}" stroke="${pointStroke}" stroke-width="2"/>`;
  });

  svg += `<line x1="${marginX}" y1="${marginY}" x2="${marginX}" y2="${chartHeight - marginY}" stroke="${axisColor}" stroke-opacity="0.5" stroke-width="2"/>`;
  svg += `<line x1="${marginX}" y1="${chartHeight - marginY}" x2="${chartWidth - marginX}" y2="${chartHeight - marginY}" stroke="${axisColor}" stroke-opacity="0.5" stroke-width="2"/>`;

  svg += '</svg>';
  container.innerHTML = svg;
}

// ========== EVENTS ==========
function renderNextEvents() {
  const list = refs.nextEventsList;
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const upcoming = [...calendarEvents]
    .filter((event) => new Date(`${event.date}T00:00:00`) >= startOfToday)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  if (!upcoming.length) {
    list.innerHTML = '<li class="empty-state">📅 Keine anstehenden Termine</li>';
    return;
  }

  list.innerHTML = upcoming.map((event) => {
    const date = new Date(`${event.date}T00:00:00`);
    const diffDays = Math.ceil((date - startOfToday) / 86400000);
    const label = diffDays === 0 ? 'Heute' : `Noch ${diffDays} Tage`;
    const subjectName = subjects.find((s) => s.id === event.subjectId)?.name || 'Fach';
    return `
      <li>
        <div class="type-tag">${event.type}</div>
        <strong>${subjectName} – ${event.title}</strong>
        <div class="small">${formatDate(event.date)} • ${label}</div>
      </li>
    `;
  }).join('');
}

function renderSubjectOverview() {
  const list = refs.subjectOverviewList;
  const sortValue = refs.subjectOverviewSort.value;

  const entries = subjects.map((s) => ({
    name: s.name,
    avg: calculateSubjectAverage(s.grades),
    count: s.grades.length,
    best: s.grades.length ? Math.min(...s.grades.map((g) => Number(g.value))) : null,
    worst: s.grades.length ? Math.max(...s.grades.map((g) => Number(g.value))) : null
  }));

  const sorted = [...entries].sort((a, b) => {
    if (sortValue === 'best') return (b.avg ?? Number.NEGATIVE_INFINITY) - (a.avg ?? Number.NEGATIVE_INFINITY);
    if (sortValue === 'worst') return (a.avg ?? Number.POSITIVE_INFINITY) - (b.avg ?? Number.POSITIVE_INFINITY);
    return a.name.localeCompare(b.name);
  });

  if (!sorted.length) {
    list.innerHTML = '<li class="empty-state">Keine Fächer vorhanden.</li>';
    return;
  }

  list.innerHTML = sorted.map((s) => {
    const average = s.avg === null ? '—' : formatAverage(s.avg);
    const best = s.best === null ? '—' : formatValue(s.best);
    const worst = s.worst === null ? '—' : formatValue(s.worst);
    return `
      <li class="subject-overview-item">
        <div class="subject-meta">
          <strong>${s.name}</strong>
          <span>${average}</span>
        </div>
        <div class="small">Bewertungen: ${s.count} • Beste: ${best} • Schlechteste: ${worst}</div>
      </li>
    `;
  }).join('');
}

// ========== CALENDAR ==========
function renderCalendar() {
  const grid = refs.calendarGrid;
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  refs.calendarMonthLabel.textContent = `${monthNames[currentCalendarMonth.getMonth()]} ${currentCalendarMonth.getFullYear()}`;
  grid.innerHTML = '';

  weekdays.forEach((day) => {
    const cell = document.createElement('div');
    cell.className = 'calendar-weekday';
    cell.textContent = day;
    grid.appendChild(cell);
  });

  const firstDay = new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth(), 1);
  const offset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - offset);

  for (let i = 0; i < 42; i++) {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + i);

    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = `calendar-day ${
      current.getMonth() !== currentCalendarMonth.getMonth() ? 'empty' : ''
    } ${isSameDate(current, new Date()) ? 'today' : ''} ${
      isSameDate(current, new Date(`${selectedCalendarDate}T00:00:00`)) ? 'selected' : ''
    }`;

    cell.innerHTML = `<span>${current.getDate()}</span>${hasEventForDate(current) ? '<span class="dot"></span>' : ''}`;

    cell.addEventListener('click', () => {
      if (current.getMonth() !== currentCalendarMonth.getMonth()) return;
      selectedCalendarDate = formatISODate(current);
      renderCalendar();
      renderSelectedDayEvents();
    });

    grid.appendChild(cell);
  }

  renderSelectedDayEvents();
}

function renderSelectedDayEvents() {
  const entries = calendarEvents.filter((e) => e.date === selectedCalendarDate);
  if (!entries.length) {
    refs.selectedDayEvents.innerHTML = '<div class="empty-state">Keine Termine für diesen Tag.</div>';
    return;
  }

  refs.selectedDayEvents.innerHTML = entries.map((e) => {
    const subjectName = subjects.find((s) => s.id === e.subjectId)?.name || 'Fach';
    return `
      <div class="timeline-item">
        <span class="type-tag">${e.type}</span>
        <strong>${e.title}</strong>
        <div class="small">${subjectName} • ${formatDate(e.date)}</div>
        ${e.description ? `<div class="small">${e.description}</div>` : ''}
        <button class="btn btn-danger" type="button" data-event-id="${e.id}" style="margin-top: 0.75rem; font-size: 0.85rem;">🗑️ Löschen</button>
      </div>
    `;
  }).join('');

  refs.selectedDayEvents.querySelectorAll('button[data-event-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      calendarEvents = calendarEvents.filter((e) => e.id !== btn.dataset.eventId);
      saveCalendar();
      renderStatistics();
    });
  });
}

function hasEventForDate(date) {
  const isoDate = formatISODate(date);
  return calendarEvents.some((e) => e.date === isoDate);
}

// ========== EVENT MODAL ==========
function openEventModal() {
  if (!subjects.length) {
    alert('Bitte erstelle zuerst ein Fach, bevor du Termine anlegst.');
    return;
  }
  const select = document.getElementById('event-subject');
  select.innerHTML = subjects.map((s) => `<option value="${s.id}">${s.name}</option>`).join('');
  document.getElementById('event-date').value = selectedCalendarDate || formatISODate(new Date());
  refs.eventModal.classList.add('open');
}

function handleEventSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('event-title').value.trim();
  const subjectId = document.getElementById('event-subject').value;
  const type = document.getElementById('event-type').value;
  const date = document.getElementById('event-date').value;
  const description = document.getElementById('event-description').value.trim();

  if (!title || !subjectId || !date) return;

  calendarEvents.push({
    id: Date.now().toString(),
    title,
    subjectId,
    type,
    date,
    description
  });

  saveCalendar();
  closeModals();
  renderStatistics();
  refs.eventForm.reset();
}

// ========== HELPERS ==========
function closeModals() {
  refs.subjectModal.classList.remove('open');
  refs.gradeModal.classList.remove('open');
  refs.eventModal.classList.remove('open');
  refs.aboutModal.classList.remove('open');
}

function formatDate(dateString) {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-').map(Number);
  if (year && month && day) {
    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
  }
  return dateString;
}

function formatISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isSameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function clearAllData() {
  if (confirm(translations[settings.lang].confirmClearAll)) {
    subjects = [];
    calendarEvents = [];
    saveCalendar();
    saveData();
  }
}

// ========== LEGACY DATA MIGRATION ==========
function migrateLegacyData() {
  const stored = localStorage.getItem(STORAGE_KEYS.subjects);
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return;
    parsed.forEach((subject) => {
      if (!subject || typeof subject !== 'object') return;
      if (!Array.isArray(subject.grades)) subject.grades = [];
      subject.grades.forEach((grade) => {
        if (grade && Number(grade.weight) <= 0) grade.weight = 1;
      });
    });
    localStorage.setItem(STORAGE_KEYS.subjects, JSON.stringify(parsed));
  } catch (error) {
    console.error('Migration error:', error);
  }
}

migrateLegacyData();
