// React imports
import React, { useState } from 'react'

// Libraries imports
import styled from 'styled-components'

const MenuWrapper = styled.div`
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 33px;
  width: 33px;

  cursor: pointer;

  .bars {
    position: relative;

    height: 3px;
    width: 33px;

    background: white;
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'rotate(55deg)' : 'rotate(0deg)')};

    &:after {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;

      height: 3px;
      width: 80%;

      background: white;
      transition: all 0.3s ease-in-out;
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:before {
      content: '';
      position: absolute;
      top: ${({ open }) => (open ? '0px' : '6px')};
      left: 0;

      height: 3px;
      width: ${({ open }) => (open ? '100%' : '50%')};

      background: white;
      transition: all 0.3s ease-in-out;
      transform: ${({ open }) => (open ? 'rotate(70deg)' : 'rotate(0deg)')};
    }
  }

  &:hover .bars {
    width: 100%;

    &:after {
      width: 100%;
    }

    &:before {
      width: 100%;
    }
  }
`

const MenuContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};

  padding: 2rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 50%;

  background: #1f2125;
`

export default function index() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MenuWrapper open={open} onClick={() => setOpen(!open)}>
        <div className="bars" open={open}></div>
      </MenuWrapper>
      <MenuContainer open={open}></MenuContainer>
    </>
  )
}
