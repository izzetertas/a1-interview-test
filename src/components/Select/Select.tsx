import React, { useState, useEffect, useRef } from 'react'
import useOnClickOutside from '../utilities/useOnClickOutside';
import './Select.scss'

type SelectProps = {
  title?: string
  options: string[]
  defaultValue?: string
  onChange?: (value: string) => void
}

export default function Select(props: SelectProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState(props.defaultValue || props.options[0])
  const handleChange = (option: string) => {
    setValue(option)
    setToggle(false)
    if(props.onChange) props.onChange(option)
  }

  useOnClickOutside(ref, () => setToggle(false));
  
  return (
    <div className='select-container'>
      {props.title &&
        <div className='select-title'>
          {props.title}
        </div>
      }
      <div className='select-input' onClick={() => setToggle(!toggle)}>
        <span>{value}</span>
        {!toggle && <span className='select-input__arrow'>&#9660;</span>}
        {toggle && <span className='select-input__arrow'>&#9650;</span>}
      </div>
      {toggle && 
        <div className='select-scroll' ref={ref} >
          {props.options.filter(o => o !== value).map((option, ind) => (
            <div
              key={ind}
              className='select-option'
              onClick={event => handleChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      }
    </div>
  )
}
