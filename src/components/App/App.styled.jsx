import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${p => p.theme.sizes.width[8]}px;
  margin: auto;
  box-shadow: 0px 5px 12px -5px;
  /* box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.backgroundColor}; */
  /* align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.twoBackgroundColor}; */
`;
