const workoutPlans = {
  recomposicao: {
    id: "recomposicao",
    title: "Leonardo",
    summary: "Intermediário · 3 dias por semana · Até 120 minutos por sessão · Perda de gordura com preservação e desenvolvimento muscular. Ênfase em peito, costas, ombros e braços, com condicionamento de pernas e aeróbico.",
    days: [
      { id: "segunda", day: "Segunda-feira", shortDay: "Segunda", focus: "Peito, tríceps e quadríceps", session: "TREINO A", exercises: [
        { id: "supino-inclinado", name: "Supino inclinado (máquina ou halteres)", sets: "4", reps: "8–10" },
        { id: "chest-press", name: "Chest Press", sets: "3", reps: "8–12" },
        { id: "crucifixo-maquina", name: "Crucifixo máquina", sets: "3", reps: "12–15" },
        { id: "triceps-polia", name: "Tríceps na polia", sets: "3", reps: "10–12" },
        { id: "triceps-frances", name: "Tríceps francês", sets: "3", reps: "10–12" },
        { id: "leg-press", name: "Leg Press", sets: "3", reps: "15–20" },
        { id: "cadeira-extensora", name: "Cadeira extensora", sets: "3", reps: "15–20" },
      ], cardio: { machine: "Esteira", icon: "↗" } },
      { id: "quarta", day: "Quarta-feira", shortDay: "Quarta", focus: "Costas, bíceps e posteriores", session: "TREINO B", exercises: [
        { id: "puxada-alta", name: "Puxada alta (Pulldown)", sets: "4", reps: "8–12" },
        { id: "remada-sentada", name: "Remada sentada", sets: "4", reps: "8–12" },
        { id: "remada-articulada", name: "Remada articulada", sets: "3", reps: "10–12" },
        { id: "rosca-direta", name: "Rosca direta", sets: "3", reps: "8–12" },
        { id: "rosca-scott", name: "Rosca Scott", sets: "3", reps: "10–12" },
        { id: "mesa-flexora", name: "Mesa flexora", sets: "3", reps: "12–15" },
        { id: "cadeira-abdutora", name: "Cadeira abdutora", sets: "3", reps: "15–20" },
      ], cardio: { machine: "Elíptico", icon: "◌" } },
      { id: "sexta", day: "Sexta-feira", shortDay: "Sexta", focus: "Ombros, braços, peito e pernas", session: "TREINO C", exercises: [
        { id: "desenvolvimento-ombros", name: "Desenvolvimento de ombros", sets: "3", reps: "8–12" },
        { id: "elevacao-lateral", name: "Elevação lateral", sets: "3", reps: "12–15" },
        { id: "supino-maquina", name: "Supino máquina", sets: "3", reps: "10–12" },
        { id: "rosca-martelo", name: "Rosca martelo", sets: "3", reps: "10–12" },
        { id: "triceps-corda", name: "Tríceps corda", sets: "3", reps: "10–12" },
        { id: "leg-press", name: "Leg Press", sets: "3", reps: "15" },
        { id: "mesa-flexora", name: "Mesa flexora", sets: "3", reps: "15" },
        { id: "panturrilha", name: "Panturrilha", sets: "3", reps: "15–20" },
      ], cardio: { machine: "Bicicleta ergométrica", icon: "↻" } },
    ],
  },
  evolucao: {
    id: "evolucao",
    title: "Eduarda",
    summary: "Iniciante · 3 dias por semana · Aproximadamente 60 minutos por sessão · Fortalecimento geral e desenvolvimento muscular, com ênfase em glúteos e pernas e fortalecimento da parte superior do corpo.",
    days: [
      { id: "segunda", day: "Segunda-feira", shortDay: "Segunda", focus: "Treino A · Ênfase em glúteos e pernas", session: "TREINO A", duration: "Aproximadamente 60 minutos, incluindo aquecimento", exercises: [
        { id: "leg-press-45", name: "Leg Press 45°", sets: "3", reps: "12", instruction: "Pés na largura dos ombros; flexione os joelhos e empurre a plataforma sem travá-los." },
        { id: "hip-thrust", name: "Elevação pélvica (Hip Thrust)", sets: "3", reps: "12", instruction: "Eleve o quadril contra a resistência, contraindo os glúteos no ponto mais alto." },
        { id: "mesa-flexora", name: "Mesa flexora (Leg Curl)", sets: "2", reps: "12", instruction: "Flexione os joelhos levando os calcanhares para trás e retorne devagar." },
        { id: "puxada-frontal", name: "Puxada frontal (Pulley frente)", sets: "2", reps: "12", instruction: "Puxe a barra em direção ao peito, mantendo o tronco estável." },
        { id: "supino-sentado", name: "Supino sentado (Chest Press)", sets: "2", reps: "12", instruction: "Empurre os pegadores para frente e retorne controladamente." },
        { id: "abdominal-maquina", name: "Abdominal máquina (Abdominal Crunch)", sets: "2", reps: "12", instruction: "Aproxime o tronco do quadril contraindo o abdômen, sem puxar o pescoço." },
      ] },
      { id: "quarta", day: "Quarta-feira", shortDay: "Quarta", focus: "Treino B · Ênfase em superiores e fortalecimento geral", session: "TREINO B", exercises: [
        { id: "agachamento-smith", name: "Agachamento guiado (Smith Machine)", sets: "2", reps: "10", instruction: "Flexione joelhos e quadril, mantendo a coluna estável e os pés bem apoiados." },
        { id: "cadeira-abdutora", name: "Cadeira abdutora", sets: "2", reps: "15", instruction: "Afaste as pernas contra a resistência e retorne devagar." },
        { id: "remada-baixa", name: "Remada baixa", sets: "3", reps: "12", instruction: "Puxe o pegador em direção ao abdômen, mantendo as costas firmes." },
        { id: "desenvolvimento-ombros", name: "Desenvolvimento de ombros (Shoulder Press)", sets: "2", reps: "12", instruction: "Empurre os pegadores para cima e retorne sem movimentos bruscos." },
        { id: "cadeira-extensora", name: "Cadeira extensora (Leg Extension)", sets: "2", reps: "12", instruction: "Estenda as pernas e retorne lentamente, sem dar impulso." },
        { id: "triceps-pulley", name: "Tríceps pulley", sets: "2", reps: "12", instruction: "Mantenha os cotovelos junto ao corpo e empurre a barra para baixo." },
      ] },
      { id: "sexta", day: "Sexta-feira", shortDay: "Sexta", focus: "Treino C · Ênfase em glúteos e corpo todo", session: "TREINO C", exercises: [
        { id: "stiff-halteres", name: "Stiff com halteres", sets: "2", reps: "10", instruction: "Leve o quadril para trás, mantendo os joelhos levemente flexionados e a coluna neutra." },
        { id: "coice-gluteo", name: "Coice de glúteo (polia baixa)", sets: "2", reps: "12 por perna", instruction: "Leve uma perna para trás sem movimentar excessivamente a lombar." },
        { id: "supino-maquina", name: "Supino máquina (Chest Press)", sets: "2", reps: "12", instruction: "Empurre os pegadores para frente e retorne lentamente." },
        { id: "rosca-biceps", name: "Rosca bíceps", sets: "2", reps: "12", instruction: "Flexione os cotovelos levando os pesos em direção aos ombros." },
        { id: "cadeira-abdutora", name: "Cadeira abdutora", sets: "2", reps: "15", instruction: "Afaste as pernas controladamente e retorne devagar." },
        { id: "prancha-abdominal", name: "Prancha abdominal", sets: "2", reps: "20 segundos", instruction: "Apoie antebraços e pontas dos pés, mantendo o corpo alinhado." },
      ] },
    ],
    schedule: true,
  },
};

