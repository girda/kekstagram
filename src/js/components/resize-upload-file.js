(() => {
  const uploadForm = document.querySelector('#upload-select-image');
  const imgUpload = uploadForm.querySelectorAll('.effect-image-preview');
  const uploadResizeControls = document.querySelector('.upload-resize-controls');
  const uploadResizeValue = uploadResizeControls.querySelector('.upload-resize-controls-value');

  uploadResizeControls.addEventListener('click', function(evt) {
    const classBtn = 'upload-resize-controls-button-';
    const MAX_VALUE = 100;
    const MIN_VALUE = 25;
    const step = 25;
    let currentValue = uploadResizeValue.value.replace(/\D+/g,"");

    if ( evt.target.classList.contains(classBtn + 'inc') ) {
        if ( currentValue < MAX_VALUE ) {
          currentValue = +currentValue + step
        }
    } else if ( evt.target.classList.contains(classBtn + 'dec') ) {
      if ( currentValue > MIN_VALUE ) {
          currentValue = +currentValue - step
        }
    }

    if ( +currentValue === MAX_VALUE ) {
      imgUpload[0].style.transform = 'scale(1)'
    } else {
      imgUpload[0].style.transform = 'scale(0.' + currentValue + ')'
    }

    uploadResizeValue.value = currentValue + '%'

  });
})();

