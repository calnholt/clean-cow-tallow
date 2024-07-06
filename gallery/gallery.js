const images = [
  "./2.jpeg",
  "./3.jpeg",
  "./4.jpeg",
];

let currentIndex = 0;
let isAnimating = false;
let activeImage;
let inactiveImage;

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
  activeImg.src = './2.jpeg';
  const inactiveImg = document.createElement('img');
  inactiveImg.src = './3.jpeg';
  inactiveImg.classList.add('hidden');

  imgContainer.append(activeImg);
  imgContainer.append(inactiveImg);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('buttons');

  const nextBtn = document.createElement('button');
  nextBtn.id = 'next-btn';
  nextBtn.textContent = '>';

  const prevBtn = document.createElement('button');
  prevBtn.id = 'prev-btn';
  prevBtn.textContent = '<';

  btnContainer.append(prevBtn);
  btnContainer.append(nextBtn);

  galleryContainer.append(imgContainer);
  galleryContainer.append(btnContainer);

  parent.append(galleryContainer);


  activeImage = activeImg;
  inactiveImage = inactiveImg;

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
  inactiveImage.src = images[newIndex];

  activeImage.style.transition = 'opacity 0.3s';
  inactiveImage.style.transition = 'opacity 0.3s';

  requestAnimationFrame(() => {
      inactiveImage.style.display = 'unset';
      activeImage.style.opacity = '0';
      inactiveImage.style.opacity = '1';
  });

  // a little janky :3
  setTimeout(() => {
      activeImage.src = images[newIndex];
      activeImage.style.transition = 'unset';
      activeImage.style.opacity = '1';
      inactiveImage.style.display = 'hidden';
      inactiveImage.style.opacity = '0';
      currentIndex = newIndex;
      isAnimating = false;
  }, 200);
}
