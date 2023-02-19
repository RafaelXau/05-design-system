import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@r-ignite-ui/react'
import { useState } from 'react'

function SampleToast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Agendamento</Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </Box>
  )
}

export default {
  title: 'Feedback/Toast',
  component: SampleToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 19 de Fevereiro às 14h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
