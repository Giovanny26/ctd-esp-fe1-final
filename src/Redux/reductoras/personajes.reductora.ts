import { CharacterAction } from "../acciones/personajes.acciones";
import Character from "../types/personajes.types";

export interface CharacterState {
  search: string;
  character: Character[] | [];
  favorites: Character[] | [];
  status: "LOADING" | "SUCCESS" | "ERROR";
  error: string | null;
}

const initialState: CharacterState = {
  search: "",
  character: [],
  favorites: [],
  status: "SUCCESS",
  error: null,
};


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Giovanny Castillo 
 * @param {CharacterState} state
 * @param {CharacterAction} action
 * 
 * @returns {CharacterState} state
 */
const characterReducer = (
  state: CharacterState = initialState,
  action: CharacterAction
) => {
  switch (action.type) {
    case "BUSCAR_PERSONAJES":
      return {
        ...state,
        search: action.payload.name,
        status: "LOADING",
        error: null,
      };
    case "BUSCAR_PERSONAJES_SUCCESS":
      return {
        ...state,
        characters: action.payload.characters,
        status: "SUCCESS",
      };
    case "BUSCAR_PERSONAJES_ERROR":
      return {
        ...state,
        characters: [],
        status: "ERROR",
        error: action.payload.error,
      };
    case "AGREGAR_FAVORITO":
      return {
        ...state,
        favorites: [...state.favorites.filter(character => character.id !== action.payload.character.id),
        action.payload.character]
      }
    case "ELIMINAR_FAVORITO":
      return {
        ...state,
        favorites: [...state.favorites.filter(character => character.id !== action.payload.character.id)]
      }
    case "ELIMINAR_TODOS_FAVORITOS":
      return {
        ...state,
        favorites: []
      }
    default:
      return state;
  }
};
export default characterReducer;