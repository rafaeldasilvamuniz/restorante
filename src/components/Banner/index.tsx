import { Imagem } from './styles'

import bannerImg from '../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}></Imagem>
)

export default Banner
