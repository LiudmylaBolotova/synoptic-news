import Header from "components/Header";
import BodyPage from "components/BodyPage";
import Footer from 'components/Footer';
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header />
      <BodyPage />
      <Footer/>
    </Container>
  );
};

// export default App;