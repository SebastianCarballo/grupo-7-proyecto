const livereload = require("livereload");
const liveReloadServer = livereload.createServer();


const connectLivereload = require("connect-livereload");
const express = require('express');
const path = require('path');
const { connect } = require("http2");
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname,'public')));

liveReloadServer.watch(path.join(__dirname,'public'));

app.use(connectLivereload());


app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalle.html')));
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/contacto',(req,res) => res.sendFile(path.resolve(__dirname,'views','contacto.html')));
app.get("*",(req,res) => res.sendFile(path.resolve(__dirname, 'views','404.html')))

liveReloadServer.server.once("connection",() => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 100);
});

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`));