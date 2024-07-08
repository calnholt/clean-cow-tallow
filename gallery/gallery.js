const images = [
  "./images/photo-3.jpeg",
  "./images/photo-2.jpeg",
  "./images/photo-1.jpeg",
  "./images/product-1.jpeg",
  "./images/product-2.jpeg",
];

let _currentIndex = 0;
let _isAnimating = false;
let _activeImage;

createGallery = () => {
  const parent = document.getElementById('gallery');
  if (!parent) {
    console.error('cannot find required element with id "gallery"');
    return;
  }

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('gallery-container');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('gallery');

  const activeImg = document.createElement('img');
  activeImg.src = images[0];

  imgContainer.append(activeImg);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('buttons');

  const nextBtn = document.createElement('button');
  nextBtn.id = 'next-btn';
  nextBtn.textContent = '>';

  const prevBtn = document.createElement('button');
  prevBtn.id = 'prev-btn';
  prevBtn.textContent = '<';

  btnContainer.append(prevBtn);

  const imageBtnContainer = document.createElement('div');
  imageBtnContainer.classList.add('image-btn-container');

  for (let i = 0; i < images.length; i++) {
    const imageBtn = document.createElement('div');
    imageBtn.classList.add('btn');
    if (i === 0) {
      imageBtn.classList.add('selected');
    }
    imageBtnContainer.append(imageBtn);
    imageBtn.addEventListener('click', () => {
      if (_currentIndex !== i) {
        switchImage(i);
      }
    });
  }
  btnContainer.append(imageBtnContainer);
  btnContainer.append(nextBtn);

  galleryContainer.append(imgContainer);
  galleryContainer.append(btnContainer);

  parent.append(galleryContainer);

  _activeImage = activeImg;

  prevBtn.addEventListener('click', () => {
    const newIndex = (_currentIndex === 0) ? images.length - 1 : _currentIndex - 1;
    switchImage(newIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    const newIndex = (_currentIndex === images.length - 1) ? 0 : _currentIndex + 1;
    switchImage(newIndex);
  });

  _activeImage.addEventListener('transitionend', () => {
    _isAnimating = _activeImage.style.opacity === '0';
    if (_activeImage.style.opacity === '0') {
      _activeImage.src = images[_currentIndex];
    }
    _activeImage.style.opacity = '1';
  })

}

function switchImage(newIndex) {
  if (_isAnimating) {
    return;
  }
  _isAnimating = true;
  _currentIndex = newIndex;

  _activeImage.style.transition = 'opacity 0.3s';

  const nodes = document.getElementsByClassName('btn');
  let i = 0;
  for (const node of nodes) {
    if (i === newIndex) {
      node.classList.add('selected');
    }
    else {
      node.classList.remove('selected');
    }
    i++;
  }
  _activeImage.style.opacity = '0';
}