const STORAGE_KEY = "meu-treino-registros-v1";
const dayNav = document.querySelector("#day-nav");
const workoutPanel = document.querySelector("#workout-panel");
const clearDialog = document.querySelector("#confirm-dialog");
const planSelect = document.querySelector("#plan-select");
const planSummary = document.querySelector("#plan-summary");

function emptyRecords() { return { completed: {}, weights: {}, calories: {}, navigation: {} }; }
function loadRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return emptyRecords();
    const migrated = {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      weights: saved.weights && typeof saved.weights === "object" ? saved.weights : {},
      calories: saved.calories && typeof saved.calories === "object" ? saved.calories : {},
      navigation: saved.navigation && typeof saved.navigation === "object" ? saved.navigation : {},
    };
    // Registros da versão original não tinham o identificador da ficha. Preserve-os
    // associando-os à ficha original, sem remover nem sobrescrever as chaves antigas.
    for (const type of ["completed", "weights"]) {
      for (const [key, value] of Object.entries(migrated[type])) {
        const separator = key.indexOf(":");
        if (separator < 0) continue;
        const namespacedKey = `recomposicao:${key}`;
        if (!(namespacedKey in migrated[type])) migrated[type][namespacedKey] = value;
      }
    }
    for (const [dayId, value] of Object.entries(migrated.calories)) {
      const namespacedKey = `recomposicao:${dayId}:aerobico`;
      if (!(namespacedKey in migrated.calories)) migrated.calories[namespacedKey] = value;
    }
    return migrated;
  } catch { return emptyRecords(); }
}
let records = loadRecords();
let selectedProfileId = workoutPlans[records.navigation.profileId] ? records.navigation.profileId : "recomposicao";
const savedDays = records.navigation.days && typeof records.navigation.days === "object" ? records.navigation.days : {};
let selectedDayId = workoutPlans[selectedProfileId].days.some((day) => day.id === (savedDays[selectedProfileId] || records.navigation.dayId))
  ? (savedDays[selectedProfileId] || records.navigation.dayId) : workoutPlans[selectedProfileId].days[0].id;

