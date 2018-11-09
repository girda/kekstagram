( () => {
  const uploadForm = document.querySelector('#upload-select-image');
  const commentUpload = uploadForm.querySelector('.upload-form-description');
  const resizeControlsValue = uploadForm.querySelector('.upload-resize-controls-value').value.slice(0,-1);
  const inputHashtag = document.querySelector('.upload-form-hashtags');


  uploadForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    if ( commentUpload.value.length <= 140 && +resizeControlsValue <= 100 && +resizeControlsValue >= 25 ) {
      checkHashtag(inputHashtag);
      // uploadForm.submit();
    }
  });


  function checkHashtag(el) {
    let hashtagValueArray = el.value.replace(/\s+/g, ' ').split(' ');

    hashtagValueArray.forEach( function(el) {
      if ( el[0] !== '#' ) {
        console.log('хэш-тег должен начинаться с хэша(#)!')
      }
    })

    if ( hashtagValueArray.length > 5 ) {
      console.log('Вы можете ввести максимум 5-ть хэш-тегов!')
    }

    console.log(hashtagValueArray)
  }
})()

