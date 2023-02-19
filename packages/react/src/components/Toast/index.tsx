import { ToastProvider } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastCointainer,
  ToastDescription,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastCointainer> {
  title: string
  description?: string
  isOpen: boolean
}

export function Toast({ description, title, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastCointainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastCointainer>

      <ToastViewPort />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
