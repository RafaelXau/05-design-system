import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum nemo ducimus maiores. Qui voluptate fuga praesentium distinctio rerum est aut cumque, vero dolorem magnam maxime maiores officia ullam voluptatum.',
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
