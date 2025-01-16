import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints } from '../../styles'

export const Imagem = styled.div`
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  @media screen and (max-width: ${breakpoints.celular}) {
    grid-template-columns: 1fr 1fr;
  }
`

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

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
