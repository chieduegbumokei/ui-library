import { describe, expect, vi } from 'vitest'
import Input from './Input'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Input Tests', () => {
  it('Value is shown', () => {
    const value = 'Home'
    const name = 'building'

    render(<Input value={value} name={name} />)

    const input = screen.getByDisplayValue(value)

    expect(input).toBeInTheDocument()
  })

  it('Title is shown', () => {
    const value = 'Home'
    const name = 'building'
    const title = 'Enter your address'

    render(<Input value={value} name={name} title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('Name is attached', () => {
    const value = 'Home'
    const name = 'email'

    render(<Input value={value} name={name} />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('name', name)
  })

  it('ID is attached', () => {
    const value = 'Home'
    const name = 'building'
    const id = 'email-input'

    render(<Input value={value} name={name} dataTestId={id} />)

    const input = screen.getByTestId(id)

    expect(input).toBeInTheDocument()
  })

  it('Border color is correct', () => {
    const value = 'Home'
    const name = 'building'
    const borderColor = 'blue'

    render(<Input value={value} name={name} borderColor={borderColor} />)

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyleRule('border', `1px solid ${borderColor}`)
  })

  it('Hover color is correct', () => {
    const value = 'Home'
    const name = 'building'
    const hoverColor = 'green'

    render(<Input value={value} name={name} hoverColor={hoverColor} />)

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyleRule('border-color', hoverColor, {
      modifier: ':hover',
    })
  })

  it('Placeholder is shown', () => {
    const value = 'Home'
    const name = 'building'
    const placeholder = 'Enter your name'

    render(<Input value={value} name={name} placeholder={placeholder} />)

    const input = screen.getByPlaceholderText(placeholder)

    expect(input).toBeInTheDocument()
  })

  it('Error state', () => {
    const value = 'Home'
    const name = 'building'
    const errorMessage = 'Invalid input'

    render(<Input value={value} name={name} error={true} errorMessage={errorMessage} />)

    const errorElement = screen.getByText(errorMessage)

    expect(errorElement).toBeInTheDocument()
  })

  it('Disabled', () => {
    const value = 'Home'
    const name = 'building'

    render(<Input value={value} name={name} disabled={true} />)

    const input = screen.getByRole('textbox')

    expect(input).toBeDisabled()
  })

  it('onChange is working', () => {
    const value = 'Home'
    const name = 'building'
    const handleChange = vi.fn()

    render(<Input value={value} name={name} onChange={handleChange} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'New value' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
