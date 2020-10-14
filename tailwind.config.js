module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    textOpacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    display: ['responsive', 'group-hover', 'group-focus', 'focus-within'],
    visibility: ['responsive', 'group-hover', 'group-focus', 'focus-within']
  },
  plugins: [],
}