function saveRecords() {
  const days = records.navigation.days && typeof records.navigation.days === "object" ? records.navigation.days : {};
  days[selectedProfileId] = selectedDayId;
  records.navigation = { profileId: selectedProfileId, dayId: selectedDayId, days };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); } catch { /* A interface continua utilizável se o armazenamento estiver indisponível. */ }
}
function recordKey(dayId, itemId) { return `${selectedProfileId}:${dayId}:${itemId}`; }
function currentProfile() { return workoutPlans[selectedProfileId]; }
function currentPlan() { return currentProfile().days.find((plan) => plan.id === selectedDayId); }
function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderDayNav() {
  dayNav.innerHTML = currentProfile().days.map((plan, index) => {
    const active = plan.id === selectedDayId;
    return `<button class="day-tab${active ? " is-active" : ""}" type="button" data-day="${plan.id}" aria-pressed="${active}" ${active ? 'aria-current="page"' : ""}>
      <span class="day-tab-index">0${index + 1}</span><span class="day-tab-name">${plan.shortDay}</span><span class="day-tab-arrow" aria-hidden="true">↗</span></button>`;
  }).join("");
}
function renderExercise(exercise, index, plan) {
  const key = recordKey(plan.id, exercise.id);
  const complete = Boolean(records.completed[key]);
  const weight = records.weights[key] ?? "";
  return `<article class="exercise-card${complete ? " is-complete" : ""}" data-card-key="${key}">
    <div class="exercise-copy"><span class="exercise-index">${String(index + 1).padStart(2, "0")}</span><div class="exercise-description">
      <p class="exercise-category">MUSCULAÇÃO</p><h3>${exercise.name}</h3>
      <p class="exercise-meta"><span>${exercise.sets} séries</span><span class="meta-dot">·</span><span>${exercise.reps}</span></p>
      ${exercise.instruction ? `<p class="exercise-instruction">${exercise.instruction}</p>` : ""}
    </div></div><div class="exercise-actions">
      <label class="weight-control"><span class="control-caption">CARGA</span><span class="number-field"><input type="number" min="0" step="0.1" inputmode="decimal" placeholder="—" value="${escapeAttribute(weight)}" data-field="weight" data-key="${key}" aria-label="Peso utilizado em ${exercise.name}, em quilogramas" /><span>kg</span></span></label>
      <label class="completion-control" title="Marcar ${exercise.name} como concluído"><input class="completion-input" type="checkbox" data-field="completed" data-key="${key}" aria-label="Marcar ${exercise.name} como concluído" ${complete ? "checked" : ""} /><span class="completion-box" aria-hidden="true"><span>✓</span></span></label>
    </div></article>`;
}
function renderCardio(plan, index) {
  const key = recordKey(plan.id, "aerobico");
  const complete = Boolean(records.completed[key]);
  const calories = records.calories[key] ?? "";
  return `<div class="aerobic-divider"><span></span><p>FINALIZAÇÃO</p><span></span></div>
    <article class="cardio-card${complete ? " is-complete" : ""}" data-card-key="${key}">
      <div class="cardio-topline"><span class="cardio-label"><span class="cardio-label-dot"></span>AERÓBICO</span><span class="cardio-step">ATIVIDADE 0${index + 1}</span></div>
      <div class="cardio-content"><div class="cardio-intro"><span class="cardio-icon" aria-hidden="true">${plan.cardio.icon}</span><div><p class="cardio-overline">APARELHO</p><h3>${plan.cardio.machine}</h3></div></div>
        <div class="cardio-goals" aria-label="Metas informativas"><div><span>MÍNIMA</span><strong>150 <small>kcal</small></strong></div><div><span>DESEJÁVEL</span><strong>175–200 <small>kcal</small></strong></div></div>
        <div class="cardio-record"><label class="calorie-control"><span class="control-caption">VISOR DO APARELHO</span><span class="number-field calorie-field"><input type="number" min="0" step="any" inputmode="decimal" placeholder="—" value="${escapeAttribute(calories)}" data-field="calories" data-key="${key}" aria-label="Calorias exibidas no aparelho de ${plan.cardio.machine}" /><span>kcal</span></span></label>
          <label class="completion-control cardio-completion" title="Marcar aeróbico como concluído"><input class="completion-input" type="checkbox" data-field="completed" data-key="${key}" aria-label="Marcar aeróbico como concluído" ${complete ? "checked" : ""} /><span class="completion-box" aria-hidden="true"><span>✓</span></span></label></div>
      </div></article>`;
}
function renderSchedule() {
  return `<section class="schedule-card"><h3>Organização dos 60 minutos</h3><div><span>Aquecimento</span><strong>5–8 min</strong></div><div><span>Exercícios de musculação</span><strong>40–45 min</strong></div><div><span>Abdômen ou cardio leve</span><strong>5 min</strong></div><div><span>Alongamento leve</span><strong>2–3 min</strong></div><p>Terça-feira, quinta-feira e fim de semana: descanso ou atividade leve, conforme disposição.</p></section>`;
}
function renderWorkout() {
  const plan = currentPlan();
  planSelect.value = selectedProfileId;
  planSummary.textContent = currentProfile().summary;
  const total = plan.exercises.length;
  const done = plan.exercises.filter((exercise) => records.completed[recordKey(plan.id, exercise.id)]).length;
  const progress = Math.round(done / total * 100);
  workoutPanel.innerHTML = `<div class="workout-heading"><div><div class="session-label"><span class="session-line"></span>${plan.session}<span class="session-line"></span></div><h2>${plan.day}</h2><p class="workout-focus">${plan.focus}</p>${plan.duration ? `<p class="workout-duration">${plan.duration}</p>` : ""}</div>
      <button class="text-button" type="button" data-action="clear-day"><span aria-hidden="true">↺</span> Limpar progresso do dia</button></div>
    <section class="progress-card" aria-label="Progresso do treino"><div class="progress-copy"><span class="progress-kicker">SEU PROGRESSO</span><strong><span data-progress-count>${done}</span><span class="progress-divider">/</span>${total}<small> exercícios concluídos</small></strong></div><span class="progress-percent" data-progress-percent>${progress}%</span><div class="progress-track" role="progressbar" aria-label="Exercícios concluídos" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><span class="progress-fill" data-progress-fill style="width: ${progress}%"></span></div></section>
    <div class="section-heading"><div><span class="section-number">01</span><h3>Exercícios do dia</h3></div><span class="section-count">${String(total).padStart(2, "0")} exercícios</span></div>
    <div class="exercise-list">${plan.exercises.map((exercise, index) => renderExercise(exercise, index, plan)).join("")}</div>
    ${plan.cardio ? renderCardio(plan, plan.exercises.length) : ""}${currentProfile().schedule ? renderSchedule() : ""}
    <div class="restore-row"><span>Os registros ficam salvos neste dispositivo.</span></div>`;
  renderDayNav();
}
function updateProgress() {
  const plan = currentPlan();
  const total = plan.exercises.length;
  const done = plan.exercises.filter((exercise) => records.completed[recordKey(plan.id, exercise.id)]).length;
  const progress = Math.round(done / total * 100);
  workoutPanel.querySelector("[data-progress-count]").textContent = done;
  workoutPanel.querySelector("[data-progress-percent]").textContent = `${progress}%`;
  workoutPanel.querySelector(".progress-track").setAttribute("aria-valuenow", String(done));
  workoutPanel.querySelector("[data-progress-fill]").style.width = `${progress}%`;
}

