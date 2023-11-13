const app = require("./app.js");

const PORT = process.env.PORT || 3434;

app.listen(PORT, () => {
    console.log(`Movies live on port: ${PORT}`)
});

