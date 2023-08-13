import { styled } from 'styled-components'

type ContainerStyle = {
  bc: string
  hbc: string
  err: string
}

export const Container = styled.input<ContainerStyle>`
  height: 2.5rem;
  min-width: 4.5rem;
  width: max-content;
  padding: 0 1rem;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid ${(props) => (props.err === 'true' ? '#F5222D' : props.bc)};
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  color: #6e7191;
  margin-bottom: 0.25rem;
  transition: all 0.25s ease;

  &::placeholder {
    color: #b9b9c3;
  }

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    border-color: ${(props) => props.hbc};
    outline: ${(props) => props.hbc};
  }

  &:disabled {
    background-color: #e8e8e8;
    font-weight: 500;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Title = styled.label`
  color: #6e7191;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #f5222d;
`
