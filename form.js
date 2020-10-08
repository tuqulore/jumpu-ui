const plugin = require('tailwindcss/plugin')
const theme = require('./theme')

module.exports = plugin.withOptions(
  // NOTE: couldn't merge plugin-side theme when wrote the plugin without withOptions
  () => {
    return ({ addComponents, theme }) => {
      addComponents([
        {
          '.label': {
            color: theme('colors.gray.600'),
            fontSize: '12px',
            lineHeight: 1,
            marginBottom: '1em'
          }
        },
        {
          '.input': {
            border: `1px solid ${theme('colors.gray.600')}`,
            borderRadius: theme('tuqulore.input.radius'),
            padding: '14px 24px',
            '&::placeholder': {
              color: theme('colors.gray.600')
            },
            '&:focus': {
              borderColor: theme('colors.primary.600')
            }
          }
        }
      ])
    }
  },
  () => ({ theme })
)
