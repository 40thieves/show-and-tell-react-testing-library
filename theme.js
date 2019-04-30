import { default as theme, syntaxHighlighterPrism } from '@mdx-deck/themes'
import { okaidia as syntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default {
  ...theme,
  ...syntaxHighlighterPrism({ prism: { style: syntaxTheme } }),
  colors: {
    code: '#000'
  },
  pre: {
    fontSize: '1.3rem'
  },
  Slide: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}
