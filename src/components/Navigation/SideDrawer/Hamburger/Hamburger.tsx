import React from "react"
import styled, { css } from "styled-components"

type Props = {
  opened: boolean
  clicked: any
}

const StyledHamburger = styled.div<{ opened: boolean }>`
  width: 30px;
  height: 22.5px;
  position: relative;
  padding: 1rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: #d3531a;
    border-radius: 4.5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      ${props =>
        props.opened &&
        css`
          top: 9px;
          width: 0%;
          left: 50%;
        `}
    }

    &:nth-child(2) {
      top: 9px;
      ${props =>
        props.opened &&
        css`
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        `}
    }
    &:nth-child(3) {
      top: 9px;
      ${props =>
        props.opened &&
        css`
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        `}
    }

    &:nth-child(4) {
      top: 18px;
      ${props =>
        props.opened &&
        css`
          top: 9px;
          width: 0%;
          left: 50%;
        `}
    }
  }
`
const Hamburger: React.FC<Props> = ({ opened, clicked }) => {
  return (
    <StyledHamburger onClick={clicked} opened={opened}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  )
}

export default Hamburger
