console.log("js connected"); 

const image = document.getElementById("pokemonImage"); //acces them 
const name = document.getElementById("pokemonName");
const type = document.getElementById("pokemonType");
const weight = document.getElementById("pokemonWeight");
const height = document.getElementById("pokemonHeight");
const input= document.getElementById("pokemonInput");
const form = document.getElementById("pokemonForm");



form.addEventListener("submit",async  function(event){
    event.preventDefault();
    const pokemonName = input.value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName }`);

    const data = await response.json(); // taking input from server
    name.textContent=(data.name);
    height.textContent = `Height: ${data.height}`;
    weight.textContent = `Weight: ${data.weight}`;
    type.textContent = `type: ${data.types[0].type.name}`;
    image.src =
data.sprites.other["official-artwork"].front_default;
});




name.textContent = "Pikachu";

height.textContent = "Height: 4";
type.textContent = "type: electric";
image.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";