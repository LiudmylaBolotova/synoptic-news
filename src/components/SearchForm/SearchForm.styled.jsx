import styled from "styled-components";

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-top: 50px; */
  
  border: ${p => p.theme.borders.normal};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
 
  /* border: ${p => p.theme.borders.normal}; */
`;

export const TitleForm = styled.h2`
  font-size: ${p => p.theme.fontSizes[2]}px;
  margin: ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.backgroundColor};
`;

export const InputForm = styled.input`
  border: ${p => p.theme.borders.middle};
  border-radius: ${p => p.theme.radii.round}px;
  /* color: ${p => p.theme.colors.text}; */
  width: ${p => p.theme.sizes.width[6]}px;
  height: ${p => p.theme.sizes.height[1]}px;
  :active,
  :hover,
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const BtnForm = styled.button`
  width: ${p => p.theme.sizes.width[3]}px;
  height: ${p => p.theme.sizes.height[3]}px;

  color: ${p => p.theme.colors.backgroundColor};
  border: ${p => p.theme.borders.middle};
  border-radius: ${p => p.theme.radii.btnRound}px;

  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[2]}px;
 

  transition: ${p => p.theme.transitions.transitionBtn};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.twoText};
  }
`;