const IMAGE_ID = 'gallery-image';
const TRANSITION = 'opacity 0.15s';

// creates the gallery element
createGallery = (IMAGES) => {
  // find and use the existing element with id of 'gallery' to hold the gallery
  const parent = document.getElementById('gallery');
  if (!parent) {
    console.error('cannot find required element with id "gallery"');
    return;
  }

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('gallery-container');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('gallery');

  // set the state variable
  const image = document.createElement('img');
  // default image to display is the first one in the array
  image.src = IMAGES[0];
  image.id = IMAGE_ID;

  imgContainer.append(image);

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

  // create circles for each image in gallery
  for (let i = 0; i < IMAGES.length; i++) {
    const imageBtn = document.createElement('div');
    imageBtn.classList.add('btn');
    if (i === 0) {
      imageBtn.classList.add('selected');
    }
    imageBtnContainer.append(imageBtn);
    // handlers for choosing specific image index
    imageBtn.addEventListener('click', () => {
      if (getCurrentIndex() !== i) {
        switchImage(i);
      }
    });
  }
  btnContainer.append(imageBtnContainer);
  btnContainer.append(nextBtn);

  galleryContainer.append(imgContainer);
  galleryContainer.append(btnContainer);

  parent.append(galleryContainer);

  prevBtn.addEventListener('click', () => {
    const currentIndex = getCurrentIndex();
    const newIndex = (currentIndex === 0) ? IMAGES.length - 1 : currentIndex - 1;
    switchImage(newIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    const currentIndex = getCurrentIndex();
    const newIndex = (currentIndex === IMAGES.length - 1) ? 0 : currentIndex + 1;
    switchImage(newIndex);
  });

  // handle necessary state changes after transition animations finish
  image.addEventListener('transitionend', () => {
    const image = getImage();
    if (image.style.opacity === '0') {
      image.src = IMAGES[getCurrentIndex()];
      image.style.opacity = '1';
    }
    else {
      image.style.transition = null;
    }
  });
}

// switches the image to be viewed
switchImage = (newIndex) => {
  if (isAnimating()) {
    return;
  }
  const image = getImage();
  image.style.transition = TRANSITION;
  const nodes = document.getElementsByClassName('btn');
  let i = 0;
  // update image bubble style
  for (const node of nodes) {
    if (i === newIndex) {
      node.classList.add('selected');
    }
    else {
      node.classList.remove('selected');
    }
    i++;
  }
  image.style.opacity = '0';
}

getCurrentIndex = () => {
  const nodes = document.getElementsByClassName('btn');
  let i = 0;
  for (const node of nodes) {
    if (node.classList.contains('selected')) {
      return i;
    }
    i++;
  };
  return i;
}

getImage = () => {
  return document.getElementById(IMAGE_ID);
}

isAnimating = () => {
  return getImage().style.transition === TRANSITION;
}