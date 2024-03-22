import { Link } from "react-router-dom";
import { currencyFormatter } from "../helpers";


export const TargetDress = ({id, name, designer, price, type, description}) => {

    
    //Se cren las rutas para las imagenes
    const urlImage = `/public/imagesProducts/${id}.webp`;
    const priceFormat = currencyFormatter({currency: 'MXN'}, price);



    return (
        <div className="target-dress-contain animate__animated animate__fadeIn ">
            <img src={urlImage} alt={name} />

            <div className="contain-info-target">
                <h3 className="title-target-dress">{name}</h3> 
                <p className="name-designer">Diseñado por: <span>{designer}</span></p>
                <p className="price">Precio: <span>{priceFormat}</span></p>

                <Link to={`/dress/${id}`} >
                    Ver mas
                </Link>
            </div>
        </div>
    )
}

