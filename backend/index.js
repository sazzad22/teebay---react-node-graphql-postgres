const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

//Server port
const port = process.env.PORT || 8000;

//database connection
mongoose
  .connect(process.env.DB_URI, {
    dbName: "UserDatabase",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("User db Connected");
  });

app.listen(port, () => {
  console.log(`User server is running on port ${port}`);
});
