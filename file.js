'use strict'
const express = require ('express');
const server = express ();
const Port = process.env.Port || 3000 ;

// server.use(express.static('./public'));

server.use(express.static('./public '));

server.get('/test' , (request, response)=> {
    response.send('your test worked');
});

server.get('/data',(request,response)=> {
let  friend =
[
    {name : 'fatima' },
    {name : 'groob  '}

]
response.json(friend);
});


server.listen(Port , () => console.log('working' , 3000));

