import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';


const user = JSON.parse(localStorage.getItem('user'))
console.log(user);
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={user? <Navigate to={"/"} />:<Auth />} />
        <Route element={<Layout />}  >
          <Route path='/' element={user ? <Home /> : <Navigate to={"/auth"} />}/>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
