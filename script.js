const workoutPlans = [
  {
    id: "segunda",
    day: "Segunda-feira",
    shortDay: "Segunda",
    focus: "Peito, tríceps e quadríceps",
    session: "TREINO A",
    exercises: [
      { id: "supino-inclinado", name: "Supino inclinado", sets: "4", reps: "8–10" },
      { id: "chest-press", name: "Chest Press", sets: "3", reps: "8–12" },
      { id: "crucifixo-maquina", name: "Crucifixo máquina", sets: "3", reps: "12–15" },
      { id: "triceps-polia", name: "Tríceps na polia", sets: "3", reps: "10–12" },
      { id: "triceps-frances", name: "Tríceps francês", sets: "3", reps: "10–12" },
      { id: "leg-press", name: "Leg Press", sets: "3", reps: "15–20" },
      { id: "cadeira-extensora", name: "Cadeira extensora", sets: "3", reps: "15–20" },
    ],
    cardio: { machine: "Esteira", icon: "↗" },
  },
  {
    id: "quarta",
    day: "Quarta-feira",
    shortDay: "Quarta",
    focus: "Costas, bíceps e posteriores",
    session: "TREINO B",
    exercises: [
      { id: "puxada-alta", name: "Puxada alta (Pulldown)", sets: "4", reps: "8–12" },
      { id: "remada-sentada", name: "Remada sentada", sets: "4", reps: "8–12" },
      { id: "remada-articulada", name: "Remada articulada", sets: "3", reps: "10–12" },
      { id: "rosca-direta", name: "Rosca direta", sets: "3", reps: "8–12" },
      { id: "rosca-scott", name: "Rosca Scott", sets: "3", reps: "10–12" },
      { id: "mesa-flexora", name: "Mesa flexora", sets: "3", reps: "12–15" },
      { id: "cadeira-abdutora", name: "Cadeira abdutora", sets: "3", reps: "15–20" },
    ],
    cardio: { machine: "Elíptico", icon: "◌" },
  },
  {
    id: "sexta",
    day: "Sexta-feira",
    shortDay: "Sexta",
    focus: "Ombros, braços, peito e pernas",
    session: "TREINO C",
    exercises: [
      { id: "desenvolvimento-ombros", name: "Desenvolvimento de ombros", sets: "3", reps: "8–12" },
      { id: "elevacao-lateral", name: "Elevação lateral", sets: "3", reps: "12–15" },
      { id: "supino-maquina", name: "Supino máquina", sets: "3", reps: "10–12" },
      { id: "rosca-martelo", name: "Rosca martelo", sets: "3", reps: "10–12" },
      { id: "triceps-corda", name: "Tríceps corda", sets: "3", reps: "10–12" },
      { id: "leg-press", name: "Leg Press", sets: "3", reps: "15" },
      { id: "mesa-flexora", name: "Mesa flexora", sets: "3", reps: "15" },
      { id: "panturrilha", name: "Panturrilha", sets: "3", reps: "15–20" },
    ],
    cardio: { machine: "Bicicleta ergométrica", icon: "↻" },
  },
];

const STORAGE_KEY = "meu-treino-registros-v1";
const dayNav = document.querySelector("#day-nav");
const workoutPanel = document.querySelector("#workout-panel");
const clearDialog = document.querySelector("#confirm-dialog");
const restoreDialog = document.querySelector("#restore-dialog");

let selectedDayId = workoutPlans[0].id;
let records = loadRecords();

function emptyRecords() {
  return { completed: {}, weights: {}, calories: {} };
}

function loadRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return emptyRecords();

    return {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      weights: saved.weights && typeof saved.weights === "object" ? saved.weights : {},
      calories: saved.calories && typeof saved.calories === "object" ? saved.calories : {},
    };
  } catch {
    return emptyRecords();
  }
}

function saveRecords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {
    // The ficha remains usable if browser storage is unavailable.
  }
}

function recordKey(dayId, itemId) {
  return `${dayId}:${itemId}`;
}

