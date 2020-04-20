import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import CardArrow from '../assets/icons/card-arrow.svg';
import CardArrowOutlined from '../assets/icons/card-arrow-outlined.svg';

const Container = styled(Box)`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.light1};
  border-radius: 4px;
  position: relative;
  padding: 32px;
  transition: all ease-in-out 0.2s;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);

  background: ${({ theme }) => theme.colors.dark1}
    linear-gradient(
      -45deg,
      ${({ theme, language }) =>
          language && theme.colors[language]
            ? theme.colors[language]
            : theme.colors.primary3}
        16px,
      rgba(0, 0, 0, 0.01) 0
    );

  &:hover {
    transform: translateY(-4px);
  }
`;

const SummaryCard = ({ language, children }) => {
  return <Container language={language}>{children}</Container>;
};

export default SummaryCard;
