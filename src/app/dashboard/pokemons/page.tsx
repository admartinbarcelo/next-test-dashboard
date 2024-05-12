import { PokemonsResponse } from "@/app/pokemons";
import { SinglePokemon } from "../../pokemons/interfaces/single-pokemon";
import Image from "next/image";

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
      <div className="flex flex-wrap items-center justify-center ">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex flex-col items-center justify-center w-1/5 p-4"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
              className="w-1/2"
            />
            <span className="text-xl">{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
