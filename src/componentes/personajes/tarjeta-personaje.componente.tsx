import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import Character from "../../Redux/types/personajes.types"
import { FC, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { IRootState } from "../../Redux/store/store"
import { addFavorite, deleteFavorite } from "../../Redux/acciones/personajes.acciones"
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Giovanny Castillo 
 * @param {Character} character
 * @param {boolean} favorite
 * 
 * @returns {JSX.Element}
 */

interface CharacterCardProps {
  character: Character;
  favorite: boolean;

}
const TarjetaPersonaje: FC<CharacterCardProps> = ({ character, favorite }: CharacterCardProps) => {

  const { favorites } = useSelector<IRootState, any>(state => state.characters);

  const dispatch = useDispatch();
  useEffect(() => {
    favorites.includes(character);
  });

  const handleClick = (character: Character) => {
    if (favorites.includes(character)) {
      dispatch(deleteFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };
  
  return (
    <div className="tarjeta-personaje" key={"personaje_" + character.id}>
      <img src={character.image} alt={character.name} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito isFavorite={favorite} onClick={() => {
          handleClick(character);
        }} />
      </div>
    </div>
  )
}

export default TarjetaPersonaje;