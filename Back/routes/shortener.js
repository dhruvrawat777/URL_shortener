const express=require('express');
const router=express.Router();
const db_functions=require('../database/db_functions');
const { generateshort } = require('../database/db_functions');

/* router.post('/',(req,res,next)=>{
    console.log('in route');
    db_functions.fetchAll()
    .then(([rows,fieldData])=>{
        res.json({msg:rows});
    })
    .catch((error)=>{
        console.log(error);
    })
    console.log(req.body.argurl);
    
}); */

router.post('/',(req,res,next)=>{
    const shorturl=generateshort();
    console.log("inside middleware");
    db_functions.insert(shorturl,req.body.argurl)
        .then(()=>{
            res.json({shorturl:shorturl});
        })
        .catch((error)=>{
            console.log(error);
        })
});

router.get('/',(req,res,next)=>{
    console.log('getting');
    res.send('hi');
});
module.exports=router;