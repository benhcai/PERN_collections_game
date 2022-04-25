const port = require("../bin/serverConfig");
const app = require("./index");

app.listen(port, () => console.log(`listening on port ${port}`));
