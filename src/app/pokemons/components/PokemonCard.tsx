import Link from "next/link";
import Image from "next/image";
import { SinglePokemon } from "../interfaces/single-pokemon";
import { HiOutlineHeart } from "react-icons/hi2";

interface Props {
    pokemon: SinglePokemon
}

export default function PokemonCard( { pokemon }: Props) {
    const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">

          <Image 
              key={ pokemon.id }
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
              width={100}
              height={100}
              alt={ pokemon.name }
              priority={ false }
            />


          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${ id }`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">

              <div className="text-red-600">
              <HiOutlineHeart />

              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Set as favorite
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
          </Link>
          
        </div>

      </div>
    </div>

    
  );
}