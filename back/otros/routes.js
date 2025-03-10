import express from "express"
import { createUser, getAllUsers, updateUser, deleteUser } from "../controllers/users_controller.js"
import { createReview, getReviewsByMovie, updateReview, deleteReview } from "../controllers/reviews_controller.js"
import { createMovie, getAllMovies, getMovie, updateMovie, deleteMovie } from "../controllers/movies_controller.js"

const router = express.Router()

// Rutas de usuarios
router.post("/users/create", createUser) // Crear un nuevo usuario
router.get("/users/get", getAllUsers) // Ver todos los usuarios
router.put("/users/update/:id", updateUser) // Actualiza usuarios
router.delete("/users/delete/:id", deleteUser) // Eliminar un usuario

// Rutas de resenas
router.post("/reviews/create", createReview) // Crear nueva resena
router.get("/reviews/get/:movieId", getReviewsByMovie) // Ver resenas por pelicula
router.put("/reviews/update", updateReview) // Actualiza un usuario
router.delete("/reviews/delete/:id", deleteReview)  // Eliminar una resena

// Rutas de peliculas
router.post("/movies/create", createMovie) // Crear una nueva pelicula
router.get("/movies/get", getAllMovies) // Ver todas las peliculas
router.get("/movies/get/:id", getMovie) // Ver una peliculas
router.put("/movies/update/:id", updateMovie) // Actualiza una pelicula
router.delete("/movies/delete/:id", deleteMovie) // Eliminar una pelicula

export default router 
