const app = require("./app.js");

const PORT = process.env.PORT || 1313;

app.listen(PORT, () => {
    console.log(`Movies live on port: ${PORT}`)
});

