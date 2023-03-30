import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${p => p.theme.sizes.width[11]}px;
  margin: auto;
  box-shadow: 0px 5px 12px -5px;
`;
