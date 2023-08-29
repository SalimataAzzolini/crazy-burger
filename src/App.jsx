import { Routes, Route, BrowserRouter }  from 'react-router-dom';

import LoginPage from './pages/login/LoginPage'
import OrderPage from './pages/order/OrderPage'
import ErrorPage from './pages/error/ErrorPage';

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route index element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/order-page' element={<OrderPage />} />
        <Route path='*' element={<ErrorPage/> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App
