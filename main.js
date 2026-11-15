/* ===== Script block 1 ===== */
(function(){
'use strict';

// =========================================================================
// 1. BILINGUAL DICTIONARY (ENGLISH LTR & ARABIC RTL)
// =========================================================================
const UI_I18N = {
  en: {
    tagline: 'Understand the signal. Protect the mission. Support the human.',
    quickMode: 'Quick Mode',
    mcMode: 'Mission Control',
    tourBtn: '? Guide',
    navPrimary: 'DAILY WORKFLOW',
    navSecondary: 'INTELLIGENCE & RESEARCH',
    destHome: 'Home / Today',
    destSmartMon: 'Smart Health Monitor',
    destCheckin: 'Daily Check-in',
    destActivity: 'Health & Activity',
    dest3D: '3D Explorer',
    destTimeline: 'Timeline',
    destInsights: 'Insights & Alerts',
    destResearch: 'Research Library',
    destScenario: 'Scenario & Delay Lab',
    destReports: 'Reports & Notes',
    destSettings: 'Settings & Diagnostics',
    bnavHome: 'Home',
    bnavMonitor: 'Monitor',
    bnavCheckin: 'Check-in',
    bnav3D: '3D View',
    bnavMore: 'More',
    homeSub: 'Your daily check-in status, recent activity & sleep records, interactive 3D twin preview, and data-quality notices in one calm view.',
    ctaCheckin: 'Complete 60s Check-In',
    home3dTitle: 'Spatial Context & Human Digital Twin Centerpiece',
    openFullTwinBtn: 'Open Full 3D Twin',
    openExBayBtn: '3D Orbital Recovery',
    illusBadge: 'ILLUSTRATIVE 3D VISUALIZATION — NOT A MEDICAL SCAN',
    homeActionsTitle: 'Recommended Next Steps',
    whySeeingBtn: 'Why am I seeing this?',
    homeQuickLaunchTitle: 'Quick Launchers',
    mcStreamTitle: 'Simulated Biometric Stream & Raw vs Smoothed Signal Inspector (Mission Control)',
    ciPageTitle: '60-Second Daily Check-In, Sleep & Hydration',
    ciPageSub: 'Quick, private self-report. Skip any field you prefer not to enter; self-reports are not clinical diagnoses.',
    ciFormTitle: "Today's Self-Report",
    ciSleepLbl: 'Sleep Duration (hours, optional)',
    ciHydLbl: 'Hydration Intake (Liters, optional)',
    ciSleepQualLbl: 'Subjective Sleep Quality (1 = Very Restless, 5 = Restorative)',
    ciEnergyLbl: 'Energy / Readiness Level (1 = Very Fatigued, 5 = High Energy)',
    ciMoodLbl: 'Mood / Workload Calmness (1 = High Strain, 5 = Calm & Focused)',
    ciActDoneLbl: 'Scheduled Exercise Completed?',
    ciNutrLbl: 'Appetite / Meal Context (optional)',
    ciNotesLbl: 'Optional Reflection or Symptom Note (Private)',
    ciSubmitBtn: 'Save Daily Check-In',
    ciHistTitle: 'Recent Check-Ins & Sleep Rhythm',
    actPageTitle: 'Orbital Recovery & Health Measurements',
    actPageSub: 'Record exercise & recovery sessions alongside manual clinical vitals. Temporal proximity does not imply causation.',
    exFormTitle: 'Orbital Recovery — Log Exercise Session',
    exp3dTitle: 'Omega 3D Spatial Explorer',
    exp3dSub: 'Interactive anatomical Human Digital Twin, articulated Astronaut Exercise Bay, Habitat Cutaway, Orbital Trajectory, and Space Weather scenes.',
    tlPageTitle: 'Mission Memory — Longitudinal Health Timeline',
    tlPageSub: 'Unified chronological stream of check-ins, exercise sessions, manual measurements, and alerts. Missing intervals remain visibly empty.',
    onbWelcome: 'Welcome to ASTRA Ω',
    onbDesc: 'ASTRA helps astronauts and space-health researchers log daily check-ins, track exercise & recovery, inspect 3D physiological and habitat context, and trace every insight back to verified sources.'
  },
  ar: {
    tagline: 'افهم الإشارة. احمِ المهمة. ادعم الإنسان.',
    quickMode: 'الوضع السريع',
    mcMode: 'مركز التحكم',
    tourBtn: '؟ الدليل',
    navPrimary: 'المهام اليومية',
    navSecondary: 'الذكاء التحليلي والأبحاث',
    destHome: 'الرئيسية / اليوم',
    destSmartMon: 'مراقب صحة رائد الفضاء',
    destCheckin: 'التسجيل اليومي',
    destActivity: 'الصحة والنشاط',
    dest3D: 'المستكشف ثلاثي الأبعاد',
    destTimeline: 'الخط الزمني',
    destInsights: 'التنبيهات والرؤى',
    destResearch: 'مكتبة أبحاث ناسا',
    destScenario: 'مختبر السيناريوهات',
    destReports: 'التقارير والملاحظات',
    destSettings: 'الإعدادات والتشخيص',
    bnavHome: 'الرئيسية',
    bnavMonitor: 'المراقب',
    bnavCheckin: 'تسجيل',
    bnav3D: 'ثلاثي الأبعاد',
    bnavMore: 'المزيد',
    homeSub: 'حالة التسجيل اليومي، سجل التمارين والنوم، معاينة التوأم الرقمي ثلاثي الأبعاد، وإشعارات جودة البيانات في شاشة واحدة.',
    ctaCheckin: 'أكمل التسجيل اليومي (60 ثانية)',
    home3dTitle: 'السياق المكاني والتوأم الرقمي البشري ثلاثي الأبعاد',
    openFullTwinBtn: 'فتح التوأم الرقمي الكامل',
    openExBayBtn: 'محطة التعافي المداري',
    illusBadge: 'تصور تعليمي ثلاثي الأبعاد — ليس فحصاً طبياً سريرياً',
    homeActionsTitle: 'الخطوات التالية المقترحة',
    whySeeingBtn: 'لماذا أرى هذه النتيجة؟',
    homeQuickLaunchTitle: 'الوصول السريع',
    mcStreamTitle: 'البث الحيوي المحاكى ومحلل الإشارات الخام والمعدّلة (مركز التحكم)',
    ciPageTitle: 'التسجيل اليومي السريع (60 ثانية) — النوم والترطيب',
    ciPageSub: 'تقرير ذاتي سريع وخاص. يمكنك تخطي أي حقل اختياري؛ التقييمات الذاتية ليست تشخيصاً طبياً.',
    ciFormTitle: 'التقرير الذاتي لليوم',
    ciSleepLbl: 'مدة النوم (ساعات، اختياري)',
    ciHydLbl: 'شرب السوائل (لتر، اختياري)',
    ciSleepQualLbl: 'جودة النوم الذاتية (1 = متقطع جداً، 5 = مريح ومجدد)',
    ciEnergyLbl: 'مستوى الطاقة والجاهزية (1 = إرهاق شديد، 5 = طاقة عالية)',
    ciMoodLbl: 'الحالة المزاجية والهدوء (1 = ضغط مرتفع، 5 = تركيز وهدوء)',
    ciActDoneLbl: 'هل اكتمل التمرين المجدول؟',
    ciNutrLbl: 'الشهية والوجبات (اختياري)',
    ciNotesLbl: 'ملاحظة خاصة اختيارية',
    ciSubmitBtn: 'حفظ التسجيل اليومي',
    ciHistTitle: 'سجل التسجيلات اليومية وإيقاع النوم',
    actPageTitle: 'التعافي المداري والقياسات الصحية',
    actPageSub: 'سجّل جلسات التمارين والتعافي مع القياسات الحيوية اليدوية. التقارب الزمني لا يعني علاقة سببية.',
    exFormTitle: 'التعافي المداري — تسجيل جلسة تمرين',
    exp3dTitle: 'مستكشف أوميغا ثلاثي الأبعاد التفاعلي',
    exp3dSub: 'نموذج التوأم الرقمي البشري، محطة التمارين المدارية لرائد الفضاء، مقطع المركبة الفضائية، المدارات، والطقس الفضائي.',
    tlPageTitle: 'ذاكرة المهمة — الخط الزمني الصحي الطولي',
    tlPageSub: 'تسلسل زمني موحد للتسجيلات اليومية والتمارين والقياسات والتنبيهات مع الحفاظ على الفترات الفارغة بصدق.',
    onbWelcome: 'مرحباً بك في نظام ASTRA Ω',
    onbDesc: 'يساعد ASTRA رواد الفضاء والباحثين على تسجيل المتابعة اليومية، وتتبع التمارين والتعافي، واستكشاف النماذج ثلاثية الأبعاد، وتوثيق مصدر كل معلومة.'
  }
};

// =========================================================================
// 2. VERIFIED SCIENTIFIC SOURCE REGISTRY & CURATED OSDR METADATA
// =========================================================================
const SOURCES = {
  'SRC-NASA-HRP-01': {
    org: 'NASA Human Research Program (HRP)',
    title: 'Hazards of Human Spaceflight (5 Hazards)',
    url: 'https://www.nasa.gov/hrp/hazards/',
    population: 'Human spaceflight crews (LEO, Lunar, Mars)',
    limitations: 'Describes population-level mission hazards; does not diagnose an individual astronaut.'
  },
  'SRC-NASA-OSDR-01': {
    org: 'NASA Open Science Data Repository (OSDR)',
    title: 'Space Biology & Spaceflight Omics / Physiological Studies',
    url: 'https://osdr.nasa.gov/bio/repo/',
    population: 'Multi-species (human analog, rodent, cellular)',
    limitations: 'Requires strict species and mission-phase labeling; never treat as live crew telemetry.'
  },
  'SRC-NASA-DONKI-01': {
    org: 'NASA CCMC DONKI API',
    title: 'Space Weather Database Of Notifications, Knowledge, Information (FLR)',
    url: 'https://api.nasa.gov/',
    population: 'External solar & interplanetary environment',
    limitations: 'External flare class does NOT measure personal absorbed radiation dose inside a habitat.'
  },
  'SRC-CLIN-AHA-01': {
    org: 'American Heart Association (AHA) / ADA',
    title: 'Adult Resting Blood Pressure & Glycemic Reference Ranges',
    url: 'https://www.heart.org/',
    population: 'Terrestrial adult clinical reference guidelines',
    limitations: 'Used for educational comparison in manual measurements; flight surgeon protocols govern spaceflight.'
  }
};

const HRP_HAZARDS = [
  { id: 'rad', title: '1. Space Radiation (GCR & SPE)', body: 'Outside Earth’s magnetosphere, Galactic Cosmic Rays and Solar Particle Events increase ionizing radiation exposure (~0.5–1.2 mSv/day in deep space).', source: 'SRC-NASA-HRP-01' },
  { id: 'iso', title: '2. Isolation and Confinement', body: 'Extended confinement and 16 orbital sunrises/day disrupt circadian timing, sleep duration, and behavioral recovery.', source: 'SRC-NASA-HRP-01' },
  { id: 'dist', title: '3. Distance from Earth', body: 'Mars distances introduce 3–22 minutes of one-way light-time delay and prevent rapid medical evacuation, requiring onboard autonomy.', source: 'SRC-NASA-HRP-01' },
  { id: 'grav', title: '4. Altered Gravity Fields', body: 'Microgravity shifts ~2 L of fluid toward the upper body and unloads bone (~1–1.5%/mo without countermeasures) and muscle.', source: 'SRC-NASA-HRP-01' },
  { id: 'env', title: '5. Hostile & Closed Environments', body: 'Closed habitats require continuous ECLSS air scrubbing (ppO₂, ppCO₂), acoustic control, and dust filtration.', source: 'SRC-NASA-HRP-01' }
];

const OSDR_STUDIES = [
  { id: 'OSD-258', title: 'Spaceflight-induced musculoskeletal & bone remodeling transcriptomics', org: 'Mus musculus (Rodent Research)', assay: 'RNA-Seq / Micro-CT', limit: 'Animal model — illustrates unloading pathways, not direct human clinical thresholds.' },
  { id: 'OSD-530', title: 'Human bed-rest & head-down tilt fluid-shift cardiovascular analog', org: 'Homo sapiens (Ground Analog)', assay: 'Ultrasound / Hemodynamics', limit: '6° head-down tilt analog; lacks space radiation and full orbital workload.' },
  { id: 'OSD-194', title: 'Circadian clock gene expression under altered light-dark schedules', org: 'Homo sapiens / Analog Cohort', assay: 'Actigraphy & Salivary Melatonin', limit: 'Controlled analog schedule; individual crew responses vary.' }
];

const MARS_REGIMES = {
  leo: { delay: '~0.001 s one-way', evac: 'Hours (Return capsule)', note: 'Real-time flight surgeon audio/video support; brief LOS gaps between relay satellites.' },
  lunar: { delay: '1.28 s one-way (~2.6 s RTT)', evac: '3–5 days return transit', note: 'Near-synchronous consultation; autonomous storm-shelter action needed during SPE alerts.' },
  mars_min: { delay: '3 min 03 s one-way (6 min 06 s RTT)', evac: 'None (Orbital window)', note: 'Asynchronous store-and-forward support; crew medical officer executes procedures locally.' },
  mars_max: { delay: '22 min 13 s one-way (44 min 26 s RTT)', evac: 'None + Solar blackout risk', note: 'Full onboard medical autonomy required; zero real-time ground guidance.' }
};

// =========================================================================
// 3. SHARED APPLICATION STATE & PERSISTENCE
// =========================================================================
const V3_STORE_KEY = 'astra-omega-v3-records';

const VITALS = [
  { key: 'hr',     unit: 'bpm',   base: 72,   noise: 1.1,  dec: 0, min: 40,   max: 175,  th: { lc: 42, lw: 50, hw: 100, hc: 130 }, label: 'Heart Rate' },
  { key: 'spo2',   unit: '%',     base: 98,   noise: 0.25, dec: 0, min: 78,   max: 100,  th: { lc: 90, lw: 94 }, label: 'Blood Oxygen (SpO₂)' },
  { key: 'temp',   unit: '°C',    base: 36.7, noise: 0.04, dec: 1, min: 34.5, max: 40.5, th: { lc: 35, lw: 35.8, hw: 37.6, hc: 38.5 }, label: 'Core Temp (Est.)' },
  { key: 'resp',   unit: '/min',  base: 15,   noise: 0.4,  dec: 0, min: 6,    max: 40,   th: { lc: 8, lw: 11, hw: 21, hc: 28 }, label: 'Respiration' },
  { key: 'bp',     unit: 'mmHg',  base: 118,  noise: 1.2,  dec: 0, min: 70,   max: 190,  th: { lc: 80, lw: 95, hw: 135, hc: 160 }, label: 'Systolic BP' },
  { key: 'rad',    unit: 'µSv/h', base: 30,   noise: 2.2,  dec: 0, min: 0,    max: 700,  th: { hw: 100, hc: 250 }, label: 'Ambient Dose Rate' },
  { key: 'stress', unit: '/100',  base: 25,   noise: 1.4,  dec: 0, min: 0,    max: 100,  th: { hw: 60, hc: 85 }, label: 'Workload Index' }
];

const SCENARIOS = {
  normal:  { label: '✅ Nominal Orbit' },
  eva:     { label: '🧑‍🚀 Spacewalk (EVA)', hr: 46, resp: 10, temp: 0.6, rad: 70, stress: 32, bp: 18 },
  flare:   { label: '☀️ Solar Flare (SPE)', rad: 310, stress: 28, hr: 10 },
  hypoxia: { label: '🫁 Cabin Hypoxia', spo2: -8, hr: 26, resp: 8, stress: 24 },
  fever:   { label: '🌡️ Febrile Response', temp: 1.8, hr: 24, resp: 5, bp: -10 }
};

const CREW = [
  { id: 'a', name: 'Jamal', role: 'Commander', icon: '👩‍🚀', bias: { hr: -2 }, meta: 'Male • 36 yrs • 180 cm', weight: 78.0, muscle: 37.5, fat: 14.8 },
  { id: 'b', name: 'Maram', role: 'Flight Engineer', icon: '👨‍🚀', bias: { hr: 3, bp: 4 }, meta: 'Female • 33 yrs • 168 cm', weight: 62.4, muscle: 28.9, fat: 19.2 },
  { id: 'c', name: 'Ella',  role: 'Medical Officer', icon: '🧑‍⚕️', bias: { hr: 1, stress: -4 }, meta: 'Female • 35 yrs • 171 cm', weight: 64.1, muscle: 30.2, fat: 18.4 },
  { id: 'd', name: 'Tariq Al-Mansoor', role: 'Payload & EVA Specialist', icon: '🛰️', bias: { hr: -1 }, meta: 'Male • 34 yrs • 178 cm', weight: 76.4, muscle: 36.8, fat: 14.2 }
].map(a => ({ ...a, scen: 'normal', vals: {}, hist: {}, prev: {} }));

CREW.forEach(a => VITALS.forEach(v => {
  a.vals[v.key] = v.base + (a.bias[v.key] || 0);
  a.hist[v.key] = [];
  a.prev[v.key] = 0;
}));

const appState = {
  lang: 'en',
  uiMode: 'quick',
  dataMode: 'demo',
  selectedCrew: 0,
  dest: 'home',
  scene3d: 'twin',
  paused: false,
  anim3dPaused: false,
  seconds: 0,
  tlFilter: 'all',
  showRolling: true,
  simGap: false,
  checkins: [],
  exercises: [],
  alerts: [],
  donki: { status: 'NOT QUERIED', events: [], retrievedAt: null, error: null },
  ratings: { sleepQual: 4, energy: 4, mood: 4 },
  sm: {
    gravityZeroG: true,
    evaActive: false,
    alertActive: false,
    holoRotate: true,
    tab: 'h2o',
    hr: 70,
    spo2: 98.3,
    tbw: 64.5,
    temp: 36.7,
    radRate: 18.7,
    radCum: 142.412,
    signalDbm: -53,
    ecgPhase: 0,
    logs: [
      { id: 'sml-1', author: 'Dr. Sarah Al-Otaibi (Flight Surgeon)', time: '18:20 UTC', sev: 'Normal', text: 'Biometric wearable calibrated and InBody composition synced prior to orbital insertion.' },
      { id: 'sml-2', author: 'Astronaut / Tariq', time: '19:45 UTC', sev: 'Normal', text: 'Mild cephalad congestion noted from zero-G shift; vitals remain nominal.' }
    ]
  }
};

window.__astro = {
  getLang: () => appState.lang,
  getSel: () => appState.selectedCrew,
  getVals: i => CREW[i].vals,
  addAlert: (i, level, text) => {
    appState.alerts.unshift({
      id: 'ALT-' + Date.now() + '-' + appState.alerts.length,
      t: Date.now(),
      crew: CREW[i].id,
      level,
      cat: 'Telemetry',
      title: text,
      ack: false
    });
    renderAll();
  }
};

function loadV3Records() {
  try {
    const raw = JSON.parse(localStorage.getItem(V3_STORE_KEY) || 'null');
    if (raw && Array.isArray(raw.checkins) && Array.isArray(raw.exercises)) {
      appState.checkins = raw.checkins;
      appState.exercises = raw.exercises;
      return;
    }
  } catch (e) {}
  const now = Date.now();
  appState.checkins = [
    {
      id: 'ci-demo-1', crew: 'a', t: now - 864e5, isDemo: true,
      sleepH: 7.5, sleepQual: 4, energy: 4, mood: 4, hydrationL: 2.3,
      activityDone: 'yes', nutrition: 'Normal appetite, 3 meals',
      notes: 'DEMO FIXTURE: Restorative sleep after acoustic panel adjustment.'
    },
    {
      id: 'ci-demo-2', crew: 'b', t: now - 432e5, isDemo: true,
      sleepH: 6.0, sleepQual: 3, energy: 3, mood: 4, hydrationL: 1.9,
      activityDone: 'yes', nutrition: 'Light breakfast',
      notes: 'DEMO FIXTURE: Early orbital shift handover.'
    },
    {
      id: 'ci-demo-3', crew: 'd', t: now - 216e5, isDemo: true,
      sleepH: 7.4, sleepQual: 4, energy: 4, mood: 4, hydrationL: 2.4,
      activityDone: 'yes', nutrition: 'Electrolyte hydration + balanced meal',
      notes: 'DEMO FIXTURE: InBody 970 baseline calibrated (TBW 64.5%).'
    }
  ];
  appState.exercises = [
    {
      id: 'ex-demo-1', crew: 'a', t: now - 3600e3 * 5, isDemo: true,
      modality: 'ARED Resistive Exercise', durationMin: 50, phase: 'After / Post-Session',
      rpe: 7, preFeel: 'Mild lower-back stiffness on waking',
      postFeel: 'Improved mobility and posture', hr: null, spo2: null
    },
    {
      id: 'ex-demo-2', crew: 'd', t: now - 3600e3 * 3, isDemo: true,
      modality: 'CEVIS Cycle Ergometer', durationMin: 40, phase: 'After / Post-Session',
      rpe: 6, preFeel: 'Mild cephalad congestion from 0G fluid shift',
      postFeel: 'Steady aerobic recovery', hr: 118, spo2: 98
    }
  ];
}

function saveV3Records() {
  try {
    localStorage.setItem(V3_STORE_KEY, JSON.stringify({
      checkins: appState.checkins,
      exercises: appState.exercises
    }));
  } catch (e) {}
}

function classify(th, x) {
  if (th.lc !== undefined && x <= th.lc) return 2;
  if (th.hc !== undefined && x >= th.hc) return 2;
  if (th.lw !== undefined && x < th.lw) return 1;
  if (th.hw !== undefined && x > th.hw) return 1;
  return 0;
}
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.25;
const pad = n => String(n).padStart(2, '0');
const fmtTime = ts => new Date(ts).toLocaleString(appState.lang === 'ar' ? 'ar-EG' : 'en-GB', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

function tickSimulation() {
  if (appState.paused || appState.dataMode === 'research') return;
  appState.seconds++;
  CREW.forEach((a, ai) => {
    const sc = SCENARIOS[a.scen];
    VITALS.forEach(v => {
      const target = v.base + (a.bias[v.key] || 0) + (sc[v.key] || 0);
      let x = a.vals[v.key] + (target - a.vals[v.key]) * 0.14 + gauss() * v.noise;
      x = clamp(x, v.min, v.max);
      a.vals[v.key] = x;
      a.hist[v.key].push(x);
      if (a.hist[v.key].length > 60) a.hist[v.key].shift();
      const st = classify(v.th, x);
      if (st !== a.prev[v.key]) {
        if (st > 0) {
          appState.alerts.unshift({
            id: 'ALT-' + Date.now() + '-' + ai + '-' + v.key,
            t: Date.now(), crew: a.id, level: st, cat: 'Telemetry',
            title: `${a.name}: ${v.label} ${x.toFixed(v.dec)} ${v.unit} (${st === 2 ? 'Critical' : 'Caution'} demo bound)`,
            ack: false
          });
          if (appState.alerts.length > 30) appState.alerts.pop();
        }
        a.prev[v.key] = st;
      }
    });
  });

  // Update Smart Monitor live telemetry smoothly
  const sm = appState.sm;
  if (sm.alertActive) {
    sm.hr = Math.round(clamp(sm.hr + (Math.random() > 0.45 ? 3 : -2), 148, 173));
    sm.spo2 = Number(clamp(sm.spo2 + (Math.random() - 0.55) * 0.4, 87.6, 91.5).toFixed(1));
    sm.tbw = Number(clamp(sm.tbw - 0.04, 62.4, 64.4).toFixed(2));
    sm.temp = Number(clamp(sm.temp + 0.05, 37.6, 38.2).toFixed(1));
    sm.radRate = Number(clamp(35.8 + Math.random() * 1.6, 35.5, 37.5).toFixed(1));
    sm.radCum = Number((sm.radCum + 0.004).toFixed(3));
    sm.signalDbm = [-55, -51, -54][appState.seconds % 3];
  } else {
    const baseHr = sm.evaActive ? 94 : 70;
    sm.hr = Math.round(clamp(baseHr + (Math.random() - 0.5) * 4, baseHr - 2, baseHr + 3));
    sm.spo2 = Number(clamp(98.4 + (Math.random() - 0.5) * 0.3, 98.2, 98.7).toFixed(1));
    sm.tbw = 64.5;
    sm.temp = 36.7;
    sm.radRate = Number((18.7 + (Math.random() - 0.5) * 0.4).toFixed(1));
    sm.radCum = Number((sm.radCum + 0.001).toFixed(3));
    sm.signalDbm = -53;
  }

  document.getElementById('metClock').textContent = `MET ${pad(Math.floor(appState.seconds / 3600))}:${pad(Math.floor(appState.seconds / 60) % 60)}:${pad(appState.seconds % 60)}`;
  if (appState.dest === 'home' && appState.uiMode === 'mc') renderMcTelemetry();
  if (appState.dest === 'smartmonitor') renderSmartMonitor();
  if (appState.dest === 'explorer3d' && appState.scene3d === 'twin') updateTwinLiveDisplay();
}

// =========================================================================
// 4. SMART ASTRONAUT HEALTH MONITOR ENGINE & 3D HOLOGRAPHIC SCANNER
// =========================================================================
let smHoloCtx = null;
let smEcgTimer = null;

function initSmartMonitorHolo3D() {
  const container = document.getElementById('smHoloStage');
  if (!container || !webglAvailable) return;
  if (smHoloCtx) disposeThreeContext(smHoloCtx);

  const w = container.clientWidth || 420;
  const h = container.clientHeight || 365;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  camera.position.set(0, 0.25, 4.1);
  camera.lookAt(0, 0.22, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(getDpr());
  container.insertBefore(renderer.domElement, container.firstChild);

  let dragging = false, prevX = 0;
  renderer.domElement.addEventListener('pointerdown', e => { dragging = true; prevX = e.clientX; });
  window.addEventListener('pointerup', () => { dragging = false; });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!dragging || !smHoloCtx) return;
    smHoloCtx.root.rotation.y += (e.clientX - prevX) * 0.012;
    prevX = e.clientX;
  });

  const root = new THREE.Group();

  // Holographic Torso & Head Lathe Mesh
  const bodyPts = [
    new THREE.Vector2(0.00, -1.15),
    new THREE.Vector2(0.11, -1.12),
    new THREE.Vector2(0.13, -0.55),
    new THREE.Vector2(0.22, -0.02),
    new THREE.Vector2(0.20, 0.35),
    new THREE.Vector2(0.26, 0.72),
    new THREE.Vector2(0.29, 0.92),
    new THREE.Vector2(0.11, 1.05),
    new THREE.Vector2(0.08, 1.16),
    new THREE.Vector2(0.14, 1.32),
    new THREE.Vector2(0.14, 1.48),
    new THREE.Vector2(0.09, 1.58),
    new THREE.Vector2(0.00, 1.61)
  ];
  const bodyGeo = new THREE.LatheGeometry(bodyPts, 28);
  bodyGeo.scale(1.12, 1.0, 0.65);

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.34
  });
  const solidMat = new THREE.MeshBasicMaterial({
    color: 0x0ea5e9,
    transparent: true,
    opacity: 0.16,
    side: THREE.DoubleSide
  });

  const bodyWire = new THREE.Mesh(bodyGeo, wireMat);
  const bodySolid = new THREE.Mesh(bodyGeo, solidMat);

  // Arms
  const armMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.3 });
  [-1, 1].forEach(side => {
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.048, 0.85, 12, 6), armMat);
    arm.position.set(side * 0.38, 0.45, 0);
    arm.rotation.z = -side * 0.16;
    root.add(arm);
  });

  // Upper Pool & Lower Fluid Fill Cylinders
  const upperPoolMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.32 });
  const upperPool = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.21, 0.68, 22), upperPoolMat);
  upperPool.scale.set(1.05, 1, 0.62);
  upperPool.position.set(0, 0.62, 0);

  const lowerPoolMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.24 });
  const lowerPool = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.13, 0.92, 22), lowerPoolMat);
  lowerPool.scale.set(1.05, 1, 0.62);
  lowerPool.position.set(0, -0.52, 0);

  // Scanning laser ring
  const scanRingMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.75 });
  const scanRing = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.009, 8, 48), scanRingMat);
  scanRing.rotation.x = Math.PI / 2;

  root.add(bodyWire, bodySolid, upperPool, lowerPool, scanRing);
  scene.add(root);

  smHoloCtx = {
    container, scene, camera, renderer, root,
    wireMat, solidMat, armMat, upperPool, upperPoolMat, lowerPool, lowerPoolMat, scanRing, scanRingMat,
    raf: null
  };

  const loop = () => {
    if (!smHoloCtx) return;
    smHoloCtx.raf = requestAnimationFrame(loop);
    if (document.hidden || appState.dest !== 'smartmonitor') return;
    if (appState.sm.holoRotate && !appState.anim3dPaused) {
      root.rotation.y += 0.012;
    }
    const t = Date.now() * 0.0022;
    scanRing.position.y = 0.25 + Math.sin(t) * 1.15;
    renderer.render(scene, camera);
  };
  loop();
}

