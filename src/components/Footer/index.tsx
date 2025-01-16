import { Container, FooterSection, Texto, Divtxt } from './styles'
import { Imagem, ImgRedes } from './styles'
import logo from '../../assets/images/logo.png'
import redes from '../../assets/images/redes.png'

const Footer = () => (
  <Container>
    <Imagem>
      <img src={logo} alt="EFOOD" />
    </Imagem>
    <br></br>
    <br />
    <br />
    <br />
    <br />
    <ImgRedes>
      <img src={redes} alt="REDES" />
    </ImgRedes>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container">
      <Divtxt>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Divtxt>
    </div>
  </Container>
)

export default Footer

/*
<FooterSection>
        <Texto>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Texto>
      </FooterSection>
      */
