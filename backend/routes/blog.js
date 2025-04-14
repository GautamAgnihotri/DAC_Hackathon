const express = require("express");
const pool = require("../db/dbConnection");
const createResult = require("../util/createResult");

const router = express.Router();

 // sending all blogs
router.get("/",(req,res)=>{
    const id = req.params.id;
       
        const sql = "select b.id,b.title,b.content,b.created_time, u.full_name,c.title FROM blogs as b join users as u ON b.user_id = u.id join categories as c ON b.category_id = c.id";
        pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
        })
    })

//sending blogs related to current user
router.get("/:id",(req,res)=>{
    
    const id = req.params.id;
    const sql = `select b.id,b.title as btitle,b.content,b.created_time, u.full_name,c.title as ctitle FROM blogs as b join users as u ON b.user_id = u.id join categories as c ON b.category_id = c.id WHERE b.user_id = ${id}`;
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})

// add new blog
router.post("/addBlog",(req,res)=>{

    const {title,contents,user_id,category_id} = req.body;
    if(!title || !contents || !user_id || !category_id){
        res.send(createResult.createErrorResult("title,contents,user_id and category_id is required"));
    } else{
        const sql = `INSERT INTO blogs (title, content, user_id, category_id) VALUES ('${title}','${contents}','${user_id}','${category_id}')`;

        pool.query(sql,(err,date)=>{
            res.send(createResult.createResult(err,date));
        })
    }
})
// delete blog
router.delete("/deleteBlog/:id",(req,res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM blogs WHERE ID = ${id}`;
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})

// edit blog
router.put("/editBlog/:id",(req,res)=>{
    const {title,content,category_id} = req.body;
    const {id} = req.params;
    const sql = `UPDATE blogs SET title = '${title}', content = '${content}', category_id = '${category_id}' WHERE id = ${id}`;
    pool.query(sql,(err,date)=>{
        res.send(createResult.createResult(err,date));
    })
})

// find blog 
router.post("/findBlog",(req,res)=>{
    const findString = req.body.findString;
    console.log(findString);
    const sql = `SELECT b.id,b.title as btitle,b.content,b.created_time, u.full_name , c.title as ctitle FROM blogs as b join users as u  ON b.user_id = u.id join categories as c ON b.category_id = c.id WHERE b.title LIKE '%${findString}%' OR b.content LIKE '%${findString}%'`;
    pool.query(sql,(err,data)=>{
        res.send(createResult.createResult(err,data));
    })
})
module.exports = router;

