import React, { useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { GiMedicalPack } from 'react-icons/gi'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { P } from 'common/typography'
import { useRouter } from 'next/router'
import { UserContext } from 'helpers/provider'
import { logoutSession } from 'lib/auth'


const menux = [
  {
    title: 'Mapa',
    url: '/',
    Icon: FaMapMarkedAlt
  }, 
  {
    title: 'Autodiagnóstico',
    url: '/test',
    Icon: GiMedicalPack
  },
  {
    title: 'Admin',
    url: '/admin',
    Icon: AiOutlineUser
  }
]

const MenuStyled = styled.nav`
  height: inherit;
  padding: 1.2em 0;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  transform: translateX(300px);
  transition: 0.3s transform;
  background: white;
  height: 100vh;
  max-width: 300px;
  width: 100%;

  .logout {
    margin-top: 40vh;
    cursor: pointer;
    user-select: none;
    a {
      display: flex;
      align-items: center;
      padding: 19px 18px;
      p {
        margin-left: 10px;
      }
      :hover {
        background: var(--gray);
      }
    }
  }
  .items {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    li {
      color: white;
      border-bottom: 1px solid;
      list-style: none;
      cursor: pointer;
    }
    a {
      display: flex;
      align-items: center;
      padding: 19px 18px;
      p {
        margin-left: 10px;
      }
      :hover {
        background: var(--gray);
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    p {
      text-transform: uppercase;
      color: var(--primary);
      font-weight: bold;
    }
    img {
      padding: 0 12.5px 0 16px;
      margin: 16px 0;
    }
  }
`

function Menu({ className }) {
  const { state: user, setState } = useContext(UserContext)
  const pathname = useRouter().asPath
  const handleLogout = () => logoutSession(setState)
  return (
    <MenuStyled className={className}>
      <div className="logo">
        <img src="/logo.svg" alt="logotipo" />
        <p>Covid-19</p>
      </div>
      <ul className="items">
        {menux.map(({ url, title, Icon }, index) => {
          const color = pathname === url ? 'var(--primary)' : 'var(--secondary)'
          return (
            <Link key={index} href={url}>
              <a>
                <Icon size={30} color={color} />
                <P color={color}>{title}</P>
              </a>
            </Link>
          )
        })}
      </ul>
      <div className="logout">
        {user && (
          <a onClick={handleLogout}>
            <BiLogOut size={30} color='var(--dark)' />
            <P>Cerrar sessión</P>
          </a>
        )}
      </div>
    </MenuStyled>
  )
}

export default Menu