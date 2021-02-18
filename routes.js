const express = require("express");
const jellyBeans = express.Router();
const jellyBeansArray = [

        { style: "Apple", rating: 7 },  
        { style: "Licorice", rating: 0 },
        { style: "Cherry", rating: 9 },  
];

jellyBeansArray.get("/jelly-beans",(req,res)=>{res.json(jellyBeansArray);
});

jellyBeansArray.get("/jelly-beans/:style",(req,res)=>{
    const jellyBean = jellyBeansArray.find(jellyBeansArray => jellyBeansArray.style === req.params.style);

if(jellyBean){res.status(404).json("Not Found");
} else{
    res.json(jellyBean);
});
jellyBeansArray.get("/jellyBeans-search",(req,res)=>{
    let rating = parseInt(req.query.minRating);
    let distance = [];
    for(let jellyBean of jellyBeans){
        if(jellyBean.rating <= rating){distance.push(jellyBean);}
    }
    res.json(distance);
});
module.exports= jellyBeans;

