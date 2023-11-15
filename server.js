const app = require("./app.js");

require("dotenv").config();
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Movies live on port: ${PORT}`)
});

