import React from 'react'
import styled from 'styled-components'
import { GiMedicalPack } from 'react-icons/gi'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { P } from 'common/typography'
import Link from 'next/link'

const items = [
  {
    title: 'Casos covid-19',
    url: '/',
    icon: FaMapMarkedAlt
  }, 
  {
    title: 'Autodiagnóstico',
    url: '/test',
    icon: GiMedicalPack
  }
]

const NavigationContainer = styled.div`
  background: #F6F6F6;
  height: 60px;

  display: flex;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .tab {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      margin-top: 5px;
      font-size: 14px;
    }
    :first-child {
      border-right: 1px solid rgb(148, 148, 148, 0.5);

    }
    :last-child {
      /* background-color: blue; */
    }
  }

  @media screen and (min-width: 768px) {
    .tab p {
      font-size: 1rem;
    }
  }
  @media print {
    display: none;
  }
` 


function BottomNavigation() {
  const pathname = useRouter().asPath
  return (
    <NavigationContainer>
      {items.map((item, index) => {
        const color = `rgba(45, 187, 84, ${pathname === item.url ? 1 : 0.5})`
        return (
          <Link key={index} href={item.url}>
            <a className="tab">
              <item.icon color={color} size={25} />
              <P color={color}>{item.title}</P>
            </a>
          </Link>
        )})
      }
    </NavigationContainer>
  )
}

export default BottomNavigation