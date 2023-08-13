import '@testing-library/jest-dom'
import 'jest-styled-components'

import globalStorybookConfig from '../.storybook/preview'

import { setProjectAnnotations } from '@storybook/react'

setProjectAnnotations(globalStorybookConfig)
