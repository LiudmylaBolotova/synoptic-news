import Header from 'components/Header/Header';
import BodyPage from 'components/BodyPage/BodyPage';
import Footer from 'components/Footer/Footer';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Header />
      <BodyPage />
      <Footer />
    </Container>
  );
};

export default App;
