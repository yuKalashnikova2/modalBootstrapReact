import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button';

export function App() {
  return (
    <Container>
      <Header></Header>
      <Button data-bs-toggle="modal" data-bs-target="#exampleModal">Открыть модальное окно</Button>
      <Footer></Footer>
    </Container>

  );
}
