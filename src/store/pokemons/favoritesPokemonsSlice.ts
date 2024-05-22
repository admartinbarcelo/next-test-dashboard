import { SinglePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

interface FavoritesPokemonsState {
    [key: string]: SinglePokemon
}

const initialState: FavoritesPokemonsState = {
    '1': {id: '1', name: 'bulbasaur'}

}

const favoritesPokemonsSlice = createSlice({
  name: 'favoritesPokemons',
  initialState,
  reducers: {}
});

export const {} = favoritesPokemonsSlice.actions

export default favoritesPokemonsSlice.reducer