import React from 'react';
import styled from 'styled-components';

const StyledWordmark = styled.span`
  display: inline-block;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

const IconLogo = () => <StyledWordmark>IzarAi</StyledWordmark>;

export default IconLogo;
