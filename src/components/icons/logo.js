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
  text-transform: uppercase;
`;

const IconLogo = () => <StyledWordmark className="wordmark">IzarAi</StyledWordmark>;

export default IconLogo;
