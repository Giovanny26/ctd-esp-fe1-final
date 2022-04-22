import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { searchCharacterThunk } from "../Redux/acciones/personajes.acciones";
import { FC, useEffect, useState } from "react"
import { useSelector } from "../Redux/store/store";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {

    const { characters, search } = useSelector((state) => state.characters);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const cleanFilter = async () => {
        setPage(1);
        dispatch(searchCharacterThunk("")) 
    }
    const handleSearch = async (search: string) =>{
        dispatch(searchCharacterThunk(search))
    }
    useEffect(() => {
        dispatch(searchCharacterThunk(search, page));
      }, [dispatch, page]);
    
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={() => cleanFilter()}>Limpiar Filtros</button> 
        </div>
        <Filtros sendSearch={search} handleSearch={handleSearch}/>
        <Paginacion actualPage={page} setActualPage={setPage} characters={characters}/>
        <GrillaPersonajes/> 
        <Paginacion actualPage={page} setActualPage={setPage} characters={characters}/>
    </div>
}

export default PaginaInicio