import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type ===('favoritesPokemonsSlice/toggleFavorites')) {
        const { pokemons } = store.getState();
        localStorage.setItem('favoritesPokemons', JSON.stringify(pokemons));
        return;
    }
}