function renderDayNav() {
  dayNav.innerHTML = workoutPlans
    .map((plan, index) => {
      const isActive = plan.id === selectedDayId;
      return `
        <button class="day-tab${isActive ? " is-active" : ""}" type="button"
          data-day="${plan.id}" aria-pressed="${isActive}" ${isActive ? 'aria-current="page"' : ""}>
          <span class="day-tab-index">0${index + 1}</span>
          <span class="day-tab-name">${plan.shortDay}</span>
          <span class="day-tab-arrow" aria-hidden="true">↗</span>
        </button>`;
    })
    .join("");
}

function renderExercise(exercise, index, dayId) {
  const key = recordKey(dayId, exercise.id);
  const complete = Boolean(records.completed[key]);
  const weight = records.weights[key] ?? "";

  return `
    <article class="exercise-card${complete ? " is-complete" : ""}" data-card-key="${key}">
      <div class="exercise-copy">
        <span class="exercise-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="exercise-description">
          <p class="exercise-category">MUSCULAÇÃO</p>
          <h3>${exercise.name}</h3>
          <p class="exercise-meta"><span>${exercise.sets} séries</span><span class="meta-dot">·</span><span>${exercise.reps} repetições</span></p>
        </div>
      </div>
      <div class="exercise-actions">
        <label class="weight-control">
          <span class="control-caption">CARGA</span>
          <span class="number-field">
            <input type="number" min="0" step="0.1" inputmode="decimal" placeholder="—"
              value="${escapeAttribute(weight)}" data-field="weight" data-key="${key}"
              aria-label="Peso utilizado em ${exercise.name}, em quilogramas" />
            <span>kg</span>
          </span>
        </label>
        <label class="completion-control" title="Marcar ${exercise.name} como concluído">
          <input class="completion-input" type="checkbox" data-field="completed" data-key="${key}"
            aria-label="Marcar ${exercise.name} como concluído" ${complete ? "checked" : ""} />
          <span class="completion-box" aria-hidden="true"><span>✓</span></span>
        </label>
      </div>
    </article>`;
}

function renderCardio(plan, index) {
  const key = recordKey(plan.id, "aerobico");
  const complete = Boolean(records.completed[key]);
  const calories = records.calories[plan.id] ?? "";

  return `
    <article class="cardio-card${complete ? " is-complete" : ""}" data-card-key="${key}">
      <div class="cardio-topline">
        <span class="cardio-label"><span class="cardio-label-dot"></span>AERÓBICO</span>
        <span class="cardio-step">ATIVIDADE 0${index + 1}</span>
      </div>
      <div class="cardio-content">
        <div class="cardio-intro">
          <span class="cardio-icon" aria-hidden="true">${plan.cardio.icon}</span>
          <div>
            <p class="cardio-overline">APARELHO</p>
            <h3>${plan.cardio.machine}</h3>
          </div>
        </div>
        <div class="cardio-goals" aria-label="Metas informativas">
          <div><span>MÍNIMA</span><strong>150 <small>kcal</small></strong></div>
          <div><span>DESEJÁVEL</span><strong>175–200 <small>kcal</small></strong></div>
        </div>
        <div class="cardio-record">
          <label class="calorie-control">
            <span class="control-caption">VISOR DO APARELHO</span>
            <span class="number-field calorie-field">
              <input type="number" min="0" step="any" inputmode="decimal" placeholder="—"
                value="${escapeAttribute(calories)}" data-field="calories" data-key="${plan.id}"
                aria-label="Calorias exibidas no aparelho de ${plan.cardio.machine}" />
              <span>kcal</span>
            </span>
          </label>
          <label class="completion-control cardio-completion" title="Marcar aeróbico como concluído">
            <input class="completion-input" type="checkbox" data-field="completed" data-key="${key}"
              aria-label="Marcar aeróbico como concluído" ${complete ? "checked" : ""} />
            <span class="completion-box" aria-hidden="true"><span>✓</span></span>
          </label>
        </div>
      </div>
    </article>`;
}

