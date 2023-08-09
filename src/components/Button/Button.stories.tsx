import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Core/Button',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
      defaultValue: false,
    },
    id: {
      control: { type: 'text' },
    },
    dataTestId: {
      control: { type: 'text' },
    },
    onClick: {
      control: { type: 'clicked' },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
  args: {
    text: 'Button',
    backgroundColor: '#5C52CC',
    hoverBackgroundColor: '#5C52CC',
    textColor: '#ffffff',
    hoverTextColor: '#ffffff',
    size: 'small',
    id: undefined,
    dataTestId: undefined,
    disabled: false,
    onClick: () => {},
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Primary',
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    type: 'secondary',
  },
}
