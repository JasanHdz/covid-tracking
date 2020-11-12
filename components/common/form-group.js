import React from 'react'

function FormGroup({ label, placeholder, type = 'text', id, ...props }) {
  return (
    <div className="group">
      <label htmlFor={id}>{label} <span style={{color: 'red'}}>*</span></label><br />
      <input name={id} id={id} type={type} placeholder={placeholder} {...props} required />
    </div>
  )
}

export default FormGroup