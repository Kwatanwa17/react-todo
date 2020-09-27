import React from 'react';
import styled, { css } from 'styled-components';

// const HeadingStyle = css`
//   color: ${({ color }) => color || 'var(--color-white)'};
//   font-weight: 300;
//   margin-top: 0;
//   margin-bottom: ${({ margin }) => margin || '0rem'};
// `;

type HeadingProps = {
  color?: any;
  margin?: any;
  fontWeight?: number;
};

const Heading1 = styled.h1<HeadingProps>`
  font-size: 2rem;
  color: ${({ color }) => color || 'var(--color-white)'};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  margin-top: 0;
  margin-bottom: ${({ margin }) => margin || '0rem'};
`;

const Heading2 = styled.h2<HeadingProps>`
  font-size: 1.8rem;
  color: ${({ color }) => color || 'var(--color-white)'};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  margin-top: 0;
  margin-bottom: ${({ margin }) => margin || '0rem'};
`;

const Heading3 = styled.h3<HeadingProps>`
  font-size: 1.5rem;
  color: ${({ color }) => color || 'var(--color-white)'};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  margin-top: 0;
  margin-bottom: ${({ margin }) => margin || '0rem'};
`;

const Heading4 = styled.h4<HeadingProps>`
  font-size: 1.2rem;
  color: ${({ color }) => color || 'var(--color-white)'};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  margin-top: 0;
  margin-bottom: ${({ margin }) => margin || '0rem'};
`;

type Props = {
  children: any;
  color?: any;
  size: any;
  margin?: any;
  fontWeight?: number;
};

const Headings: React.FC<Props> = ({
  children,
  color,
  fontWeight,
  size,
  margin,
}) => {
  switch (size) {
    case 'h1':
      return (
        <Heading1 color={color} fontWeight={fontWeight} margin={margin}>
          {children}
        </Heading1>
      );
    case 'h2':
      return (
        <Heading2 color={color} fontWeight={fontWeight} margin={margin}>
          {children}
        </Heading2>
      );

    case 'h3':
      return (
        <Heading3 color={color} fontWeight={fontWeight} margin={margin}>
          {children}
        </Heading3>
      );
    case 'h4':
      return (
        <Heading4 color={color} fontWeight={fontWeight} margin={margin}>
          {children}
        </Heading4>
      );
    default:
      return null;
  }
};

export default Headings;
