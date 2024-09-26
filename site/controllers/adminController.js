const fs = require('fs')
const productos = require("../data/productos.json");

const path = require('path')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')




    
module.exports = {
listar: (req,res) => {
        return res.render('admin/listar', {
            productos

        })
    },
    crear:(req,res) => {
        return res.render('admin/crear')
    },
    editar:(req,res) => {
        id = +req.params.id
       let categoria =["skates","longboards","accesorios","partes"]
       let marca = ["Element","Lab","Kalima","Ace shcok","RINGS ACE WAX","WOODOO","REDWINGS","BONES KOWALSKI","DATER"]
        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        }) 
        /*return res.send(producto) Comprobar que esta llegando bien el elemento*/      


       return res.render('admin/editar',{producto,categoria,marca})
    },
    actualizar:(req,res)=>{
    

        const idParams = +req.params.id
        const { marca, titulo, Categoria, precio, descuento, stock, descripcion } = req.body

        productos.forEach(producto => {
            if (producto.id === idParams) {
                producto.marca = marca
                producto.titulo = titulo
                producto.categoria = Categoria
                producto.precio = +precio
                producto.descuento = +descuento
                producto.stock = +stock
                producto.descripcion = descripcion
            }
        })
        guardar(productos)
            return res.redirect('/administrador/listar')

    },
    tienda: (req,res)=>{
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body

        let productoNuevo= {
            id:productos[productos.length - 1].id + 1,
            marca:Marca,
            titulo:Titulo,
            categoria:Categoria,
            precio:Precio,
            descuento:Descuento,
            stock:Stock,
            descripcion:Descripcion,
            imagenes: "default-image.png"
        }
        productos.push(productoNuevo)
        guardar(productos)
        return res.redirect('/administrador/listar')
    },
    eliminar: (req, res) => {
        idParams = +req.params.id

       
        let productosModificados = productos.filter(producto => producto.id !== idParams)
        guardar(productosModificados)

        return res.redirect('/administrador/listar')
    }
    }

