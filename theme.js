import React from 'react'
import { okaidia as syntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism } from 'react-syntax-highlighter'
import merge from 'lodash.merge'

import { getLanguage } from '@mdx-deck/themes/syntax-highlighter'

export const pre = props => (
  <div style={{ fontSize: '1.4rem' }}>{props.children}</div>
)

export const createCode = (opts = {}) => props => {
  const language = getLanguage(props.className)
  return <Prism {...opts} language={language} style={syntaxTheme} {...props} />
}

export default theme =>
  merge(theme, {
    colors: {
      code: '#000'
    },
    Slide: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    components: {
      pre,
      code: createCode(theme.prism),
    },
  })
