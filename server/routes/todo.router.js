const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM "tasks" ORDER BY "priority" DESC;`
    pool.query(sqlText)
    .then((result) => {
        console.log('Data retrieved from tasks SQL table', result);
        res.send(result.rows);
    })
    .catch ((error)=> {
        console.log(`Error in making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

// POST

// PUT

// DELETE

module.exports = router;
