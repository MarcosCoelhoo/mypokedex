export default async function buildInfoPokemon(id, infoContainer) {
  const json = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  ).json();

  const { abilities, height, name, weight } = json;
  const images = json.sprites.other["official-artwork"];

  const heightFormated = (height / 10).toFixed(1),
    weightFormated = (weight / 10).toFixed(1);

  const nameText = document.querySelector('[data-pokemon="name"]'),
    imageDefault = document.querySelector('[data-image="default"]'),
    imageLanding = document.querySelector('[data-image="landing"]'),
    imageShiny = document.querySelector('[data-image="shiny"]'),
    abilitiesList = document.querySelector('[data-pokemon="abilities"]'),
    weightText = document.querySelector('[data-pokemon="weight"]'),
    heightText = document.querySelector('[data-pokemon="height"]');

  if (abilitiesList.children.length) {
    const arrayChildren = Array.from(abilitiesList.children);

    arrayChildren.forEach((children) => {
      abilitiesList.removeChild(children);
    });
  }

  abilities.forEach((ability) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>${ability.ability.name}</p>
    `;

    abilitiesList.appendChild(li);
  });

  imageLanding.src = images["front_default"];
  nameText.innerText = name;
  imageDefault.src = images["front_default"];
  imageShiny.src = images["front_shiny"];
  weightText.innerText = `${weightFormated} Kg`;
  heightText.innerText = `${heightFormated} M`;
  console.log(heightText);
}
