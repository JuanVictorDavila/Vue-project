require('dotenv').config();
const app = require('./app');
const PORT = process.env.API_PORT || 3000;

app.listen(3000, () => console.log(`Server start PORT ${PORT}`));
