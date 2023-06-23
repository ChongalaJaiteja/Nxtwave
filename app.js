const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
const dbPath = path.join(__dirname, "userData.db");
let db = null;
app.use(express.json());
const initalizeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Started");
    });
  } catch (e) {
    console.log(`Db Error ${e.message}`);
  }
};
initalizeDbAndServer();

//api-1

app.post("/register/", async (request, response) => {
  const { username, name, password, gender, location } = request.body;
  console.log(username,name,password);
});
