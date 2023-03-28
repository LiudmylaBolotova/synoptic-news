import { Blocks } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Blocks height="80" width="80" />
    </StyledLoader>
  );
};

export default Loader;
