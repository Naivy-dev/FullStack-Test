import React from "react";
import { Card, ListGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function MainResponse(props) {
  const info = useSelector((state) => state.info);
  console.log(info);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const goBack = () => {
    props.setMode.bind(null, "form");
    refreshPage();
  };

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Card.Title>
          <h2>Informações</h2>
        </Card.Title>
        {info.length > 0 && (
          <ListGroup>
            <ListGroupItem>
              <Card.Title>Nome</Card.Title>
              {info[0].nome !== undefined && info[0].nome}
            </ListGroupItem>
            <ListGroupItem>
              <Card.Title>Endereço</Card.Title>
              <ListGroup>
                <ListGroupItem>CEP: {info[0].endereco.cep}</ListGroupItem>
                <ListGroupItem>
                  Logradouro: {info[0].endereco.logradouro}
                </ListGroupItem>
                <ListGroupItem>Bairro: {info[0].endereco.bairro}</ListGroupItem>
                <ListGroupItem>
                  Localidade: {info[0].endereco.localidade}
                </ListGroupItem>
                <ListGroupItem>UF: {info[0].endereco.uf}</ListGroupItem>
              </ListGroup>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Title>Renda per Capita</Card.Title>
              R${info[0].rendaPerCapita}
            </ListGroupItem>
          </ListGroup>
        )}
        <Col style={{ marginTop: "10px" }}>
          <Button variant="primary" type="submit" onClick={goBack}>
            Voltar
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}
