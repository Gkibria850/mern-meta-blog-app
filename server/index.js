const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

require('dotenv').config();


// HTTP REQUEST METHOD GET, POST, PUT, DELETE

//mongoose gkibria99999  1HTgzpCYk2ZoYAn1
//mongodb+srv://gkibria99999:1HTgzpCYk2ZoYAn1@mern-meta-blog-app.ph8fb.mongodb.net/?retryWrites=true&w=majority&appName=mern-meta-blog-app

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