import { SinglePokemon } from '../interfaces/single-pokemon';
import PokemonCard from './PokemonCard';

interface Porps {
    pokemons: SinglePokemon[];
}

export const PokemonGrid = ({ pokemons }: Porps) => {
    return(
        <div className="flex flex-wrap items-center justify-center ">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
}