function startSmEcgLoop() {
  if (smEcgTimer) clearInterval(smEcgTimer);
  smEcgTimer = setInterval(() => {
    if (appState.dest !== 'smartmonitor') return;
    const line = document.getElementById('smEcgLine');
    if (!line) return;
    const sm = appState.sm;
    sm.ecgPhase = (sm.ecgPhase + 1) % 60;
    const freq = sm.alertActive ? 0.28 : 0.16;
    const pts = [];
    for (let x = 0; x <= 420; x += 4) {
      const p = ((x * freq + sm.ecgPhase) % 24);
      let y = 32;
      if (p > 4 && p < 6) y = 26;
      else if (p >= 8 && p < 9.5) y = 38;
      else if (p >= 9.5 && p < 11) y = 7;
      else if (p >= 11 && p < 12.5) y = 49;
      else if (p >= 15 && p < 18) y = 24;
      pts.push(`${x},${y}`);
    }
    line.setAttribute('points', pts.join(' '));
    line.setAttribute('stroke', sm.alertActive ? '#ef4444' : '#38bdf8');
  }, 55);
}

function renderSmartMonitor() {
  const sm = appState.sm;
  const crew = CREW[appState.selectedCrew];
  const shell = document.getElementById('smShellRoot');
  if (!shell) return;

  shell.classList.toggle('sm-alert-active', sm.alertActive);

  // Top buttons
  const btnGrav = document.getElementById('smBtnGravity');
  btnGrav.textContent = sm.gravityZeroG ? '🌀 Microgravity (0G)' : '🌍 Earth Gravity (1G)';
  btnGrav.classList.toggle('active-purple', sm.gravityZeroG);

  const btnEva = document.getElementById('smBtnEva');
  btnEva.textContent = sm.evaActive ? '🧑‍🚀 EVA Active' : '🧑‍🚀 Simulate EVA';
  btnEva.classList.toggle('active-amber', sm.evaActive);

  const btnAlert = document.getElementById('smBtnAlert');
  btnAlert.textContent = sm.alertActive ? '🚨 Abort Emergency' : '🚨 Simulate Alert';
  btnAlert.classList.toggle('active-red', sm.alertActive);

  document.getElementById('smSignalDbm').textContent = `📶 ${sm.signalDbm}dBm`;

  // Emergency banner text
  document.getElementById('smEmergencySub').textContent =
    `Spacesuit auto-response protocol engaged: SpO2 at ${sm.spo2}% and HR at ${sm.hr} BPM. Execute checklist immediately:`;

  // Vitals tiles
  document.getElementById('smValHr').textContent = sm.hr;
  document.getElementById('smValSpo2').textContent = sm.spo2 + '%';
  document.getElementById('smValTbw').textContent = sm.tbw + '%';
  document.getElementById('smValTemp').textContent = sm.temp + '°';

  ['smTileHr', 'smTileSpo2', 'smTileTbw', 'smTileTemp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('warn-tile', sm.alertActive);
  });

  // Radiation
  document.getElementById('smRadRate').textContent = `${sm.radRate} µSv/h`;
  document.getElementById('smRadCum').textContent = sm.radCum.toFixed(3);
  document.getElementById('smRadBar').style.width = `${Math.min(100, (sm.radCum / 600) * 100)}%`;

  // InBody subject sync (shows Tariq Al-Mansoor by default or currently selected crew)
  const displaySubject = crew.id === 'd' ? crew : CREW[3];
  document.getElementById('smSubjectName').textContent = `Astronaut / ${displaySubject.name}`;
  document.getElementById('smSubjectMeta').textContent = displaySubject.meta;
  document.getElementById('smIbWeight').textContent = `${displaySubject.weight.toFixed(1)} kg`;
  document.getElementById('smIbMuscle').textContent = `${displaySubject.muscle.toFixed(1)} kg`;
  document.getElementById('smIbFat').textContent = `${displaySubject.fat.toFixed(1)}%`;

  // Fluid Shift & Callouts
  const upperPct = sm.gravityZeroG ? 64 : 48;
  const lowerPct = sm.gravityZeroG ? 36 : 52;
  document.getElementById('smFluidShiftVal').textContent = `${upperPct}% Upper / ${lowerPct}% Lower`;
  document.getElementById('smCalloutUpper').innerHTML = sm.gravityZeroG
    ? `<div style="font-weight:700;color:#c4b5fd">⬆ Upper Pool: 64%</div><div class="muted" style="font-size:10px">Puffy Face / Ocular Pressure</div>`
    : `<div style="font-weight:700;color:#7dd3fc">⬆ Upper Pool: 48%</div><div class="muted" style="font-size:10px">1G Orthostatic Balance</div>`;
  document.getElementById('smCalloutLower').innerHTML = `<div style="font-weight:700;color:#e2e8f0">Lower Limbs: ${lowerPct}%</div>`;

  // Scanner Tab Readout & 3D Color Theme
  const bigPctEl = document.getElementById('smBigPct');
  const bigSubEl = document.getElementById('smBigSub');
  if (sm.alertActive) {
    if (sm.tab === 'h2o') bigPctEl.textContent = '64%';
    else if (sm.tab === 'o2') bigPctEl.textContent = '89%';
    else bigPctEl.textContent = '48%';
    bigSubEl.textContent = 'CRITICAL ALERT: HYPOXIA / ACUTE STRESS';
  } else {
    if (sm.tab === 'h2o') {
      bigPctEl.textContent = '65%';
      bigSubEl.textContent = 'Total Body Water Ratio (TBW)';
    } else if (sm.tab === 'o2') {
      bigPctEl.textContent = Math.round(sm.spo2) + '%';
      bigSubEl.textContent = 'Optimal Arterial O2 Saturation';
    } else {
      bigPctEl.textContent = ((displaySubject.muscle / displaySubject.weight) * 100).toFixed(1) + '%';
      bigSubEl.textContent = 'Skeletal Muscle Mass Ratio (InBody)';
    }
  }

  if (smHoloCtx) {
    const mainHex = sm.alertActive ? 0xef4444 : 0x38bdf8;
    const subHex = sm.alertActive ? 0xb91c1c : 0x0284c7;
    smHoloCtx.wireMat.color.setHex(mainHex);
    smHoloCtx.solidMat.color.setHex(subHex);
    smHoloCtx.armMat.color.setHex(mainHex);
    smHoloCtx.upperPoolMat.color.setHex(mainHex);
    smHoloCtx.lowerPoolMat.color.setHex(subHex);
    smHoloCtx.scanRingMat.color.setHex(sm.alertActive ? 0xfca5a5 : 0x7dd3fc);
    smHoloCtx.upperPool.scale.y = sm.gravityZeroG ? 1.15 : 0.85;
    smHoloCtx.lowerPool.scale.y = sm.gravityZeroG ? 0.78 : 1.12;
  }

  // Predictive AI Timeline (+4 Hours) SVG
  const fPts = sm.alertActive
    ? [63.5, 59.7, 55.9, 52.1, 48.3]
    : [64.5, 63.9, 63.2, 62.5, 61.9];
  const fCol = sm.alertActive ? '#38bdf8' : '#38bdf8';
  const mapY = v => 74 - ((v - 45) / 25) * 58;
  const xs = [30, 110, 190, 270, 350];
  const poly = fPts.map((v, i) => `${xs[i]},${mapY(v).toFixed(1)}`).join(' ');
  const dots = fPts.map((v, i) => `
    <circle cx="${xs[i]}" cy="${mapY(v).toFixed(1)}" r="3.5" fill="#38bdf8"/>
    <text x="${xs[i]}" y="${(mapY(v) - 7).toFixed(1)}" text-anchor="middle" fill="#e2e8f0" font-size="9.5" font-family="monospace">${v}%</text>
    <text x="${xs[i]}" y="91" text-anchor="middle" fill="#93a8cb" font-size="9.5" font-family="monospace">+${i}h</text>
  `).join('');
  const limitY = mapY(55).toFixed(1);
  document.getElementById('smForecastSvg').innerHTML = `
    <line x1="20" y1="${limitY}" x2="365" y2="${limitY}" stroke="#f59e0b" stroke-width="1.3" stroke-dasharray="4 3"/>
    <text x="360" y="${Number(limitY) - 4}" text-anchor="end" fill="#fbbf24" font-size="9" font-family="monospace">Dehydration Limit 55%</text>
    <polyline fill="none" stroke="${fCol}" stroke-width="2.2" points="${poly}"/>
    ${dots}
  `;
  document.getElementById('smDehydEst').textContent = sm.alertActive ? '2 hrs & 15 mins' : '14 hrs & 37 mins';
  document.getElementById('smDehydEst').style.color = sm.alertActive ? '#fbbf24' : '#38bdf8';

  // AI Diagnostics visibility for 0G
  document.getElementById('smDiagCephalad').style.display = sm.gravityZeroG ? 'flex' : 'none';
  document.getElementById('smDiagEquilText').textContent =
    `Total body water (${sm.tbw}%) aligns with InBody skeletal muscle mass (${displaySubject.muscle.toFixed(1)} kg).`;

  // Logs list
  document.getElementById('smLogsCount').textContent = `${sm.logs.length} Logs`;
  document.getElementById('smLogsList').innerHTML = sm.logs.map(lg => `
    <div class="sm-log-item">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
        <b style="color:${lg.sev === 'Critical' ? '#fca5a5' : lg.sev === 'Caution' ? '#fde68a' : '#38bdf8'}">${lg.author}</b>
        <span class="mono muted" style="font-size:10.5px">🕒 ${lg.time}</span>
      </div>
      <div class="muted">${lg.text}</div>
    </div>
  `).join('');
}

