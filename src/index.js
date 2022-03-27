const express = require("express");
const connect = require("./configs/db");
const app = express();

app.use(express.json());


// database




// controllers

const sectionControllers = require("./controllers/section_controll");
const authorControllers = require("./controllers/author_controll");
const bookControllers = require("./controllers/book_controll");


// route+model

app.use("/sections", sectionControllers);
app.use("/authors", authorControllers);
app.use("/books", bookControllers);




app.listen(4000, async () => {
  try {
    await connect();
    console.log("listening on port 4000");
  } catch (err) {
    console.log(err);

  }

  
});