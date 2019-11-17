'use strict'
const express = require ('express');
const server = express ();
const PORT = process.env.PORT || 3000 ;

// server.use(express.static('./public'));

server.use(express.static('./test'));

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


server.listen(PORT , () => console.log('working' , PORT));

