const plugin = require('tailwindcss/plugin')
const svgToDataURI = require('mini-svg-data-uri')
const { spacing, borderWidth, borderRadius, boxShadow, transitionProperty, transitionDuration, transitionTimingFunction } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = plugin(function ({ addComponents }) {
  const border = {
    borderWidth: borderWidth.DEFAULT,
    borderStyle: 'solid',
    borderColor: colors.gray['200'],
    borderRadius: borderRadius.DEFAULT,
  }
  const transition = `${transitionProperty.all} ${transitionDuration.DEFAULT} ${transitionTimingFunction.DEFAULT}`

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
      transition
    },
    '.collapse.show': {
      maxHeight: 'unset',
      opacity: '1'
    }
  }

  const modal = {
    '.modal': {
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      opacity: '0',
      maxHeight: '0',
      transition
    },
    '.modal.open': {
      opacity: '1',
      maxHeight: 'unset'
    },
    '.modal:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    '.modal-wrapper': {
      position: 'relative',
      margin: `${spacing['28']} auto`,
      maxWidth: '600px',
      width: '100%'
    },
    '.modal-content': {
      backgroundColor: 'white',
      borderRadius: borderRadius.DEFAULT,
      boxShadow: boxShadow.DEFAULT,
      marginLeft: spacing['4'],
      marginRight: spacing['4']
    },
    '.modal-header': {
      padding: `${spacing['3']} ${spacing['4']}`,
      borderBottom: borderWidth.DEFAULT,
      borderStyle: 'solid',
      borderColor: colors.gray['200'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    '.modal-close': {
      backgroundImage: `url("${svgToDataURI(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>`)}")`,
      width: spacing['4'],
      height: spacing['4'],
    },
    '.modal-body': {
      padding: spacing['4']
    },
    '.modal-footer': {
      padding: `${spacing['3']} ${spacing['4']}`,
      borderTop: borderWidth.DEFAULT,
      borderStyle: 'solid',
      borderColor: colors.gray['200'],
    }
  }

  addComponents([dropdown, collapse, modal])
})