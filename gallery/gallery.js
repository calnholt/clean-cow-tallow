const images = [
  "./images/photo-2.jpeg",
  "./images/photo-1.jpeg",
  "./images/photo-3.jpeg",
];

let currentIndex = 0;
let isAnimating = false;
let activeImage;

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
      if (currentIndex !== i) {
        switchImage(i);
      }
    });
  }
  btnContainer.append(imageBtnContainer);
  btnContainer.append(nextBtn);

  galleryContainer.append(imgContainer);
  galleryContainer.append(btnContainer);

  parent.append(galleryContainer);

  activeImage = activeImg;

  prevBtn.addEventListener('click', () => {
    if (isAnimating) {
        return;
    }
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    switchImage(newIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    if (isAnimating) {
        return;
    }
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    switchImage(newIndex);
  });
}

function switchImage(newIndex) {
  isAnimating = true;
  activeImage.src = images[currentIndex];

  activeImage.style.transition = 'opacity 0.3s';

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

  activeImage.style.opacity = '0';

  setTimeout(() => {
    activeImage.src = images[newIndex];
    activeImage.style.opacity = '1';
    currentIndex = newIndex;
    isAnimating = false;
  }, 200);

}
