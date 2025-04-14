const express = require("express");
const pool = require("../db/dbConnection");
const createResult = require("../util/createResult");
const router = express.Router();

// get all categories
router.get("/",(req,res)=>{

    const sql = "SELECT * FROM categories";
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})


// add category 
router.post("/addCategory",(req,res)=>{
    const {title,description} = req.body;
    if(!title || !description){
        res.send(createResult.createErrorResult("title and description is required"));
    } else{
        const sql = `INSERT INTO categories (title,description) VALUES ('${title}','${description}')`;

        pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
    }
    
})

router.put("/updateCategory/:id",(req,res)=>{
    console.log("update category req hit");
    const {id} = req.params;
    const {title,description} = req.body;
    if(!title || !description){
        res.send(createResult.createErrorResult("title and description is required"));
        
    } else{
        const sql = `UPDATE categories SET title = '${title}', description = '${description}' WHERE id = ${id}`;

        pool.query(sql,(err,data)=>{
            res.send(createResult.createResult(err,data));
        })
    }
   
})

// delete category
router.delete("/deleteCategory/:id",(req,res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM categories WHERE id = ${id}`;

    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})


module.exports = router;