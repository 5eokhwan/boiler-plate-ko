const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Worldd!~!~!~!~"));

app.post("/register", (req, res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어줌
  const user = new User(req.body); //bodyParser가 있어서 가능한것

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example .... ${port}`));
