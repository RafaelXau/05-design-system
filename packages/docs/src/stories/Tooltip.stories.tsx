import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@r-ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    children: <Button>Sample Tooltip</Button>,
    content: 'This is a sample tooltip',
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
