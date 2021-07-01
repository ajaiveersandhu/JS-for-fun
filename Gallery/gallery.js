/* eslint-disable no-use-before-define */
function Gallery(gallery) {
  if (!gallery) throw new Error('No Gallery Found!');

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentElement;

  function closeModal() {
    modal.classList.remove('open');

    // next and prev button
    nextButton.removeEventListener('click', nextImage);
    prevButton.removeEventListener('click', prevImage);
    window.removeEventListener('keyup', (e) => {
      if (e.key === 'Escape') return closeModal();
      if (e.key === 'ArrowRight') return nextImage();
      if (e.key === 'ArrowLeft') return prevImage();
    });
  }

  function openModal() {
    if (modal.matches('.open')) {
      return;
    }
    modal.classList.add('open');
    // event listeners to be bound when the modal opens

    // next and prev button
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') return closeModal();
      if (e.key === 'ArrowRight') return nextImage();
      if (e.key === 'ArrowLeft') return prevImage();
    });
  }

  function nextImage() {
    showImage(currentElement.nextElementSibling || gallery.firstElementChild);
  }

  function prevImage() {
    showImage(
      currentElement.previousElementSibling || gallery.lastElementChild
    );
  }

  function showImage(imageElement) {
    if (!imageElement) {
      console.info('no image found.');
      return;
    }
    modal.querySelector('img').src = imageElement.src;
    modal.querySelector('h2').textContent = imageElement.title;
    modal.querySelector('figure p').textContent =
      imageElement.dataset.description;
    currentElement = imageElement;
    openModal();
  }

  // event listener  -----

  // opening image in modal
  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  images.forEach((image) =>
    image.addEventListener(
      'keyup',
      (e) => e.key === 'Enter' && showImage(e.currentTarget)
    )
  );

  // closing modal with click
  modal.addEventListener(
    'click',
    (e) => e.target === e.currentTarget && closeModal()
  );
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
