import { dresses } from "../../data/vestidos";



export const getDressByName = (name = '') => {



    //Pasamos a misnucula lo que sea que nos mande
    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return dresses.filter( dress => dress.name.toLocaleLowerCase().includes(name));

}