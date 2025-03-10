import mongoose from "mongoose" 

const review_schema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true }, // Referencia a la película
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Referencia al usuario
  rating: { type: Number, required: true, min: 0, max: 10 }, // Calificación del 0 al 10
  comment: { type: String, required: false }, // Comentario opcional
}) 

const Review = mongoose.model("Review", review_schema) 

export default Review 
