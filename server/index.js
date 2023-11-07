
const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on port $PORT`);
});