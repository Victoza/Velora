import React from 'react'

const Button = ({children,bg='black',textColor='white'}) => {
  const backgroundClasses = {
    black: 'bg-black',
    blue: 'bg-blue-600',
    red: 'bg-red-600',
  }

  const textClasses = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-200',
  }
  return (
    <button className={`bg-${bg} text-${textColor} px-6 py-3 rounded-lg`}>
        {children}
    </button>
  )
}

export default Button