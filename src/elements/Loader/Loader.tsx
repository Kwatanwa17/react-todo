import React from 'react';
import styled from 'styled-components';

type Props = {
  color?: string
}  

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingRing = styled.div<Props>`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ color }) => color ? color : "var(--color - main)"};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color ? color : "var(--color - main)"} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Loader: React.FC<Props> = ({color}) => {
  return (
    <Wrapper>
      <LoadingRing color={color}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingRing>
    </Wrapper>
  );
};

export default Loader;
