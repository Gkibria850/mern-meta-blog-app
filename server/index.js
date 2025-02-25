const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

require('dotenv').config();

// middleware
app.use(express.json())
app.use(cors())
// HTTP REQUEST METHOD GET, POST, PUT, DELETE
// routes
const blogRoutes = require('./src/routes/blog.routes')
app.use('/blogs', blogRoutes)

// mongoose configuration
async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
        res.send('MERN Meta blog server is running....')
      })
   
  }
  main().then(()=> console.log("Mongodb connected Successfully")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})