const express = require("express");
const db_name = "cakedb"
const cors = require("cors");

const app = express();

console.log("server.js is running")

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/client/dist/client"))

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

require("./server/utils/mongoose")(db_name);
require("./server/utils/routes")(app);

app.listen(8000, console.log("Listening on port 8000"));