import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Core/Title',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {}

export const Focus: Story = {}

export const Error: Story = {}
