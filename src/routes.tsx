import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
//import Restaurantes from './pages/Restaurantes'
//import { Links } from './components/Header/styles'

//import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
//import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Home
          pasta={{
            id: 0,
            name: '',
            description: '',
            release_date: undefined,
            prices: {
              discount: undefined,
              old: undefined,
              current: undefined
            },
            details: {
              category: '',
              system: '',
              developer: '',
              publisher: '',
              languages: []
            },
            media: {
              thumbnail: '',
              cover: '',
              gallery: []
            }
          }}
        />
      }
    />
    <Route
      path="/categories"
      element={
        <Categories
          pasta={{
            id: 0,
            name: '',
            description: '',
            release_date: undefined,
            prices: {
              discount: undefined,
              old: undefined,
              current: undefined
            },
            details: {
              category: '',
              system: '',
              developer: '',
              publisher: '',
              languages: []
            },
            media: {
              thumbnail: '',
              cover: '',
              gallery: []
            }
          }}
        />
      }
    />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas

/*
<Route path="/product/:id" element={<Product />} />
<Route path="/restaurantes" element={<Restaurantes />} />
*/
