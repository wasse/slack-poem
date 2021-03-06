import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = props => {
   const { children, className, defaultText, disabled, ...other } = props

   return (
      <button className={className} disabled={disabled} {...other}>
         <strong>{children || defaultText}</strong>
      </button>
   )
}

Button.propTypes = {
   children: PropTypes.string,
   className: PropTypes.string,
   defaultText: PropTypes.string,
   disabled: PropTypes.bool,
}

Button.defaultProps = {
   className: '',
   defaultText: 'Default button text',
   disabled: false,
}

export default Button
