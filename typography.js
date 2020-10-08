const plugin = require('tailwindcss/plugin')
const theme = require('./theme')

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addBase, theme }) => {
      addBase(
        {
          h1: {
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5em'
          },
          h2: {
            fontSize: '38px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5em'
          },
          h3: {
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5em'
          },
          h4: {
            fontSize: '21px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5em'
          },
          h5: {
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '0.5em'
          },
          p: {
            lineHeight: 1.5,
            marginBottom: '1.5em'
          },
          small: {
            fontSize: '12px'
          }
        }
      )
    }
  },
  () => ({ theme })
)
