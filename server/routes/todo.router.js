const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM "tasks" ORDER BY "complete";`
    pool.query(sqlText)
    .then((result) => {
        console.log('Data retrieved from tasks SQL table');
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
    const sqlText =     `INSERT INTO "tasks" ("task")
                        VALUES ($1);`;
    pool.query(sqlText, [task.task])
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
router.put('/:id', (req,res) => {
    console.log('Put /todo id:', req.params);
    const queryText = 'UPDATE "tasks" SET "complete" = NOT "complete" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
    .then((error) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT /todo', error);
        res.sendStatus(500);
    })
})


// DELETE
router.delete('/:id', (req, res) => {
    console.log('DELETE /todo id:', req.params);
    const queryText = 'DELETE FROM "tasks" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in DELETE /todo', error);
        res.sendStatus(500);
    })
})

module.exports = router;
