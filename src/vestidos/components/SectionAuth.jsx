import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


export const SectionAuth = () => {

  const navigate = useNavigate();
  const {user, logueado} = useContext(UserContext); 


  //me redireccionara al login
  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }



  return (
    <div className="contain-auth">

        <ul className="data-user">
            <div className="iconContain">
                <p className="iconInitial">{user ? user : ''}</p>   
            
            </div>


            { logueado ? (
                    <img className="img-car" src="./public/icons/iconoCar.png" alt="imagen carrito" /> 
            ) :
              
              (
                <>
                  <button type="button" className="button-user" onClick={onLogout}>
                    Login
                  </button>    

                          
                </>

              ) 
            }       


        </ul>
    </div>

  )
}

