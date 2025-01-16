import { Link, NavLink, useNavigate } from 'react-router-dom'
//import { HashLink } from 'react-router-hash-link'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'
import { close, open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/'
//import { useState } from 'react'
import { Imagem, Links } from './styles'
//import { Imagem } from './styles'
//import restaurantes from '../../pages/Restaurantes'
import React, { useState } from 'react'
import Button from '../Button'

const Header = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('/restaurantes')
    closeCart()
  }

  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <Imagem>
            <img src={logo} alt="EFOOD" />
          </Imagem>
        </Link>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          //className="navbar-item"
          //activeClassName="is-active"
          to="/restaurantes"
          //exact
        >
          Restaurantes
        </NavLink>
      </div>
      <S.CartButton role="button" onClick={openCart}>
        <a>
          {items.length} - produto(s) no carrinho
          <img src={carrinho} alt="Carrinho" />
        </a>
      </S.CartButton>
    </S.HeaderBar>
  )
}
export default Header

/*
 <S.HeaderBar>
    <div>
      <Link to="/">
        <Imagem>
          <img src={logo} alt="EFOOD" />
        </Imagem>
      </Link>
      <nav>
        <Links>
          <S.LinkItem>
            <Link to="/Restaurantes">Restaurantes</Link>
          </S.LinkItem>
        </Links>
      </nav>
    </div>
    <S.CartButton role="button" onClick={openCart}>
        {items.length} - produto(s) no carrinho
        <img src={carrinho} alt="Carrinho" />
      </S.CartButton>
  </S.HeaderBar>
   <Links>
            <Link to="/Restaurantes">Restaurantes</Link>
          </Links>
          <Link to="/Restaurantes">Restaurantes</Link>

           <nav>
          <Link to="/restaurantes">
            <a>Restaurantes</a>
          </Link>
        </nav>

         <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar-item active' : 'navbar-item'
          }
          //className="navbar-item"
          //activeClassName="is-active"
          to="/restaurantes"
          //exact
        >
          Restaurantes
        </NavLink>
*/
