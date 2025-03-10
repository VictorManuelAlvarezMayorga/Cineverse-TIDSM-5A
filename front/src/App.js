<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import moviesData from "./moviesData";

const MovieCategory = ({ title, movies }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <img key={index} src={movie.image} alt={movie.title} className="movie-poster" />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");

  // Filtrar películas por búsqueda
  const filteredCategories = moviesData.map(category => ({
    ...category,
    movies: category.movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  })).filter(category => category.movies.length > 0);

  return (
    <div className="app">
      {/* 🔍 Barra de búsqueda con imagen de fondo */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 🎬 Categorías de Películas */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <MovieCategory key={index} title={category.title} movies={category.movies} />
        ))
      ) : (
        <p className="no-results">No se encontraron películas</p>
      )}
    </div>
  );
=======
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
          <Card.Title>Formulario para regiatro de usuarios </Card.Title>
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
>>>>>>> 32c501bd8d38303ad038604f7521ffd0220bbaa1
}
export default App;
