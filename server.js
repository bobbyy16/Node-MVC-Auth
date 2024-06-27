const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
          <html>
            <head><title>Success!</title></head>
            <body>
              <h1>You did it!</h1>
              <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
            </body>
          </html>
        `);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${8080}/`);
});
