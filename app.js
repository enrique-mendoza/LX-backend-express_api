const express = require('express');

const app = express();
const port = 3000;

// we're going to use json
app.use(express.json());

// HTTP METHODS
// GET method 
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);

    const explorer1 = { id: 1, name: 'Enrique1' }
    const explorer2 = { id: 2, name: 'Enrique2' }
    const explorer3 = { id: 3, name: 'Enrique3' }
    const explorer4 = { id: 4, name: 'Enrique4' }
    const explorer5 = { id: 5, name: 'Enrique5' }

    const explorer = [explorer1, explorer2, explorer3, explorer4, explorer5];

    res.status(200).json(explorer);
});

// GET method 
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);

    const explorer = { id: 1, name: 'Enrique' }

    res.status(200).json(explorer);
});

// POST method 
app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`);

    const requestBody = req.body; // params for client

    res.status(201).json({ message: 'Created' });
});

// PUT method 
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);

    const requestBody = req.body; // params for client

    res.status(200).json({ message: 'Updated!' });
});

// DELETE method
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);

    const requestBody = req.body; // params for client

    res.status(200).json({ message: 'Deleted' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
