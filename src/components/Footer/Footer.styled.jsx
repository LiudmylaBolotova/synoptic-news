import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${p => p.theme.sizes.height[6]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.mainColor};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const StyledText = styled.div`
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
`;
