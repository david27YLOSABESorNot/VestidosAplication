import { useNavigate } from "react-router-dom"
import { useForm } from "../../vestidos/hooks/useForm";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


export const LoginPages = () => {


  const {formState, onInputChange,alertEmail, alertEmpty, validateForm, nombre, apellidos, email, password} = useForm({

    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  })

  const {setUser, setLogueado} = useContext(UserContext); 



  



  return (
   <div className="loginContain">

      <h1 className="login-title">Novias y Eventos J E S</h1>

      <div className="loginContainAdjust">
        
        <form action="" className="formularioLogin">
          {alertEmpty && <p className="alerts">Los Campos No Pueden Estar Vacios</p> }
          {alertEmail && <p className="alerts">El Email No Es Valido</p>}
          <div className="containInputs">
            <label htmlFor="nombre">Nombre:</label>
            <input 
              id="nombre"
              name="nombre" 
              type="text"
              value={nombre}
              onChange={e => onInputChange(e)}
              placeholder="Rogelio" 
        
            />
          </div>

          <div className="containInputs">
            <label htmlFor="apellidos">Apellidos:</label>
            <input 
              id="apellidos" 
              type="text"  
              name='apellidos'
              value={apellidos}
              onChange={e => onInputChange(e)}
              placeholder="Andrade Sepulveda" 
              />
          </div>

          <div className="containInputs">
            <label htmlFor="email">Email:</label>
            <input 
              id="email" 
              type="email"
              name='email'
              value={email}
              onChange={e => onInputChange(e)}
              placeholder="alguien@example.com" 
              />
          </div>

          <div className="containInputs">
            <label htmlFor="password">Password:</label>
            <input 
              id="password"
              type="password" 
              name='password'
              onChange={e => onInputChange(e)}
              value={password}
              />
          </div>

          <button onClick={(e) => validateForm(e, setUser, setLogueado)}  className="buttonRegistred" type="submit">Registrarse</button>
          
        </form>
      </div>


   </div>
  )
}

