import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import AddTask from './components/AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskList from './components/TaskList';

function App() {
  return (
    <Container>
      <Header />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="6">
        <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
