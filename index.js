const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: 'rajib', email: 'rajib@gmail.com', phone: '017000565412' },
  { id: 2, name: 'Sajib', email: 'sajib@gmail.com', phone: '017000565412' },
  { id: 3, name: 'Anonta', email: 'anonta@gmail.com', phone: '017000565412' },
  { id: 4, name: 'Pranto', email: 'pranto@gmail.com', phone: '017000565412' },
  { id: 5, name: 'Riki', email: 'riki@gmail.com', phone: '017000565412' },
];

app.get('/', (req, res) => {
  res.send('I am excited to learn node.');
});

app.get('/users', (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
  //res.send(users);
  console.log(req.query.search);
});

// <---------- app.METHOD  post --------->
app.post('/users', (req, res) => {});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.send(JSON.stringify(newUser));
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post!!', req.body);
  res.send(JSON.stringify(newUser));
  //res.json(newUser);
});

// dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log('Listening to port', port);
});
