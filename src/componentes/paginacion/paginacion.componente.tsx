import './paginacion.css';
import { FC } from 'react';
import Character from '../../Redux/types/personajes.types';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * @author Giovanny Castillo 
 * @param {number} actualPage
 * @param {any} setActualPage
 * @param {Character} characters
 * 
 * @returns {JSX.Element}
 */
const Paginacion: FC<{ actualPage: number, setActualPage: any, characters: Character[] }> = ({ actualPage, setActualPage, characters }) => {

    const totalPages = ([characters].length)

    return <div className="paginacion">
        <button disabled={actualPage === 1 ? true : false} className={"primary"} onClick={() => setActualPage(actualPage - 1)}>Anterior</button>
        <button disabled={totalPages < 1 ? true : false} className={"primary"} onClick={() => setActualPage(actualPage + 1)}>Siguiente</button>
    </div>
}

export default Paginacion;