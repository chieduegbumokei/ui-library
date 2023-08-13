import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Core/Input',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
  },
  args: {
    value: 'Bannana',
    name: 'bannana',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {}

export const Disalbled: Story = {
  args: {
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Incorrect Fruit',
  },
}

export const Title: Story = {
  args: {
    title: 'Fruit',
  },
}
