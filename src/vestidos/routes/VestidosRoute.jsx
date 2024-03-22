import { Navigate, Route, Routes } from 'react-router-dom'
import { Dress, Home, Novias, Quinces, Search } from '../pages'
import { Footer, NavBar } from '../ui'
import { UserProvider } from '../../context/UserProvider'

export const VestidosRoute = () => {


  return (
    <>

      {/*Aqui iran las rutas que se ocuparan*/}
      <NavBar/>
      <div className='container'>
        <Routes>
            <Route path='inicio' element={<Home/>}/>
            <Route path='quince' element={<Quinces/>}/>
            <Route path='novias' element={<Novias/>}/>
            <Route path='search' element={<Search/>}/>

            {/**Nos llevara a cada vestido que haya sido seleccionado */}
            <Route path='dress/:id' element={<Dress/>}/>

            <Route path='/' element={<Navigate to='/inicio'/>}/>
            
        </Routes>
      </div>

      <Footer/>


    </>
  )
}
