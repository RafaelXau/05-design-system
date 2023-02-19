import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  gap: 10,
  width: '100%',
  maxWidth: 360,
  margin: 0,
  listStyle: 'none',
  zIndex: 999999999,
  outline: 'none',
})

export const ToastCointainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  padding: '$3 $5',
  fontFamily: '$default',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${show} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="end"]': {
    animation: `${hide} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
})
