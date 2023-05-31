import { useRoutes,BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/LoginSection'
import Registro from './pages/RegisterSection'


const AppRoutes =()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/Login', element: <Login/>},
    { path: '/Register', element: <Registro/>},
  ])
  return routes
}



function App() {
  return (
    <>
     <BrowserRouter>
      <AppRoutes/>
     </BrowserRouter>
    </>
  )
}

export default App