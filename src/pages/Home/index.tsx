import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Massa from '../../models/Massa'
import Button from '../../components/Button'
import pizza from '../../assets/images/pizza.png'
import { add, open } from '../../store/reducers/cart'
//import { useDispatch } from 'react-redux'
import React from 'react'
import cart from '../../store/reducers/cart'
import Product from '../Product'
//import * as S from './styles'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

//import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'

type Props = {
  pasta: Pasta
}

const Home = ({ pasta }: Props) => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  //const [installments, setInstallments] = useState<Installment[]>([])
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(pasta))
    dispatch(open())
  }
  //const dispatch = useDispatch();
  /*const addToCart = ({ pasta }: Props) => {
  //const addToCart = (pasta:Pasta) => {
  const dispatch = useDispatch()

    dispatch(add(pasta))
    dispatch(open())
}*/
  /*const ListProducts: React.FC = () =>{
  const{state, dispatch}= cart();
}*/

  /*const addToCart = () => {
  const addCart = ({ pasta }: Props) => {
    const dispatch = useDispatch()
    dispatch(add(pasta))
    dispatch(open())
  }
}*/

  /*const addToCart = () => {
  const addCart = ({ game }: Props) => {
    const dispatch = useDispatch()

    dispatch(add(game))
    dispatch(open())
  }
}*/

  /*<S.TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
            type="button"
            title="Clique aqui para finalizar o pedido"
          >
            <img src={creditCard} alt="Cartão de crédito" />
            {isLoading ? 'Finalizando o pedido...' : 'Finalizar o pedido'}
          </S.TabButton>

          <Button
          type="button"
          title="Clique para adicionar a pizza"
          //variant="primary"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </Button>
*/

  const promocoes: Massa[] = [
    {
      id: 1,
      description:
        'A clássica Real com Espinafre: Espinafre com mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Real com Espinafre',
      infos: ['10%', 'R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 2,
      description:
        'A clássica Real com Espinafre: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Bauru com tomate',
      infos: ['5%', 'R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 3,
      description:
        'A clássica Azeitona Mista: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Azeitona Mista',
      infos: ['10%', 'R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 4,
      description:
        'A clássica Aipim com tomate seco: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Aipim com Tomate Seco',
      infos: ['10%', 'R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    }
  ]

  const emBreve: Massa[] = [
    {
      id: 5,
      description:
        'A clássica Frango com Catupiry: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Frango com Catupiry',
      infos: ['R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 6,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Marguerita',
      infos: ['R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 7,
      description:
        'A clássica Pizza de Aipim com salada: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Aipim com Salada',
      infos: ['R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    },
    {
      id: 8,
      description:
        'A clássica Dez Queijos: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Dez Queijos',
      infos: ['R$ 50,00'],
      image: pizza,
      button: (
        <S.TabButton
          isActive={payWithCard}
          //onClick={() => setPayWithCard(true)}
          type="button"
          title="Clique para adicionar a pizza"
          onClick={addToCart}
        >
          <img src={creditCard} alt="Cartão de crédito" />
          {isLoading ? 'Adicionando ao carrinho...' : 'Adicionar ao carrinho'}
        </S.TabButton>
      )
    }
  ]

  return (
    <>
      <Banner />
      <ProductsList massas={promocoes} title="Promoções" background="white" />
      <ProductsList massas={emBreve} title="Tradicionais" background="white" />
    </>
  )
}

/*const Home = () => (
  <>
    <Banner />
    <ProductsList massas={promocoes} title="Promoções" background="white" />
    <ProductsList massas={emBreve} title="Tradicionais" background="white" />
  </>
)*/

export default Home

/*
 button: (
        <Button
          type="button"
          title="Clique para adicionar a pizza"
          //variant="primary"
          onClick={addToCart}
        >
          Adicionar ao carrinho
        </Button>
      )
      */
