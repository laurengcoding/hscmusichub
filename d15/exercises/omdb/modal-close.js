document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.modal') || event.target.closest('.modal-content')) {
    return
  }
  modal.classList.remove('show');
})
