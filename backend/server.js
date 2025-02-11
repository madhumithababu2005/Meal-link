const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Replace with your MySQL username
    password: 'Madhu@074',  // Replace with your MySQL password
    database: 'volunteer_db'  // Replace with your actual database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// Simple route to test the server
app.get('/', (req, res) => {
    res.send('Backend running on port 5000');
});

// Start the server
app.listen(5000, () => {
    console.log('Backend running on port 5000');
});
