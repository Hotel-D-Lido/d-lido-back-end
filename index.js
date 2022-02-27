const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const exampleRoutes = require('./routes/example.route');

app.get('/', (req, res) => {
    res.send('Hola, Mundo!');
});

app.use('/example', exampleRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})