import { useRoutes,BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from './context'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/LoginSection'
import Registro from './pages/RegisterSection'
import Index from './pages/Index'
import Products from './pages/Products'
import Cart from './pages/CartPage'

const AppRoutes =()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/Login', element: <Login/>},
    { path: '/Register', element: <Registro/>},
    { path: '/Index', element: <Index/>},
    { path: '/Products', element: <Products/>},
    { path: '/Cart', element: <Cart/>},
  ])
  return routes
}



function App() {
  return (
   
    <ShoppingCartProvider>
         <BrowserRouter>
      <AppRoutes/>
     </BrowserRouter>
    </ShoppingCartProvider>
    
  
  )
}

export default App