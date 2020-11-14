
import { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => setValue(event.target.value)
  const isEmpty = value === '' ? true : false
  return { value, onChange, isEmpty }
}

export default useInputValue