const express = require("express");
const pool = require("../db/dbConnection");
const createResult = require("../util/createResult");

const router = express.Router();

router.get("/",(req,res)=>{
    const sql = "SELECT * FROM blogs";
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})

module.exports = router;

