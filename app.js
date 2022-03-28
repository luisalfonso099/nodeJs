const express = require('express');
const res = require('express/lib/response');
const app = express();



const puerto = process.env.PORT || 3000;

//Coneccion a base de datos

const mongoose = require('mongoose');


const dbName = 'veterinaria'
const password = 'Alfonso.1994'
const uri = `mongodb+srv://LuisPrueba:${password}@cluster0.wpgte.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true,}).then( () => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }


// motor de plantilla

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')




app.use(express.static(__dirname + "/public")); 



//  Rutas 
app.use('/', require('./router/rutasWeb'))
app.use('/mascotas', require('./router/mascotas'))



app.listen(puerto, ()=>{
    console.log('servido a su servicion en,', puerto);
})

app.use((req,res)=>{
    res.status(404).render('404')
})