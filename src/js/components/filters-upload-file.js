( () => {
  const uploadForm = document.querySelector('#upload-select-image');
  const uploadOverlay = uploadForm.querySelector('.upload-overlay');
  const btnsEffect = uploadForm.querySelectorAll('.upload-effect-label');
  const imgUpload = uploadForm.querySelectorAll('.effect-image-preview');

  for ( let i = 0; i < btnsEffect.length; i++ ) {
    btnsEffect[i].addEventListener('click', function() {
      let effect = this.getAttribute('for').slice(14);
      let prevEffect = imgUpload[0].getAttribute('class').split(' ').pop();
      imgUpload[0].classList.remove(prevEffect);
      imgUpload[0].classList.add('effect-image-preview', 'effect-' + effect);
    })
  }

  window.clearFilters = () => {
    if ( uploadOverlay.classList.contains('hidden') ) {
      let prevEffect = imgUpload[0].getAttribute('class').split(' ').pop();
      imgUpload[0].classList.remove(prevEffect);
    }
  }
})();

