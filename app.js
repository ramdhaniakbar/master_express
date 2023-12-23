const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Successfully running.",
  })
})

// require("./routes/user")(app)

const PORT = process.env.PORT

app.listen(PORT || 8001, () => {
  console.log(`Server is running on port ${PORT}`)
})
