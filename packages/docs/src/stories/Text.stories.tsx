import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@r-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum nemo ducimus maiores. Qui voluptate fuga praesentium distinctio rerum est aut cumque, vero dolorem magnam maxime maiores officia ullam voluptatum.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum nemo ducimus maiores. Qui voluptate fuga praesentium distinctio rerum est aut cumque, vero dolorem magnam maxime maiores officia ullam voluptatum.',
    as: 'strong',
  },
}
