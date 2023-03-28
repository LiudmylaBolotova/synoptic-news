import styled from "styled-components";
import img from '../Images/blue-sky-with-clouds-background.jpg';

export const SectionForm = styled.div`
  background-image: url(${img});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: ${p => p.theme.borders.normal};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleForm = styled.h2`
  font-size: ${p => p.theme.fontSizes[2]}px;
  margin: ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.mainColor};
`;

export const InputForm = styled.input`
  border: ${p => p.theme.borders.middle};
  border-radius: ${p => p.theme.radii.formRound}px;

  width: ${p => p.theme.sizes.width[7]}px;
  height: ${p => p.theme.sizes.height[2]}px;
  :active,
  :hover,
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const BtnForm = styled.button`
  width: ${p => p.theme.sizes.width[4]}px;
  height: ${p => p.theme.sizes.height[4]}px;

  color: ${p => p.theme.colors.mainColor};
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