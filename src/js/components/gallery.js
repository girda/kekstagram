( () => {
  const galleryOverlay = document.querySelector('.gallery-overlay');
  const btnClose = document.querySelector('.gallery-overlay-close');
  const pictures = document.querySelectorAll('.picture');

  function loadDataPicture(parent) {
    let img = galleryOverlay.querySelector('.gallery-overlay-image');
    let likes = galleryOverlay.querySelector('.likes-count');
    let comments = galleryOverlay.querySelector('.comments-count');

    img.src = parent.querySelector('img').src;
    likes.textContent = parent.querySelector('.picture-likes').textContent;
    comments.textContent = parent.querySelector('.picture-comments').textContent;
  }


  function openGallery(evt) {
    let parent = evt.type === 'click' ? evt.target.parentNode : evt.target;
    loadDataPicture(parent);
    galleryOverlay.classList.remove('hidden');
    document.addEventListener('keydown', onGalleryEscPress)

  };

  function closeGallery() {
    galleryOverlay.classList.add('hidden');
    document.removeEventListener('keydown', onGalleryEscPress)
  }

  function onGalleryEnterPress(evt) {
    if (evt.target === btnClose) {
      util.isEnterEvent(evt, closeGallery)
    } else {
      util.isEnterEvent(evt, openGallery)
    }
  }

  function onGalleryEscPress(evt) {
    util.isEscEvent(evt, closeGallery)
  }

  for ( var i =0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', openGallery);
    pictures[i].addEventListener('keydown', onGalleryEnterPress);
  }

  btnClose.addEventListener('click', closeGallery);
  btnClose.addEventListener('keydown', onGalleryEnterPress);

})();

