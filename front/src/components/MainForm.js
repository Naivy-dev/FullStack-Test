import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createInfo } from "../actions/info";
export default function MainForm(props) {
  const [infoData, setInfoData] = useState({
    nome: "",
    cep: "",
    rendaMensal: "",
    numDependentes: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMode("response");
    dispatch(createInfo(infoData));
  };

  return (
    <Form style={{ margin: "30px" }} onSubmit={handleSubmit}>
      <h2>Informações</h2>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome Completo"
            value={infoData.nome}
            onChange={(e) => setInfoData({ ...infoData, nome: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formCEP">
        <Form.Label>CEP</Form.Label>
        <Form.Control
          placeholder="Insira apenas números"
          value={infoData.cep}
          onChange={(e) => setInfoData({ ...infoData, cep: e.target.value })}
          required={true}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formRenda"
        value={infoData.rendaMensal}
        onChange={(e) =>
          setInfoData({ ...infoData, rendaMensal: e.target.value })
        }
        required={true}
      >
        <Form.Label>Renda Mensal</Form.Label>
        <Form.Control placeholder="Insira o valor em Reais" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formDependentes">
          <Form.Label>Número de dependentes</Form.Label>
          <Form.Control
            placeholder="Insira apenas números"
            value={infoData.numDependentes}
            onChange={(e) =>
              setInfoData({ ...infoData, numDependentes: e.target.value })
            }
            required={true}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
