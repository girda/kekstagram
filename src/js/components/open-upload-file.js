( () => {
  const uploadForm = document.querySelector('#upload-select-image');
  const uploadOverlay = uploadForm.querySelector('.upload-overlay');
  const btnUploadFile = uploadForm.querySelector('.upload-file');
  const inputUploadFile = uploadForm.querySelector('.upload-input');
  const cancelUpload = uploadForm.querySelector('.upload-form-cancel');
  const commentUpload = uploadForm.querySelector('.upload-form-description');

  function openUploadFile(evt) {
    if ( evt.type === 'keydown' ) {
      inputUploadFile.click();
    }

    inputUploadFile.addEventListener('input', function() {
      if (inputUploadFile.files.length > 0) {
        uploadOverlay.classList.remove('hidden');
        document.body.classList.add('is-popup');
        document.addEventListener('keydown', onUploadFileEscPress);
      }
    });

  }

  function closeUploadFile() {
    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('is-popup');
    document.removeEventListener('keydown', onUploadFileEscPress);
    clearFilters();
  }

  function onUploadFileEnterPress(evt) {
    if ( evt.target === cancelUpload ) {
      util.isEnterEvent(evt, closeUploadFile)
    } else {
      util.isEnterEvent(evt, openUploadFile)
    }
  }

  function onUploadFileEscPress(evt) {
    if (document.activeElement !== commentUpload) {
      util.isEscEvent(evt, closeUploadFile)
    }
  }

  btnUploadFile.addEventListener('click', openUploadFile);
  btnUploadFile.addEventListener('keydown', onUploadFileEnterPress);
  cancelUpload.addEventListener('click', closeUploadFile);
  cancelUpload.addEventListener('keydown', onUploadFileEnterPress);

})();
