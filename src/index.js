const app = require('express')();

app.get('/', (req, res) => {
  console.log('request received');

  return res.json({ message: 'Docker is easy 🐳, Something here' });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
