( () => {
  let pictureTemplate = document.querySelector('#picture-template').content;
  let pictures = document.querySelector('.pictures');

  let renderPicrure = function(users) {
    let pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('img').src = users.url;
    pictureElement.querySelector('.picture-likes').textContent = users.likes;
    pictureElement.querySelector('.picture-comments').textContent = users.comments.length;

    return pictureElement;
  }

  let fragment = document.createDocumentFragment();

  for ( let i = 0; i < users.length; i++ ) {
    fragment.appendChild(renderPicrure(users[i]));
  }

  pictures.appendChild(fragment);

})();

