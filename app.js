const PROGRAM = {
  program_name: 'Chest-Biased Upper A/B/C (Real Loads)',
  units: { load: 'kg', distance: 'm', rest: 'sec', incline_angle: 'deg' },
  global_rules: {
    warmup: 'Ramp sets as needed; first working set only when bar path + tempo are stable.',
    intensity: {
      week_1: { target_RIR: 2 }, week_2: { target_RIR: 2 }, week_3: { target_RIR: 1 }, week_4: { target_RIR: '0-1 on final set only; otherwise 1-2' },
    },
    progression: [
      'Double progression: add reps within range first, then add load.',
      'If all sets hit top of rep range with target RIR, increase load next time.',
      'Isolation: prioritize rep quality and constant tension; add load last.',
    ],
    schedule_recommendation: ['A', 'REST', 'B', 'REST', 'C', 'REST', 'REST'],
  },
  sessions: [
    { id: 'A', name: 'Upper Chest Priority (Heavy)', tags: ['chest', 'upper_chest', 'heavy'], exercises: [
      { id: 'A1', name: 'Smith Incline Press', angle: 30, category: 'compound', sets: 5, rep_range: [6, 6], load: { type: 'per_side', value: 15 }, rest_sec: [120, 180], tempo: 'controlled', target_RIR: '1-2', notes: ['Primary progression lift.'] },
      { id: 'A2', name: 'Flat Smith / Machine Press', category: 'compound', sets: 3, rep_range: [8, 10], load: { type: 'per_side', value: 15 }, rest_sec: 120, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'A3', name: 'Seated Cable Row (Pause)', category: 'compound', sets: 3, rep_range: [6, 8], load: { type: 'total', value: 55 }, rest_sec: 120, tempo: '1s pause at contraction', target_RIR: '1-2' },
      { id: 'A4', name: 'Low-to-High Cable Fly', category: 'isolation', sets: 2, rep_range: [12, 15], load: { type: 'per_side', value_range: [7.5, 10] }, rest_sec: 60, tempo: 'constant tension', target_RIR: '1-2' },
      { id: 'A5', name: 'Rope Overhead Triceps Extension', category: 'isolation', sets: 3, rep_range: [10, 12], load: { type: 'total', value: 15 }, rest_sec: [60, 90], tempo: 'controlled', target_RIR: '1-2' },
      { id: 'A6', name: 'Incline Dumbbell Curl', category: 'isolation', sets: 2, rep_range: [8, 10], load: { type: 'per_hand', value_range: [12, 14] }, rest_sec: [60, 75], tempo: 'full stretch', target_RIR: '1-2' },
    ]},
    { id: 'B', name: 'Upper Chest + Back Width', tags: ['upper_chest', 'back_width'], exercises: [
      { id: 'B1', name: 'High-Incline Machine Press', category: 'compound', sets: 3, rep_range: [8, 10], load: { type: 'total', value_range: [45, 60] }, rest_sec: 120, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'B2', name: 'Neutral-Grip Lat Pulldown', category: 'compound', sets: 4, rep_range: [6, 8], load: { type: 'total', value_range: [50, 60] }, rest_sec: 120, tempo: 'controlled', target_RIR: '1-2', notes: ['Width focus. Keep shoulder depression.'] },
      { id: 'B3', name: 'Low-to-High Cable Fly', category: 'isolation', sets: 3, rep_range: [12, 15], load: { type: 'per_side', value_range: [7.5, 10] }, rest_sec: 60, tempo: 'constant tension', target_RIR: '1-2' },
      { id: 'B4', name: 'Chest-Supported Row', category: 'compound', sets: 3, rep_range: [8, 10], load: { type: 'per_hand', value: 20 }, rest_sec: 90, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'B5', name: 'Cable Lateral Raise', category: 'isolation', sets: 3, rep_range: [12, 15], load: { type: 'total_or_per_side', value_range: [5, 7.5] }, rest_sec: 60, tempo: 'constant tension', target_RIR: '1-2' },
      { id: 'B6', name: 'EZ Bar Curl', category: 'isolation', sets: 3, rep_range: [8, 10], load: { type: 'total', value: 30 }, rest_sec: 75, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'B7', name: 'Rope Pushdown', category: 'isolation', sets: 2, rep_range: [10, 12], load: { type: 'total', value: 20 }, rest_sec: 60, tempo: 'controlled', target_RIR: '1-2' },
    ]},
    { id: 'C', name: 'Lower + Chest Density', tags: ['lower', 'chest_density'], exercises: [
      { id: 'C1', name: 'Barbell Romanian Deadlift', category: 'compound', sets: 3, rep_range: [6, 8], load: { type: 'total', value_range: [60, 70] }, rest_sec: [120, 180], tempo: 'controlled eccentric', target_RIR: '1-2' },
      { id: 'C2', name: 'Leg Press (Full Depth)', category: 'compound', sets: 3, rep_range: [10, 12], load: { type: 'total', value: 50 }, rest_sec: 120, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'C3', name: 'Farmer Carry', category: 'carry', sets: 3, distance_m_range: [30, 40], load: { type: 'per_hand', value: 24 }, rest_sec: [60, 90], target_RIR: 'n/a', notes: ['Braced torso, steady pace.'] },
      { id: 'C4', name: 'Flat Machine Chest Press (Slow)', category: 'compound', sets: 3, rep_range: [8, 10], load: { type: 'total', value: 40 }, rest_sec: 120, tempo: 'slow eccentric', target_RIR: '2', notes: ['Density: never to failure.'] },
      { id: 'C5', name: 'Single-Arm Chest-Supported Row', category: 'compound', sets: 3, rep_range: [10, 12], load: { type: 'per_hand', value: 18 }, rest_sec: 90, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'C6', name: 'Cable Rear Delt Fly', category: 'isolation', sets: 3, rep_range: [12, 15], load: { type: 'total', value: 15 }, rest_sec: 60, tempo: 'constant tension', target_RIR: '1-2' },
      { id: 'C7', name: 'Rope Hammer Curl', category: 'isolation', sets: 3, rep_range: [10, 12], load: { type: 'total', value_range: [25, 30] }, rest_sec: 60, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'C8', name: 'Rope Overhead Triceps Extension', category: 'isolation', sets: 2, rep_range: [10, 12], load: { type: 'total', value: 15 }, rest_sec: 60, tempo: 'controlled', target_RIR: '1-2' },
      { id: 'C9', name: 'Cardio (Moderate)', category: 'cardio', sets: 1, duration_min_range: [15, 20], rest_sec: 0, target_RIR: 'n/a' },
    ]},
  ],
  volume_summary: { chest_direct_sets_per_week: '15-17', upper_chest_priority_days: 2, lower_body_days: 1, cardio_days: 1 },
};

