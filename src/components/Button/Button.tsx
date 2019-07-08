import React, { MouseEvent } from 'react'
import './Button.scss'

type ButtonProps = {
  state?: 'default' | 'selected'
  children: string
  onClick?: () => void 
}

export default function Button (props: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (props.onClick) props.onClick()
  }

  const getClassNames = () => `button${props.state === 'selected' ? ' button-selected' : ''}`

  return (
    <button 
      className={getClassNames()}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
