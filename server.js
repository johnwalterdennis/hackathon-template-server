require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS-enabled route" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Import Routes
const myControllerRoute = require("./routes/myControllerRoute");

//Mount Routes
app.use("api/myController", myControllerRoute);
