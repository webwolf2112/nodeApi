import express from 'express';

const app = express();
const PORT = 8090;

app.get('/', (req, res) => {
  res.send(`Node and Express Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
