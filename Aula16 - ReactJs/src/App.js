import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Media, Row, Col, Breadcrumb, Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="Conteudo">
     
      <header className="App-content">
        <div className="topo">Topo do Site em React </div>
        
      </header>
      <article>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Quem Somos</Breadcrumb.Item>
              <Breadcrumb.Item>Fotos</Breadcrumb.Item>
              <Breadcrumb.Item>Contato</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        </Container>

        <Media>
          <img width="" height="" className="" src="../img/imgem.png" alt="Esta é uma imagem" />
        </Media>
        <Card style={{color:"#aba", marginBottom:"2%"}}>
          <Card.Img src="https://picsum.photos/200/50" />
          <Card.Body>
          <Card.Title>
            Este é um exemplo de Card
          </Card.Title>
          <Card.Text>
            Este será um texto do Card, que explica a imagem
          </Card.Text>
            <Button variant="success">Este é um btn</Button>
          </Card.Body>
        </Card>
        


      </article>

      <footer>
        Rodapé
      </footer>
    
    
    </div>
  );
}

export default App;