const MACHINE_ALTERNATIVES = {
  A1: ['Incline DB Press', 'Hammer Strength Incline'], A2: ['Flat DB Press', 'Push-up Plus'], B2: ['Assisted Pull-up', 'Single-arm Pulldown'],
  C2: ['Hack Squat', 'Split Squat'], C4: ['Flat DB Press', 'Cable Press'],
};

const DB_NAME = 'codexprotrack';
const DB_VERSION = 1;
const stores = ['sessions', 'sets', 'bodyMetrics', 'settings', 'photosMeta'];
let db; let deferredInstallPrompt; let timerInt; let timerRemaining = 0; let currentRir = 2; let activeWorkout = null;
const $ = (id) => document.getElementById(id);

async function openDB() { return new Promise((resolve, reject) => { const req = indexedDB.open(DB_NAME, DB_VERSION); req.onupgradeneeded = () => { const d = req.result; if (!d.objectStoreNames.contains('sessions')) d.createObjectStore('sessions', { keyPath: 'id' }); if (!d.objectStoreNames.contains('sets')) d.createObjectStore('sets', { keyPath: 'id' }); if (!d.objectStoreNames.contains('bodyMetrics')) d.createObjectStore('bodyMetrics', { keyPath: 'id' }); if (!d.objectStoreNames.contains('settings')) d.createObjectStore('settings', { keyPath: 'key' }); if (!d.objectStoreNames.contains('photosMeta')) d.createObjectStore('photosMeta', { keyPath: 'id' }); }; req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
function tx(store, mode = 'readonly') { return db.transaction(store, mode).objectStore(store); }
async function idbGetAll(store) { return new Promise((resolve, reject) => { const req = tx(store).getAll(); req.onsuccess = () => resolve(req.result || []); req.onerror = () => reject(req.error); }); }
async function idbPut(store, value) { return new Promise((resolve, reject) => { const req = tx(store, 'readwrite').put(value); req.onsuccess = () => resolve(true); req.onerror = () => reject(req.error); }); }

async function migrateFromLocalStorage() {
  if (localStorage.getItem('cpt_migrated_v1')) return;
  try {
    const oldSessions = JSON.parse(localStorage.getItem('sessionHistory') || '[]');
    const oldSets = JSON.parse(localStorage.getItem('sessionSetValues') || '[]');
    for (const s of oldSessions) await idbPut('sessions', { ...s, migrated: true, id: s.id || crypto.randomUUID() });
    for (const set of oldSets) await idbPut('sets', { ...set, migrated: true, id: set.id || crypto.randomUUID() });
  } catch (_) {}
  localStorage.setItem('cpt_migrated_v1', '1');
}

function initTabs() {
  document.querySelectorAll('[data-tab]').forEach((btn) => btn.onclick = () => {
    document.querySelectorAll('[data-tab]').forEach((b) => b.classList.remove('primary')); btn.classList.add('primary');
    ['workout', 'progress', 'plates', 'settings'].forEach((tab) => $(`tab-${tab}`).classList.toggle('hidden', tab !== btn.dataset.tab));
    if (btn.dataset.tab === 'progress') renderProgress();
  });
}
function updateNetworkBadge() { const online = navigator.onLine; $('netBadge').textContent = online ? 'Online' : 'Offline'; $('netBadge').className = `badge ${online ? 'online' : 'offline'}`; }
function initInstallPrompt() { window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstallPrompt = e; $('installBtn').classList.remove('hidden'); }); $('installBtn').onclick = async () => { if (!deferredInstallPrompt) return; deferredInstallPrompt.prompt(); deferredInstallPrompt = null; $('installBtn').classList.add('hidden'); }; }

function getLoadSeed(ex) { return ex.load?.value ?? ex.load?.value_range?.[0] ?? 0; }
function getRepSeed(ex) { return ex.rep_range?.[0] ?? 0; }
function getRestSeed(ex, settings) { return Array.isArray(ex.rest_sec) ? ex.rest_sec[0] : (ex.rest_sec ?? settings.defaultRestSec ?? 90); }
function textRange(x) { return Array.isArray(x) ? `${x[0]}-${x[1]}` : `${x ?? '-'}`; }

async function renderProgram() {
  $('sessionPicker').innerHTML = PROGRAM.sessions.map((s) => `<option value="${s.id}">${s.id} · ${s.name}</option>`).join('');
  $('sessionRules').textContent = `Schedule: ${PROGRAM.global_rules.schedule_recommendation.join(' / ')}`;
}

function renderRirButtons() {
  $('rirButtons').innerHTML = [0,1,2,3,4].map((n) => `<button data-rir="${n}">RIR ${n}</button>`).join('');
  $('rirButtons').onclick = (e) => { const btn = e.target.closest('[data-rir]'); if (!btn) return; currentRir = Number(btn.dataset.rir); [...$('rirButtons').children].forEach((b) => b.classList.toggle('primary', b === btn)); };
  $('rirButtons').children[2].classList.add('primary');
}

async function getSettings() { const all = await idbGetAll('settings'); return Object.fromEntries(all.map((x) => [x.key, x.value])); }
async function loadSettings() { const settings = await getSettings(); const theme = settings.theme || 'apple-dark'; $('app').dataset.theme = theme; $('themeSelect').value = theme; $('defaultRestInput').value = settings.defaultRestSec || 90; }
async function saveSettings() { await idbPut('settings', { key: 'theme', value: $('themeSelect').value }); await idbPut('settings', { key: 'defaultRestSec', value: Number($('defaultRestInput').value || 90) }); await loadSettings(); }

async function findLastSetForExercise(exerciseId) {
  const sets = (await idbGetAll('sets')).filter((s) => s.exerciseId === exerciseId).sort((a, b) => b.completedAt - a.completedAt);
  return sets[0];
}

function renderTimer() { const min = String(Math.floor(timerRemaining / 60)).padStart(2, '0'); const sec = String(timerRemaining % 60).padStart(2, '0'); $('timer').textContent = `${min}:${sec}`; }
function startTimer(seconds) { clearInterval(timerInt); timerRemaining = seconds; renderTimer(); timerInt = setInterval(() => { timerRemaining = Math.max(0, timerRemaining - 1); renderTimer(); if (timerRemaining === 0) clearInterval(timerInt); }, 1000); }

function currentExercise() { return activeWorkout?.session.exercises[activeWorkout.exerciseIdx]; }
function currentSetTarget() { return currentExercise()?.sets ?? 1; }

async function refreshExerciseCard() {
  const ex = currentExercise();
  if (!ex) return;
  const settings = await getSettings();
  const last = await findLastSetForExercise(ex.id);
  $('exerciseTitle').textContent = ex.name;
  $('exerciseMeta').textContent = `Target sets ${ex.sets} · reps ${textRange(ex.rep_range)} · rest ${textRange(ex.rest_sec)}s · alt: ${(MACHINE_ALTERNATIVES[ex.id] || ['-']).join(', ')}`;
  if (!activeWorkout.enteredExerciseAt) {
    $('loadInput').value = last?.load ?? getLoadSeed(ex);
    $('repsInput').value = last?.reps ?? getRepSeed(ex);
    activeWorkout.enteredExerciseAt = Date.now();
  }
  $('setProgress').textContent = `Set ${activeWorkout.setInExercise + 1}/${currentSetTarget()} · Ex ${activeWorkout.exerciseIdx + 1}/${activeWorkout.session.exercises.length}`;
  const prevBest = (await idbGetAll('sets')).filter((s) => s.exerciseId === ex.id).reduce((m, s) => Math.max(m, s.load * Math.max(s.reps,1)), 0);
  const curScore = Number($('loadInput').value || 0) * Number($('repsInput').value || 0);
  $('prFlag').textContent = curScore > 0 && curScore >= prevBest && prevBest > 0 ? 'PR pace' : 'Track set';
  timerRemaining = getRestSeed(ex, settings);
  renderTimer();
}

async function startSession() {
  const sessionId = $('sessionPicker').value;
  const session = PROGRAM.sessions.find((s) => s.id === sessionId);
  activeWorkout = { id: crypto.randomUUID(), sessionId, session, startedAt: Date.now(), exerciseIdx: 0, setInExercise: 0, completed: false, enteredExerciseAt: 0, setIds: [] };
  await idbPut('sessions', { ...activeWorkout, sessionName: session.name });
  $('sessionArea').classList.remove('hidden');
  await refreshExerciseCard();
}

function incrementInput(id, delta, min = 0) { const cur = Number($(id).value || 0); $(id).value = Math.max(min, cur + delta); }

async function completeSetAndAdvance() {
  if (!activeWorkout) return;
  const ex = currentExercise();
  const load = Number($('loadInput').value || 0);
  const reps = Number($('repsInput').value || 0);
  const set = { id: crypto.randomUUID(), sessionId: activeWorkout.id, programSessionId: activeWorkout.sessionId, exerciseId: ex.id, exerciseName: ex.name, setNumber: activeWorkout.setInExercise + 1, load, reps, rir: currentRir, target_RIR: ex.target_RIR, completedAt: Date.now() };
  await idbPut('sets', set);
  activeWorkout.setIds.push(set.id);
  activeWorkout.setInExercise += 1;

  const settings = await getSettings();
  startTimer(getRestSeed(ex, settings));

  if (activeWorkout.setInExercise >= currentSetTarget()) {
    activeWorkout.exerciseIdx += 1;
    activeWorkout.setInExercise = 0;
    activeWorkout.enteredExerciseAt = 0;
  }

  if (activeWorkout.exerciseIdx >= activeWorkout.session.exercises.length) {
    await finishSession();
    return;
  }

  await idbPut('sessions', { ...activeWorkout, sessionName: activeWorkout.session.name });
  await refreshExerciseCard();
}

async function finishSession() {
  if (!activeWorkout) return;
  activeWorkout.completed = true;
  activeWorkout.endedAt = Date.now();
  await idbPut('sessions', { ...activeWorkout, sessionName: activeWorkout.session.name });
  activeWorkout = null;
  clearInterval(timerInt);
  $('sessionArea').classList.add('hidden');
}

function est1RM(load, reps) { return Math.round(load * (1 + reps / 30)); }

async function renderProgress() {
  const sessions = await idbGetAll('sessions');
  const sets = await idbGetAll('sets');
  const out = [];
  const since = Date.now() - (8 * 7 * 86400000);

  for (const session of PROGRAM.sessions) {
    for (const ex of session.exercises) {
      const exSets = sets.filter((s) => s.exerciseId === ex.id).sort((a, b) => b.completedAt - a.completedAt);
      const last6 = exSets.slice(0, 6);
      const todayBest = exSets.filter((s) => new Date(s.completedAt).toDateString() === new Date().toDateString()).reduce((m, s) => Math.max(m, s.load * s.reps), 0);
      const allTimeBest = exSets.reduce((m, s) => Math.max(m, s.load * s.reps), 0);
      const pr = todayBest > 0 && todayBest >= allTimeBest ? '🏆 PR' : '-';
      const trendPool = exSets.filter((s) => s.completedAt >= since).slice(0, 20);
      const trend = trendPool.length ? (trendPool.reduce((a, s) => a + est1RM(s.load, s.reps), 0) / trendPool.length).toFixed(1) : '-';
      const rows = last6.map((s) => `<tr><td>${new Date(s.completedAt).toLocaleDateString()}</td><td>${s.load}×${s.reps}</td><td>${est1RM(s.load, s.reps)}</td><td>${s.rir}</td></tr>`).join('') || '<tr><td colspan="4">No data</td></tr>';
      out.push(`<div class="card"><h4>${ex.name}</h4><div class="tiny">Last session vs today: ${last6[0] ? `${last6[0].load}×${last6[0].reps}` : '-'} vs ${todayBest || '-'} ${pr} · 8-week avg e1RM ${trend}</div><table><thead><tr><th>Date</th><th>Top set</th><th>e1RM</th><th>RIR</th></tr></thead><tbody>${rows}</tbody></table></div>`);
    }
  }
  $('progressTables').innerHTML = out.join('');

  const body = (await idbGetAll('bodyMetrics')).sort((a, b) => a.at - b.at);
  const byWeek = {};
  for (const b of body) { const d = new Date(b.at); const wk = `${d.getFullYear()}-W${Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 86400000) + new Date(d.getFullYear(), 0, 1).getDay() + 1) / 7)}`; byWeek[wk] ??= []; byWeek[wk].push(b.weight); }
  $('bwWeekly').textContent = Object.entries(byWeek).slice(-8).map(([w, arr]) => `${w}: ${(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1)}kg`).join(' · ') || 'No bodyweight logs';

  const completed = sessions.filter((s) => s.completed).length;
  if (!out.length) $('progressTables').innerHTML = `<div class="tiny">No progress yet. Completed sessions: ${completed}</div>`;
}

async function saveBodyweight() { const weight = Number($('bodyweightInput').value); if (!weight) return; await idbPut('bodyMetrics', { id: crypto.randomUUID(), at: Date.now(), weight, fatMass: null }); $('bodyweightInput').value = ''; await renderProgress(); }
async function exportData() { const payload = { program: PROGRAM }; for (const store of stores) payload[store] = await idbGetAll(store); const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `codexprotrack-backup-${Date.now()}.json`; a.click(); }
async function importData(file) { const txt = await file.text(); const data = JSON.parse(txt); for (const store of stores) for (const row of data[store] || []) await idbPut(store, row); await loadSettings(); await renderProgress(); }

function initPlateCalc() {
  const PLATES = [25, 20, 15, 10, 5, 2.5, 1.25];
  $('calcPlates').onclick = () => {
    let perSide = (Number($('targetWeight').value || 0) - Number($('barWeight').value || 20)) / 2;
    if (perSide < 0) return;
    const out = [];
    for (const p of PLATES) { const count = Math.floor((perSide + 1e-8) / p); if (count) out.push(`${p}kg × ${count}`); perSide -= count * p; }
    $('platesResult').textContent = out.length ? `Per side: ${out.join(', ')}` : 'No plates needed';
  };
}
function registerSW() { if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js'); }

async function bootstrap() {
  db = await openDB();
  await migrateFromLocalStorage();
  initTabs(); initInstallPrompt(); await renderProgram(); renderRirButtons(); await loadSettings(); updateNetworkBadge();
  window.addEventListener('online', updateNetworkBadge); window.addEventListener('offline', updateNetworkBadge);
  $('startSession').onclick = startSession; $('completeSet').onclick = completeSetAndAdvance; $('finishSession').onclick = finishSession;
  $('plus15').onclick = () => { timerRemaining += 15; renderTimer(); }; $('plus30').onclick = () => { timerRemaining += 30; renderTimer(); }; $('skipRest').onclick = () => { clearInterval(timerInt); timerRemaining = 0; renderTimer(); };
  $('loadMinus').onclick = () => incrementInput('loadInput', -1); $('loadPlus').onclick = () => incrementInput('loadInput', 1); $('repsMinus').onclick = () => incrementInput('repsInput', -1, 1); $('repsPlus').onclick = () => incrementInput('repsInput', 1, 1);
  $('saveSettings').onclick = saveSettings; $('themeSelect').onchange = () => { $('app').dataset.theme = $('themeSelect').value; };
  $('exportBtn').onclick = exportData; $('importFile').onchange = async (e) => { if (e.target.files[0]) await importData(e.target.files[0]); };
  $('saveBodyweight').onclick = saveBodyweight;
  initPlateCalc(); registerSW();
}

bootstrap();
