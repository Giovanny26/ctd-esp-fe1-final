import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { searchCharacterService } from "../../servicios/personajes.service";
import { IRootState } from "../store/store";
import Character from "../types/personajes.types";

export interface SearchCharacterAction extends Action {
  type: "BUSCAR_PERSONAJES";
  payload: {
    name: string;
  };
}
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Giovanny Castillo 
 * @param {string} name
 * 
 * @returns {Character}
 */
export const searchCharacter: ActionCreator<SearchCharacterAction> = (
  name: string
) => {
  return {
    type: "BUSCAR_PERSONAJES",
    payload: {
      name: name
    },
  };
};


export interface SearchCharactersSuccessAction extends Action {
  type: "BUSCAR_PERSONAJES_SUCCESS";
  payload: {
    characters: Character[];
  };
}
export const searchCharactersSuccess: ActionCreator<SearchCharactersSuccessAction> = (
  characters: Character[]
) => {
  return {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    payload: {
      characters: characters,
    },
  };
};


export interface SearchCharactersErrorAction extends Action {
  type: "BUSCAR_PERSONAJES_ERROR";
  payload: {
    error: string;
  };
}
export const searchCharacterError: ActionCreator<SearchCharactersErrorAction> = (
  error: string
) => {
  return {
    type: "BUSCAR_PERSONAJES_ERROR",
    payload: {
      error: error,
    },
  };
};


export interface AddCharacterAction extends Action {
  type: "AGREGAR_FAVORITO";
  payload: { character: Character };
}
export const addFavorite: ActionCreator<AddCharacterAction> = (
  character: Character
): AddCharacterAction => {
  return {
    type: "AGREGAR_FAVORITO",
    payload: {
      character
    },
  };
};


export interface DeleteFavoriteAction extends Action {
  type: "ELIMINAR_FAVORITO";
  payload: { character: Character };
}
export const deleteFavorite: ActionCreator<DeleteFavoriteAction> = (
  character: Character
): DeleteFavoriteAction => {
  return {
    type: "ELIMINAR_FAVORITO",
    payload: {
      character,
    },
  };
};


export interface DeleteAllFavoritesAction extends Action {
  type: "ELIMINAR_TODOS_FAVORITOS";
  payload: { character: Character };
}
export const deleteAllFavorites: ActionCreator<DeleteAllFavoritesAction> = (
  character: Character
): DeleteAllFavoritesAction => {
  return {
    type: "ELIMINAR_TODOS_FAVORITOS",
    payload: {
      character
    },
  };
};

export type CharacterAction =
    ReturnType<typeof searchCharacter>
  | ReturnType<typeof searchCharactersSuccess>
  | ReturnType<typeof searchCharacterError>
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof deleteFavorite>
  | ReturnType<typeof deleteAllFavorites>


interface SearchCharacterThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterAction> { }

  export const searchCharacterThunk = (
    name: string,
    page?: number
  ): SearchCharacterThunkAction => {
    return async (dispatch) => {
        dispatch(searchCharacter(name));
        try {
          const respuesta = await searchCharacterService(name, page);
          dispatch(searchCharactersSuccess(respuesta));
        } catch (error) {
          dispatch(searchCharacterError(error));
        }
      }
    };