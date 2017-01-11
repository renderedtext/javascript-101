const express = require('express');
const bodyParser = require('body-parser');
const Hero = require('./hero');

const app = express();

app.use(bodyParser.json());

const heroes = [
  new Hero('Zed', 'Assaissin', 600, 0, 65),
  new Hero('Sona', 'Support', 500, 300, 50),
  new Hero('Maplhite', 'Tank', 700, 250, 55),
  new Hero('Lucian', 'Marksman', 550, 250, 60),
  new Hero('Cassiopeia', 'Mage', 550, 300, 55)
];

app.get('/heroes', (req, res) => {
  res.send(heroes);
});

app.post('/hero', (req, res) => {
  const hero = req.body;
  console.log(hero);
  heroes.push(new Hero(hero.name,
                       hero.type,
                       hero.health,
                       hero.mana,
                       hero.dmg));
  res.send('added');
});

app.delete('/hero/:index', (req, res) => {
  heroes.splice(req.params.index, 1);
  res.send('deleted');
});

app.listen(3001, () => {
  console.log('app listening on port 3001');
});


