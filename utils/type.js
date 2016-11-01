import styleInject from 'style-inject'
import toCss from 'to-css'
import { kebabCase, forIn, set } from 'lodash'
import typescale from 'typescale'

const type = typescale({
  bodyFontFamily: 'Nunito',
  bodyFontSize: '13px',
  bodyLineHeight: '1.8',
  headingFontFamily: 'Lato',
})

const css = {}

forIn(type, (styles, element) => {
  forIn(styles, (value, attribute) => {
    set(css, [element, kebabCase(attribute)], value)
  })
})

styleInject(toCss(css))
