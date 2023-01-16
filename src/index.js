import express from "express"
import database from "./db.js"
import PacienteRouter from "./router/PacienteRouter.js"

var PORT = 8000

await database.sync()

const app = express()
app.use(express.json())
app.use(PacienteRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
