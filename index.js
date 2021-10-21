const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
// 1
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({
    payload: {
      id,
    },
  });
});
// 2
app.get("/article/:language/:article", (req, res) => {
  const { language, article } = req.params;
  res.status(200).send({
    payload: {
      language,
      article,
    },
  });
});
// 3
app.get("/comment/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({
    payload: {
      id,
    },
  });
});
// 4
app.post("/user", (req, res) => {
  const {name, age} = req.body;
  res.status(200).send({
    payload: {
      name,
      age
    },
  });
});
// 5
app.post("/article", (req, res) => {
  const {title, category} = req.body;
  res.status(200).send({
    payload: {
      title,
      category
    },
  });
});
// 6
app.post("/category", (req, res) => {
  const {name} = req.body;
  res.status(200).send({
    payload: {
      name
    },
  });
});
// 7
app.put("/user", (req, res) => {
  const {name, age} = req.body;
  res.status(200).send({
    payload: {
      name,
      age
    },
  });
});
// 8
app.patch("/user", (req, res) => {
  const {id, name} = req.body;
  res.status(200).send({
    payload: {
      id,
      name
    },
  });
});
// 9
app.delete("/article", (req, res) => {
  const {id} = req.body;
  res.status(200).send({
    payload: {
      id,
    },
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
