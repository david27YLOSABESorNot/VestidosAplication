import { useParams } from "react-router-dom";
import { currencyFormatter, getDressById } from "../helpers"
import { useMemo } from "react";


export const Dress = () => {

    const {id} = useParams();

    const dress = useMemo(()=> getDressById(id), [id]);




    return (
        <div className="contain adjust-formats adjust-formats-dress">
            <div className="contain-single-dress animate__animated animate__fadeIn">
                <img src={`/public/imagesProducts/${dress.id}.webp`} alt={dress.name} />

                <div className="contain-info-dress">
                    <h1>{dress.name}</h1>
                    <p className="design-dress">Diseñado por: <span>{dress.designer}</span></p>
                    <p className="text-info">{dress.description}</p>
                    <p className="price-dress">Precio: <span>{currencyFormatter({currency: 'MXN'}, dress.price)}</span></p>
                    

                    <form action="" className="cuantity-form">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input className="input-cuantity" type="number" placeholder="1" />

                        <input type="button" className="add-car" value="Añadir" />
                    </form>
                </div>
            </div>
        </div>
    )
}