// =========================================================================
// 5. OMEGA THREE.JS 3D ENGINE (EXISTING 5 SCENES + HERO STAGE)
// =========================================================================
const SCENE_META = {
  twin: {
    badge: 'ILLUSTRATIVE EDUCATIONAL MODEL — NOT A MEDICAL SCAN',
    title: 'Human Digital Twin — Anatomical Physiological Explorer',
    camPresets: [
      { id: 'full', label: 'Full Body', r: 4.7, th: 1.57, ph: 1.38, ty: 0.35 },
      { id: 'thorax', label: 'Thorax & Heart', r: 2.6, th: 1.57, ph: 1.32, ty: 0.72 },
      { id: 'head', label: 'Cranial / Neuro', r: 2.3, th: 1.57, ph: 1.28, ty: 1.38 },
      { id: 'side', label: 'Lateral Profile', r: 4.6, th: 0.15, ph: 1.38, ty: 0.35 }
    ],
    hotspots: [
      { id: 'cardio', label: '❤️ Cardiovascular', y: 0.74, cam: { r: 2.7, th: 1.45, ph: 1.32, ty: 0.74 }, desc: 'Microgravity shifts ~2 L of fluid toward the upper body (cephalad shift), altering central venous pressure and resting heart-rate adaptation (SRC-NASA-HRP-01).' },
      { id: 'musculo', label: '🦴 Musculoskeletal', y: -0.15, cam: { r: 3.6, th: 1.65, ph: 1.42, ty: 0.05 }, desc: 'Weight-bearing bone loses ~1–1.5% BMD per month in 0g without daily resistive exercise (ARED). Shows research context, not a bone density scan.' },
      { id: 'resp', label: '🫁 Respiratory', y: 0.70, cam: { r: 2.8, th: 1.72, ph: 1.32, ty: 0.70 }, desc: 'Tracks SpO₂ and cabin ppO₂/ppCO₂ context. In 0g, pulmonary ventilation-perfusion distribution becomes more uniform.' },
      { id: 'neuro', label: '🧠 Nervous & Ocular', y: 1.42, cam: { r: 2.3, th: 1.57, ph: 1.26, ty: 1.38 }, desc: 'Monitors sleep/circadian workload and Spaceflight-Associated Neuro-ocular Syndrome (SANS) research awareness.' },
      { id: 'immune', label: '🛡️ Immune & Lymphatic', y: 0.96, cam: { r: 3.1, th: 1.40, ph: 1.35, ty: 0.85 }, desc: 'Spaceflight stress and ionizing radiation can alter latent viral reactivation and immune cell distribution.' },
      { id: 'digestive', label: '🥗 Digestive & Nutrition', y: 0.35, cam: { r: 2.9, th: 1.62, ph: 1.38, ty: 0.38 }, desc: 'Connects hydration intake, thermostabilized nutrition logs, and altered gut transit context in microgravity.' }
    ]
  },
  exercise: {
    badge: 'ORBITAL RECOVERY WORKSPACE — ARTICULATED ASTRONAUT & EARTH VIEW',
    title: 'Orbital Recovery — Exercise Station & Earth Horizon Viewport',
    camPresets: [
      { id: 'overview', label: 'Bay Overview', r: 4.8, th: 1.15, ph: 1.25, ty: 0.15 },
      { id: 'astronaut', label: 'Astronaut Form', r: 3.0, th: 0.85, ph: 1.28, ty: 0.25 },
      { id: 'window', label: 'Earth Viewport', r: 4.2, th: 1.57, ph: 1.42, ty: 0.20 },
      { id: 'monitor', label: 'Session Monitor', r: 2.7, th: 2.15, ph: 1.32, ty: 0.22 }
    ],
    hotspots: [
      { id: 'cevis', label: '🚴 CEVIS Cycle Rig', desc: 'Stationary cycle ergometer with toe clips and torso harness for aerobic conditioning in microgravity. Animation is illustrative.' },
      { id: 'treadmill', label: '🏃 T2 Treadmill', desc: 'Vibration-isolated treadmill with bungee load harness to apply axial skeletal loading during orbital running.' },
      { id: 'ared', label: '🏋️ ARED Resistive', desc: 'Advanced Resistive Exercise Device using vacuum cylinders to simulate free-weight squats, deadlifts, and presses.' },
      { id: 'monitor', label: '📊 Session Monitor', desc: 'Displays manually entered session duration, RPE, and pre/post recovery observations. Unconnected sensors show NO MEASUREMENT AVAILABLE.' },
      { id: 'window', label: '🌍 Earth Cupola View', desc: 'Low Earth Orbit (~408 km) illuminated limb view providing circadian day/night and psychological restoration context.' }
    ]
  },
  habitat: {
    badge: 'CONCEPTUAL HABITAT CUTAWAY — NO LIVE SENSORS CONNECTED',
    title: 'Spacecraft Habitat Cutaway — Zone & Environment Explorer',
    camPresets: [
      { id: 'cutaway', label: 'Full Cutaway', r: 5.8, th: 1.57, ph: 1.22, ty: 0.1 },
      { id: 'sleep', label: 'Sleep & Exercise', r: 3.6, th: 1.95, ph: 1.28, ty: 0.0 },
      { id: 'eclss', label: 'Medical & ECLSS', r: 3.6, th: 1.15, ph: 1.28, ty: 0.0 }
    ],
    hotspots: [
      { id: 'sleep_zone', label: '🛏️ Sleep Quarters', x: -2.0, desc: 'Acoustic noise (<50 dBA target) and circadian LED lighting directly influence REM/deep sleep recovery. Status: No live sensor connected.' },
      { id: 'exercise_zone', label: '🏋️ ARED Exercise Bay', x: -1.0, desc: 'Vibration-isolated resistive & aerobic countermeasure station. Linked to Orbital Recovery journal entries.' },
      { id: 'med_zone', label: '🩺 Medical Workstation', x: 0.0, desc: 'Stores portable ultrasound, point-of-care blood analyzer, and autonomous clinical reference checklists.' },
      { id: 'galley_zone', label: '🥤 Galley & Hydration', x: 1.0, desc: 'Potable water dispenser and thermostabilized nutrition station. Linked to daily hydration self-reports.' },
      { id: 'eclss_zone', label: '🌬️ ECLSS Air Loop', x: 2.0, desc: 'Reference envelope: 101.3 kPa total pressure, ppO₂ 21.3 kPa, ppCO₂ < 0.53 kPa. Status: Conceptual Reference.' }
    ]
  },
  orbit: {
    badge: 'ILLUSTRATIVE TRAJECTORY & SCALE — NOT FOR NAVIGATION',
    title: 'Mission Environment — Earth, Van Allen Belts, Moon & Mars Regimes',
    camPresets: [
      { id: 'cislunar', label: 'Cislunar Sector', r: 8.6, th: 1.57, ph: 1.25, ty: 0.0 },
      { id: 'leo', label: 'LEO & Radiation Belts', r: 5.2, th: 1.35, ph: 1.18, ty: 0.0 },
      { id: 'deep', label: 'Deep Space Transit', r: 11.2, th: 1.85, ph: 1.15, ty: 0.2 }
    ],
    hotspots: [
      { id: 'leo', label: '🛰️ LEO Habitat (408 km)', desc: 'Protected inside Earth’s geomagnetic field; rapid return capability and near-real-time communication.' },
      { id: 'belt', label: '☢️ Van Allen Radiation Belt', desc: 'Geomagnetically trapped energetic particle zone requiring rapid transit and hull shielding.' },
      { id: 'moon', label: '🌕 Lunar Sector (384,400 km)', desc: '1.28 s one-way light-time delay; exposed to Galactic Cosmic Rays and Solar Particle Events.' },
      { id: 'mars', label: '🔴 Mars Transit Regime', desc: '3 to 22 min one-way light-time delay; requires full onboard autonomous medical decision support.' }
    ]
  },
  weather: {
    badge: 'HELIO-ENVIRONMENT VISUALIZATION — EXTERNAL EVENT ≠ PERSONAL DOSE',
    title: 'Space Weather Context — Solar Flare / CME & Magnetosphere Bow-Shock',
    camPresets: [
      { id: 'heliosphere', label: 'Sun–Earth System', r: 8.2, th: 1.57, ph: 1.28, ty: 0.0 },
      { id: 'magneto', label: 'Magnetosphere Shield', r: 4.8, th: 1.15, ph: 1.25, ty: 0.0 }
    ],
    hotspots: [
      { id: 'sun_flare', label: '☀️ Solar Active Region', desc: 'Coronal Mass Ejections (CME) and Solar Particle Events (SPE) originate from solar magnetic reconnection (tracked via NASA DONKI).' },
      { id: 'bow_shock', label: '🛡️ Earth Magnetosphere', desc: 'Deflects charged solar wind particles around LEO spacecraft; crews beyond lunar orbit lack this geomagnetic shield.' },
      { id: 'dosimetry', label: '📟 Habitat vs Personal Dose', desc: 'External solar flare classification never measures individual astronaut absorbed radiation dose without verified onboard dosimetry.' }
    ]
  }
};

let activeHotspotId = 'cardio';
let threeCtx = null;
let homeHeroCtx = null;
let webglAvailable = false;

function checkWebGL() {
  try {
    const c = document.createElement('canvas');
    webglAvailable = !!(window.THREE && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { webglAvailable = false; }
  return webglAvailable;
}

function getDpr() {
  const q = (document.getElementById('setGfx') || {}).value || 'auto';
  const raw = window.devicePixelRatio || 1;
  if (q === 'low') return 1.0;
  if (q === 'balanced') return Math.min(raw, 1.5);
  if (q === 'high') return Math.min(raw, 2.0);
  return window.innerWidth < 768 ? Math.min(raw, 1.25) : Math.min(raw, 1.75);
}

function makeEarthTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  const ocean = g.createLinearGradient(0, 0, 0, 256);
  ocean.addColorStop(0, '#0c4a6e');
  ocean.addColorStop(0.5, '#0369a1');
  ocean.addColorStop(1, '#082f49');
  g.fillStyle = ocean;
  g.fillRect(0, 0, 512, 256);
  g.fillStyle = '#15803d';
  const blobs = [
    [110, 85, 42, 28], [135, 145, 26, 42], [255, 78, 48, 30],
    [275, 132, 34, 44], [345, 82, 58, 34], [405, 168, 28, 22]
  ];
  blobs.forEach(([x, y, rx, ry]) => {
    g.beginPath(); g.ellipse(x, y, rx, ry, 0.2, 0, Math.PI * 2); g.fill();
  });
  g.fillStyle = 'rgba(240,249,255,0.26)';
  for (let i = 0; i < 18; i++) {
    g.beginPath();
    g.ellipse((i * 73) % 512, 30 + (i * 37) % 195, 46, 7, 0.08, 0, Math.PI * 2);
    g.fill();
  }
  return new THREE.CanvasTexture(c);
}

function makeMonitorHudTexture(crewObj, exObj) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 320;
  const g = c.getContext('2d');
  g.fillStyle = '#040d1e';
  g.fillRect(0, 0, 512, 320);
  g.strokeStyle = '#38bdf8';
  g.lineWidth = 4;
  g.strokeRect(8, 8, 496, 304);
  g.fillStyle = '#38bdf8';
  g.font = 'bold 20px monospace';
  g.fillText('ASTRA Ω // ORBITAL RECOVERY HUD', 24, 42);
  g.fillStyle = '#f59e0b';
  g.font = 'bold 14px monospace';
  g.fillText('ILLUSTRATIVE MONITOR • NO LIVE BIO-SENSOR', 24, 68);
  g.fillStyle = '#f0f6ff';
  g.font = '18px monospace';
  g.fillText(`SUBJECT: ${crewObj.name.toUpperCase()} (${crewObj.role.toUpperCase()})`, 24, 108);
  g.fillText(`MODALITY: ${exObj ? exObj.modality.slice(0, 24) : 'CEVIS CYCLE'}`, 24, 140);
  g.fillStyle = '#10b981';
  g.fillText(`DURATION: ${exObj ? exObj.durationMin + ' MIN' : '45 MIN'}  |  RPE: ${exObj ? exObj.rpe + '/10' : '6/10'}`, 24, 174);
  g.fillStyle = '#93a8cb';
  g.font = '15px monospace';
  g.fillText(`HR SENSOR: ${exObj && exObj.hr ? exObj.hr + ' BPM (MANUAL)' : 'NO MEASUREMENT AVAILABLE'}`, 24, 214);
  g.fillText(`SPO2 SENSOR: ${exObj && exObj.spo2 ? exObj.spo2 + '% (MANUAL)' : 'NO MEASUREMENT AVAILABLE'}`, 24, 244);
  g.strokeStyle = '#38bdf8';
  g.lineWidth = 2.5;
  g.beginPath();
  for (let x = 24; x < 488; x += 6) {
    const y = 282 + Math.sin(x * 0.08) * 10;
    if (x === 24) g.moveTo(x, y); else g.lineTo(x, y);
  }
  g.stroke();
  return new THREE.CanvasTexture(c);
}

function buildAnatomicalTwin(scene) {
  const root = new THREE.Group();

  const skinShellMat = new THREE.MeshPhysicalMaterial({
    color: 0x1d4ed8,
    emissive: 0x0c4a6e,
    emissiveIntensity: 0.45,
    roughness: 0.22,
    metalness: 0.08,
    transparent: true,
    opacity: 0.26,
    clearcoat: 0.85,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const wireOverlayMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.09
  });

  const headPts = [
    new THREE.Vector2(0.00, 1.15),
    new THREE.Vector2(0.08, 1.17),
    new THREE.Vector2(0.075, 1.25),
    new THREE.Vector2(0.11, 1.31),
    new THREE.Vector2(0.145, 1.40),
    new THREE.Vector2(0.155, 1.50),
    new THREE.Vector2(0.135, 1.60),
    new THREE.Vector2(0.08, 1.66),
    new THREE.Vector2(0.00, 1.68)
  ];
  const headGeo = new THREE.LatheGeometry(headPts, 28);
  const headMesh = new THREE.Mesh(headGeo, skinShellMat);
  const headWire = new THREE.Mesh(headGeo, wireOverlayMat);

  const torsoPts = [
    new THREE.Vector2(0.00, 0.05),
    new THREE.Vector2(0.24, 0.08),
    new THREE.Vector2(0.28, 0.22),
    new THREE.Vector2(0.23, 0.44),
    new THREE.Vector2(0.27, 0.68),
    new THREE.Vector2(0.32, 0.90),
    new THREE.Vector2(0.30, 1.06),
    new THREE.Vector2(0.12, 1.15),
    new THREE.Vector2(0.00, 1.16)
  ];
  const torsoGeo = new THREE.LatheGeometry(torsoPts, 32);
  torsoGeo.scale(1.14, 1.0, 0.68);
  const torsoMesh = new THREE.Mesh(torsoGeo, skinShellMat);
  const torsoWire = new THREE.Mesh(torsoGeo, wireOverlayMat);

  function makeLimbSegment(rTop, rBot, len) {
    return new THREE.CylinderGeometry(rTop, rBot, len, 18);
  }
  const limbs = new THREE.Group();
  [-1, 1].forEach(side => {
    const sh = new THREE.Mesh(new THREE.SphereGeometry(0.095, 16, 16), skinShellMat);
    sh.position.set(side * 0.36, 1.02, 0);
    const uArm = new THREE.Mesh(makeLimbSegment(0.082, 0.068, 0.44), skinShellMat);
    uArm.position.set(side * 0.41, 0.78, 0.02); uArm.rotation.z = -side * 0.14;
    const fArm = new THREE.Mesh(makeLimbSegment(0.066, 0.050, 0.42), skinShellMat);
    fArm.position.set(side * 0.46, 0.38, 0.05); fArm.rotation.z = -side * 0.08;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 14), skinShellMat);
    hand.scale.set(0.7, 1.35, 0.45);
    hand.position.set(side * 0.48, 0.14, 0.06);

    const thigh = new THREE.Mesh(makeLimbSegment(0.125, 0.092, 0.54), skinShellMat);
    thigh.position.set(side * 0.15, -0.22, 0);
    const calf = new THREE.Mesh(makeLimbSegment(0.088, 0.062, 0.52), skinShellMat);
    calf.position.set(side * 0.15, -0.74, -0.01);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.24), skinShellMat);
    foot.position.set(side * 0.15, -1.02, 0.05);

    limbs.add(sh, uArm, fArm, hand, thigh, calf, foot);
  });

  const systems = {};

  const cardioGroup = new THREE.Group();
  const heartMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.75, roughness: 0.25 });
  const heartMesh = new THREE.Mesh(new THREE.SphereGeometry(0.105, 22, 22), heartMat);
  heartMesh.scale.set(0.95, 1.22, 0.85);
  heartMesh.position.set(0.04, 0.78, 0.05);
  const vesselMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 });
  const aortaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.04, 0.82, 0.04),
    new THREE.Vector3(0.02, 0.98, 0.02),
    new THREE.Vector3(-0.01, 0.65, -0.02),
    new THREE.Vector3(0.00, 0.12, 0.00)
  ]);
  const aortaMesh = new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 24, 0.018, 8, false), vesselMat);
  cardioGroup.add(heartMesh, aortaMesh);
  systems.cardio = cardioGroup;

  const musculoGroup = new THREE.Group();
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, emissive: 0x38bdf8, emissiveIntensity: 0.35, roughness: 0.4 });
  for (let i = 0; i < 14; i++) {
    const v = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.045, 12), boneMat);
    v.position.set(0, 0.16 + i * 0.068, -0.06);
    musculoGroup.add(v);
  }
  for (let r = 0; r < 5; r++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.21 - r * 0.012, 0.011, 8, 28, Math.PI * 1.35), boneMat);
    rib.rotation.x = Math.PI / 2;
    rib.rotation.z = -Math.PI * 0.18;
    rib.scale.set(1.12, 0.68, 1);
    rib.position.set(0, 0.62 + r * 0.075, 0.01);
    musculoGroup.add(rib);
  }
  systems.musculo = musculoGroup;

  const respGroup = new THREE.Group();
  const lungMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.55, transparent: true, opacity: 0.65 });
  const trachea = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.26, 12), lungMat);
  trachea.position.set(0, 0.98, 0.02);
  const lLung = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 20), lungMat);
  lLung.scale.set(0.85, 1.65, 0.72); lLung.position.set(-0.13, 0.76, 0.01);
  const rLung = new THREE.Mesh(new THREE.SphereGeometry(0.115, 20, 20), lungMat);
  rLung.scale.set(0.85, 1.65, 0.72); rLung.position.set(0.13, 0.76, 0.01);
  respGroup.add(trachea, lLung, rLung);
  systems.resp = respGroup;

  const neuroGroup = new THREE.Group();
  const neuroMat = new THREE.MeshStandardMaterial({ color: 0xa78bfa, emissive: 0x7c3aed, emissiveIntensity: 0.75 });
  const brain = new THREE.Mesh(new THREE.SphereGeometry(0.115, 22, 22), neuroMat);
  brain.scale.set(0.95, 0.88, 1.15);
  brain.position.set(0, 1.49, -0.01);
  const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 12), neuroMat);
  lEye.position.set(-0.048, 1.44, 0.11);
  const rEye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 12), neuroMat);
  rEye.position.set(0.048, 1.44, 0.11);
  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.010, 1.25, 10), neuroMat);
  cord.position.set(0, 0.82, -0.06);
  neuroGroup.add(brain, lEye, rEye, cord);
  systems.neuro = neuroGroup;

  const immuneGroup = new THREE.Group();
  const immMat = new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.75 });
  [[-0.08, 1.18, 0.04], [0.08, 1.18, 0.04], [-0.24, 0.94, 0.02], [0.24, 0.94, 0.02], [0, 0.92, 0.06], [-0.12, 0.12, 0.05], [0.12, 0.12, 0.05]].forEach(p => {
    const n = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 12), immMat);
    n.position.set(p[0], p[1], p[2]);
    immuneGroup.add(n);
  });
  systems.immune = immuneGroup;

  const digGroup = new THREE.Group();
  const digMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xd97706, emissiveIntensity: 0.65 });
  const stomach = new THREE.Mesh(new THREE.SphereGeometry(0.095, 18, 18), digMat);
  stomach.scale.set(1.2, 0.85, 0.75);
  stomach.position.set(0.05, 0.46, 0.04);
  const gut = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.036, 12, 24), digMat);
  gut.position.set(0, 0.25, 0.04);
  digGroup.add(stomach, gut);
  systems.digestive = digGroup;

  const scanRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.62, 0.012, 12, 64),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.88 })
  );
  scanRing.rotation.x = Math.PI / 2;
  scanRing.position.y = 0.74;

  const pedBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.88, 0.98, 0.08, 48),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.25 })
  );
  pedBase.position.y = -1.10;
  const pedRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.90, 0.015, 10, 64),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
  );
  pedRing.rotation.x = Math.PI / 2;
  pedRing.position.y = -1.05;

  root.add(headMesh, headWire, torsoMesh, torsoWire, limbs, cardioGroup, musculoGroup, respGroup, neuroGroup, immuneGroup, digGroup, scanRing, pedBase, pedRing);
  scene.add(root);

  const sc = document.createElement('canvas'); sc.width = sc.height = 128;
  const sx = sc.getContext('2d'), id = sx.createImageData(128, 128);
  for (let n = 0; n < id.data.length; n += 4) { const v = 150 + Math.random() * 70; id.data[n] = id.data[n+1] = id.data[n+2] = v; id.data[n+3] = 255; }
  sx.putImageData(id, 0, 0);
  const bump = new THREE.CanvasTexture(sc); bump.wrapS = bump.wrapT = THREE.RepeatWrapping; bump.repeat.set(6, 6);
  const faceGroup = new THREE.Group(); faceGroup.visible = false;
  const skinTone = 0xc68a66;
  const mk = (g, m, x, y, z) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); faceGroup.add(o); return o; };
  const skinM = new THREE.MeshPhysicalMaterial({ color: skinTone, roughness: 0.62, sheen: 1, sheenColor: new THREE.Color(0xffb899), sheenRoughness: 0.5, clearcoat: 0.12, clearcoatRoughness: 0.6, bumpMap: bump, bumpScale: 0.35, emissive: 0x3a1408, emissiveIntensity: 0.25 });
  mk(new THREE.CylinderGeometry(0.075, 0.09, 0.14, 20), skinM, 0, 1.13, 0);
  mk(new THREE.SphereGeometry(0.03, 14, 14), skinM, 0, 1.43, 0.15).scale.set(0.8, 1.2, 1.1);
  [-1, 1].forEach(sd => {
    mk(new THREE.SphereGeometry(0.03, 12, 12), skinM, sd * 0.152, 1.45, 0).scale.set(0.45, 1.2, 0.8);
    mk(new THREE.SphereGeometry(0.022, 16, 16), new THREE.MeshStandardMaterial({ color: 0xf5f5f4, roughness: 0.25 }), sd * 0.055, 1.49, 0.128);
    mk(new THREE.SphereGeometry(0.011, 12, 12), new THREE.MeshStandardMaterial({ color: 0x2b1b12, roughness: 0.15 }), sd * 0.055, 1.49, 0.147);
    mk(new THREE.BoxGeometry(0.05, 0.008, 0.01), new THREE.MeshStandardMaterial({ color: 0x1c1410 }), sd * 0.055, 1.525, 0.14);
  });
  mk(new THREE.BoxGeometry(0.07, 0.012, 0.01), new THREE.MeshStandardMaterial({ color: 0x8a4a3c, roughness: 0.5 }), 0, 1.36, 0.14);
  const hair = mk(new THREE.SphereGeometry(0.16, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), new THREE.MeshStandardMaterial({ color: 0x1a1210, roughness: 0.85 }), 0, 1.53, -0.01);
  hair.scale.set(1.02, 1.05, 1.06);
  root.add(faceGroup);
  const bodyMode = { skinM, bump };
  return { root, heartMesh, scanRing, systems, skinShellMat, wireOverlayMat, faceGroup, bodyMode, chest: [torsoMesh, torsoWire, respGroup] };
}

