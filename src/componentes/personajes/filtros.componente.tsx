import "./filtros.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { searchCharacterThunk } from "../../Redux/acciones/personajes.acciones";
import { useSelector } from "../../Redux/store/store";

/**
 * Filtro necesario para el funcionamiento de la API
 *
 * @author Giovanny Castillo
 * @param {string} sendSearch
 * @param {function} handleSearch
 * 
 * @returns {JSX.Element}
 */
interface FiltrosProps{
  sendSearch: string, 
  handleSearch:(search: string) =>{}
}

const Filtros: FC<FiltrosProps> = ({sendSearch}: FiltrosProps) => {

  const Search = useSelector(state => state.characters['search'])
  const dispatch = useDispatch();
  const onChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    dispatch(searchCharacterThunk(value))
  }
  sendSearch = Search

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={onChange}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={Search}
      />
    </div>
  );
};

export default Filtros;




