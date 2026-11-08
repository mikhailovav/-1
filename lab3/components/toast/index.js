// Всплывающее уведомление (Bootstrap Toast): подтверждает добавление / удаление
export function showToast(message) {
  let box = document.getElementById('toast-box');
  if (!box) {
    document.body.insertAdjacentHTML('beforeend',
      '<div id="toast-box" class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3"></div>');
    box = document.getElementById('toast-box');
  }
  box.insertAdjacentHTML('beforeend',
    `<div class="toast s-toast" role="alert"><div class="toast-body">${message}</div></div>`);
  const el = box.lastElementChild;
  el.addEventListener('hidden.bs.toast', () => el.remove());
  new bootstrap.Toast(el, { delay: 2200 }).show();
}
