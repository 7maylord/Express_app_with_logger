const express = require('express');
const router = express.Router();


let authors = [
  { id: 1, name: 'J.K Rowling' },
  { id: 2, name: 'Jane Austen' },
];

// CRUD Endpoints
router.get('/', (req, res) => {
  res.json(authors);
});

router.post('/', (req, res) => {
  const newAuthor = req.body;
  authors.push(newAuthor);
  res.json(newAuthor);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedAuthor = req.body;
  authors = authors.map(author => (author.id === +id ? updatedAuthor : author));
  res.json(updatedAuthor);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  authors = authors.filter(author => author.id !== +id);
  res.sendStatus(204); // No Content
});

module.exports = router;
