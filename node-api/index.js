var express = require('express');
var request = require('request');
var app = express()

const recent_items_url = "https://api.backpackbang.com/api/v1/items/recent-items?offset=0";
const popular_url ="https://api.backpackbang.com/api/v1/promotions/popular?offset=0";
const top_picks_url = "https://api.backpackbang.com/api/v1/promotions/top-picks?offset=0";

app.get('/',(req,res)=>{
    res.send('Welcome to API routes');
});

//api endpoint for
app.get('/recent',(req,res)=>{
    request(recent_items_url,(error, response, body)=>{
        if(!error){
            if(response.statusCode === 200 && response){
                res.send({data:body,status:true});
            }else{
                res.send({data: [],status:false});
            }
        }else{
            res.send({data:[],status:false});
        }
    })
});


app.listen(5000,()=>{
    console.log('Server running successfully at 5000');
})