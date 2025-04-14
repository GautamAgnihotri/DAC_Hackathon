const express = require("express");
const pool = require("../db/dbConnection");
const createResult = require("../util/createResult");
const router = express.Router();

router.get("/",(req,res)=>{

    const sql = "SELECT * FROM categories";
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})

router.post("/addCategory",(req,res)=>{
    const {title,description} = req.body;
    const sql = `INSERT INTO categories (title,description) VALUES ('${title}','${description}')`;

    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})


module.exports = router;