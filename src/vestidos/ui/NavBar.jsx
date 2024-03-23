import { Link, NavLink, useLocation } from "react-router-dom";
import { NavBarMobile, SectionAuth } from "../components";
import { useState } from "react";


export const NavBar = () => {

    const location = useLocation();
    const [active, setActive] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const activateMenu = () => {

        setActive(true);
    }

    const changeBackground = () => {
        if(window.scrollY >= 150){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }   
    }

    window.addEventListener('scroll', changeBackground);

    

    return (
        <nav  className={`navegation-global ${location.pathname != '/inicio'  ? 'not-home' : navBar ? 'active' : ''}`}>

            <div className="contain navegation">
            <Link 
                to="/"
            >   
                <p className="logo">
                    Novias y Eventos J E S
                </p>
               
            </Link>

            <div className="icon-menu">
                <img
                    src='/icons/icons8-menu.svg'
                    alt="icono de menu" 
                    onClick={activateMenu}
                    
                    />
            </div>

            <NavBarMobile
                active={active}
                setActive={setActive}
            />

            <div className="global-navBar-contain">
                <div className="contain-links-global">
                    
                    <div className="contain-links">
                        <NavLink
                            to="/novias"
                            className={({isActive}) => isActive ? 'active' : ''}
                        >
                            Novias
                        </NavLink>

                        <NavLink
                            to="/quince"
                            className={({isActive}) => isActive ? 'active' : ''}
                        >
                            Quinceañeras
                        </NavLink>

                        <NavLink
                            to="/search"
                            className={({isActive}) => isActive ? 'active' : ''}
                        >
                            Buscador
                        </NavLink>
                    </div>
                    
                    <SectionAuth />


                </div>

            </div>










            </div>
            
        </nav>
  )
}


