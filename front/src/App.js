import { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";


const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const onChangeRegister = (e) => {
    e.preventDefault()
    const nData = data
    nData[e.target.name] = e.target.value;
    setData(nData)
    console.log(nData)
  }


  const onSubmit = () => {
    console.log(data)
  }
  //          <Card >
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "1000rem" }} className="shadow-lg">
        <Card.Body className="p-4">
          <Card className="">
            <Card.Title>Formulario para regiatro de usuarios </Card.Title>
          </Card>


          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control name="last_name" onChange={onChangeRegister} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gmail</Form.Label>
              <Form.Control name="gmail" type="gmail" onChange={onChangeRegister} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contrasena</Form.Label>
              <Form.Control name="contrasena" type="password" placeholder onChange={onChangeRegister} />
            </Form.Group>
            <Button className="mb-5, mt-3" type="submit">Registrate</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default App;
