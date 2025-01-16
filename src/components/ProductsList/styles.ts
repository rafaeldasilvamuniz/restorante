import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'massas'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.fundo : cores.salmao};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? cores.fundo : cores.salmao};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 40px;
  column-gap: 10px;
  padding: 6px 0;
`

//grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr;
/*
 column-gap: 10px;
  margin-top: 40px;
  padding: 10px 0;

@media screen and (max-width: ${breakpoints.tablet}{
    margin: 0 auto;
    display: block;
    justify-content: center;
    max-width: 50%;
  }
  */

/*@media screen and (max-width: ${breakpoints.tablet} ) {

  max-width: 80%;
  display: block;
}*/

/*@media screen and (max-width: 1023px) {

  table,#area-principal,#tabela,#nomeprod,#corpo,#carousel-exemplo,#area-logo,#area-cabecalho{

      width: 80%;

  }

}*/

/*@media screen and (max-width: 640px) {

table,#area-principal,#tabela,#nomeprod,#corpo,#carousel-exemplo,#area-logo,#area-cabecalho

{

      max-width: 80%;

      display: block;

      margin: 0 auto;

  }


  #area-postagens {

      width: 100%;

      float: none;

  }



  #area-lateral {

      width: 100%;

      float: none;

  }

}*/

/*display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  padding: 24px;
  padding: 32px 0;*/

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
`