function buildExerciseBayScene(scene, modalityId, crewObj, exObj) {
  const root = new THREE.Group();

  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(5.2, 0.14, 3.6),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.65, roughness: 0.4 })
  );
  deck.position.y = -1.05;
  const grid = new THREE.GridHelper(5.0, 20, 0x38bdf8, 0x0f294a);
  grid.position.y = -0.97;

  const ribMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.75, roughness: 0.3 });
  [-2.0, 0, 2.0].forEach(z => {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.06, 10, 48, Math.PI), ribMat);
    rib.position.set(0, -0.95, z);
    root.add(rib);
  });

  const windowFrame = new THREE.Mesh(
    new THREE.TorusGeometry(1.15, 0.08, 14, 48),
    new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85, roughness: 0.2 })
  );
  windowFrame.position.set(0.2, 0.35, -2.35);

  const earthSphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.8, 40, 40),
    new THREE.MeshStandardMaterial({ map: makeEarthTexture(), roughness: 0.55, metalness: 0.05 })
  );
  earthSphere.position.set(0.3, -1.25, -5.6);
  const atmoHalo = new THREE.Mesh(
    new THREE.SphereGeometry(2.92, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.16, side: THREE.BackSide })
  );
  atmoHalo.position.copy(earthSphere.position);

  const rigGroup = new THREE.Group();
  const basePlate = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.14, 0.85), ribMat);
  basePlate.position.set(-0.45, -0.91, 0);
  const flywheel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.28, 0.12, 24),
    new THREE.MeshStandardMaterial({ color: 0x0ea5e9, metalness: 0.7, roughness: 0.25 })
  );
  flywheel.rotation.x = Math.PI / 2;
  flywheel.position.set(-0.95, -0.45, 0);
  const handlePost = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.05, 12), ribMat);
  handlePost.position.set(-0.95, -0.35, 0);
  const handleBar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.62, 12), ribMat);
  handleBar.rotation.x = Math.PI / 2;
  handleBar.position.set(-0.92, 0.16, 0);
  rigGroup.add(basePlate, flywheel, handlePost, handleBar);

  const suitMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45, metalness: 0.1 });
  const accentSuitMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35 });
  const visorMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, roughness: 0.15, metalness: 0.6, clearcoat: 1.0 });

  const astro = new THREE.Group();
  astro.position.set(-0.32, -0.15, 0);
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.17, 0.68, 18), suitMat);
  torso.position.y = 0.28;
  torso.rotation.z = 0.22;
  const chestPack = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.24), accentSuitMat);
  chestPack.position.set(-0.14, 0.34, 0);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 20, 20), suitMat);
  head.position.set(-0.10, 0.74, 0);
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), visorMat);
  visor.position.set(-0.16, 0.74, 0);

  const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.058, 0.56, 14), suitMat);
  lLeg.position.set(-0.18, -0.22, 0.11);
  const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.058, 0.56, 14), suitMat);
  rLeg.position.set(-0.18, -0.22, -0.11);
  const lArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.52, 12), suitMat);
  lArm.position.set(-0.34, 0.36, 0.22); lArm.rotation.z = 1.05;
  const rArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.52, 12), suitMat);
  rArm.position.set(-0.34, 0.36, -0.22); rArm.rotation.z = 1.05;

  astro.add(torso, chestPack, head, visor, lLeg, rLeg, lArm, rArm);

  const monStand = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.1, 12), ribMat);
  monStand.position.set(1.15, -0.45, 0.45);
  const monScreen = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.62, 0.92),
    new THREE.MeshBasicMaterial({ map: makeMonitorHudTexture(crewObj, exObj) })
  );
  monScreen.position.set(1.15, 0.22, 0.45);
  monScreen.rotation.y = -0.48;

  root.add(deck, grid, windowFrame, earthSphere, atmoHalo, rigGroup, astro, monStand, monScreen);
  scene.add(root);

  return { root, earthSphere, flywheel, astro, lLeg, rLeg, lArm, rArm, torso };
}

function disposeThreeContext(ctx) {
  if (!ctx) return;
  if (ctx.raf) cancelAnimationFrame(ctx.raf);
  ctx.scene.traverse(obj => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
      else { if (obj.material.map) obj.material.map.dispose(); obj.material.dispose(); }
    }
  });
  ctx.renderer.dispose();
  if (ctx.renderer.domElement && ctx.renderer.domElement.parentNode) {
    ctx.renderer.domElement.parentNode.removeChild(ctx.renderer.domElement);
  }
}

function initHomeHero3D() {
  const container = document.getElementById('homeHero3DStage');
  if (!container || !webglAvailable) return;
  if (homeHeroCtx) disposeThreeContext(homeHeroCtx);

  const w = container.clientWidth || 640;
  const h = container.clientHeight || 300;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
  camera.position.set(0, 0.65, 4.4);
  camera.lookAt(0, 0.35, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(w, h);
  renderer.setPixelRatio(getDpr());
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0x38bdf8, 1.0));
  const dir = new THREE.DirectionalLight(0xffffff, 1.8);
  dir.position.set(4, 6, 5);
  scene.add(dir);

  const twinObjs = buildAnatomicalTwin(scene);
  twinObjs.root.position.x = -0.95;

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1.05, 32, 32),
    new THREE.MeshStandardMaterial({ map: makeEarthTexture(), roughness: 0.5 })
  );
  earth.position.set(1.35, 0.35, -0.8);
  const orbitRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.42, 0.012, 8, 64),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 })
  );
  orbitRing.position.copy(earth.position);
  orbitRing.rotation.x = 1.15;
  scene.add(earth, orbitRing);

  homeHeroCtx = { container, scene, camera, renderer, twinObjs, earth, raf: null };

  const loop = () => {
    if (!homeHeroCtx) return;
    homeHeroCtx.raf = requestAnimationFrame(loop);
    if (document.hidden || appState.dest !== 'home') return;
    const motion = document.documentElement.dataset.motion || 'full';
    if (motion === 'full' && !appState.anim3dPaused) {
      twinObjs.root.rotation.y += 0.005;
      earth.rotation.y += 0.003;
      const t = Date.now() * 0.002;
      twinObjs.scanRing.position.y = 0.45 + Math.sin(t) * 0.72;
    }
    renderer.render(scene, camera);
  };
  loop();
}

function buildThreeScene(type) {
  const container = document.getElementById('threeStage');
  if (!container || !webglAvailable) return;
  if (threeCtx) disposeThreeContext(threeCtx);

  const w = container.clientWidth || 640;
  const h = container.clientHeight || 450;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44, w / h, 0.1, 160);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(w, h);
  renderer.setPixelRatio(getDpr());
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const camState = { radius: (type === 'orbit' || type === 'weather') ? 8.4 : 4.7, theta: 1.57, phi: 1.36 };
  const target = new THREE.Vector3(0, type === 'twin' ? 0.35 : 0.15, 0);
  const updateCam = () => {
    camera.position.set(
      target.x + camState.radius * Math.sin(camState.phi) * Math.cos(camState.theta),
      target.y + camState.radius * Math.cos(camState.phi),
      target.z + camState.radius * Math.sin(camState.phi) * Math.sin(camState.theta)
    );
    camera.lookAt(target);
  };
  updateCam();

  let dragging = false, px = 0, py = 0;
  renderer.domElement.addEventListener('pointerdown', e => { dragging = true; px = e.clientX; py = e.clientY; });
  window.addEventListener('pointerup', () => { dragging = false; });
  renderer.domElement.addEventListener('pointermove', e => {
    if (!dragging) return;
    camState.theta -= (e.clientX - px) * 0.008;
    camState.phi = clamp(camState.phi - (e.clientY - py) * 0.008, 0.25, Math.PI - 0.25);
    px = e.clientX; py = e.clientY;
    updateCam();
  });
  renderer.domElement.addEventListener('wheel', e => {
    e.preventDefault();
    camState.radius = clamp(camState.radius + e.deltaY * 0.008, 2.0, 16);
    updateCam();
  }, { passive: false });

  scene.add(new THREE.AmbientLight(0x38bdf8, 0.95));
  const dir = new THREE.DirectionalLight(0xffffff, 1.8);
  dir.position.set(5, 7, 6);
  scene.add(dir);
  const rim = new THREE.DirectionalLight(0xa78bfa, 0.7);
  rim.position.set(-5, 3, -4);
  scene.add(rim);
  scene.add(new THREE.HemisphereLight(0xdbeafe, 0x1e293b, 0.55));
  const fill = new THREE.DirectionalLight(0xffe4cc, 0.9); fill.position.set(-3, 1.5, 5); scene.add(fill);

  const dynamic = {};
  const a = CREW[appState.selectedCrew];

  if (type === 'twin') {
    const twin = buildAnatomicalTwin(scene);
    dynamic.twin = twin;
    dynamic.group = twin.root;
    dynamic.heart = twin.heartMesh;
    dynamic.ring = twin.scanRing;
    highlightTwinSystem(activeHotspotId, twin);
  } else if (type === 'exercise') {
    const latestEx = appState.exercises.find(e => e.crew === a.id);
    const bay = buildExerciseBayScene(scene, activeHotspotId, a, latestEx);
    dynamic.bay = bay;
    dynamic.earth = bay.earthSphere;
  } else if (type === 'habitat') {
    const hull = new THREE.Mesh(
      new THREE.CylinderGeometry(1.32, 1.32, 5.8, 36, 1, true, 0, Math.PI * 1.45),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.35, side: THREE.DoubleSide })
    );
    hull.rotation.z = Math.PI / 2;
    hull.rotation.x = 0.45;
    const wire = new THREE.Mesh(
      new THREE.CylinderGeometry(1.34, 1.34, 5.8, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.16 })
    );
    wire.rotation.z = Math.PI / 2;
    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.08, 1.8),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.6, roughness: 0.4 })
    );
    floor.position.y = -0.58;
    scene.add(hull, wire, floor);

    const zones = [
      { id: 'sleep_zone', x: -2.0, col: 0xa78bfa },
      { id: 'exercise_zone', x: -1.0, col: 0x10b981 },
      { id: 'med_zone', x: 0.0, col: 0x38bdf8 },
      { id: 'galley_zone', x: 1.0, col: 0xf59e0b },
      { id: 'eclss_zone', x: 2.0, col: 0x06b6d4 }
    ];
    dynamic.zoneMeshes = {};
    zones.forEach(z => {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.82, 0.96, 1.25),
        new THREE.MeshStandardMaterial({ color: z.col, transparent: true, opacity: z.id === activeHotspotId ? 0.62 : 0.28, roughness: 0.3 })
      );
      box.position.set(z.x, -0.05, 0);
      scene.add(box);
      dynamic.zoneMeshes[z.id] = box;
    });
  } else if (type === 'orbit') {
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 42, 42),
      new THREE.MeshStandardMaterial({ map: makeEarthTexture(), roughness: 0.45 })
    );
    const atmo = new THREE.Mesh(
      new THREE.SphereGeometry(1.63, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.16, side: THREE.BackSide })
    );
    const belt = new THREE.Mesh(
      new THREE.TorusGeometry(3.0, 0.22, 16, 72),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.22 })
    );
    belt.rotation.x = Math.PI / 2.2;
    const leoTrack = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.015, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
    );
    leoTrack.rotation.x = Math.PI / 2.3;
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.46, 28, 28),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.85 })
    );
    moon.position.set(-4.6, 1.0, -4.2);
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry(0.58, 28, 28),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.75 })
    );
    mars.position.set(5.6, 1.4, -6.2);
    const craft = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 14), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
    craft.position.set(2.05, 0.2, 0.0);
    scene.add(earth, atmo, belt, leoTrack, moon, mars, craft);
    dynamic.earth = earth; dynamic.craft = craft;
  } else if (type === 'weather') {
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(1.35, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b })
    );
    sun.position.set(-3.8, 0.2, -1.5);
    const corona = new THREE.Mesh(
      new THREE.SphereGeometry(1.55, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.25, wireframe: true })
    );
    corona.position.copy(sun.position);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 32, 32),
      new THREE.MeshStandardMaterial({ map: makeEarthTexture(), roughness: 0.45 })
    );
    earth.position.set(2.8, 0, 0.5);
    const shield = new THREE.Mesh(
      new THREE.SphereGeometry(1.45, 28, 28, 0, Math.PI),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.24, wireframe: true })
    );
    shield.position.copy(earth.position);
    shield.rotation.y = -Math.PI / 2;
    scene.add(sun, corona, earth, shield);
    dynamic.earth = earth; dynamic.corona = corona;
  }

  threeCtx = { container, scene, camera, renderer, camState, target, updateCam, dynamic, raf: null };

  const loop = () => {
    if (!threeCtx) return;
    threeCtx.raf = requestAnimationFrame(loop);
    if (document.hidden || appState.dest !== 'explorer3d') return;
    const motion = document.documentElement.dataset.motion || 'full';
    const t = Date.now() * 0.001;
    if (motion === 'full' && !appState.anim3dPaused) {
      if (dynamic.group) dynamic.group.rotation.y += 0.0035;
      if (dynamic.earth) dynamic.earth.rotation.y += 0.0025;
      if (dynamic.corona) dynamic.corona.rotation.y -= 0.004;
      if (dynamic.craft) {
        dynamic.craft.position.x = Math.cos(t * 0.7) * 2.05;
        dynamic.craft.position.z = Math.sin(t * 0.7) * 2.05;
      }
      if (dynamic.twin && dynamic.twin.chest) {
        const rr = CREW[appState.selectedCrew].vals.resp || 15;
        const br = 1 + Math.sin(t * (rr / 60) * Math.PI * 2) * 0.022;
        dynamic.twin.chest.forEach(o => o.scale.set(br, 1, 1 + (br - 1) * 1.6));
      }
      if (dynamic.heart) {
        const hr = CREW[appState.selectedCrew].vals.hr || 72;
        const s = 1 + Math.sin(t * (hr / 60) * Math.PI * 2) * 0.13;
        dynamic.heart.scale.set(0.95 * s, 1.22 * s, 0.85 * s);
      }
      if (dynamic.bay) {
        dynamic.bay.flywheel.rotation.z += 0.09;
        const phase = t * 4.5;
        if (activeHotspotId === 'treadmill') {
          dynamic.bay.lLeg.rotation.z = Math.sin(phase) * 0.42;
          dynamic.bay.rLeg.rotation.z = -Math.sin(phase) * 0.42;
          dynamic.bay.lArm.rotation.z = 0.6 - Math.sin(phase) * 0.35;
          dynamic.bay.rArm.rotation.z = 0.6 + Math.sin(phase) * 0.35;
        } else if (activeHotspotId === 'ared') {
          const sq = Math.sin(t * 2.2) * 0.12;
          dynamic.bay.torso.position.y = 0.28 + sq;
        } else {
          dynamic.bay.lLeg.rotation.z = 0.55 + Math.sin(phase) * 0.32;
          dynamic.bay.rLeg.rotation.z = 0.55 - Math.sin(phase) * 0.32;
        }
      }
    }
    renderer.render(scene, camera);
  };
  loop();
}

function highlightTwinSystem(sysId, twinObj) {
  if (!twinObj || !twinObj.systems) return;
  Object.entries(twinObj.systems).forEach(([k, grp]) => {
    const active = k === sysId;
    grp.visible = true;
    grp.traverse(child => {
      if (child.material) {
        child.material.opacity = active ? 0.95 : 0.22;
        child.material.transparent = true;
      }
    });
  });
}

function animateCameraToPreset(p) {
  if (!threeCtx || !p) return;
  if (window.gsap && (document.documentElement.dataset.motion || 'full') !== 'minimal') {
    gsap.to(threeCtx.camState, {
      radius: p.r, theta: p.th, phi: p.ph, duration: 0.65, ease: 'power2.out',
      onUpdate: () => threeCtx.updateCam()
    });
    gsap.to(threeCtx.target, {
      y: p.ty, duration: 0.65, ease: 'power2.out',
      onUpdate: () => threeCtx.updateCam()
    });
  } else {
    threeCtx.camState.radius = p.r;
    threeCtx.camState.theta = p.th;
    threeCtx.camState.phi = p.ph;
    threeCtx.target.y = p.ty;
    threeCtx.updateCam();
  }
}

function updateTwinLiveDisplay() {
  const a = CREW[appState.selectedCrew];
  if (threeCtx && threeCtx.dynamic && threeCtx.dynamic.heart) {
    const st = Math.max(...VITALS.map(v => classify(v.th, a.vals[v.key])));
    const hex = [0x10b981, 0xf59e0b, 0xef4444][st];
    threeCtx.dynamic.heart.material.color.setHex(hex);
    threeCtx.dynamic.heart.material.emissive.setHex(hex);
  }
}

let bodyRealistic = false;
window.setBodyMode = function() {
  const tw = threeCtx && threeCtx.dynamic && threeCtx.dynamic.twin;
  if (!tw) { showToast('Open the Human Digital Twin scene first.'); return; }
  bodyRealistic = !bodyRealistic;
  const m = tw.skinShellMat, sk = tw.bodyMode.skinM;
  tw.faceGroup.visible = bodyRealistic;
  tw.wireOverlayMat.visible = !bodyRealistic;
  ['color','roughness','sheen','sheenColor','sheenRoughness','clearcoat','clearcoatRoughness','bumpMap','bumpScale'].forEach(k => { if (bodyRealistic) { m['_x_'+k] = m[k]; m[k] = (sk[k] && sk[k].clone) ? sk[k].clone() : sk[k]; } else if (('_x_'+k) in m) { m[k] = m['_x_'+k]; } });
  m.transparent = !bodyRealistic; m.opacity = bodyRealistic ? 1 : 0.26; m.depthWrite = bodyRealistic;
  m.emissive.setHex(bodyRealistic ? 0x3a1408 : 0x0c4a6e); m.emissiveIntensity = bodyRealistic ? 0.25 : 0.45; m.side = bodyRealistic ? THREE.FrontSide : THREE.DoubleSide;
  if (m.bumpMap) m.bumpMap.needsUpdate = true;
  m.needsUpdate = true;
  document.getElementById('bodyModeBtn').textContent = bodyRealistic ? '🫀 X-ray Anatomy' : '🧍 Realistic Body';
  showToast(bodyRealistic ? 'Realistic skin view. Switch to X-ray to inspect organ systems.' : 'X-ray anatomy view restored.');
};
window.preEvaCheck = function() {
  const a = CREW[appState.selectedCrew];
  const flags = VITALS.map(v => ({ v, st: classify(v.th, a.vals[v.key]) })).filter(x => x.st > 0);
  const score = Math.max(0, 100 - flags.reduce((n, x) => n + (x.st === 2 ? 30 : 12), 0));
  const why = flags.length ? flags.map(x => `${x.v.label || x.v.key} ${x.st === 2 ? 'critical' : 'watch'}`).join(', ') : 'all tracked indicators within reference ranges';
  showToast(`Pre-EVA readiness (educational estimate): ${score}/100 — ${why}. Not a medical clearance; confirm with flight surgeon.`);
};

