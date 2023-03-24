import styled from 'styled-components';

export const StyledFooter = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100px;
  border: ${p => p.theme.borders.middle};
  background-color: ${p => p.theme.colors.backgroundColor};
`;