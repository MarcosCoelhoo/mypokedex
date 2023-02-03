import buildInfoPokemon from "./build-info-pokemon.js";
import initHandleImages from "./handle-image.js";

export default function showInfoPokemon(liPokemon) {
  const infoContainer = document.querySelector(".info-pokemon"),
    mainContainer = document.querySelector(".container");

  liPokemon.addEventListener("click", ({ target }) => {
    const id = target.dataset.id;
    console.log(window.pageYOffset);
    localStorage.setItem("scrollPos", window.pageYOffset);

    buildInfoPokemon(id, infoContainer);
    initHandleImages();

    mainContainer.classList.remove("active");
    infoContainer.classList.add("active");
  });

  const buttonClose = document.querySelector(".pokemon-header .close");

  buttonClose.addEventListener("click", () => {
    const scrollPos = localStorage.getItem("scrollPos");
    window.scrollTo(0, scrollPos);
    mainContainer.classList.add("active");
    infoContainer.classList.remove("active");
  });
}
