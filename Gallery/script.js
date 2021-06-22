function Gallery(gallery) {
  if (!gallery) throw new Error('No Gallery Found!');

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentElement;

  function openModal() {
    console.log('test');
    if (modal.matches('.open')) {
      console.info('modal already open');
      return;
    }
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
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

  // event listener
  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );
  modal.addEventListener(
    'click',
    (e) => e.target === e.currentTarget && closeModal()
  );
  window.addEventListener('keyup', (e) => e.key === 'Escape' && closeModal());
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
