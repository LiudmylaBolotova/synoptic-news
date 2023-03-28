import styled from 'styled-components';
import { FcCalendar } from 'react-icons/fc';

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: ${p => p.theme.sizes.width[10]}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.sectionBackgroundColor};
`;

export const StyledTitleLocation = styled.h2`
  color: ${p => p.theme.colors.mainColor};
  border-bottom: ${p => p.theme.borders.accent};
`;

export const StyledTitleCountry = styled.h3`
  color: ${p => p.theme.colors.mainColor};
  padding-top: 0;
  border-bottom: ${p => p.theme.borders.accent};
`;

export const SectionDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: ${p => p.theme.sizes.width[5]}px;
  color: ${p => p.theme.colors.mainColor};
`;

export const StyledLocalTime = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
`;

export const SectionLastUpdate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${p => p.theme.sizes.width[6]}px;
  color: ${p => p.theme.colors.mainColor};
  margin-top: ${p => p.theme.space[8]}px;
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${p => p.theme.sizes.width[4]}px;
  color: ${p => p.theme.colors.mainColor};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
`;

export const StyledFcCalendar = styled(FcCalendar)`
  width: ${p => p.theme.sizes.width[1]}px;
  height: ${p => p.theme.sizes.height[1]}px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.sizes.width[7]}px;
  height: ${p => p.theme.sizes.height[2]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.accent};
  color: ${p => p.theme.colors.mainColor};
  font-weight: ${p => p.theme.fontWeights.middle};
  font-size: ${p => p.theme.fontSizes[2]}px;
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.text};
`;
