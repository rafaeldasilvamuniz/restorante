import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${cores.salmao};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${cores.salmao};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const TextoButtonMassa = styled.h2`
  width: 136px;
  height: 16px;
  top: 4px;
  left: 83.24px;
  gap: 0px;
  opacity: 0px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: ${cores.preta};

  div {
    width: 304px;
    height: 24px;
    top: 804px;
    left: 179px;
    gap: 0px;
    opacity: 0px;
  }
`
