import React, { useState } from 'react'
import styled from 'styled-components'
import Places from 'lib/database/places'

const SearchStyled = styled.input`
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid var(--secondary);
  margin-top: 19px;
  box-sizing: border-box;
  width: 100%;
  outline: 0;
  border: 1px solid #D0D7DC;

  :focus {
    border-color: var(--dark);
  }
`


function Search({ placeholder, value, onChange }) {
  return <SearchStyled
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
}

export default Search