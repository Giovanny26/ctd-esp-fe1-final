import './boton-favorito.css';
import { FC } from "react";

type BotonFavoritoProps = {
  isFavorite: Boolean;
  onClick(): void;
};

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * @author Giovanny Castillo 
 * @param {boolean} isFavorite
 * @param {function} onClick
 * 
 * @returns {JSX.Element}
 */
const BotonFavorito: FC<BotonFavoritoProps> = ({ isFavorite, onClick }: BotonFavoritoProps) => {

  const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return <div className="boton-favorito">
    <img onClick={onClick} src={src} alt={"favorito"} />
  </div>
}

export default BotonFavorito;