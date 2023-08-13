import { styled } from 'styled-components'
import { TextSize } from './TextSize.enum'

type ContainerStyle = {
  size: TextSize
  tc: string
}

export const Container = styled.p<ContainerStyle>`
  color: ${(props) => props.tc};
  margin: 0;
  font-size: ${(props) => {
    switch (props.size) {
      case TextSize.XS:
        return '0.75rem'
      case TextSize.SM:
        return '0.875rem'
      case TextSize.MD:
        return '1rem'
      case TextSize.LG:
        return '1.125rem'
      case TextSize.XL:
        return '1.25rem'
      case TextSize.XXL:
        return '1.5rem'
      case TextSize.XXXL:
        return '2rem'
      default:
        return '0.75rem'
    }
  }};
`
