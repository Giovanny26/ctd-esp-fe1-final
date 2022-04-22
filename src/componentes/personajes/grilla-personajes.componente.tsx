import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { FC } from "react"
import { useSelector } from 'react-redux';
import Character from "../../Redux/types/personajes.types";
import { IRootState } from "../../Redux/store/store"

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @author Giovanny Castillo
 * 
 * @returns {JSX.Element}
 */
const GrillaPersonajes: FC = () => {

  const { characters, status, favorites } = useSelector<IRootState, any>(
    (state: IRootState) => state.characters);

  if (status === "LOADING") return <div>Cargando...</div>;
  if (status === "ERROR") return <div>No se pudo cargar la informacion.</div>;
  if (!characters || characters.length === 0) return <div>No se encontro ningun personaje</div>;

  return (
    <div className="grilla-personajes">
      {characters.map((character: Character, index: number) => {
        const isFavorited = () => favorites.some((p: { id: number; }) => p.id === character.id)
        return <TarjetaPersonaje key={index} character={character} favorite={isFavorited()} />
      })}
    </div>
  );
};


export default GrillaPersonajes;
