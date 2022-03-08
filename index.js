const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const employeeRoutes = require('./routes/employee.route');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola, Mundo!');
});

app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
