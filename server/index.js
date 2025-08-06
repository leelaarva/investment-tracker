const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'your_pg_user',
    host: 'localhost',
    database: 'investment_app',
    password: 'your_password',
    port: 5432
});

app.get('/', (req, res) => {
    res.send('API Running');
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
