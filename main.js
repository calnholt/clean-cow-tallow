function main() {
  window.addEventListener('scroll', function () {
    const header = document.getElementsByClassName('logo')[0];
    if (window.scrollY > 220) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
}