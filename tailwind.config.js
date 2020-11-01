module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      scale: {
        '200': '2',
        '300': '3',
        '500': '5'
      }
    },
  },
  variants: {
    textOpacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus', 'even', 'odd'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    display: ['responsive', 'group-hover', 'group-focus', 'focus-within'],
    position: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'group-hover', 'group-focus', 'focus-within'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
    textDecoration: ['responsive', 'hover', 'focus', 'disabled'],
    rotate: ['responsive', 'hover', 'focus', 'group-focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