dayNav.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab) return;
  selectedDayId = tab.dataset.day;
  saveRecords();
  renderWorkout();
});
planSelect.addEventListener("change", () => {
  const days = records.navigation.days && typeof records.navigation.days === "object" ? records.navigation.days : {};
  days[selectedProfileId] = selectedDayId;
  selectedProfileId = planSelect.value;
  const profileDays = currentProfile().days;
  selectedDayId = profileDays.some((day) => day.id === days[selectedProfileId]) ? days[selectedProfileId] : profileDays[0].id;
  records.navigation.days = days;
  saveRecords();
  renderWorkout();
});
workoutPanel.addEventListener("input", (event) => {
  const input = event.target.closest("[data-field]");
  if (!input || input.dataset.field === "completed") return;
  if (input.dataset.field === "weight") records.weights[input.dataset.key] = input.value;
  if (input.dataset.field === "calories") records.calories[input.dataset.key] = input.value;
  saveRecords();
});
workoutPanel.addEventListener("change", (event) => {
  const input = event.target.closest('[data-field="completed"]');
  if (!input) return;
  records.completed[input.dataset.key] = input.checked;
  input.closest("[data-card-key]").classList.toggle("is-complete", input.checked);
  saveRecords();
  updateProgress();
});
workoutPanel.addEventListener("click", (event) => {
  if (event.target.closest('[data-action="clear-day"]')) clearDialog.showModal();
});
clearDialog.addEventListener("close", () => {
  if (clearDialog.returnValue !== "confirm") return;
  const plan = currentPlan();
  for (const exercise of plan.exercises) delete records.completed[recordKey(plan.id, exercise.id)];
  if (plan.cardio) delete records.completed[recordKey(plan.id, "aerobico")];
  saveRecords();
  renderWorkout();
});

renderWorkout();

