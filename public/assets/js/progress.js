// ============================================================
// progress.js — lesson progress tracking via localStorage
//
// Hoe het werkt:
//   - Voortgang wordt opgeslagen in de browser (localStorage)
//   - Geen server of login nodig
//   - Roep markDone("sr-03") aan als een les voltooid is
//   - Roep getProgress("sr") aan om de voortgang van een module op te halen
// ============================================================

const STORAGE_KEY = 'qlp_progress';

// Haal alle opgeslagen voortgang op
function getAllProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

// Sla voortgang op
function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Markeer een les als gedaan — roep aan bij "Mark as done" knop
// lesCode: bv. "sr-03"
export function markDone(lesCode) {
  const progress = getAllProgress();
  progress[lesCode] = { done: true, completedAt: new Date().toISOString() };
  saveProgress(progress);
  updateUI(lesCode);
}

// Controleer of een les gedaan is
// Geeft true of false terug
export function isDone(lesCode) {
  const progress = getAllProgress();
  return !!progress[lesCode]?.done;
}

// Haal voortgang van een module op
// moduleId: bv. "sr"
// lessonCodes: bv. ["sr-01", "sr-02", "sr-03", ...]
// Geeft terug: { done: 3, total: 8, pct: 38 }
export function getProgress(moduleId, lessonCodes) {
  const done = lessonCodes.filter(code => isDone(code)).length;
  const total = lessonCodes.length;
  return {
    done,
    total,
    pct: total > 0 ? Math.round((done / total) * 100) : 0,
  };
}

// Update de UI na het markeren als gedaan
function updateUI(lesCode) {
  // Update de statusknop
  const btn = document.getElementById('btn-mark-done');
  if (btn) {
    btn.textContent = 'Done ✓';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  }

  // Update de status in de lessenlijst sidebar
  const statusEl = document.querySelector(`[data-lesson="${lesCode}"] .lesson-item__status`);
  if (statusEl) {
    statusEl.className = 'lesson-item__status lesson-item__status--done';
    statusEl.textContent = '✓';
  }
}

// Initialiseer de pagina — markeert al gedane lessen in de sidebar
export function initPage(currentLesson) {
  // Zet de "Mark as done" knop correct
  const btn = document.getElementById('btn-mark-done');
  if (btn) {
    if (isDone(currentLesson)) {
      btn.textContent = 'Done ✓';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    } else {
      btn.addEventListener('click', () => markDone(currentLesson));
    }
  }

  // Update alle lesitems in de sidebar
  document.querySelectorAll('.lesson-item[data-lesson]').forEach(item => {
    const code = item.dataset.lesson;
    const statusEl = item.querySelector('.lesson-item__status');
    if (statusEl && isDone(code)) {
      statusEl.className = 'lesson-item__status lesson-item__status--done';
      statusEl.textContent = '✓';
    }
  });
}
