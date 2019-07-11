import React, { MouseEvent, useState } from 'react'
import './Select.scss'

type SelectProps = {
  title?: string
  options: string[]
  defaultValue?: string
  onChange?: () => string
}

export default function Select(props: SelectProps) {
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(props.defaultValue || props.options[0])
  // const handleChange = (event: MouseEvent<HTMLSelectElement>) => {
  //   if (props.onChange) props.onChange(event.target)
  // }

  // const getClassNames = () => `button${props.state === 'selected' ? ' button-selected' : ''}`

  return (
    <div className='select-container'>
      {props.title &&
        <div className='select-title'>
          {props.title}
        </div>
      }
      <div className='select-input' onClick={() => setToggle(!toggle)}>
        {value}
      </div>
      {toggle && 
        <div>
          {props.options.filter(o => o !== value).map(option => (
            <div className='select-option' onClick={() => { setValue(option); setToggle(false);}}>{option}</div>
          ))}
        </div>
      }
    </div>
  )
}
