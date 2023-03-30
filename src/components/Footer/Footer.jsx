import { StyledFooter, StyledText, StyledLink } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        Powered by &nbsp;
        <StyledLink href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </StyledLink>
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
