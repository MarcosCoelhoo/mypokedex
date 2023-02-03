import showInfoPokemon from "./show-info-pokemon.js";

export default function initGetPokemons() {
  async function getPokemons() {
    for (let i = 1; i <= 250; i++) {
      const json = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      ).json();

      const name = json.name,
        types = json.types,
        id = json.id,
        idFormated = json.id.toString().padStart(3, "0"),
        image = json.sprites.other["official-artwork"].front_default;

      const listParent = document.querySelector("[data-list]");

      const li = document.createElement("li");
      li.classList.add("pokemon");
      li.dataset.id = id;

      li.innerHTML = `
        <div class="image">
          <img src="${image}" alt="${name}" loading="lazy">
        </div>
        <div class="content">
          <p class="id">${idFormated}</p>
          <h2 class="name">${name}</h2>
          <ul class="type-list">

            </ul>
        </div>
        `;

      const typeList = li.querySelector(".type-list");

      types.forEach((type) => {
        const typeLi = document.createElement("li");
        typeLi.classList.add("type");
        typeLi.innerHTML = `
        <p>${type.type.name}</p>
          `;
        typeList.appendChild(typeLi);
      });

      listParent.appendChild(li);
      showInfoPokemon(li);
    }
  }

  getPokemons();
}
