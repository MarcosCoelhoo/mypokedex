export default function initHandleImages() {
  const imageList = document.querySelectorAll('[data-image="list"] .image'),
    imageLanding = document.querySelector('[data-image="landing"]');

  const imageArray = Array.from(imageList);

  imageArray.forEach((item) => {
    item.classList.remove("active");
  });

  imageArray[0].classList.add("active");
  console.log(imageArray);

  function handleImage({ target }) {
    imageArray.forEach((item) => {
      item.classList.remove("active");
    });

    const image = target.querySelector("img");

    target.classList.add("active");

    imageLanding.src = image.src;

    console.log(target);
  }

  imageArray.forEach((item) => {
    item.addEventListener("click", handleImage);
  });
}
