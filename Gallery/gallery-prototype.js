/* eslint-disable no-use-before-define */
function Gallery(gallery) {
  if (!gallery) throw new Error('No Gallery Found!');

  this.gallery = gallery;
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);

  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.nextButton = document.querySelector('.next');
  this.prevButton = document.querySelector('.prev');

  // event listener  -----

  // opening image in modal
  this.images.forEach((image) =>
    image.addEventListener('click', (e) => this.showImage(e.currentTarget))
  );

  this.images.forEach((image) =>
    image.addEventListener(
      'keyup',
      (e) => e.key === 'Enter' && this.showImage(e.currentTarget)
    )
  );

  // closing modal with click
  this.modal.addEventListener(
    'click',
    (e) => e.target === e.currentTarget && this.closeModal()
  );
}

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');

  // next and prev button
  this.nextButton.removeEventListener('click', this.nextImage);
  this.prevButton.removeEventListener('click', this.prevImage);
  window.removeEventListener('keyup', (e) => {
    if (e.key === 'Escape') return this.closeModal();
    if (e.key === 'ArrowRight') return this.nextImage();
    if (e.key === 'ArrowLeft') return this.prevImage();
  });
};

Gallery.prototype.openModal = function () {
  if (this.modal.matches('.open')) {
    return;
  }
  this.modal.classList.add('open');
  // event listeners to be bound when the modal opens

  // next and prev button
  this.nextButton.addEventListener('click', this.nextImage);
  this.prevButton.addEventListener('click', this.prevImage);
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') return this.closeModal();
    if (e.key === 'ArrowRight') return this.nextImage();
    if (e.key === 'ArrowLeft') return this.prevImage();
  });
};

Gallery.prototype.nextImage = function () {
  this.showImage(
    this.currentElement.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.prevImage = function () {
  this.showImage(
    this.currentElement.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function (imageElement) {
  if (!imageElement) {
    console.info('no image found.');
    return;
  }
  this.modal.querySelector('img').src = imageElement.src;
  this.modal.querySelector('h2').textContent = imageElement.title;
  this.modal.querySelector('figure p').textContent =
    imageElement.dataset.description;
  this.currentElement = imageElement;
  this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
