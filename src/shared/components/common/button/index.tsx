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
      className={`${className} flex justify-center mx-auto px-3 py-5 rounded-[12px] uppercase txt-[16_16_700] font-[montserrat] cursor-pointer`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? loader : children}
    </button>
  )
}
