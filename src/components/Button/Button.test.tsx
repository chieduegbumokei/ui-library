import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button Tests', () => {
  it('Text is shown', () => {
    const text = 'Submit'

    render(<Button text={text}></Button>)

    expect(screen.getByText(text)).toBeDefined()
  })

  it('Background color are shown', () => {
    const text = 'Submit'
    const backgroundColor = 'red'

    render(<Button text={text} backgroundColor={backgroundColor}></Button>)

    expect(screen.getByText(text)).toHaveStyleRule('background-color', backgroundColor)
  })

  it('Hover background color are shown', async () => {
    const text = 'Submit'
    const hoverBackgroundColor = 'green'

    render(<Button text={text} hoverBackgroundColor={hoverBackgroundColor}></Button>)

    expect(screen.getByText(text)).toHaveStyleRule('background-color', hoverBackgroundColor, {
      modifier: ':hover',
    })
  })

  it('Text color are shown', async () => {
    const text = 'Submit'
    const textColor = 'red'

    render(<Button text={text} textColor={textColor}></Button>)

    expect(screen.getByText(text)).toHaveStyleRule('color', textColor)
  })

  it('Hover text color are shown', async () => {
    const text = 'Submit'
    const hoverTextColor = 'red'

    render(<Button text={text} hoverTextColor={hoverTextColor}></Button>)

    expect(screen.getByText(text)).toHaveStyleRule('color', hoverTextColor, {
      modifier: ':hover',
    })
  })

  it('Test id attached', async () => {
    const text = 'Submit'
    const testId = 'btn'

    render(<Button text={text} dataTestId={testId}></Button>)

    const button = screen.getByTestId(testId)

    expect(button).toBeDefined()
  })

  it('Disabled', async () => {
    const text = 'Submit'
    const testId = 'btn'

    render(<Button text={text} dataTestId={testId} disabled={true}></Button>)

    const button = screen.getByTestId(testId)

    expect(button).toBeDisabled()
  })

  it('Clicking Button', async () => {
    const handleClick = vi.fn()
    const text = 'Submit'
    const testId = 'btn'

    render(<Button text={text} dataTestId={testId} onClick={handleClick}></Button>)

    const button = screen.getByTestId(testId)

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Primary type', async () => {
    const text = 'Submit'
    const testId = 'btn'
    const type = 'primary'
    const backgroundColor = 'red'
    const color = 'red'

    render(
      <Button
        text={text}
        dataTestId={testId}
        type={type}
        backgroundColor={backgroundColor}
        textColor={color}
      ></Button>,
    )

    const button = screen.getByTestId(testId)

    expect(button).toHaveStyleRule('background-color', backgroundColor)
    expect(button).toHaveStyleRule('color', color)
    expect(button).toHaveStyleRule('border', 'none')
  })

  it('Secondary type', async () => {
    const text = 'Submit'
    const testId = 'btn'
    const type = 'secondary'
    const backgroundColor = 'yellow'
    const color = 'yellow'

    render(
      <Button
        text={text}
        dataTestId={testId}
        type={type}
        backgroundColor={backgroundColor}
        textColor={color}
      ></Button>,
    )

    const button = screen.getByTestId(testId)

    expect(button).toHaveStyleRule('background-color', 'transparent')
    expect(button).toHaveStyleRule('color', backgroundColor)
    expect(button).toHaveStyleRule('border', `1px solid ${backgroundColor}`)
  })

  it('Small size', async () => {
    const text = 'Submit'
    const testId = 'btn'
    const size = 'small'

    render(<Button text={text} dataTestId={testId} size={size}></Button>)

    const button = screen.getByTestId(testId)

    expect(button).toHaveStyleRule('height', '1.5rem')
  })

  it('Medium size', async () => {
    const text = 'Submit'
    const testId = 'btn'
    const size = 'medium'

    render(<Button text={text} dataTestId={testId} size={size}></Button>)

    const button = screen.getByTestId(testId)

    expect(button).toHaveStyleRule('height', '1.5rem')
  })

  it('Large size', async () => {
    const text = 'Submit'
    const testId = 'btn'
    const size = 'large'

    render(<Button text={text} dataTestId={testId} size={size}></Button>)

    const button = screen.getByTestId(testId)

    expect(button).toHaveStyleRule('height', '2.125rem')
  })
})
