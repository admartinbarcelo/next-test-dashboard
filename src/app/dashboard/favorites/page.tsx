import { PokemonGrid } from "@/pokemons";


export const metadata = {
    title: "Favorites",
    description: "Your favorite pokemons",
    };




export default async function FavoritesPage() {


  return (
    <div className="flex flex-col">
      <PokemonGrid pokemons={ [] } />
    </div>
  );
}