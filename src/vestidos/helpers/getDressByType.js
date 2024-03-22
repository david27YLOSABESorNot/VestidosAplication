import { dresses } from "../../data/vestidos";



export const getDressByType = (type) => {

    const types = ['novia', 'quince'];

    //evaluamos que sea un typo valido el que nos van a pasar por type
    if(!types.includes(type)){
        throw new Error(`El vestido con el tipo ${type} no fue encontrado`)
        
    }

    return dresses.filter(dress => dress.type === type);

}