window.switchScene3D = function(type) {
  appState.scene3d = type;
  document.querySelectorAll('[data-scene]').forEach(b => b.classList.toggle('active', b.dataset.scene === type));
  const meta = SCENE_META[type];
  activeHotspotId = meta.hotspots[0].id;
  document.getElementById('hudSceneBadge').textContent = meta.badge;
  document.getElementById('hudSceneTitle').textContent = meta.title;

  const pBar = document.getElementById('cameraPresetBar');
  pBar.innerHTML = (meta.camPresets || []).map((cp, i) =>
    `<button type="button" class="hotspot-btn ${i === 0 ? 'active' : ''}" data-cp="${cp.id}">${cp.label}</button>`
  ).join('');
  pBar.querySelectorAll('.hotspot-btn').forEach(btn => {
    btn.onclick = () => {
      pBar.querySelectorAll('.hotspot-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const cp = meta.camPresets.find(x => x.id === btn.dataset.cp);
      animateCameraToPreset(cp);
    };
  });

  const bar = document.getElementById('sceneHotspotBar');
  bar.innerHTML = meta.hotspots.map((hs, idx) =>
    `<button type="button" class="hotspot-btn ${idx === 0 ? 'active' : ''}" data-hs="${hs.id}">${hs.label}</button>`
  ).join('');
  bar.querySelectorAll('.hotspot-btn').forEach(btn => {
    btn.onclick = () => {
      activeHotspotId = btn.dataset.hs;
      bar.querySelectorAll('.hotspot-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const hs = meta.hotspots.find(h => h.id === activeHotspotId);
      if (threeCtx) {
        if (hs.y !== undefined && threeCtx.dynamic.ring) threeCtx.dynamic.ring.position.y = hs.y;
        if (hs.cam) animateCameraToPreset(hs.cam);
        if (type === 'twin' && threeCtx.dynamic.twin) highlightTwinSystem(activeHotspotId, threeCtx.dynamic.twin);
        if (type === 'habitat' && threeCtx.dynamic.zoneMeshes) {
          Object.entries(threeCtx.dynamic.zoneMeshes).forEach(([zid, mesh]) => {
            mesh.material.opacity = zid === activeHotspotId ? 0.68 : 0.25;
          });
        }
      }
      renderSceneDetailDrawer();
    };
  });

  document.getElementById('fallback2DContainer').innerHTML = `
    <div class="card-h"><h2>2D Accessible Table — ${meta.title}</h2><span class="tag-badge sim">${meta.badge}</span></div>
    <div class="scroll"><table><thead><tr><th>Zone / System</th><th>Context &amp; Limitations</th></tr></thead>
    <tbody>${meta.hotspots.map(h => `<tr><td><b>${h.label}</b></td><td>${h.desc}</td></tr>`).join('')}</tbody></table></div>
  `;

  if (webglAvailable) buildThreeScene(type);
  renderSceneDetailDrawer();
};

function renderSceneDetailDrawer() {
  const meta = SCENE_META[appState.scene3d];
  const hs = meta.hotspots.find(h => h.id === activeHotspotId) || meta.hotspots[0];
  const a = CREW[appState.selectedCrew];
  document.getElementById('sceneDetailDrawer').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <b>${hs.label} — Subject: ${a.name} (${appState.dataMode.toUpperCase()})</b>
      <button class="ghost" type="button" onclick="openEvidencePassport('3D-${appState.scene3d.toUpperCase()}')">Why am I seeing this?</button>
    </div>
    <p style="font-size:13px">${hs.desc}</p>
    <div class="muted" style="font-size:12px"><b>What this cannot show:</b> Illustrative 3D educational model only — does not perform live internal organ imaging, live biometric capture, or clinical diagnosis.</div>
  `;
}

// =========================================================================
// 6. RENDERING ALL DAILY & MISSION CONTROL VIEWS
// =========================================================================
function applyTranslations() {
  const dict = UI_I18N[appState.lang] || UI_I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k]) el.textContent = dict[k];
  });
}

function renderCrewChips() {
  const row = document.getElementById('crewSelectorRow');
  row.innerHTML = CREW.map((c, idx) =>
    `<button type="button" class="crew-chip ${idx === appState.selectedCrew ? 'active' : ''}" data-cidx="${idx}">${c.icon} ${c.name}</button>`
  ).join('');
  row.querySelectorAll('.crew-chip').forEach(b => {
    b.onclick = () => {
      appState.selectedCrew = Number(b.dataset.cidx);
      renderAll();
      window.dispatchEvent(new CustomEvent('astro:crew', { detail: appState.selectedCrew }));
    };
  });
}

function renderHome() {
  const a = CREW[appState.selectedCrew];
  const myCheckins = appState.checkins.filter(c => c.crew === a.id);
  const myExercises = appState.exercises.filter(e => e.crew === a.id);
  const latestCi = myCheckins[0];
  const latestEx = myExercises[0];

  document.getElementById('homeGreeting').textContent = appState.lang === 'ar'
    ? `اليوم — ${a.name} (${a.role})`
    : `Today — ${a.name} (${a.role})`;

  document.getElementById('homeKpiRow').innerHTML = `
    <div class="kpi-box">
      <div class="k-lbl">${appState.lang === 'ar' ? 'آخر تسجيل يومي' : 'Latest Check-In'}</div>
      <div class="k-val">${latestCi ? (latestCi.sleepH != null ? latestCi.sleepH + ' h sleep' : 'Logged') : 'Pending'}</div>
      <div class="k-sub">${latestCi ? fmtTime(latestCi.t) + (latestCi.isDemo ? ' • DEMO' : ' • MANUAL') : 'No entry logged today'}</div>
    </div>
    <div class="kpi-box">
      <div class="k-lbl">${appState.lang === 'ar' ? 'آخر نشاط بدني' : 'Recent Activity'}</div>
      <div class="k-val">${latestEx ? latestEx.durationMin + ' min' : 'None logged'}</div>
      <div class="k-sub">${latestEx ? latestEx.modality : 'Log in Orbital Recovery'}</div>
    </div>
    <div class="kpi-box">
      <div class="k-lbl">${appState.lang === 'ar' ? 'الترطيب (الأحدث)' : 'Hydration (Latest)'}</div>
      <div class="k-val">${latestCi && latestCi.hydrationL != null ? latestCi.hydrationL + ' L' : 'No entry'}</div>
      <div class="k-sub">${appState.lang === 'ar' ? 'إدخال ذاتي' : 'Self-reported intake'}</div>
    </div>
    <div class="kpi-box">
      <div class="k-lbl">${appState.lang === 'ar' ? 'مراقب البث الحي' : 'Smart Telemetry HUD'}</div>
      <div class="k-val" style="color:${appState.sm.alertActive ? 'var(--crit)' : 'var(--ok)'};font-size:1.05rem">${appState.sm.alertActive ? 'ALERT ACTIVE' : '125 Hz Ready'}</div>
      <div class="k-sub"><button class="link" type="button" onclick="navigateTo('smartmonitor')">Open Smart Health Monitor →</button></div>
    </div>
  `;

  document.getElementById('homeActionList').innerHTML = `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <b>1. Smart Astronaut Health Monitor HUD</b>
        <span class="tag-badge ref">125 HZ ECG + 3D</span>
      </div>
      <p class="muted" style="font-size:12.5px">Inspect real-time wearable PPG/ECG stream, InBody 970 body water &amp; muscle profile, 0G cephalad fluid shift, and the 3D Wireframe Holographic Scanner.</p>
    </div>
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <b>2. Daily 60-Second Self-Report</b>
        <span class="tag-badge man">OPTIONAL FIELDS</span>
      </div>
      <p class="muted" style="font-size:12.5px">Record sleep duration, subjective rest quality, energy, and hydration to maintain your personal longitudinal baseline.</p>
    </div>
  `;

  if (appState.uiMode === 'mc') renderMcTelemetry();
}

function renderMcTelemetry() {
  const a = CREW[appState.selectedCrew];
  document.getElementById('scenarioButtonsRow').innerHTML = Object.keys(SCENARIOS).map(k =>
    `<button type="button" class="cmd-btn ${a.scen === k ? 'active' : ''}" onclick="window.__setScenario('${k}')">${SCENARIOS[k].label}</button>`
  ).join('');

  document.getElementById('vitalsTilesGrid').innerHTML = VITALS.map(v => {
    const val = a.vals[v.key];
    const st = classify(v.th, val);
    return `
      <div class="tile s${st}">
        <div class="lb"><span>${v.label}</span><span class="mono">${['NOMINAL', 'CAUTION', 'CRITICAL'][st]}</span></div>
        <div class="v">${val.toFixed(v.dec)} <small style="font-size:12px;color:var(--muted)">${v.unit}</small></div>
        <div class="muted" style="font-size:11px">DEMO STREAM • ${a.scen.toUpperCase()}</div>
      </div>
    `;
  }).join('');

  renderMcSignalInspector();
}
window.__setScenario = k => { CREW[appState.selectedCrew].scen = k; renderAll(); };

function renderMcSignalInspector() {
  const a = CREW[appState.selectedCrew];
  const sigKey = (document.getElementById('mcSignalSelect') || {}).value || 'hr';
  const meta = VITALS.find(v => v.key === sigKey) || VITALS[0];
  let arr = (a.hist[sigKey] || []).slice();
  if (appState.simGap && arr.length > 25) {
    arr = arr.map((val, idx) => (idx >= 18 && idx <= 24) ? null : val);
  }
  const validCount = arr.filter(x => x !== null).length;
  const missPct = arr.length ? Math.round(((arr.length - validCount) / arr.length) * 100) : 0;
  const metaEl = document.getElementById('mcSignalMeta');
  if (metaEl) metaEl.textContent = `Unit: ${meta.unit} | Window: ${arr.length} samples | Missingness: ${missPct}%`;

  const chartEl = document.getElementById('mcSignalChart');
  if (!chartEl || arr.length < 2) return;
  const W = 680, H = 150, L = 36, R = 12, T = 12, B = 22;
  const nums = arr.filter(x => x !== null);
  const ymin = Math.min(...nums) - 2;
  const ymax = Math.max(...nums) + 2;
  const X = i => L + (i / (arr.length - 1)) * (W - L - R);
  const Y = v => T + (1 - (v - ymin) / Math.max(0.1, ymax - ymin)) * (H - T - B);

  let rawPaths = '';
  let seg = [];
  arr.forEach((v, i) => {
    if (v === null) {
      if (seg.length > 1) rawPaths += `<polyline fill="none" stroke="var(--accent)" stroke-width="2" points="${seg.join(' ')}"/>`;
      seg = [];
    } else {
      seg.push(`${X(i).toFixed(1)},${Y(v).toFixed(1)}`);
    }
  });
  if (seg.length > 1) rawPaths += `<polyline fill="none" stroke="var(--accent)" stroke-width="2" points="${seg.join(' ')}"/>`;

  let smoothPoly = '';
  if (appState.showRolling) {
    const sPts = [];
    for (let i = 0; i < arr.length; i++) {
      const win = arr.slice(Math.max(0, i - 4), i + 1).filter(x => x !== null);
      if (win.length >= 3 && arr[i] !== null) {
        const m = win.reduce((s, x) => s + x, 0) / win.length;
        sPts.push(`${X(i).toFixed(1)},${Y(m).toFixed(1)}`);
      }
    }
    if (sPts.length > 1) smoothPoly = `<polyline fill="none" stroke="var(--accent2)" stroke-width="2.2" stroke-dasharray="4 2" points="${sPts.join(' ')}"/>`;
  }

  chartEl.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Raw vs Smoothed Signal Inspector">
      ${rawPaths}
      ${smoothPoly}
      <text x="${L}" y="${H - 5}">t - ${arr.length}s</text>
      <text x="${W - R}" y="${H - 5}" text-anchor="end">Latest (${meta.unit})</text>
    </svg>
  `;
}

function renderCheckinHistory() {
  const a = CREW[appState.selectedCrew];
  const rows = appState.checkins.filter(c => c.crew === a.id);
  const list = document.getElementById('checkinHistoryList');
  if (!rows.length) {
    list.innerHTML = '<p class="mempty">No check-ins recorded yet for this profile.</p>';
    return;
  }
  list.innerHTML = rows.map(r => `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
        <span class="mono" style="font-size:12px">${fmtTime(r.t)}</span>
        <div>
          <span class="tag-badge ${r.isDemo ? 'sim' : 'man'}">${r.isDemo ? 'DEMO FIXTURE' : 'MANUAL ENTRY'}</span>
          ${!r.isDemo ? `<button class="link" type="button" onclick="window.__deleteCheckin('${r.id}')">Delete</button>` : ''}
        </div>
      </div>
      <div style="font-size:13px">
        <b>Sleep:</b> ${r.sleepH != null ? r.sleepH + ' h' : 'Skipped'} (Quality ${r.sleepQual}/5) •
        <b>Energy:</b> ${r.energy}/5 • <b>Mood:</b> ${r.mood}/5 •
        <b>Hydration:</b> ${r.hydrationL != null ? r.hydrationL + ' L' : 'Skipped'}
      </div>
      ${r.notes ? `<div class="muted" style="font-size:12px">${r.notes}</div>` : ''}
    </div>
  `).join('');
}
window.__deleteCheckin = id => {
  appState.checkins = appState.checkins.filter(c => c.id !== id);
  saveV3Records();
  renderAll();
  showToast('Check-in entry deleted.');
};

function renderExerciseHistory() {
  const a = CREW[appState.selectedCrew];
  const rows = appState.exercises.filter(e => e.crew === a.id);
  const box = document.getElementById('exerciseHistoryList');
  if (!rows.length) {
    box.innerHTML = '<p class="mempty">No exercise or recovery entries logged yet.</p>';
    return;
  }
  box.innerHTML = rows.map(r => `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
        <b>${r.modality} (${r.durationMin} min • RPE ${r.rpe}/10)</b>
        <span class="tag-badge ${r.isDemo ? 'sim' : 'man'}">${r.isDemo ? 'DEMO FIXTURE' : 'MANUAL ENTRY'}</span>
      </div>
      <div class="mono muted" style="font-size:11.5px">${fmtTime(r.t)} • Phase: ${r.phase}</div>
      <div style="font-size:12.5px"><b>Before:</b> ${r.preFeel || 'Not noted'} → <b>After/Recovery:</b> ${r.postFeel || 'Not noted'}</div>
      <div class="mono" style="font-size:12px;color:var(--accent)">
        HR: ${r.hr != null ? r.hr + ' bpm' : 'NO MEASUREMENT AVAILABLE'} | SpO₂: ${r.spo2 != null ? r.spo2 + '%' : 'NO MEASUREMENT AVAILABLE'}
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const a = CREW[appState.selectedCrew];
  const items = [];
  appState.checkins.filter(c => c.crew === a.id).forEach(c => items.push({
    t: c.t, cat: 'checkin', badge: c.isDemo ? 'DEMO FIXTURE' : 'MANUAL ENTRY',
    title: `Daily Check-In — Sleep: ${c.sleepH ?? 'Skipped'} h, Energy: ${c.energy}/5, Mood: ${c.mood}/5`,
    detail: c.notes || c.nutrition || 'Self-reported daily rhythm entry.'
  }));
  appState.exercises.filter(e => e.crew === a.id).forEach(e => items.push({
    t: e.t, cat: 'exercise', badge: e.isDemo ? 'DEMO FIXTURE' : 'MANUAL ENTRY',
    title: `Orbital Recovery — ${e.modality} (${e.durationMin} min, RPE ${e.rpe}/10)`,
    detail: `Before: ${e.preFeel || '—'} | After: ${e.postFeel || '—'}`
  }));
  appState.alerts.filter(al => al.crew === a.id).forEach(al => items.push({
    t: al.t, cat: 'alert', badge: 'DERIVED PATTERN',
    title: al.title,
    detail: 'Threshold review notice (non-diagnostic).'
  }));

  items.sort((x, y) => y.t - x.t);
  const filtered = appState.tlFilter === 'all' ? items : items.filter(i => i.cat === appState.tlFilter);
  const box = document.getElementById('timelineFeedList');
  if (!filtered.length) {
    box.innerHTML = '<div class="sub-card"><b>No records in this filter window.</b><p class="muted">ASTRA preserves empty intervals rather than fabricating continuous telemetry.</p></div>';
    return;
  }
  box.innerHTML = filtered.map(it => `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
        <span class="mono" style="font-size:12px;color:var(--accent)">${fmtTime(it.t)}</span>
        <span class="tag-badge">${it.badge}</span>
      </div>
      <b>${it.title}</b>
      <p class="muted" style="font-size:12.5px">${it.detail}</p>
    </div>
  `).join('');
}

function renderInsightsAndAlerts() {
  const a = CREW[appState.selectedCrew];
  const myCi = appState.checkins.filter(c => c.crew === a.id);
  const avgSleep = myCi.filter(c => c.sleepH != null);
  const sleepMean = avgSleep.length ? (avgSleep.reduce((s, c) => s + c.sleepH, 0) / avgSleep.length).toFixed(1) : null;

  document.getElementById('explainableInsightsList').innerHTML = `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
        <b>Pattern Check 01: Self-Reported Sleep Consistency (n = ${avgSleep.length} entries)</b>
        <button class="ghost" type="button" onclick="openEvidencePassport('PATTERN-SLEEP')">Why am I seeing this?</button>
      </div>
      <p style="font-size:13px">${sleepMean ? `Mean logged sleep duration is <b>${sleepMean} hours</b> across ${avgSleep.length} recorded check-in(s).` : 'Insufficient sleep entries logged to compute a rolling summary.'}</p>
      <div class="muted" style="font-size:12px"><b>What this does NOT mean:</b> Self-reported hours do not measure sleep architecture (REM/SWS) or diagnose a sleep disorder.</div>
    </div>
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
        <b>Pattern Check 02: Exercise &amp; Subjective Readiness Association</b>
        <button class="ghost" type="button" onclick="openEvidencePassport('PATTERN-EX')">Why am I seeing this?</button>
      </div>
      <p style="font-size:13px">Temporal correlation screen only: compares post-exercise self-reports with next-day energy ratings when both are present.</p>
      <div class="muted" style="font-size:12px"><b>What this does NOT mean:</b> Temporal proximity does not prove physiological causation.</div>
    </div>
  `;

  const hrs = CREW.map(c => Math.round(c.vals.hr)).sort((x, y) => x - y);
  const spo2s = CREW.map(c => Math.round(c.vals.spo2)).sort((x, y) => x - y);
  const rps = CREW.map(c => Math.round(c.vals.resp)).sort((x, y) => x - y);
  document.getElementById('cohortSpreadGrid').innerHTML = `
    <div class="sub-card">
      <div class="k-lbl">Heart Rate Spread (bpm)</div>
      <div class="mono" style="font-size:1.1rem;font-weight:700">Min ${hrs[0]} • Med ${hrs[1]} • Max ${hrs[3]}</div>
      <small class="muted">Aggregate range only — individual context varies</small>
    </div>
    <div class="sub-card">
      <div class="k-lbl">SpO₂ Spread (%)</div>
      <div class="mono" style="font-size:1.1rem;font-weight:700">Min ${spo2s[0]}% • Med ${spo2s[2]}% • Max ${spo2s[3]}%</div>
      <small class="muted">Simulated fixture distribution</small>
    </div>
    <div class="sub-card">
      <div class="k-lbl">Respiration Spread (/min)</div>
      <div class="mono" style="font-size:1.1rem;font-weight:700">Min ${rps[0]} • Med ${rps[1]} • Max ${rps[3]}</div>
      <small class="muted">No interpersonal ranking or compatibility score</small>
    </div>
  `;

  const unacked = appState.alerts.filter(x => !x.ack).length;
  document.getElementById('railAlertBadge').textContent = unacked;
  document.getElementById('alertInboxCount').textContent = `${appState.alerts.length} total (${unacked} unacknowledged)`;
  const inbox = document.getElementById('smartAlertInbox');
  if (!appState.alerts.length) {
    inbox.innerHTML = '<p class="mempty">No active threshold alerts. Switch a crew scenario in Mission Control to test bounded alert rules.</p>';
  } else {
    inbox.innerHTML = appState.alerts.slice(0, 10).map(al => `
      <div class="sub-card" style="border-inline-start:3px solid ${al.level === 2 ? 'var(--crit)' : 'var(--warn)'}">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
          <span class="mono" style="font-size:11.5px">${fmtTime(al.t)}</span>
          ${al.ack ? '<span class="tag-badge ref">ACKNOWLEDGED</span>' : `<button class="ghost" type="button" style="min-height:32px;font-size:11.5px" onclick="window.__ackAlert('${al.id}')">Acknowledge</button>`}
        </div>
        <div style="font-size:13px;font-weight:600">${al.title}</div>
      </div>
    `).join('');
  }

  const swBox = document.getElementById('spaceWeatherPanel');
  const dTag = document.getElementById('donkiStatusTag');
  if (appState.donki.status === 'LIVE') {
    dTag.textContent = 'LIVE • NASA DONKI FLR';
    dTag.className = 'tag-badge ref';
    swBox.innerHTML = `
      <div class="mono muted" style="font-size:11px">Retrieved: ${appState.donki.retrievedAt} • Source: SRC-NASA-DONKI-01</div>
      ${appState.donki.events.slice(0, 4).map(ev => `
        <div class="sub-card">
          <b>Class ${ev.classType || 'M/X'} Solar Flare (${ev.activeRegionNum ? 'AR ' + ev.activeRegionNum : 'Solar Disk'})</b>
          <div class="mono muted" style="font-size:11.5px">Peak: ${ev.peakTime || ev.beginTime}</div>
          <div class="muted" style="font-size:11.5px">External heliophysics event only — not personal crew dose.</div>
        </div>
      `).join('')}
    `;
  } else if (appState.donki.status === 'ERROR') {
    dTag.textContent = 'UNAVAILABLE (OFFLINE / RATE LIMIT)';
    dTag.className = 'tag-badge err';
    swBox.innerHTML = `<div class="sub-card"><b>Live NASA DONKI query unavailable:</b> ${appState.donki.error}. No fabricated flare events are shown.</div>`;
  } else {
    dTag.textContent = 'NOT QUERIED';
    swBox.innerHTML = `<div class="sub-card">Click <b>Fetch NASA DONKI Solar Flares</b> above to retrieve real external solar flare notifications from NASA's public API.</div>`;
  }
}
window.__ackAlert = id => {
  const f = appState.alerts.find(x => x.id === id);
  if (f) f.ack = true;
  renderInsightsAndAlerts();
};

async function fetchNasaDonki() {
  const key = (document.getElementById('setNasaKey') || {}).value.trim() || 'DEMO_KEY';
  const end = new Date().toISOString().slice(0, 10);
  const start = new Date(Date.now() - 14 * 864e5).toISOString().slice(0, 10);
  showToast('Querying NASA DONKI Space Weather API...');
  try {
    const res = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${start}&endDate=${end}&api_key=${encodeURIComponent(key)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    appState.donki = {
      status: 'LIVE',
      events: Array.isArray(data) ? data.reverse() : [],
      retrievedAt: new Date().toISOString(),
      error: null
    };
    appState.dataMode = 'connected';
    document.getElementById('dataModeSelect').value = 'connected';
    document.getElementById('ribbonDataBadge').textContent = 'CONNECTED (NASA DONKI LIVE) • NON-DIAGNOSTIC';
    document.getElementById('ribbonDataBadge').className = 'tag-badge ref';
    showToast(`Retrieved ${appState.donki.events.length} NASA DONKI flare records.`);
  } catch (err) {
    appState.donki = { status: 'ERROR', events: [], retrievedAt: new Date().toISOString(), error: err.message };
    showToast('NASA DONKI offline/unreachable — honest fallback shown.');
  }
  renderInsightsAndAlerts();
}

function renderResearchLibrary(q = '') {
  const term = q.trim().toLowerCase();
  const haz = HRP_HAZARDS.filter(h => !term || h.title.toLowerCase().includes(term) || h.body.toLowerCase().includes(term));
  document.getElementById('hrpHazardsGrid').innerHTML = haz.map(h => `
    <div class="sub-card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
        <b>${h.title}</b>
        <button class="ghost" type="button" style="min-height:32px;font-size:11px" onclick="openEvidencePassport('${h.source}')">Provenance</button>
      </div>
      <p class="muted" style="font-size:12.5px">${h.body}</p>
    </div>
  `).join('');

  const osdr = OSDR_STUDIES.filter(s => !term || s.id.toLowerCase().includes(term) || s.title.toLowerCase().includes(term) || s.org.toLowerCase().includes(term));
  document.getElementById('osdrCatalogBody').innerHTML = osdr.map(s => `
    <tr>
      <td class="mono"><b>${s.id}</b></td>
      <td>${s.title}</td>
      <td><span class="tag-badge der">${s.org}</span></td>
      <td>${s.assay}</td>
      <td class="muted">${s.limit}</td>
    </tr>
  `).join('');
}

function renderScenarioLab() {
  const regKey = (document.getElementById('delayRegimeSelect') || {}).value || 'mars_min';
  const reg = MARS_REGIMES[regKey];
  document.getElementById('delayRegimeOutput').innerHTML = `
    <div class="sub-card">
      <div class="k-lbl">Light-Time Delay</div>
      <div class="k-val" style="font-size:1.15rem">${reg.delay}</div>
      <div><b>Evacuation Window:</b> ${reg.evac}</div>
      <p class="muted" style="font-size:12.5px">${reg.note}</p>
    </div>
  `;

  const days = Number(document.getElementById('simDays').value);
  const grav = Number(document.getElementById('simGrav').value);
  const ared = Number(document.getElementById('simAred').value);
  const shield = Number(document.getElementById('simShield').value);
  document.getElementById('simDaysLbl').textContent = days;
  document.getElementById('simAredLbl').textContent = ared + '%';
  document.getElementById('simShieldLbl').textContent = shield;

  const gravFactor = grav === 0 ? 1.0 : (grav === 0.16 ? 0.72 : 0.48);
  const bmdMonthlyLoss = 1.35 * gravFactor * (1 - 0.68 * (ared / 100));
  const totalBmdChange = -(bmdMonthlyLoss * (days / 30));
  const dailyDoseMsv = (grav === 0 && days <= 180 ? 0.55 : 0.95) * (20 / shield);
  const cumDose = dailyDoseMsv * days;

  document.getElementById('scenarioKpiSummary').innerHTML = `
    <div class="kpi-box"><div class="k-lbl">Simulated BMD Δ</div><div class="k-val">${totalBmdChange.toFixed(1)}%</div><div class="k-sub">Educational unloading curve</div></div>
    <div class="kpi-box"><div class="k-lbl">Est. Ambient Dose</div><div class="k-val">${cumDose.toFixed(0)} mSv</div><div class="k-sub">${dailyDoseMsv.toFixed(2)} mSv/day model</div></div>
    <div class="kpi-box"><div class="k-lbl">Gravity Regime</div><div class="k-val">${grav} g</div><div class="k-sub">${days} mission days</div></div>
    <div class="kpi-box"><div class="k-lbl">Model Type</div><div class="k-val" style="font-size:0.95rem">SIMULATED</div><div class="k-sub">Not individual prognosis</div></div>
  `;

  const W = 540, H = 135, L = 34, R = 12, T = 12, B = 22;
  const pts = [];
  for (let i = 0; i <= 6; i++) {
    const frac = i / 6;
    const val = 100 + totalBmdChange * frac;
    const x = L + frac * (W - L - R);
    const y = T + (1 - (val - 80) / 22) * (H - T - B);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  document.getElementById('scenarioChartBox').innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Simulated Unloading Curve">
      <line x1="${L}" y1="${T}" x2="${W - R}" y2="${T}" stroke="var(--line)" stroke-dasharray="3 3"/>
      <polyline fill="none" stroke="var(--accent)" stroke-width="2.5" points="${pts.join(' ')}"/>
      <text x="${L}" y="${H - 5}">Day 0 (100% baseline)</text>
      <text x="${W - R}" y="${H - 5}" text-anchor="end">Day ${days} (${(100 + totalBmdChange).toFixed(1)}%)</text>
    </svg>
  `;
}

function renderReportsPreview() {
  const a = CREW[appState.selectedCrew];
  const ciCount = appState.checkins.filter(c => c.crew === a.id).length;
  const exCount = appState.exercises.filter(e => e.crew === a.id).length;
  document.getElementById('reportPreviewBox').innerHTML = `
    <b>Export Manifest — ${a.name} (${a.role})</b>
    <div class="mono" style="font-size:12px">Data Mode: ${appState.dataMode.toUpperCase()} | Generated: ${new Date().toISOString()}</div>
    <div style="font-size:12.5px">Included Counts: <b>${ciCount}</b> Daily Check-Ins, <b>${exCount}</b> Exercise Logs, plus stored Clinical Vitals in browser storage.</div>
    <div class="muted" style="font-size:12px"><b>Provenance Footer:</b> Independent non-diagnostic prototype. Demo fixtures and manual self-reports are explicitly tagged.</div>
  `;
}

function renderDiagnostics() {
  const a = CREW[appState.selectedCrew];
  document.getElementById('sysDiagnosticsList').innerHTML = `
    <div class="insp-kv"><span>Active Subject</span><b>${a.name} (${a.id.toUpperCase()})</b></div>
    <div class="insp-kv"><span>Interface Mode</span><b>${appState.uiMode.toUpperCase()}</b></div>
    <div class="insp-kv"><span>Data Mode</span><b>${appState.dataMode.toUpperCase()}</b></div>
    <div class="insp-kv"><span>WebGL 3D Engine</span><b>${webglAvailable ? 'ACTIVE (Three.js r128)' : '2D FALLBACK'}</b></div>
    <div class="insp-kv"><span>Smart Telemetry HUD</span><b>125 Hz SVG + 3D Wireframe Holo</b></div>
    <div class="insp-kv"><span>Stored Check-Ins</span><b>${appState.checkins.length}</b></div>
    <div class="insp-kv"><span>Stored Exercise Sessions</span><b>${appState.exercises.length}</b></div>
    <div class="insp-kv"><span>NASA DONKI Connector</span><b>${appState.donki.status}</b></div>
  `;
}

function updateInspector() {
  const a = CREW[appState.selectedCrew];
  document.getElementById('inspHeading').textContent = `${a.icon} ${a.name} — ${a.role}`;
  document.getElementById('inspSummary').textContent = `Active destination: ${appState.dest.toUpperCase()}. Mode: ${appState.dataMode.toUpperCase()}.`;
  document.getElementById('inspKvContainer').innerHTML = `
    <div class="insp-kv"><span>Sim Heart Rate</span><b>${Math.round(a.vals.hr)} bpm</b></div>
    <div class="insp-kv"><span>Sim SpO₂</span><b>${Math.round(a.vals.spo2)}%</b></div>
    <div class="insp-kv"><span>Sim Core Temp</span><b>${a.vals.temp.toFixed(1)} °C</b></div>
    <div class="insp-kv"><span>Check-Ins Logged</span><b>${appState.checkins.filter(c => c.crew === a.id).length}</b></div>
    <div class="insp-kv"><span>Exercise Sessions</span><b>${appState.exercises.filter(e => e.crew === a.id).length}</b></div>
  `;
}

// =========================================================================
// 7. NAVIGATION, MODALS & EVIDENCE PASSPORT
// =========================================================================
window.navigateTo = function(dest) {
  appState.dest = dest;
  document.querySelectorAll('.module-view').forEach(v => v.classList.toggle('active', v.id === 'view-' + dest));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.dest === dest));
  document.querySelectorAll('.bnav-btn[data-dest]').forEach(b => b.classList.toggle('active', b.dataset.dest === dest));

  if (dest === 'home') initHomeHero3D();
  if (dest === 'smartmonitor') {
    initSmartMonitorHolo3D();
    renderSmartMonitor();
  }
  if (dest === 'explorer3d') switchScene3D(appState.scene3d);
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openModal = id => document.getElementById(id).classList.add('open');
window.closeModal = id => document.getElementById(id).classList.remove('open');

window.finishOnboarding = function() {
  const l = document.getElementById('onbLang').value;
  const m = document.getElementById('onbUiMode').value;
  setLanguage(l);
  setUiMode(m);
  try { localStorage.setItem('astra-omega-v6-onboarded', '1'); } catch (e) {}
  closeModal('onboardingModal');
};

window.openEvidencePassport = function(topicKey) {
  const src = SOURCES[topicKey] || SOURCES['SRC-NASA-HRP-01'];
  document.getElementById('evModalTitle').textContent = `Evidence Passport — ${topicKey}`;
  document.getElementById('evModalBody').innerHTML = `
    <div class="sub-card"><b>Primary Reference:</b> ${src.org} — ${src.title}</div>
    <div class="sub-card"><b>Population / Context:</b> ${src.population}</div>
    <div class="sub-card"><b>Known Limitations:</b> ${src.limitations}</div>
    <div class="sub-card"><b>Data Provenance Tag:</b> <span class="tag-badge sim">${appState.dataMode.toUpperCase()}</span> — Non-diagnostic educational &amp; research guidance.</div>
  `;
  openModal('evidenceModal');
};

function setLanguage(lang) {
  appState.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langBtn').textContent = lang === 'ar' ? 'English' : 'العربية';
  applyTranslations();
  renderAll();
}

function setUiMode(mode) {
  appState.uiMode = mode;
  document.body.classList.toggle('mc-mode', mode === 'mc');
  document.getElementById('btnQuickMode').classList.toggle('active', mode === 'quick');
  document.getElementById('btnMcMode').classList.toggle('active', mode === 'mc');
  document.getElementById('topModeTag').textContent = mode === 'mc' ? '// MISSION CONTROL' : '// QUICK COMPANION';
  renderAll();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(() => t.classList.remove('show'), 2800);
}

function renderAll() {
  renderCrewChips();
  renderHome();
  renderSmartMonitor();
  renderCheckinHistory();
  renderExerciseHistory();
  renderTimeline();
  renderInsightsAndAlerts();
  renderResearchLibrary(document.getElementById('researchSearchInput')?.value || '');
  renderScenarioLab();
  renderReportsPreview();
  renderDiagnostics();
  updateInspector();
}

// =========================================================================
// 8. EVENT WIRING
// =========================================================================
function bindEvents() {
  document.querySelectorAll('.nav-item').forEach(b => b.onclick = () => navigateTo(b.dataset.dest));
  document.querySelectorAll('.bnav-btn[data-dest]').forEach(b => b.onclick = () => navigateTo(b.dataset.dest));
  document.getElementById('btnMobileMore').onclick = () => openModal('moreModal');
  document.getElementById('btnTourOpen').onclick = () => openModal('onboardingModal');
  document.getElementById('langBtn').onclick = () => setLanguage(appState.lang === 'en' ? 'ar' : 'en');
  document.getElementById('btnQuickMode').onclick = () => setUiMode('quick');
  document.getElementById('btnMcMode').onclick = () => setUiMode('mc');

  // Smart Monitor Controls
  document.getElementById('smBtnInbodyFocus').onclick = () => {
    const card = document.getElementById('smInbodyCard');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast('InBody 970 Space-Sync profile active.');
  };
  document.getElementById('smBtnGravity').onclick = () => {
    appState.sm.gravityZeroG = !appState.sm.gravityZeroG;
    renderSmartMonitor();
    showToast(appState.sm.gravityZeroG ? 'Microgravity (0G) cephalad fluid shift active.' : 'Earth Gravity (1G) hydrostatic baseline active.');
  };
  document.getElementById('smBtnEva').onclick = () => {
    appState.sm.evaActive = !appState.sm.evaActive;
    if (appState.sm.evaActive && !appState.sm.alertActive) appState.sm.hr = 94;
    else if (!appState.sm.alertActive) appState.sm.hr = 70;
    renderSmartMonitor();
    showToast(appState.sm.evaActive ? 'EVA Spacesuit telemetry profile engaged.' : 'Returned to IVA cabin baseline.');
  };
  document.getElementById('smBtnAlert').onclick = () => {
    appState.sm.alertActive = !appState.sm.alertActive;
    if (appState.sm.alertActive) {
      appState.sm.hr = 162;
      appState.sm.spo2 = 88.8;
      appState.sm.tbw = 63.54;
      appState.sm.temp = 37.9;
      appState.sm.radRate = 36.2;
      showToast('CRITICAL BIOMETRIC ALERT SIMULATED: Hypoxia / Tachycardia.');
    } else {
      appState.sm.hr = appState.sm.evaActive ? 94 : 70;
      appState.sm.spo2 = 98.3;
      appState.sm.tbw = 64.5;
      appState.sm.temp = 36.7;
      appState.sm.radRate = 18.7;
      document.querySelectorAll('.sm-chk-step').forEach(b => {
        b.classList.remove('done');
        b.textContent = b.textContent.replace('✓', '○');
      });
      showToast('Emergency aborted — telemetry returned to nominal cyan baseline.');
    }
    renderSmartMonitor();
  };

  document.querySelectorAll('.sm-chk-step').forEach(btn => {
    btn.onclick = () => {
      btn.classList.toggle('done');
      if (btn.classList.contains('done')) btn.textContent = btn.textContent.replace('○', '✓');
      else btn.textContent = btn.textContent.replace('✓', '○');
    };
  });

  document.getElementById('smBtnHoloRotate').onclick = () => {
    appState.sm.holoRotate = !appState.sm.holoRotate;
    const b = document.getElementById('smBtnHoloRotate');
    b.textContent = appState.sm.holoRotate ? '🔄 3D Wireframe Rotate: ON' : '⏸ 3D Wireframe Rotate: OFF';
    b.classList.toggle('active-cyan', appState.sm.holoRotate);
  };

  document.querySelectorAll('.sm-stab').forEach(tabBtn => {
    tabBtn.onclick = () => {
      document.querySelectorAll('.sm-stab').forEach(x => x.classList.remove('active'));
      tabBtn.classList.add('active');
      appState.sm.tab = tabBtn.dataset.smtab;
      renderSmartMonitor();
    };
  });

  document.getElementById('smBtnSyncInbody').onclick = () => {
    showToast('InBody 970 Space-Sync complete — multi-frequency impedance calibrated.');
    renderSmartMonitor();
  };
  document.getElementById('smBtnManualInbody').onclick = () => {
    const subj = CREW[appState.selectedCrew].id === 'd' ? CREW[appState.selectedCrew] : CREW[3];
    document.getElementById('ib-weight').value = subj.weight;
    document.getElementById('ib-muscle').value = subj.muscle;
    document.getElementById('ib-fat').value = subj.fat;
    openModal('inbodyModal');
  };
  document.getElementById('smInbodyForm').onsubmit = e => {
    e.preventDefault();
    const subj = CREW[appState.selectedCrew].id === 'd' ? CREW[appState.selectedCrew] : CREW[3];
    subj.weight = Number(document.getElementById('ib-weight').value) || subj.weight;
    subj.muscle = Number(document.getElementById('ib-muscle').value) || subj.muscle;
    subj.fat = Number(document.getElementById('ib-fat').value) || subj.fat;
    closeModal('inbodyModal');
    renderSmartMonitor();
    showToast('InBody composition updated.');
  };

  document.getElementById('smBtnAiScan').onclick = () => {
    showToast('AI Flight Surgeon correlation scan complete — 0G fluid shift & InBody verified.');
  };

  document.getElementById('smAddLogForm').onsubmit = e => {
    e.preventDefault();
    const inp = document.getElementById('smLogInput');
    const txt = inp.value.trim();
    if (!txt) return;
    const sev = document.getElementById('smLogSev').value;
    const nowUtc = new Date().toISOString().slice(11, 16) + ' UTC';
    appState.sm.logs.unshift({
      id: 'sml-' + Date.now(),
      author: `${CREW[appState.selectedCrew].name} (${sev})`,
      time: nowUtc,
      sev,
      text: txt
    });
    inp.value = '';
    renderSmartMonitor();
    showToast('Medical/mission log entry recorded.');
  };

  document.getElementById('dataModeSelect').onchange = e => {
    appState.dataMode = e.target.value;
    const badge = document.getElementById('ribbonDataBadge');
    if (appState.dataMode === 'demo') {
      badge.textContent = 'DEMO / TEST FIXTURE • NON-DIAGNOSTIC';
      badge.className = 'tag-badge sim';
    } else if (appState.dataMode === 'research') {
      badge.textContent = 'RESEARCH BENCHMARKS • POPULATION DATA';
      badge.className = 'tag-badge ref';
    } else {
      badge.textContent = appState.donki.status === 'LIVE' ? 'CONNECTED (NASA DONKI LIVE)' : 'CONNECTED MODE (READY TO QUERY)';
      badge.className = 'tag-badge ref';
    }
    renderAll();
  };

  document.getElementById('pauseStreamBtn').onclick = e => {
    appState.paused = !appState.paused;
    e.target.textContent = appState.paused ? '▶ Resume' : '⏸ Pause';
  };
  document.getElementById('mcSignalSelect').onchange = renderMcSignalInspector;
  document.getElementById('btnToggleRolling').onclick = () => { appState.showRolling = !appState.showRolling; renderMcSignalInspector(); };
  document.getElementById('btnToggleGapSim').onclick = () => { appState.simGap = !appState.simGap; renderMcSignalInspector(); };

  document.querySelectorAll('.rating-row').forEach(row => {
    const key = row.dataset.rating;
    row.querySelectorAll('.rate-btn').forEach(btn => {
      btn.onclick = () => {
        appState.ratings[key] = Number(btn.dataset.val);
        row.querySelectorAll('.rate-btn').forEach(x => x.classList.toggle('active', x === btn));
      };
    });
  });

  document.getElementById('dailyCheckinForm').onsubmit = e => {
    e.preventDefault();
    const err = document.getElementById('ciFormErr');
    err.textContent = '';
    const sleepRaw = document.getElementById('ci-sleep').value;
    const hydRaw = document.getElementById('ci-hydration').value;
    const sleepH = sleepRaw === '' ? null : Number(sleepRaw);
    const hydrationL = hydRaw === '' ? null : Number(hydRaw);
    if (sleepH !== null && (sleepH < 0 || sleepH > 24)) { err.textContent = 'Sleep duration must be between 0 and 24 hours.'; return; }
    if (hydrationL !== null && (hydrationL < 0 || hydrationL > 10)) { err.textContent = 'Hydration must be between 0 and 10 L.'; return; }

    appState.checkins.unshift({
      id: 'ci-' + Date.now(),
      crew: CREW[appState.selectedCrew].id,
      t: Date.now(),
      isDemo: false,
      sleepH,
      sleepQual: appState.ratings.sleepQual,
      energy: appState.ratings.energy,
      mood: appState.ratings.mood,
      hydrationL,
      activityDone: document.getElementById('ci-activityDone').value,
      nutrition: document.getElementById('ci-nutrition').value.trim(),
      notes: document.getElementById('ci-notes').value.trim()
    });
    saveV3Records();
    e.target.reset();
    renderAll();
    showToast('Daily check-in saved locally.');
  };

  document.getElementById('btnSaveDraft').onclick = () => showToast('Draft retained in form.');

  document.getElementById('exerciseForm').onsubmit = e => {
    e.preventDefault();
    const dur = Number(document.getElementById('ex-dur').value);
    const rpe = Number(document.getElementById('ex-rpe').value);
    const err = document.getElementById('exFormErr');
    err.textContent = '';
    if (!dur || dur < 1 || dur > 300) { err.textContent = 'Duration must be 1–300 minutes.'; return; }
    const hrRaw = document.getElementById('ex-hr').value;
    const spRaw = document.getElementById('ex-spo2').value;
    appState.exercises.unshift({
      id: 'ex-' + Date.now(),
      crew: CREW[appState.selectedCrew].id,
      t: Date.now(),
      isDemo: false,
      modality: document.getElementById('ex-type').value,
      durationMin: dur,
      phase: document.getElementById('ex-phase').value,
      rpe: clamp(rpe || 6, 1, 10),
      preFeel: document.getElementById('ex-preFeel').value.trim(),
      postFeel: document.getElementById('ex-postFeel').value.trim(),
      hr: hrRaw === '' ? null : Number(hrRaw),
      spo2: spRaw === '' ? null : Number(spRaw)
    });
    saveV3Records();
    e.target.reset();
    document.getElementById('ex-dur').value = 45;
    document.getElementById('ex-rpe').value = 6;
    renderAll();
    showToast('Exercise & recovery entry recorded.');
  };

  document.querySelectorAll('[data-scene]').forEach(b => b.onclick = () => switchScene3D(b.dataset.scene));
  document.getElementById('btnToggleAnim3D').onclick = e => {
    appState.anim3dPaused = !appState.anim3dPaused;
    e.target.textContent = appState.anim3dPaused ? '▶ Resume Anim' : '⏸ Pause Anim';
  };
  document.getElementById('btnToggle3DFallback').onclick = e => {
    const fb = document.getElementById('fallback2DContainer');
    const st = document.getElementById('threeStage');
    const show2d = !fb.classList.contains('active');
    fb.classList.toggle('active', show2d);
    st.style.display = show2d ? 'none' : 'block';
    e.target.textContent = show2d ? 'Show 3D Canvas' : '2D Accessible View';
  };
  document.getElementById('btnReset3DCam').onclick = () => switchScene3D(appState.scene3d);

  document.getElementById('refImageInput').onchange = e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      showToast('Unsupported file type. Use PNG, JPG, or WebP.');
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      document.getElementById('refImageMeta').innerHTML = `
        <b>File:</b> ${file.name} (${Math.round(file.size / 1024)} KB) • <b>Dimensions:</b> ${img.naturalWidth}×${img.naturalHeight}px<br>
        <b>Asset Classification:</b> 2D Visual Design Reference / Texture Plate (Not a rigged 3D mesh or live diagnostic scan).
      `;
      document.getElementById('refImagePreviewBox').innerHTML = `<img src="${url}" alt="Reference asset preview" style="max-height:180px;max-width:100%;border-radius:8px">`;
    };
    img.src = url;
  };

  document.querySelectorAll('[data-tlcat]').forEach(b => b.onclick = () => {
    appState.tlFilter = b.dataset.tlcat;
    document.querySelectorAll('[data-tlcat]').forEach(x => x.classList.toggle('active', x === b));
    renderTimeline();
  });

  document.getElementById('btnExportTimelineJson').onclick = () => {
    const payload = {
      schema: 'astra-omega-timeline-v6',
      exportedAt: new Date().toISOString(),
      dataMode: appState.dataMode,
      checkins: appState.checkins,
      exercises: appState.exercises
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'astra-omega-timeline.json';
    a.click();
  };

  document.getElementById('btnFetchDonki').onclick = fetchNasaDonki;
  document.getElementById('researchSearchInput').oninput = e => renderResearchLibrary(e.target.value);

  ['delayRegimeSelect', 'simDays', 'simGrav', 'simAred', 'simShield'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.oninput = renderScenarioLab;
  });

  document.getElementById('btnDownloadRepJson').onclick = () => {
    const a = CREW[appState.selectedCrew];
    const payload = {
      platform: 'ASTRA Omega v6.1 Integrated',
      nonDiagnosticNotice: 'Educational & research prototype only.',
      subject: a.name,
      dataMode: appState.dataMode,
      exportedAt: new Date().toISOString(),
      checkins: appState.checkins.filter(c => c.crew === a.id),
      exercises: appState.exercises.filter(e => e.crew === a.id)
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `astra-report-${a.id}.json`;
    link.click();
  };

  document.getElementById('btnDownloadRepCsv').onclick = () => {
    const a = CREW[appState.selectedCrew];
    const lines = ['type,timestamp,provenance,summary'];
    appState.checkins.filter(c => c.crew === a.id).forEach(c => lines.push(`checkin,${new Date(c.t).toISOString()},${c.isDemo ? 'DEMO' : 'MANUAL'},"Sleep ${c.sleepH ?? 'NA'}h Energy ${c.energy}/5"`));
    appState.exercises.filter(e => e.crew === a.id).forEach(e => lines.push(`exercise,${new Date(e.t).toISOString()},${e.isDemo ? 'DEMO' : 'MANUAL'},"${e.modality} ${e.durationMin}min RPE ${e.rpe}"`));
    const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `astra-report-${a.id}.csv`;
    link.click();
  };

  document.getElementById('btnOpenSharePreview').onclick = () => {
    const a = CREW[appState.selectedCrew];
    const note = document.getElementById('handoverNoteInput').value.trim() || 'No operational note entered.';
    const optIn = document.getElementById('includeCheckinOptIn').checked;
    const latestCi = appState.checkins.find(c => c.crew === a.id);
    let txt = `ASTRA Ω HANDOVER SUMMARY\nSubject: ${a.name} (${a.role})\nTimestamp: ${new Date().toISOString()}\nOperational Note: ${note}\n`;
    if (optIn && latestCi) {
      txt += `Opt-In Status: Sleep ${latestCi.sleepH ?? 'Skipped'} h | Exercise: ${latestCi.activityDone}\n`;
    }
    txt += `Privacy: Private reflections & unapproved records excluded.`;
    document.getElementById('sharePreviewText').textContent = txt;
    openModal('shareModal');
  };

  document.getElementById('btnConfirmCopyShare').onclick = () => {
    const txt = document.getElementById('sharePreviewText').textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(() => {});
    else {
      const ta = document.createElement('textarea');
      ta.value = txt; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    closeModal('shareModal');
    showToast('Approved handover summary copied to clipboard.');
  };

  document.getElementById('setMotion').onchange = e => {
    document.documentElement.dataset.motion = e.target.value;
    showToast(`Motion preference set to ${e.target.value}.`);
  };
  document.getElementById('setGfx').onchange = () => {
    if (appState.dest === 'home') initHomeHero3D();
    if (appState.dest === 'smartmonitor') initSmartMonitorHolo3D();
    if (appState.dest === 'explorer3d') switchScene3D(appState.scene3d);
    showToast('3D rendering pixel ratio updated.');
  };
  document.getElementById('btnResetDemoData').onclick = () => {
    localStorage.removeItem(V3_STORE_KEY);
    loadV3Records();
    renderAll();
    showToast('Demo fixtures restored.');
  };
  document.getElementById('btnPurgeLocalData').onclick = () => {
    appState.checkins = [];
    appState.exercises = [];
    saveV3Records();
    renderAll();
    showToast('All local check-in and exercise entries cleared.');
  };

  window.addEventListener('resize', () => {
    if (homeHeroCtx && appState.dest === 'home') {
      const w = homeHeroCtx.container.clientWidth || 640;
      const h = homeHeroCtx.container.clientHeight || 300;
      homeHeroCtx.camera.aspect = w / h;
      homeHeroCtx.camera.updateProjectionMatrix();
      homeHeroCtx.renderer.setSize(w, h);
    }
    if (smHoloCtx && appState.dest === 'smartmonitor') {
      const w = smHoloCtx.container.clientWidth || 420;
      const h = smHoloCtx.container.clientHeight || 365;
      smHoloCtx.camera.aspect = w / h;
      smHoloCtx.camera.updateProjectionMatrix();
      smHoloCtx.renderer.setSize(w, h);
    }
    if (threeCtx && appState.dest === 'explorer3d') {
      const w = threeCtx.container.clientWidth || 640;
      const h = threeCtx.container.clientHeight || 450;
      threeCtx.camera.aspect = w / h;
      threeCtx.camera.updateProjectionMatrix();
      threeCtx.renderer.setSize(w, h);
    }
  });
}

// =========================================================================
// 9. BOOTSTRAP
// =========================================================================
checkWebGL();
loadV3Records();
for (let i = 0; i < 24; i++) tickSimulation();
bindEvents();
applyTranslations();
renderAll();
initHomeHero3D();
startSmEcgLoop();
setInterval(tickSimulation, 1000);

try {
  if (!localStorage.getItem('astra-omega-v6-onboarded')) {
    openModal('onboardingModal');
  }
} catch (e) {}

})();


/* ===== Script block 2 ===== */
(() => {
  'use strict';

  const STORE_KEY = 'orbital-vitals-v1';
  const DAY = 864e5;
  const RANGE = 21 * DAY;
  const $ = id => document.getElementById(id);

  const B = {
    en: {
      brand: 'ORBITAL VITALS',
      sub: 'Crew Health Self-Check & Longitudinal Record',
      langBtn: 'العربية',
      formTitle: 'New Clinical Measurement (MANUAL ENTRY)',
      formHint: 'Enter any combination — empty fields are skipped. Every saved value is tagged MANUAL ENTRY.',
      fGlu: 'Blood glucose', fCtx: 'Glucose timing', ctxFasting: 'Fasting (≥ 8 h)', ctxPost: 'Post-meal (~2 h)',
      fHR: 'Resting heart rate', fSpO2: 'Blood oxygen (SpO₂)', fTemp: 'Body temperature', fSleep: 'Last night’s sleep',
      save: 'Save measurement',
      liveFill: 'Fill from active monitor',
      needOne: 'Enter at least one measurement to save.',
      needPair: 'Enter both systolic and diastolic blood pressure.',
      outRange: 'One or more values are outside the physiological input range.',
      saved: 'Measurement saved',
      assessTitle: 'Latest reading check',
      assessSub: 'Reference bounds — not a medical diagnosis',
      assessEmpty: 'Save a reading (or load the example baseline) to see a plain-language comparison against standard adult reference ranges.',
      lv0: 'In reference range', lv1: 'Borderline — recheck', lv2: 'Outside range — consult clinician',
      mBP: 'Blood pressure', mBPlabel: 'Blood pressure (systolic / diastolic)',
      mGluF: 'Glucose (fasting)', mGluP: 'Glucose (post-meal)', mGlu: 'Glucose',
      mHR: 'Resting heart rate', mSpO2: 'Blood oxygen', mTemp: 'Temperature', mSleep: 'Sleep',
      sumTitle: '21-day summary',
      sumEmpty: 'No measurements logged yet. Enter a reading below, or load a sample 14-day crew baseline to explore the charts.',
      loadEx: 'Load sample 14-day baseline',
      exNotice: 'Showing sample baseline alongside your entries.',
      removeEx: 'Remove sample data',
      exLoaded: 'Sample baseline loaded',
      exRemoved: 'Sample data removed',
      nReadings: n => n + (n === 1 ? ' reading' : ' readings'),
      last: t => 'last ' + t,
      chartBP: 'Blood pressure — last 21 days',
      chartGlu: 'Blood glucose — last 21 days',
      legSys: 'Systolic', legDia: 'Diastolic', legTarget: 'Target (< 120 / 80)',
      legFasting: 'Fasting', legPost: 'Post-meal', legTargetFast: 'Fasting target (70–99)',
      noSeries: 'Not enough data in the last 21 days to draw a trend yet.',
      histTitle: 'Recorded history',
      copyCsv: 'Copy CSV',
      copied: 'CSV copied to clipboard',
      copyFail: 'Could not copy — select the table to copy manually',
      thTime: 'Date & time', thBP: 'BP (mmHg)', thGlu: 'Glucose (mg/dL)',
      thHR: 'HR', thSpO2: 'SpO₂', thTemp: 'Temp', thSleep: 'Sleep', thAct: '',
      del: 'Delete', deleted: 'Entry removed',
      tagFast: 'fasting', tagPost: 'post-meal',
      u_bpm: 'bpm', u_pct: '%', u_c: '°C', u_h: 'h', u_mmhg: 'mmHg', u_mgdl: 'mg/dL',
      noteBP: [
        'Within normal resting adult range (< 120 / 80 mmHg, AHA).',
        'Elevated or Stage 1 range. Rest quietly 5 minutes and re-measure; discuss a persistent pattern with a clinician.',
        'Stage 2 or acute range (≥ 140 / 90 or < 90 / 60 mmHg). Recheck after resting; seek prompt medical advice if confirmed or accompanied by symptoms.'
      ],
      noteGluF: [
        'Within standard fasting reference range (70–99 mg/dL, ADA).',
        'Fasting glucose 100–125 mg/dL sits in the impaired-fasting / borderline band. Confirm on a separate morning and review with a clinician.',
        'Outside safe fasting bounds (< 70 or ≥ 126 mg/dL). Treat symptomatic low glucose promptly and consult a healthcare professional.'
      ],
      noteGluP: [
        'Within typical 2-hour post-meal reference (< 140 mg/dL).',
        'Borderline post-meal elevation (140–199 mg/dL). Note meal composition and discuss recurring readings with a clinician.',
        'Markedly outside post-meal bounds (< 70 or ≥ 200 mg/dL). Consult a healthcare professional.'
      ],
      noteHR: [
        'Within typical resting adult range (60–100 bpm; trained crew often sit at 48–60 bpm).',
        'Slightly outside 60–100 bpm. Consider hydration, caffeine, recent exercise or poor sleep, and recheck at rest.',
        'Markedly low (< 45 bpm with symptoms) or high (> 120 bpm at rest). Seek clinical evaluation.'
      ],
      noteSpO2: [
        'Normal sea-level / cabin oxygen saturation (95–100%).',
        'Borderline saturation (92–94%). Warm fingers, check sensor fit, breathe calmly and retest.',
        'Low oxygen saturation (< 92%). Verify sensor placement immediately and seek prompt medical evaluation if confirmed.'
      ],
      noteTemp: [
        'Within normal oral/tympanic temperature range (36.1–37.2 °C).',
        'Mildly low (35.5–36.0 °C) or low-grade elevation (37.3–37.9 °C). Recheck in 30 minutes.',
        'Fever (≥ 38.0 °C) or hypothermia (< 35.5 °C). Follow clinical fever/illness protocol.'
      ],
      noteSleep: [
        'Meets the 7–9 h adult sleep duration recommendation (AASM / NASA HRP).',
        'Short sleep (5.5–6.9 h) or long sleep (> 9.5 h). Cumulative sleep debt impairs vigilance.',
        'Severe sleep restriction (< 5.5 h). Prioritize recovery sleep and avoid high-risk tasks if fatigued.'
      ]
    },
    ar: {
      brand: 'المؤشرات الحيوية المدارية',
      sub: 'المتابعة الصحية الذاتية والسجل الزمني للطاقم',
      langBtn: 'English',
      formTitle: 'قياس سريري جديد (إدخال يدوي)',
      formHint: 'أدخل أي قياس متاح لديك — تُتجاهل الحقول الفارغة وتُوسم القيم كإدخال يدوي.',
      fGlu: 'سكر الدم', fCtx: 'توقيت قياس السكر', ctxFasting: 'صائم (٨ ساعات فأكثر)', ctxPost: 'بعد الوجبة (~ساعتان)',
      fHR: 'نبض القلب أثناء الراحة', fSpO2: 'تشبّع الأكسجين (SpO₂)', fTemp: 'درجة حرارة الجسم', fSleep: 'ساعات النوم الليلة الماضية',
      save: 'حفظ القياس',
      liveFill: 'تعبئة من شاشة البث النشطة',
      needOne: 'أدخل قياسًا واحدًا على الأقل للحفظ.',
      needPair: 'أدخل الضغط الانقباضي والانبساطي معًا.',
      outRange: 'قيمة أو أكثر خارج النطاق الفسيولوجي المسموح.',
      saved: 'تم حفظ القياس',
      assessTitle: 'تقييم آخر قراءة',
      assessSub: 'مقارنة بالنطاقات المرجعية — وليست تشخيصًا طبيًا',
      assessEmpty: 'احفظ قياسًا (أو حمّل البيانات التجريبية) لعرض مقارنة واضحة مع النطاقات المرجعية للبالغين.',
      lv0: 'ضمن النطاق المرجعي', lv1: 'حدّي — يُنصح بإعادة القياس', lv2: 'خارج النطاق — استشر طبيبًا',
      mBP: 'ضغط الدم', mBPlabel: 'ضغط الدم (الانقباضي / الانبساطي)',
      mGluF: 'سكر الدم (صائم)', mGluP: 'سكر الدم (بعد الوجبة)', mGlu: 'سكر الدم',
      mHR: 'النبض أثناء الراحة', mSpO2: 'تشبّع الأكسجين', mTemp: 'درجة الحرارة', mSleep: 'النوم',
      sumTitle: 'ملخص آخر ٢١ يومًا',
      sumEmpty: 'لا توجد قياسات مسجّلة بعد. أدخل قراءة أدناه أو حمّل سجلًا تجريبيًا لمدة ١٤ يومًا لاستعراض الرسوم البيانية.',
      loadEx: 'تحميل سجل تجريبي (١٤ يومًا)',
      exNotice: 'تُعرض البيانات التجريبية إلى جانب قراءاتك.',
      removeEx: 'إزالة البيانات التجريبية',
      exLoaded: 'تم تحميل البيانات التجريبية',
      exRemoved: 'تمت إزالة البيانات التجريبية',
      nReadings: n => n + ' قراءات',
      last: t => 'آخرها ' + t,
      chartBP: 'ضغط الدم — آخر ٢١ يومًا',
      chartGlu: 'سكر الدم — آخر ٢١ يومًا',
      legSys: 'الانقباضي', legDia: 'الانبساطي', legTarget: 'المستهدف (< 120 / 80)',
      legFasting: 'صائم', legPost: 'بعد الوجبة', legTargetFast: 'نطاق الصيام (70–99)',
      noSeries: 'لا توجد بيانات كافية خلال ٢١ يومًا لرسم الاتجاه بعد.',
      histTitle: 'السجل الزمني للقراءات',
      copyCsv: 'نسخ CSV',
      copied: 'تم نسخ البيانات بصيغة CSV',
      copyFail: 'تعذّر النسخ — حدّد الجدول يدويًا',
      thTime: 'التاريخ والوقت', thBP: 'الضغط (mmHg)', thGlu: 'السكر (mg/dL)',
      thHR: 'النبض', thSpO2: 'الأكسجين', thTemp: 'الحرارة', thSleep: 'النوم', thAct: '',
      del: 'حذف', deleted: 'تم حذف القراءة',
      tagFast: 'صائم', tagPost: 'بعد الوجبة',
      u_bpm: 'نبضة/د', u_pct: '%', u_c: '°م', u_h: 'س', u_mmhg: 'mmHg', u_mgdl: 'mg/dL',
      noteBP: [
        'ضمن النطاق الطبيعي للبالغين أثناء الراحة (< 120 / 80 mmHg).',
        'ارتفاع طفيف أو مرحلة أولى. استرح بهدوء ٥ دقائق وأعد القياس، وراجع الطبيب إذا تكرر.',
        'خارج النطاق الآمن (≥ 140 / 90 أو < 90 / 60 mmHg). أعد القياس بعد الراحة واطلب استشارة طبية.'
      ],
      noteGluF: [
        'ضمن النطاق المرجعي للصيام (70–99 mg/dL).',
        'قراءة صيام حدّية (100–125 mg/dL). أعد الفحص في صباح آخر وناقش النتيجة مع الطبيب.',
        'خارج الحدود الآمنة للصيام (< 70 أو ≥ 126 mg/dL). عالج انخفاض السكر فورًا واستشر مختصًا.'
      ],
      noteGluP: [
        'ضمن النطاق المعتاد بعد الوجبة بساعتين (< 140 mg/dL).',
        'ارتفاع حدّي بعد الوجبة (140–199 mg/dL). راقب نوع الوجبة وراجع الطبيب عند التكرار.',
        'خارج النطاق المرجعي بشكل ملحوظ (< 70 أو ≥ 200 mg/dL). استشر مختصًا صحيًا.'
      ],
      noteHR: [
        'ضمن النطاق الطبيعي للنبض أثناء الراحة (60–100 نبضة/دقيقة).',
        'خارج النطاق المعتاد قليلًا. راعِ الترطيب والكافيين والجهد الأخير وأعد القياس بعد الراحة.',
        'انخفاض (< 45) أو تسارع ملحوظ (> 120) أثناء الراحة. يُنصح بتقييم طبي.'
      ],
      noteSpO2: [
        'تشبّع أكسجين طبيعي (95–100%).',
        'تشبّع حدّي (92–94%). دفّئ الأصابع وتأكّد من ثبات المجسّ وأعد القياس بهدوء.',
        'انخفاض في تشبّع الأكسجين (< 92%). تحقّق من المجسّ فورًا واطلب تقييمًا طبيًا عاجلًا عند تأكيد القراءة.'
      ],
      noteTemp: [
        'ضمن نطاق حرارة الجسم الطبيعية (36.1–37.2 °م).',
        'انخفاض طفيف (35.5–36.0) أو ارتفاع بسيط (37.3–37.9 °م). أعد القياس بعد ٣٠ دقيقة.',
        'حمّى (≥ 38.0 °م) أو انخفاض حرارة (< 35.5 °م). اتبع إرشادات الرعاية الطبية.'
      ],
      noteSleep: [
        'يوافق توصية النوم للبالغين (٧–٩ ساعات).',
        'نوم قصير (٥.٥–٦.٩ س) أو مطوّل (> ٩.٥ س). تراكم قلة النوم يضعف التركيز.',
        'نقص حاد في النوم (< ٥.٥ س). أعطِ الأولوية للراحة وتجنّب المهام عالية الخطورة.'
      ]
    }
  };

  let entries = load();
  let toastTimer;

  function load() {
    try {
      const a = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(a) ? a : [];
    } catch { return []; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(entries)); } catch {}
  }

  function lang() {
    return (window.__astro && window.__astro.getLang) ? window.__astro.getLang() : 'en';
  }
  function tr(k) { return B[lang()][k]; }
  function crew() { return (window.__astro && window.__astro.getSel) ? window.__astro.getSel() : 0; }
  function crewEntries() {
    const c = crew();
    return entries.filter(e => (e.crew ?? 0) === c);
  }
  function num(v) { return lang() === 'ar' ? String(v).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]) : String(v); }
  function fmtDate(ts) {
    return new Date(ts).toLocaleString(lang() === 'ar' ? 'ar-EG' : 'en-GB',
      { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  function fmtShort(ts) {
    return new Date(ts).toLocaleDateString(lang() === 'ar' ? 'ar-EG' : 'en-GB',
      { month: 'short', day: 'numeric' });
  }
  function toast(msg) {
    const el = $('toast');
    if (!el) return;
    el.firstElementChild.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  const evalMetric = {
    bp(e) {
      if (e.sys == null) return null;
      const lv = (e.sys >= 140 || e.dia >= 90 || e.sys < 90 || e.dia < 60) ? 2
               : (e.sys >= 120 || e.dia >= 80) ? 1 : 0;
      return { key: 'bp', name: tr('mBP'), val: num(`${e.sys}/${e.dia}`), unit: tr('u_mmhg'), lv, note: tr('noteBP')[lv] };
    },
    glu(e) {
      if (e.glu == null) return null;
      const post = e.ctx === 'post';
      const lv = e.glu < 70 ? 2 : post ? (e.glu >= 200 ? 2 : e.glu >= 140 ? 1 : 0)
                                       : (e.glu >= 126 ? 2 : e.glu >= 100 ? 1 : 0);
      return { key: 'glu', name: post ? tr('mGluP') : tr('mGluF'), val: num(e.glu), unit: tr('u_mgdl'), lv,
               note: tr(post ? 'noteGluP' : 'noteGluF')[lv] };
    },
    hr(e) {
      if (e.hr == null) return null;
      const lv = (e.hr < 45 || e.hr > 120) ? 2 : (e.hr < 60 || e.hr > 100) ? 1 : 0;
      return { key: 'hr', name: tr('mHR'), val: num(e.hr), unit: tr('u_bpm'), lv, note: tr('noteHR')[lv] };
    },
    spo2(e) {
      if (e.spo2 == null) return null;
      const lv = e.spo2 < 92 ? 2 : e.spo2 < 95 ? 1 : 0;
      return { key: 'spo2', name: tr('mSpO2'), val: num(e.spo2), unit: tr('u_pct'), lv, note: tr('noteSpO2')[lv] };
    },
    temp(e) {
      if (e.temp == null) return null;
      const lv = (e.temp < 35.5 || e.temp >= 38.0) ? 2 : (e.temp < 36.1 || e.temp > 37.2) ? 1 : 0;
      return { key: 'temp', name: tr('mTemp'), val: num(e.temp.toFixed(1)), unit: tr('u_c'), lv, note: tr('noteTemp')[lv] };
    },
    sleep(e) {
      if (e.sleep == null) return null;
      const lv = e.sleep < 5.5 ? 2 : (e.sleep < 7 || e.sleep > 9.5) ? 1 : 0;
      return { key: 'sleep', name: tr('mSleep'), val: num(e.sleep.toFixed(1)), unit: tr('u_h'), lv, note: tr('noteSleep')[lv] };
    }
  };
  const ORDER = ['bp', 'glu', 'hr', 'spo2', 'temp', 'sleep'];

  function readField(id, min, max, isFloat) {
    const raw = $(id).value.trim();
    if (!raw) return { empty: true };
    const v = isFloat ? parseFloat(raw) : parseInt(raw, 10);
    if (!Number.isFinite(v) || v < min || v > max) return { bad: true };
    return { v };
  }

  $('mform').addEventListener('submit', ev => {
    ev.preventDefault();
    const err = $('formErr');
    err.textContent = '';
    ['f-sys', 'f-dia', 'f-glu', 'f-hr', 'f-spo2', 'f-temp', 'f-sleep'].forEach(id => $(id).removeAttribute('aria-invalid'));

    const sys = readField('f-sys', 60, 260, false);
    const dia = readField('f-dia', 30, 160, false);
    const glu = readField('f-glu', 20, 600, false);
    const hr = readField('f-hr', 20, 220, false);
    const spo2 = readField('f-spo2', 50, 100, false);
    const temp = readField('f-temp', 30, 43, true);
    const sleep = readField('f-sleep', 0, 24, true);

    if (sys.empty !== dia.empty) {
      $(sys.empty ? 'f-sys' : 'f-dia').setAttribute('aria-invalid', 'true');
      err.textContent = tr('needPair');
      return;
    }
    const bad = [['f-sys', sys], ['f-dia', dia], ['f-glu', glu], ['f-hr', hr], ['f-spo2', spo2], ['f-temp', temp], ['f-sleep', sleep]]
      .filter(([, r]) => r.bad);
    if (bad.length) {
      bad.forEach(([id]) => $(id).setAttribute('aria-invalid', 'true'));
      err.textContent = tr('outRange');
      return;
    }
    if ([sys, glu, hr, spo2, temp, sleep].every(r => r.empty)) {
      err.textContent = tr('needOne');
      return;
    }

    const entry = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5), t: Date.now(), crew: crew() };
    if (!sys.empty) { entry.sys = sys.v; entry.dia = dia.v; }
    if (!glu.empty) { entry.glu = glu.v; entry.ctx = $('f-ctx').value; }
    if (!hr.empty) entry.hr = hr.v;
    if (!spo2.empty) entry.spo2 = spo2.v;
    if (!temp.empty) entry.temp = Math.round(temp.v * 10) / 10;
    if (!sleep.empty) entry.sleep = Math.round(sleep.v * 10) / 10;

    entries.unshift(entry);
    save();
    ev.target.reset();
    render();
    toast(tr('saved'));
    if (window.__astro && window.__astro.addAlert) {
      for (const k of ORDER) {
        const res = evalMetric[k](entry);
        if (res && res.lv > 0) window.__astro.addAlert(entry.crew, res.lv, `${res.name} ${res.val} ${res.unit}`);
      }
    }
  });

  $('liveBtn').addEventListener('click', () => {
    const v = window.__astro && window.__astro.getVals && window.__astro.getVals(crew());
    if (!v) return;
    const set = (id, val, d) => { if (Number.isFinite(val)) $(id).value = d ? val.toFixed(d) : Math.round(val); };
    set('f-hr', v.hr, 0);
    set('f-spo2', v.spo2, 0);
    set('f-temp', v.temp, 1);
    if (Number.isFinite(v.bp)) {
      const s = Math.round(v.bp);
      $('f-sys').value = s;
      $('f-dia').value = Math.round(s * 0.64);
    }
    $('f-hr').focus();
  });

  function loadExample() {
    const now = Date.now();
    const base = [
      [13.8, 118, 76, 89, 'fasting', 62, 98, 36.6, 7.4],
      [12.1, 121, 78, 118, 'post', 66, 98, 36.7, 6.8],
      [10.9, 116, 74, 86, 'fasting', 60, 99, 36.5, 7.6],
      [9.2, 124, 81, 94, 'fasting', 68, 97, 36.8, 6.2],
      [7.8, 119, 77, 132, 'post', 64, 98, 36.6, 7.1],
      [6.1, 115, 73, 88, 'fasting', 59, 99, 36.5, 7.8],
      [4.7, 122, 79, 96, 'fasting', 65, 98, 36.7, 6.5],
      [3.3, 128, 83, 146, 'post', 72, 97, 36.9, 5.9],
      [2.1, 117, 75, 91, 'fasting', 61, 98, 36.6, 7.3],
      [0.8, 114, 72, 87, 'fasting', 58, 99, 36.5, 7.9]
    ];
    entries = entries.filter(e => !e.ex || (e.crew ?? 0) !== crew());
    const c = crew();
    for (const [d, sys, dia, glu, ctx, hr, spo2, temp, sleep] of base) {
      entries.push({ id: 'ex' + d + '_' + c, t: Math.round(now - d * DAY), ex: 1, crew: c, sys, dia, glu, ctx, hr, spo2, temp, sleep });
    }
    entries.sort((a, b) => b.t - a.t);
    save();
    render();
    toast(tr('exLoaded'));
  }

  $('rmEx').addEventListener('click', () => {
    const c = crew();
    entries = entries.filter(e => !e.ex || (e.crew ?? 0) !== c);
    save();
    render();
    toast(tr('exRemoved'));
  });

  function renderSummary() {
    const box = $('summary');
    const cutoff = Date.now() - RANGE;
    const recent = crewEntries().filter(e => e.t >= cutoff);
    if (!recent.length) {
      box.innerHTML = `<div class="card-h"><h2>${tr('sumTitle')}</h2></div>
        <p class="mempty">${tr('sumEmpty')}</p>
        <button class="ghost" id="exBtn" type="button">${tr('loadEx')}</button>`;
      $('exBtn').addEventListener('click', loadExample);
      return;
    }

    const specs = [
      { key: 'bp', name: tr('mBP'), unit: tr('u_mmhg'), pick: e => e.sys,
        fmt: e => `${e.sys}/${e.dia}`, eval: evalMetric.bp },
      { key: 'glu', name: tr('mGlu'), unit: tr('u_mgdl'), pick: e => e.glu,
        fmt: e => `${e.glu}`, eval: evalMetric.glu },
      { key: 'hr', name: tr('mHR'), unit: tr('u_bpm'), pick: e => e.hr,
        fmt: e => `${e.hr}`, eval: evalMetric.hr },
      { key: 'spo2', name: tr('mSpO2'), unit: tr('u_pct'), pick: e => e.spo2,
        fmt: e => `${e.spo2}`, eval: evalMetric.spo2 },
      { key: 'temp', name: tr('mTemp'), unit: tr('u_c'), pick: e => e.temp,
        fmt: e => e.temp.toFixed(1), eval: evalMetric.temp },
      { key: 'sleep', name: tr('mSleep'), unit: tr('u_h'), pick: e => e.sleep,
        fmt: e => e.sleep.toFixed(1), eval: evalMetric.sleep }
    ];

    const tiles = specs.map(s => {
      const list = recent.filter(e => s.pick(e) != null);
      if (!list.length) return '';
      const latest = list[0];
      const ev = s.eval(latest);
      const vals = list.map(s.pick);
      const lo = Math.min(...vals), hi = Math.max(...vals);
      const range = list.length > 1
        ? (s.key === 'bp' ? `${num(lo)}–${num(hi)} sys` : `${num(s.key === 'temp' || s.key === 'sleep' ? lo.toFixed(1) : lo)}–${num(s.key === 'temp' || s.key === 'sleep' ? hi.toFixed(1) : hi)}`)
        : fmtShort(latest.t);
      return `<div class="tile lv${ev.lv}">
        <div class="lb"><span>${s.name}</span><span>${num(tr('nReadings')(list.length))}</span></div>
        <div class="v">${num(s.fmt(latest))} <small style="font-size:12px;color:var(--muted)">${s.unit}</small></div>
        <div class="muted" style="font-size:11.5px">${range}</div>
      </div>`;
    }).join('');

    box.innerHTML = `<div class="card-h"><h2>${tr('sumTitle')}</h2><span class="mono muted" style="font-size:12px">${num(tr('nReadings')(recent.length))}</span></div>
      <div class="vitals-grid">${tiles}</div>`;
  }

  function renderAssess() {
    const box = $('assessCard');
    const latest = crewEntries()[0];
    if (!latest) {
      box.innerHTML = `<div class="card-h"><h2>${tr('assessTitle')}</h2></div><p class="mempty">${tr('assessEmpty')}</p>`;
      return;
    }
    const items = ORDER.map(k => evalMetric[k](latest)).filter(Boolean);
    box.innerHTML = `<div class="card-h"><h2>${tr('assessTitle')}</h2><span class="mono muted" style="font-size:12px">${fmtDate(latest.t)}</span></div>
      <p class="muted" style="font-size:12px;margin-bottom:8px">${tr('assessSub')}</p>
      <div style="display:flex;flex-direction:column;gap:8px">${items.map(it => `<div class="sub-card lv${it.lv}" style="border-inline-start:3px solid var(--c)">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px">
          <b>${it.name} — <span class="mono">${it.val} ${it.unit}</span></b>
          <span class="mpill"><i aria-hidden="true"></i>${tr('lv' + it.lv)}</span>
        </div>
        <p class="muted" style="font-size:12.5px">${it.note}</p>
      </div>`).join('')}</div>`;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  function drawChart(hostId, cfg) {
    const host = $(hostId);
    host.innerHTML = '';
    const now = Date.now();
    const from = now - RANGE;
    const pts = crewEntries().filter(e => e.t >= from && cfg.has(e)).slice().reverse();
    if (pts.length < 2) {
      host.innerHTML = `<p class="mempty">${tr('noSeries')}</p>`;
      return;
    }

    const W = 560, H = 220, L = 40, R = 14, T = 14, B = 28;
    const pw = W - L - R, ph = H - T - B;
    const X = t => L + ((t - from) / RANGE) * pw;
    const Y = v => T + (1 - (v - cfg.ymin) / (cfg.ymax - cfg.ymin)) * ph;

    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': cfg.title });

    const y1 = Y(cfg.band[1]), y2 = Y(cfg.band[0]);
    svg.appendChild(el('rect', { x: L, y: y1, width: pw, height: Math.max(0, y2 - y1), fill: 'var(--ok-soft)' }));

    for (const v of cfg.ticks) {
      const y = Y(v);
      svg.appendChild(el('line', { x1: L, y1: y, x2: W - R, y2: y, stroke: 'var(--line)', 'stroke-width': 1 }));
      const tx = el('text', { x: L - 6, y: y + 4, 'text-anchor': 'end' });
      tx.textContent = v;
      svg.appendChild(tx);
    }
    for (const d of [21, 14, 7, 0]) {
      const t = now - d * DAY;
      const x = X(t);
      const tx = el('text', { x, y: H - 8, 'text-anchor': d === 21 ? 'start' : d === 0 ? 'end' : 'middle' });
      tx.textContent = fmtShort(t);
      svg.appendChild(tx);
    }

    for (const s of cfg.series) {
      const coords = pts.map(p => [X(p.t), Y(s.val(p))]);
      if (s.line) {
        svg.appendChild(el('polyline', {
          fill: 'none', stroke: s.color, 'stroke-width': 2.2,
          'stroke-linecap': 'round', 'stroke-linejoin': 'round',
          points: coords.map(c => c.join(',')).join(' ')
        }));
      }
      pts.forEach((p, i) => {
        const [cx, cy] = coords[i];
        const shape = s.shape ? s.shape(p) : 'circle';
        let node;
        if (shape === 'diamond') {
          node = el('polygon', { points: `${cx},${cy - 5} ${cx + 5},${cy} ${cx},${cy + 5} ${cx - 5},${cy}`, fill: s.color });
        } else {
          node = el('circle', { cx, cy, r: 4, fill: s.color, stroke: 'var(--surface)', 'stroke-width': 1.5 });
        }
        const tip = document.createElementNS(NS, 'title');
        tip.textContent = `${fmtDate(p.t)} — ${s.tip(p)}`;
        node.appendChild(tip);
        svg.appendChild(node);
      });
    }
    host.appendChild(svg);
  }

  function renderCharts() {
    drawChart('chartBP', {
      title: tr('chartBP'), has: e => e.sys != null, ymin: 50, ymax: 180,
      ticks: [60, 80, 100, 120, 140, 160], band: [70, 120],
      series: [
        { val: e => e.sys, color: 'var(--accent)', line: true, tip: e => `${e.sys}/${e.dia} mmHg` },
        { val: e => e.dia, color: 'var(--accent2)', line: true, tip: e => `${e.sys}/${e.dia} mmHg` }
      ]
    });
    drawChart('chartGlu', {
      title: tr('chartGlu'), has: e => e.glu != null, ymin: 50, ymax: 220,
      ticks: [70, 100, 140, 180], band: [70, 99],
      series: [{
        val: e => e.glu, color: 'var(--accent)', line: true,
        shape: e => e.ctx === 'post' ? 'diamond' : 'circle',
        tip: e => `${e.glu} mg/dL (${tr(e.ctx === 'post' ? 'tagPost' : 'tagFast')})`
      }]
    });
  }

  function cell(val, unit, ev) {
    if (val == null) return '<td class="muted">—</td>';
    const dot = ev ? `<span class="mdot lv${ev.lv}" title="${tr('lv' + ev.lv)}"></span>` : '';
    return `<td class="mono">${dot}${num(val)}${unit ? ' <span class="unit">' + unit + '</span>' : ''}</td>`;
  }

  function renderTable() {
    $('thead').innerHTML = ['thTime', 'thBP', 'thGlu', 'thHR', 'thSpO2', 'thTemp', 'thSleep', 'thAct']
      .map(k => `<th>${tr(k)}</th>`).join('');
    const list = crewEntries();
    $('exNotice').hidden = !list.some(e => e.ex);
    $('csvBtn').disabled = !list.length;
    if (!list.length) {
      $('tbody').innerHTML = `<tr><td colspan="8" class="muted">${tr('sumEmpty')}</td></tr>`;
      return;
    }
    $('tbody').innerHTML = list.map(e => {
      const gluCell = e.glu == null ? '<td class="muted">—</td>'
        : `<td class="mono"><span class="mdot lv${evalMetric.glu(e).lv}"></span>${num(e.glu)} <span class="badge">${tr(e.ctx === 'post' ? 'tagPost' : 'tagFast')}</span></td>`;
      return `<tr>
        <td class="mono">${fmtDate(e.t)}</td>
        ${cell(e.sys != null ? `${e.sys}/${e.dia}` : null, '', evalMetric.bp(e))}
        ${gluCell}
        ${cell(e.hr, '', evalMetric.hr(e))}
        ${cell(e.spo2, '%', evalMetric.spo2(e))}
        ${cell(e.temp != null ? e.temp.toFixed(1) : null, '°C', evalMetric.temp(e))}
        ${cell(e.sleep != null ? e.sleep.toFixed(1) : null, tr('u_h'), evalMetric.sleep(e))}
        <td><button class="link" type="button" data-del="${e.id}">${tr('del')}</button></td>
      </tr>`;
    }).join('');
  }

  $('tbody').addEventListener('click', ev => {
    const id = ev.target.dataset && ev.target.dataset.del;
    if (!id) return;
    entries = entries.filter(e => e.id !== id);
    save();
    render();
    toast(tr('deleted'));
  });

  $('csvBtn').addEventListener('click', async () => {
    const head = 'timestamp_iso,systolic_mmHg,diastolic_mmHg,glucose_mgdL,glucose_context,hr_bpm,spo2_pct,temp_C,sleep_h';
    const rows = crewEntries().map(e => [
      new Date(e.t).toISOString(), e.sys ?? '', e.dia ?? '', e.glu ?? '',
      e.glu != null ? (e.ctx || 'fasting') : '', e.hr ?? '', e.spo2 ?? '', e.temp ?? '', e.sleep ?? ''
    ].join(','));
    const csv = [head, ...rows].join('\n');
    try {
      await navigator.clipboard.writeText(csv);
      toast(tr('copied'));
    } catch {
      const ta = document.createElement('textarea');
      ta.value = csv; document.body.appendChild(ta); ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      toast(tr(ok ? 'copied' : 'copyFail'));
    }
  });

  function render() {
    document.querySelectorAll('[data-i18n-b]').forEach(el => {
      const v = B[lang()][el.dataset.i18nB];
      if (typeof v === 'string') el.textContent = v;
    });
    renderSummary();
    renderAssess();
    renderCharts();
    renderTable();
  }

  window.addEventListener('astro:lang', render);
  window.addEventListener('astro:crew', render);
  render();
})();


/* ===== Script block 3 ===== */
(() => {
  'use strict';
  const form = document.getElementById('nasaLiveForm'), out = document.getElementById('nasaLiveOut'), tag = document.getElementById('nasaLiveTag');
  if (!form) return;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    const q = document.getElementById('nasaLiveQ').value.trim(), src = document.getElementById('nasaLiveSrc').value;
    if (!q) return;
    tag.textContent = 'QUERYING...'; out.textContent = 'Contacting NASA...';
    const ac = new AbortController(), tm = setTimeout(() => ac.abort(), 9000);
    try {
      if (src === 'osdr') {
        const r = await fetch('https://osdr.nasa.gov/osdr/data/search?term=' + encodeURIComponent(q) + '&size=6&from=0', { signal: ac.signal });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const j = await r.json(), hits = (j.hits && j.hits.hits) || [];
        tag.textContent = 'LIVE • NASA OSDR';
        out.innerHTML = hits.length ? hits.map(h => {
          const s = h._source || {}, id = s.Accession || s['Study Identifier'] || h._id || 'OSDR';
          return `<div class="sub-card" style="margin-top:8px"><b>${esc(id)}</b> — ${esc(s['Study Title'] || s.Title || '')}<div class="muted">${esc(s.organism || '')} · <em>Research dataset metadata, not live crew telemetry.</em></div></div>`;
        }).join('') : 'No OSDR studies matched.';
      } else {
        const r = await fetch('https://images-api.nasa.gov/search?q=' + encodeURIComponent(q) + '&media_type=image&page_size=6', { signal: ac.signal });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const j = await r.json(), items = ((j.collection && j.collection.items) || []).slice(0, 6);
        tag.textContent = 'LIVE • NASA IMAGES';
        out.innerHTML = items.length ? '<div class="grid-3" style="margin-top:8px">' + items.map(it => {
          const d = (it.data && it.data[0]) || {}, link = (it.links && it.links[0] && it.links[0].href) || '';
          return `<div class="sub-card">${link ? `<img src="${esc(link)}" alt="${esc(d.title)}" style="width:100%;height:110px;object-fit:cover;border-radius:6px">` : ''}<b>${esc(d.title || d.nasa_id)}</b><span class="muted">${esc((d.date_created || '').slice(0, 10))} · NASA Image Library</span></div>`;
        }).join('') + '</div>' : 'No NASA images matched.';
      }
    } catch (e) {
      tag.textContent = 'UNAVAILABLE';
      out.textContent = 'Could not reach NASA (' + (e.name === 'AbortError' ? 'timeout' : e.message) + '). Offline or blocked by network.';
    } finally { clearTimeout(tm); }
  });
})();
