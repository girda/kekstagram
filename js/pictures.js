'use strict'

var users = [];

var comments = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

function randomComment() {
  var commentsRandom = comments.slice(0, parseInt(Math.random()*comments.length))
  return commentsRandom;
}

for ( var i = 0; i < 25; i++ ) {

  users.push({
    url: 'photos/' + (1 + i) + '.jpg',
    likes: Math.floor(Math.random()*200),
    comments: randomComment()
  });

};
// 3.2
console.log(users)

var pictureTemplate = document.querySelector('#picture-template').content;
var pictures = document.querySelector('.pictures');

var renderPicrure = function(users) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').src = users.url;
  pictureElement.querySelector('.picture-likes').textContent = users.likes;
  pictureElement.querySelector('.picture-comments').textContent = users.comments.length;

  return pictureElement;
}

var fragment = document.createDocumentFragment();

for ( var i = 0; i < users.length; i++ ) {
  fragment.appendChild(renderPicrure(users[i]));
}

pictures.appendChild(fragment);

// 3.4

var uploadOverlay = document.querySelector('.upload-overlay');
// uploadOverlay.classList.add('hidden');
// 3.5

var galleryOverlay = document.querySelector('.gallery-overlay');

// 4.1
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var btnClose = document.querySelector('.gallery-overlay-close');
var pictures = document.querySelectorAll('.picture');

var openGallery = function(evt) {
  var parent = evt.type === 'click' ? evt.target.parentNode : evt.target;
  loadDataPicture(parent);
  galleryOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onGalleryEscPress)

};

var closeGallery = function() {
  galleryOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onGalleryEscPress)
}

var onGalleryEnterPress = function(evt) {

  if (evt.keyCode === ENTER_KEYCODE) {
    if (evt.target == btnClose) {
      closeGallery();

      return;
    }
    // if (!galleryOverlay.classList.contains('hidden')) {
      openGallery(evt);
    // }
  }
}

var onGalleryEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeGallery();
  }
}

var loadDataPicture = function(parent) {
  var img = galleryOverlay.querySelector('.gallery-overlay-image');
  var likes = galleryOverlay.querySelector('.likes-count');
  var comments = galleryOverlay.querySelector('.comments-count');
  console.log(parent)
  img.src = parent.querySelector('img').src;
  likes.textContent = parent.querySelector('.picture-likes').textContent;
  comments.textContent = parent.querySelector('.picture-comments').textContent;
}

for ( var i =0; i < pictures.length; i++) {
  pictures[i].addEventListener('click', openGallery);
  pictures[i].addEventListener('keydown', onGalleryEnterPress);
}

btnClose.addEventListener('click', closeGallery);
btnClose.addEventListener('keydown', onGalleryEnterPress);

// 4 -> 2.1
var uploadForm = document.querySelector('#upload-select-image');
var btnUploadFile = uploadForm.querySelector('.upload-file');
var inputUploadFile = uploadForm.querySelector('.upload-input');
var cancelUpload = uploadForm.querySelector('.upload-form-cancel');
var commentUpload = uploadForm.querySelector('.upload-form-description');
var resizeControlsValue = uploadForm.querySelector('.upload-resize-controls-value').value.slice(0,-1);
var inputHashtag = document.querySelector('.upload-form-hashtags');
var btnsEffect = uploadForm.querySelectorAll('.upload-effect-label');
var imgUpload = uploadForm.querySelectorAll('.effect-image-preview');

var openUploadFile = function() {
  inputUploadFile.addEventListener('input', function() {
    if (inputUploadFile.files.length > 0) {
      uploadOverlay.classList.remove('hidden');
      document.body.classList.add('is-popup');
      document.addEventListener('keydown', onUploadEscPress);
    } else {
      uploadOverlay.classList.add('hidden');
      document.body.classList.remove('is-popup');
      document.removeEventListener('keydown', onUploadEscPress);
    }
  });

}

var closeUploadFile = function() {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('is-popup');
  document.removeEventListener('keydown', onUploadEscPress);
}

var onUploadEnterPress = function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if ( evt.targr === cancelUpload ) {
      uploadOverlay.classList.add('hidden');
      document.body.classList.remove('is-popup');
      document.removeEventListener('keydown', onUploadEscPress);

      return
    }

    btnUploadFile.click();
  }
}

var onUploadEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (document.activeElement !== commentUpload) {
      uploadOverlay.classList.add('hidden');
      document.body.classList.remove('is-popup');
      document.removeEventListener('keydown', onUploadEscPress);
    }
  }
}

btnUploadFile.addEventListener('click', openUploadFile);

btnUploadFile.addEventListener('keydown', onUploadEnterPress);

cancelUpload.addEventListener('click', closeUploadFile);

cancelUpload.addEventListener('keydown', onUploadEnterPress)

uploadForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if ( commentUpload.value.length <= 140 && +resizeControlsValue <= 100 && +resizeControlsValue >= 25 ) {
    checkHashtag(inputHashtag);
    // uploadForm.submit();
  }
});


for ( var i = 0; i < btnsEffect.length; i++ ) {
  btnsEffect[i].addEventListener('click', function() {
    var effect = this.getAttribute('for').slice(14);
    var prevEffect = imgUpload[0].getAttribute('class').split(' ').pop();
    imgUpload[0].classList.remove(prevEffect);
    imgUpload[0].classList.add('effect-image-preview', 'effect-' + effect);
  })
}

// 4.5

var uploadResizeControls = document.querySelector('.upload-resize-controls');
var uploadResizeValue = uploadResizeControls.querySelector('.upload-resize-controls-value');

uploadResizeControls.addEventListener('click', function(evt) {
  var classBtn = 'upload-resize-controls-button-';
  var currentValue = uploadResizeValue.value.replace(/\D+/g,"");
  var MAX_VALUE = 100;
  var MIN_VALUE = 25;
  var step = 25;

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

})

// 4.6

var checkHashtag = function(el) {
  var hashtagValueArray = el.value.split(' ')

  hashtagValueArray.forEach( function(el) {
    if ( el[0] !== '#' ) {
      console.log('хэш-тег должен начинаться с хэша(#)!')
    }
  })


}
