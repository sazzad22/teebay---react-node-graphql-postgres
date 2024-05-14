
// require("dotenv").config();

import {app} from "./app.js"

//Server port
const port = process.env.PORT || 8008;



app.listen(port, () => {
  console.log(`User server is running on port ${port}`);
});
