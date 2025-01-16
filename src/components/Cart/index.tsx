import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import cart, { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import pizza from '../../assets/images/pizza.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  // type Props = {
  // pasta: Pasta
  //}

  //const Home = ({ pasta }: Props) => {

  const valor = 50
  const result = items.length * valor

  const getTotalQtd = (items: Pasta[]) => {
    return items.length > 0 ? items.length * valor : 0
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={pizza} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(valor)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} pizza(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalQtd(items))}
              <span>Em até 4x sem juros</span>
            </S.Prices>
            <Link to="/">
              <Button
                //onClick={goToCheckout}
                title="Clique para ver o produto"
                type="button"
              >
                Continuar a compra
              </Button>
            </Link>
            <Button
              onClick={goToCheckout}
              title="Clique para finalizar"
              type="button"
            >
              Finalizar a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

/*
<img src={item.media.thumbnail} alt={item.name} />
<span>{parseToBrl(item.prices.current)}</span>
Total de {parseToBrl(getTotalPrice(items))}{' '}
<S.Quantity>{items.length} pizza(s) no carrinho</S.Quantity>
*/
