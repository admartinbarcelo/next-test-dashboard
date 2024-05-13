import PokemonCard from './PokemonCard';
import { SinglePokemon } from '../interfaces/single-pokemon';

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