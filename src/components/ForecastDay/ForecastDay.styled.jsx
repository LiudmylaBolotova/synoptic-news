import styled from 'styled-components';
import { FcCalendar } from 'react-icons/fc';

export const StyledCard = styled.div`
  width: ${p => p.theme.sizes.width[10]}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledTitle = styled.h2`
  text-align: center;

  color: ${p => p.theme.colors.mainColor};
`;

export const SectionDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.sizes.width[5]}px;
  color: ${p => p.theme.colors.mainColor};
`;

export const StyledLocalTime = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
`;

export const StyledItemWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.mainColor};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
`;

export const StyledFcCalendar = styled(FcCalendar)`
  width: ${p => p.theme.sizes.width[1]}px;
  height: ${p => p.theme.sizes.height[1]}px;
`;

export const StyledPartList = styled.div`
  width: ${p => p.theme.sizes.width[8]}px;
  border-top: ${p => p.theme.borders.accent};
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.accent};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;

  width: ${p => p.theme.sizes.width[5]}px;
  height: ${p => p.theme.sizes.height[3]}px;
  padding-left: 5px;

  color: ${p => p.theme.colors.mainColor};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.text};
`;
