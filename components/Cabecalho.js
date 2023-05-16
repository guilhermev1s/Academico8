import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

const Cabecalho = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='Nav-link' href='/cursos'>cursos</Nav.Link>
            <Nav.Link className='Nav-link' href='/disciplinas'>Disciplinas</Nav.Link>
            <Nav.Link className='Nav-link' href='/alunos'>Alunos</Nav.Link>
            <Nav.Link className='Nav-link' href='/professores'>Professores</Nav.Link>
            <Nav.Link className='Nav-link' href='/turmas'>Turmas</Nav.Link>
            <Nav.Link className='Nav-link' href='/salas'>salas</Nav.Link>
            <Nav.Link className='Nav-link' href='/semestres'>semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho