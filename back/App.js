import express from "express" 
import mongoose from "mongoose" 
import router from "./otros/routes.js" 

const app = express() 
app.use(express.json()) 

mongoose.connect("mongodb://localhost:27017/Josue")
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch((error) => console.error("Error conectando a MongoDB:", error)) 

app.use("/", router) 

app.listen(3000, () => {
  console.log("Se esta ejecutando correctamente el servidor") 
})

