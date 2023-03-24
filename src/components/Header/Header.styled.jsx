import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.borders.middle};
  background-color: ${p => p.theme.colors.backgroundColor};
`;

export const StyledTitle = styled.h1`
  color: ${p => p.theme.colors.twoText};
`;
