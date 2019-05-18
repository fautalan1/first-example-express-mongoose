const app = require('./src/server.js');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`);
});
