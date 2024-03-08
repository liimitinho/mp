const express = require('express');

const app = express();

// middleware integrado
app.use(express.json());

// middle de app
app.use(function(req, res, next){
    console.log("Data: ", new Date());
    console.log(req.url);
    console.log(red.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    next();
});

// middleware de rota
app.get("/", function(req, res){
    res.send("Ola"); //status 200

});

app.post("/", function(req, res){
    res.status(201).send("Criado com sucesso"); //status 201
    console.log(req.body);

});

app.delete("/", function(req, res){
    throw new Exception();

});

app.put("/", function(rec, res){
    res.json({status: "200", message: "sucesso"});
});

app.use(function(error, req, res, next){
    res.status(400).send("deu rui!");
})


app.listen(3000, function() {
    console.log("API está ON!");
});

module.exports = app;
