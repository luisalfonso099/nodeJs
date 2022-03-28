const express = require('express');
const res = require('express/lib/response');
const app = express();

const puerto = 3000;

// motor de plantilla

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


app.use(express.static(__dirname + "/public")); 

app.get('/',(req,res)=>{
    res.render('index', {titulo: 'Mi titulo dinamico'})
})
app.get('/servicios',(req,res)=>{
    res.render('servicios', {tituloServicios: 'Este es mi dato dinamico'})
})


app.listen(puerto, ()=>{
    console.log('servido a su servicion en,', puerto);
})

app.use((req,res)=>{
    res.status(404).render('404')
})