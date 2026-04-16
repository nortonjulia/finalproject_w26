// ===== TIP MODALS =====
function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    // Focus the close button for accessibility
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
  }
});

// ===== INGREDIENT CHECKER =====
// Lets users check off ingredients as they gather them
function initIngredientChecker() {
  const items = document.querySelectorAll('.ingredients-list li');
  items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      if (item.classList.contains('checked')) {
        item.style.opacity = '0.45';
        item.style.textDecoration = 'line-through';
      } else {
        item.style.opacity = '1';
        item.style.textDecoration = 'none';
      }
    });
  });
}

// ===== STEP HIGHLIGHTER =====
// Highlights the active step while cooking
function initStepHighlighter() {
  const steps = document.querySelectorAll('.steps-list li');
  steps.forEach((step, i) => {
    step.style.cursor = 'pointer';
    step.addEventListener('click', () => {
      steps.forEach(s => {
        s.style.background = '';
        s.style.outline = '';
      });
      step.style.background = 'rgba(212, 149, 106, 0.12)';
      step.style.outline = '2px solid rgba(212, 149, 106, 0.4)';
      step.style.borderRadius = '8px';
    });
  });
}

// ===== INIT ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  initIngredientChecker();
  initStepHighlighter();

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});