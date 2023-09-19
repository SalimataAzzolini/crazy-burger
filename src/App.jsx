import { Routes, Route}  from 'react-router-dom';

import LoginPage from './pages/login/LoginPage'
import OrderPage from './pages/order/OrderPage'
import ErrorPage from './pages/error/ErrorPage'

function App() {

  return (
  
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='*' element={<ErrorPage/> } />
      </Routes>
  )
}

export default App
