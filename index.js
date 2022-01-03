const plugin = require('tailwindcss/plugin')
const { spacing, borderWidth, borderRadius, transitionProperty, transitionDuration, transitionTimingFunction } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = plugin(function ({ addComponents }) {
  const border = {
    borderWidth: borderWidth.DEFAULT,
    borderStyle: 'solid',
    borderColor: colors.gray['200'],
    borderRadius: borderRadius.DEFAULT,
  }

  const dropdown = {
    '.dropdown': {
      position: 'relative',
      display: 'inline-block'
    },
    '.dropdown-menu': {
      display: 'none',
      position: 'absolute',
      top: spacing['12'],
      left: '0',
      width: '100%',
      paddingTop: spacing['2'],
      paddingBottom: spacing['2'],
      backgroundColor: colors.white,
      color: colors.gray['800'],
      ...border,
    },
    '.dropdown-menu-right': {
      right: '0',
      left: 'unset'
    },
    '.dropdown-menu-md': {
      width: spacing['44']
    },
    '.dropdown-menu-lg': {
      width: spacing['56']
    },
    '.dropdown-item': {
      display: 'block',
      padding: `${spacing['2']} ${spacing['3']}`,
    },
    '.dropdown-item:hover': {
      backgroundColor: colors.gray['100']
    },
    '.dropdown.open .dropdown-menu': {
      display: 'block'
    }
  }

  const collapse = {
    '.collapse': {
      maxHeight: '0',
      opacity: '0',
      overflow: 'hidden',
      transition: `${transitionProperty.all} ${transitionDuration.DEFAULT} ${transitionTimingFunction.DEFAULT}`
    },
    '.collapse.show': {
      maxHeight: 'unset',
      opacity: '1'
    }
  }

  addComponents([dropdown, collapse])
})