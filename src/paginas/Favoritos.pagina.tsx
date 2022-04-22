import { useSelector } from "react-redux"
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente"
import { useDispatch } from "react-redux"
import { deleteAllFavorites } from "../Redux/acciones/personajes.acciones";
import { FC } from "react"
import Character from "../Redux/types/personajes.types"
import { IRootState } from "../Redux/store/store"
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */

interface FavoritePageProps {
  character: Character;
  favorite: boolean
}

const PaginaFavoritos: FC<FavoritePageProps> = ({ character, favorite }: FavoritePageProps) => {

  const dispatch = useDispatch();
  const { favorites } = useSelector<IRootState, any>(state => state.characters);
  const deleteFavorites = () => {
    dispatch(deleteAllFavorites())
  }

  if (favorites.length === 0)
    return (<div style={{ color: "black", textAlign: "center", marginTop: "50px" }}>No tienes favoritos aún</div>)
 
  return <div className="container">
    <div className="actions">
      <h3>Personajes Favoritos</h3>
      <button className="danger" onClick={() => deleteFavorites()}>Eliminar Favoritos</button>
    </div>
    <div className="grilla-personajes">
      {favorites.map((character: Character, index: number) => {
        return <TarjetaPersonaje key={index} character={character} favorite={true} />;
      })}
    </div>
  </div>
}

export default PaginaFavoritos;