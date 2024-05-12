import { PokemonsResponse,SinglePokemon, PokemonGrid } from "@/app/pokemons";


const getAllPokemons = async (
  limit = 20,
  offset = 0
): Promise<SinglePokemon[]> => {
  const response: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pokemons = response.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons(151);

  return (
    <div className="flex flex-col">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