function renderWorkout() {
  const plan = workoutPlans.find((item) => item.id === selectedDayId) || workoutPlans[0];
  const totalActivities = plan.exercises.length + 1;
  const doneActivities = plan.exercises.filter((exercise) => records.completed[recordKey(plan.id, exercise.id)]).length
    + (records.completed[recordKey(plan.id, "aerobico")] ? 1 : 0);
  const progress = Math.round((doneActivities / totalActivities) * 100);

  workoutPanel.innerHTML = `
    <div class="workout-heading">
      <div>
        <div class="session-label"><span class="session-line"></span>${plan.session}<span class="session-line"></span></div>
        <h2>${plan.day}</h2>
        <p class="workout-focus">${plan.focus}</p>
      </div>
      <button class="text-button" type="button" data-action="clear-day">
        <span aria-hidden="true">↺</span> Limpar progresso do dia
      </button>
    </div>

    <section class="progress-card" aria-label="Progresso do treino">
      <div class="progress-copy">
        <span class="progress-kicker">SEU PROGRESSO</span>
        <strong><span data-progress-count>${doneActivities}</span><span class="progress-divider">/</span>${totalActivities}<small> atividades concluídas</small></strong>
      </div>
      <span class="progress-percent" data-progress-percent>${progress}%</span>
      <div class="progress-track" role="progressbar" aria-label="Atividades concluídas"
        aria-valuemin="0" aria-valuemax="${totalActivities}" aria-valuenow="${doneActivities}">
        <span class="progress-fill" data-progress-fill style="width: ${progress}%"></span>
      </div>
    </section>

    <div class="section-heading">
      <div><span class="section-number">01</span><h3>Exercícios do dia</h3></div>
      <span class="section-count">${String(plan.exercises.length).padStart(2, "0")} exercícios</span>
    </div>
    <div class="exercise-list">
      ${plan.exercises.map((exercise, index) => renderExercise(exercise, index, plan.id)).join("")}
    </div>
    <div class="aerobic-divider"><span></span><p>FINALIZAÇÃO</p><span></span></div>
    ${renderCardio(plan, plan.exercises.length)}
    <div class="restore-row">
      <span>Seus registros ficam salvos neste dispositivo.</span>
      <button class="restore-button" type="button" data-action="restore">Restaurar ficha original <span aria-hidden="true">↗</span></button>
    </div>`;

  renderDayNav();
}

function updateProgress() {
  const plan = workoutPlans.find((item) => item.id === selectedDayId);
  if (!plan) return;

  const totalActivities = plan.exercises.length + 1;
  const doneActivities = plan.exercises.filter((exercise) => records.completed[recordKey(plan.id, exercise.id)]).length
    + (records.completed[recordKey(plan.id, "aerobico")] ? 1 : 0);
  const progress = Math.round((doneActivities / totalActivities) * 100);
  workoutPanel.querySelector("[data-progress-count]").textContent = doneActivities;
  workoutPanel.querySelector("[data-progress-percent]").textContent = `${progress}%`;
  workoutPanel.querySelector(".progress-track").setAttribute("aria-valuenow", String(doneActivities));
  workoutPanel.querySelector("[data-progress-fill]").style.width = `${progress}%`;
}

function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

dayNav.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (!tab) return;
  selectedDayId = tab.dataset.day;
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
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "clear-day") clearDialog.showModal();
  if (action === "restore") restoreDialog.showModal();
});

clearDialog.addEventListener("close", () => {
  if (clearDialog.returnValue !== "confirm") return;
  const plan = workoutPlans.find((item) => item.id === selectedDayId);
  for (const exercise of plan.exercises) delete records.completed[recordKey(plan.id, exercise.id)];
  delete records.completed[recordKey(plan.id, "aerobico")];
  saveRecords();
  renderWorkout();
});

restoreDialog.addEventListener("close", () => {
  if (restoreDialog.returnValue !== "confirm") return;
  records = emptyRecords();
  saveRecords();
  renderWorkout();
});

renderWorkout();
