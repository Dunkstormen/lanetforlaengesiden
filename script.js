const dialog = document.querySelector('#packing');
const boxes = [...dialog.querySelectorAll('input[type="checkbox"]')];
const progress = dialog.querySelector('.packing-progress');
let saved = [];
try { saved = JSON.parse(localStorage.getItem('lanet-packing') || '[]'); } catch { /* Storage may be unavailable. */ }
boxes.forEach(box => { box.checked = Array.isArray(saved) && saved.includes(box.value); });
function updatePacking() {
  const checked = boxes.filter(box => box.checked);
  progress.textContent = checked.length === boxes.length ? 'Flokken er klar. Du er klar. Vi ses i dalen!' : `${checked.length} af ${boxes.length} pakket — eventyret venter.`;
  try { localStorage.setItem('lanet-packing', JSON.stringify(checked.map(box => box.value))); } catch { /* Checklist still works without storage. */ }
}
boxes.forEach(box => box.addEventListener('change', updatePacking));
document.querySelectorAll('[data-packing]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
updatePacking();
