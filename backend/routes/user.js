const express = require("express");
const pool = require("../db/dbConnection");
const createResult = require("../util/createResult");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("get users");
})

router.post("/signup",(req, res)=>{
    const {full_name, email, phone_no, password} = req.body;
    if(!full_name || !email || !phone_no || !password){
        res.send(createResult.createErrorResult("full_name, email, phone_no and password is required"));
    } else{
        const sql = `INSERT INTO users (full_name, email, phone_no, password) VALUES ('${full_name}', '${email}', '${phone_no}', '${password}')`;

        pool.query(sql, (err, result)=>{
        res.send( createResult.createResult(err, result));
    })
    }
    
})

router.post("/signin",(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.send(createResult.createErrorResult("email and password is required"));
    } else{
        const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
        pool.query(sql, (err, result)=>{
        res.send(createResult.createResult(err, result));
    })
    }
    
})

module.exports = router;