import React from 'react'
import { estados } from 'components/dashboard/estados'

function Select({ label, id, onChange, value, option }) {
  return (
    <div className="group">
      <label htmlFor={id}>{label} <span style={{color: 'red'}}>*</span></label><br />
      <select onChange={onChange} id={id}>
        <option value={value}>{option}</option>
        {estados.map((item, index) => {
          if (item !== value) return <option key={index} value={item} >{item}</option>
        })}
      </select>
    </div>
  )
}

export default Select