import { useEffect, useState } from "react";
import {useMemo} from 'react';
import { TargetDress } from "./index";
import { getDressByType } from "../helpers";



export const DressesList =  ({type}) => {


    //Memorizamos las funciones para que no haya muchon render
    const dresses = useMemo(() => getDressByType(type), [type]);



   
   

    return (
        <div className="contain-targets">
            {
                dresses.length > 0 ? 
                    dresses.map(dress => (
                        <TargetDress
                            key={dress.id}
                            {...dress}
                        />
                    ))
                : null
            }
        </div>
    )
}


