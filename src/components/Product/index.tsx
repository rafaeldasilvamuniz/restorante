import Tag from '../Tag'
import Button from '../Button'

import { Card, Descricao, Titulo, Infos, TextoButtonMassa } from './styles'
import { JsxElement } from 'typescript'
//import Button from '../Button'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: JSX.Element
}

const Product = ({ title, description, infos, image, button }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <TextoButtonMassa>{button}</TextoButtonMassa>
  </Card>
)

export default Product

/*
<div>
      <TextoButtonMassa>{buton}</TextoButtonMassa>
    </div>
    */
