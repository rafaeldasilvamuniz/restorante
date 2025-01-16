import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.fundo};
  height: 298px;
  top: 1326px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: -1px;
  gap: 0px;
  opacity: 0px;

  a {
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

/*top: 1326px;
  padding: 26px;
  border-radius: 30px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: -1px;
  gap: 0px;
  opacity: 0px;
*/

export const Imagem = styled.div`
  display: flex;
  justify-content: center;

  img {
    position: absolute;
    margin-left: 96%;
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
//margin-left: 90%;

export const Links = styled.ul`
  display: flex;
  margin-left: 0px;
`

export const LinkItem = styled.li`
  margin-right: 0px;
`

/*export const LinkCart = styled.a`
  display: flex;
`*/

export const CartButton = styled.span`
  display: flex;
  a {
    display: flex;
  }
`
/*
Outro CSS

export const HeaderBar = styled.header`
  background-color: ${cores.fundo};
  height: 298px;
`

export const Imagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 50%;
    margin-top: 5%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 0;
    display: block;

    img {
      margin-left: 40%;
      margin-top: 20%;
    }
  }
`

export const LinkItem = styled.h2`
  color: ${cores.salmao};

  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  line-height: 21.09px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  width: 109px;
  height: 21px;
  top: 59px;
  left: 171px;
  gap: 0px;
  opacity: 0px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
  }
`

export const CartButton = styled.span`
  color: ${cores.salmao};
  margin-right: 16px;
  font-weight: bold;
  height: 298px;

 img {
    position: absolute;
    margin-left: 85%;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

//export const LinkItem = styled.li`
  //margin-right: 16px;
//`

export const LinkCart = styled.a`
  display: flex;
`*/
