import {
  StyledTitle,
  StyledHeader,
  StyledLogo, StyledThermometer,
} from './Header.styled';
import thermometer2 from '../Images/thermometer2.png';

const Header = () => {
    return (
      <StyledHeader>
        <StyledLogo>
          <StyledThermometer src={thermometer2} alt="logo" />
        </StyledLogo>
        <StyledTitle>Synoptic News</StyledTitle>
      </StyledHeader>
    );
}

export default Header;