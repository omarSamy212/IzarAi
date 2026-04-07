import React from 'react';
import styled from 'styled-components';

const StyledWordmark = styled.span`
  display: inline-block;
  color: var(--green);
  font-family: 'BankGothic Md BT', 'Microgramma D Extended', 'Eurostile', 'Square721 BT',
    'Arial Narrow', sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
  text-transform: none;
  text-shadow: 0 0 14px rgba(100, 255, 218, 0.25);
  border-bottom: 1px solid rgba(100, 255, 218, 0.35);
  padding-bottom: 2px;
`;

const IconLogo = () => <StyledWordmark className="wordmark">IzarAi</StyledWordmark>;

export default IconLogo;
