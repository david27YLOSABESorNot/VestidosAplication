import { NavLink } from "react-router-dom"
import { SectionAuth } from "./SectionAuth"


export const NavBarMobile = ({active, setActive}) => {

  
  return (

    <div className={`contain-mobile  ${active ? 'show' : 'hidden' }`}>

      <img 
        className={`iconClose`}
        src="./public/icons/closeIcon.png" 
        alt="icono cerrar" 
        onClick={() => setActive(false)}
      />

      <SectionAuth/> 

      <div className="contain-links-mobile">
        <NavLink
          to="/novias"
        >
          Novias
        </NavLink>

        <NavLink
         to="/quince"
        >
          Quinceañeras
        </NavLink>

        <NavLink
          to="/search"
        >
          Buscador
        </NavLink>
      </div>
                
     
    </div>

    
  )
}


