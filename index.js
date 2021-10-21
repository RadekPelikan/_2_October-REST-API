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
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});
// 5
app.post("/article", (req, res) => {
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});
// 6
app.post("/category", (req, res) => {
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});
// 7
app.put("/user", (req, res) => {
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});
// 8
app.patch("/user", (req, res) => {
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});
// 9
app.delete("/article", (req, res) => {
  const { payload } = req.body;
  res.status(200).send({
    payload,
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
