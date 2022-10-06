const express  = require("express");
const connectDB = require("./configuration/connexionMongo");
const departRoutes = require('./routes/departRoutes')
const userRoutes = require('./routes/userRoutes')
const port = 4000
connectDB()
const app = express();
const cors = require('cors')



app.use(cors());
app.use(express.json())
app.use(departRoutes)
app.use("/users",userRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`));