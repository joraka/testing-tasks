const app = require("./app");

const port = 3131;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
