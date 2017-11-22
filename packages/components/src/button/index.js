import React from 'react'

import StyledButton from './styles'

const Button = ({ type = 'button', children, onClick }) => (
  <StyledButton type={type} className='button' onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
