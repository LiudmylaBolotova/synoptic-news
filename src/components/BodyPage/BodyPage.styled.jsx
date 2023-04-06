import styled from 'styled-components';

export const StyledMainSection = styled.div`
  background-color: ${p => p.theme.colors.accent};
  position: relative;
  width: 100%;
  min-height: 600px;
`;

export const StyledTitle = styled.h1`
  color: ${p => p.theme.colors.text};
  text-align: center;
`;
