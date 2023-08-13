import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'
import { TextSize } from './TextSize.enum'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Core/Text',
  tags: ['autodocs'],
  args: {
    value: 'Hello World!',
    size: TextSize.MD,
    dataTestId: undefined,
    id: undefined,
    textColor: '#000000',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const XtraSmall: Story = {}
