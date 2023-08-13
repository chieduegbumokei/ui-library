import React from 'react'
import { Container, ErrorMessage, Title, Wrapper } from './Input.styles'

interface Props {
  value: string | number | undefined
  name: string
  id?: string
  dataTestId?: string
  borderColor?: string
  hoverColor?: string
  title?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
  onChange?: () => void
}

const Input = ({
  value,
  name,
  id,
  dataTestId,
  borderColor = '#595959',
  hoverColor = '#5C52CC',
  title,
  placeholder,
  error = false,
  errorMessage,
  disabled = false,
  onChange = () => {},
}: Props) => {
  return (
    <Wrapper>
      {title && <Title htmlFor={name}>{title}</Title>}
      <Container
        id={id}
        name={name}
        data-testid={dataTestId}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        bc={borderColor}
        hbc={hoverColor}
        err={error}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

export default Input
