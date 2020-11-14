import React from 'react'
import styled from 'styled-components'
import { MdArrowBack } from 'react-icons/md'
import { useRouter } from 'next/router'


const AppBarStyled = styled.header`
  padding: .5rem;
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
  img {
    border-radius: 50%;
    margin-right: 12px;
  }
  .arrowBack {
    display: inherit;
    user-select: none;
    svg {
      cursor: pointer;
    }
    p {
      margin-left: 38px;
      font-size: 20px;
      color: white;
    }
  }
`

function AppBar({ avatar }) {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  return (
    <AppBarStyled>
      <div className="arrowBack">
        <MdArrowBack onClick={handleClick} size={27} color="white" />
        <p>Actualizar colonia</p>
      </div>
      <img width={45} height={45} src={avatar} alt="avatar"/>
    </AppBarStyled>
  )
}

export default AppBar