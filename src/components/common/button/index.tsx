import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loader?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  isLoading = false,
  loader = <span>Loading...</span>,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      className={className}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? loader : children}
    </button>
  )
}
