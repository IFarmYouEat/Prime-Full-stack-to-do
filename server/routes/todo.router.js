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
router.post('/',(req, res) => {
    const task = req.body;
    const sqlText =     `INSERT INTO "tasks" ("task", "priority"
                        VALUES (S1, S2);`;
    pool.query(sqlText, [task.task, task.priority])
        .then((result) => {
            console.log('Added task to database', task);
            res.sendStatus(201);
        })
        .catch ((error) =>{
            console.log(`Error sending task to database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// PUT

// DELETE

module.exports = router;
