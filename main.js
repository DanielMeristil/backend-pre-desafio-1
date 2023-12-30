class ProductManager{
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(titulo, nombre, imagen, descripcion, precio, code, stock){
        ProductManager.id ++ 
     this.products.push({titulo, nombre, imagen, descripcion, precio, code, id:ProductManager.id, stock});
    }

    getProduct(){
        return this.products;
    }

    getProductById(id){
        if(this.products.find((productos)=> productos.id === id)){
            console.log("Not fund")
        } else{
            console.log("Existe");
        }
    }
}
const productos = new ProductManager

console.log(productos.getProduct());

productos.addProduct(' television', ' sony', 'no img', ' television led 24 pulgadas', ' 200', ' abc122', '7', ' 2');
productos.addProduct('computadores', 'HP 2T 8RAM','no img', 'la super maquina poderosa', '500', 'abc123', '9', '5');
productos.addProduct('lavadora', 'samsung', 'no img', 'una lavadora robotica', '1000', 'abc124', '5', '0')

console.log(productos.getProduct());

productos.getProductById(9);