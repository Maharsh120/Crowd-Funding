const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./index")

dotenv.config({ path: "./config.env" })

const PORT = process.env.PORT

// const db = process.env.DATABASE_URI.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
mongoose.connect("mongodb+srv://maharshmishra2030:mishra123@crowdfund.5ofwj8h.mongodb.net/?retryWrites=true&w=majority&appName=CrowdFund").then(() => console.log("Connection to database successful"))

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})