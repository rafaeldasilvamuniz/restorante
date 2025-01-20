import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Massa from '../../models/Massa'
import Button from '../../components/Button'
//import pizza from '../../assets/images/pizza.png'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import React from 'react'
import cart from '../../store/reducers/cart'
import Product from '../Product'
import japones from '../../assets/images/japones.png'
import italiano from '../../assets/images/italiano.png'

type Props = {
  pasta: Pasta
}

const Restaurant = ({ pasta }: Props) => {
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

  const gastronomias: Massa[] = [
    {
      id: 1,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa!Sushis frescos,sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
      title: 'Hioki Sushi',
      infos: ['Destaque da semana', 'Japonesa'],
      image: japones,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    },
    {
      id: 2,
      description:
        'A La Dolce Vita Tratttoria leva a autêntica cozinha italiana até você!Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápido, pratos bem embalados e sabor inesquecível.Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: italiano,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    },
    {
      id: 3,
      description:
        'A La Dolce Vita Tratttoria leva a autêntica cozinha italiana até você!Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápido, pratos bem embalados e sabor inesquecível.Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: italiano,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    },
    {
      id: 4,
      description:
        'A La Dolce Vita Tratttoria leva a autêntica cozinha italiana até você!Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápido, pratos bem embalados e sabor inesquecível.Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: italiano,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    },
    {
      id: 5,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa!Sushis frescos,sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
      title: 'Hioki Sushi',
      infos: ['Destaque da semana', 'Japonesa'],
      image: japones,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    },
    {
      id: 6,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa!Sushis frescos,sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery',
      title: 'Hioki Sushi',
      infos: ['Destaque da semana', 'Japonesa'],
      image: japones,
      button: (
        <Button
          type="button"
          title="Clique para mais informações"
          //variant="primary"
          //onClick={addToCart}
        >
          Saiba mais
        </Button>
      )
    }
  ]

  return (
    <>
      <Banner />
      <ProductsList
        massas={gastronomias}
        title="Gastronomias"
        background="white"
      />
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

export default Restaurant
