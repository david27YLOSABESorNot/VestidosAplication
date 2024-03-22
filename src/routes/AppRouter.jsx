import { Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth/pages"
import { VestidosRoute } from "../vestidos/routes/VestidosRoute"
import { useState } from "react";
import { UserProvider } from "../context/UserProvider";


export const AppRouter = () => {


  return (
    <UserProvider>
        <Routes>
            <Route path="login" element={<LoginPages/>} />
            <Route path="/*" element={<VestidosRoute/>} />
        </Routes>
    
    </UserProvider>
  )
}

