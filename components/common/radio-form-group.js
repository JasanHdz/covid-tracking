import React, { useState } from 'react'
import styled from 'styled-components'

const RadioStyled = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  margin-bottom: 20px;
  input[type=radio] {
    display: none;
  }
  label {
    position: relative;
    user-select: none;
  }
  label:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 12px 0 0;
    width: 16px;
    height: 16px;
    border-radius: 11px;
    border: 2px solid var(--gray);
    background: transparent;
  }
  input[type=radio]:checked+span {
    border-radius: 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 10px;
    left: 5px;
    display: block;
    background-color: var(--primary);
  }
` 

function RatioFormGroup({ question, name, value1, value2, id1, id2 }) {
  const [state, setState] = useState(value1 ? true : false) 
  const handleChangeValue = (event) => {
    const value = parseInt(event.target.value)
    setState(value ? true : false)
  }
  return (
    <>
      <h4>{question}</h4>
      <RadioStyled onChange={handleChangeValue}>
        <label htmlFor={id1} >
          <input type="radio" name={name} value={value1} id={id1} />    
          Si<span></span>
        </label>
        <label htmlFor={id2} >
          <input type="radio" name={name} value={value2} id={id2} />    
          No<span></span>
        </label>
      </RadioStyled>
    </>
  )
}

export default RatioFormGroup