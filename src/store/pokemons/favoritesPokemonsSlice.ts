import { SinglePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FavoritesPokemonsState {
  [key: string]: SinglePokemon
}

const initialState: FavoritesPokemonsState = {
  '1': { id: '1', name: 'bulbasaur' }

}

const favoritesPokemonsSlice = createSlice({
  name: 'favoritesPokemons',
  initialState,
  reducers: {

    toggleFavorites(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    }

  }
});

export const { toggleFavorites } = favoritesPokemonsSlice.actions

export default favoritesPokemonsSlice.reducer