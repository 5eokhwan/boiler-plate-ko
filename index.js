const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sh:m80803@boilerplate.xmc4z.mongodb.net/boilerplate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example .... ${port}`));
