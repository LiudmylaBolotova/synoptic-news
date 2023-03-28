import styled from 'styled-components';


export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.borders.middle};
  background-color: ${p => p.theme.colors.mainColor};
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${p => p.theme.sizes.width[2]}px;
`;

export const StyledThermometer = styled.img`
  width: ${p => p.theme.sizes.width[1]}px;
  width: ${p => p.theme.sizes.height[2]}px;
`;

export const StyledTitle = styled.h1`
  color: ${p => p.theme.colors.text};
`;
