import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route, BrowserRouter } from 'react-router-dom' 


function App() {
  return (
    <BrowserRouter basename='/PreEntrega2REACT-LagoAgustin'>
    <Navbar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />

        {/* productos por categoria */}
        <Route exact path='/Category/:categoryId' element={<ItemListContainer />} />

        {/* busqueda por url: /item/... */}
        <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
        
        <Route path='*' element={<NotFound />} />
      
      </Routes>

    </BrowserRouter>
  )
}

export default App