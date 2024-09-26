let productos = require('../data/productos.json')


module.exports = {
    inicio: (req,res) => {
        let indexProductos = productos.filter(producto => {
            
           return  producto.id <=4
        })
        let indexProductos2 = productos.filter(producto => {
            
            return producto.id > 4 && producto.id<=8
         })
        return res.render('inicio',{productos,indexProductos,indexProductos2})
    },
    about: (req,res) => {
        return res.render('about')
    },
    contacto: (req,res) => {
        return res.render('contacto')
    }
}