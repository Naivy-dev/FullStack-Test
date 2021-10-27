import React from "react";
import { Card, ListGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function MainResponse(props) {
  const info = useSelector((state) => state.info);
  console.log(info);
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Card.Title>
          <h2>Informações</h2>
        </Card.Title>
        <ListGroup>
          <ListGroupItem>
            <Card.Title>Nome</Card.Title>
            {info.nome}
          </ListGroupItem>
          <ListGroupItem>
            <Card.Title>Endereço</Card.Title>
            <ListGroup>
              <ListGroupItem>CEP:</ListGroupItem>
              <ListGroupItem>Logradouro: </ListGroupItem>
              <ListGroupItem>Bairro:</ListGroupItem>
              <ListGroupItem>Localidade: </ListGroupItem>
              <ListGroupItem>UF: </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <ListGroupItem>
            <Card.Title>Renda per Capita</Card.Title>
            {info.rendaPerCapita}
          </ListGroupItem>
        </ListGroup>
        <Col style={{ marginTop: "10px" }}>
          <Button
            variant="primary"
            type="submit"
            onClick={props.setMode.bind(null, "form")}
          >
            Voltar
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}
