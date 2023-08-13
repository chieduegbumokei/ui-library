import { TextSize } from './TextSize.enum'
import { Container } from './Text.styles'

interface Props {
  size?: TextSize
  value: string
  dataTestId?: string
  id?: string
  textColor?: string
}

const Text = ({ size = TextSize.MD, value, dataTestId, id, textColor = '#000000' }: Props) => {
  return (
    <Container data-testid={dataTestId} id={id} size={size} tc={textColor}>
      {value}
    </Container>
  )
}

export default Text
