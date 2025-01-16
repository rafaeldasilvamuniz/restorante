import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.fundo};
  padding: 32px 0;
  font-size: 14px;

  @media (max-width: ${breakpoints.celular}) {
    grid-template-columns: 1fr;
    display: block;
    margin-left: 0%;
    margin-top: 0%;
  }
`

export const SectionTitle = styled.h4`
  color: ${cores.salmao};
  font-size: 16px;
  font-weight: bold;
`

/*export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`*/

export const Link = styled.a`
  color: ${cores.branca};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
/*export const Imagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    margin-right: -10%;
  }
`*/

export const Imagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    margin-center: 20%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;

    img {
      margin-left: 40%;
      margin-top: 20%;
    }
  }
`
export const ImgRedes = styled.div`
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    margin-center: 20%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;

    img {
      margin-left: 40%;
      margin-top: 20%;
    }
  }
`
export const Texto = styled.p`
  width: 480px;
  height: 24px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-left: 37%;
  font-weight: bold;
  display: flex;
  color: ${cores.salmao};
`

export const Divtxt = styled.div`
  color: ${cores.salmao};
  width: 480px;
  height: 24px;
  text-align: center;
  margin-left: 37%;
  justify-content: center;

  @media (max-width: ${breakpoints.celular}) {
    grid-template-columns: 1fr;
    display: block;
    text-align: center;
  }
`

/*@media screen and (max-width: ${breakpoints.celular}) {
  grid-template-columns: 1fr 1fr;
}

@media (max-width: ${breakpoints.tablet}) {
    margin-left: 50%;
    display: flex;
  }

*/

/*export const GlobalCss = createGlobalStyle`
@media screen and (max-width: ${breakpoints.desktop}) {
     grid-template-columns: 1fr 1fr;
}
`*/

/*@media screen and (max-width: 768px)
 { grid-template-columns: 1fr 1fr;

 }
 @media screen and (max-width: 480px)

{ grid-template-columns: 1fr;

}*/

/*
 width: 480px;
  height: 24px;
  top: 1560px;
  left: 443px;
  gap: 0px;
  opacity: 0px;*/
