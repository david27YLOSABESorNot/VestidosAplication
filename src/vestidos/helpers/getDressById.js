import { dresses } from "../../data/vestidos";



export const getDressById =  (id) => {



    return dresses.find(dress => dress.id === id);
    

}