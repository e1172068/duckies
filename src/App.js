import { useState, useEffect } from "react"
import Header from "./components/Header"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";
import background from "./assets/img/rubber-ducks.jpg";


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
    return data
  }

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }

  // Ajouter un produit
  const addProduct = async (product) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
    const data = await res.json()

    setProducts([...products, data])
  }

  // Supprimer un produit
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    })

    setProducts(products.filter((product) => product.id !== id))
  }

  //Modifier un produit
  const editProduct = async (updatedProduct) => {
    const res = await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedProduct)
    })
    const data = await res.json()
    
    const updatedProducts = products.map((product) => 
      product.id === updatedProduct.id ? { ...updatedProduct } : product
    )

    setProducts(updatedProducts)
  }

  return (
    <div style={{height: "100%"}} className="bg-dark">
      <Header />
      <Routes>
        <Route path="/" exact element={
          <div style={{
            position: "relative",
            display: "flex",
            minHeight: "80vh",
            width: "100%",
            overflow: "hidden"
          }}>
            <img 
              alt=""
              src={`${background}`} 
              style={{
                maxWidth: "100%",
                position: "absolute",
                objectFit: "cover"
              }}
            ></img>
          </div>
        } />
        <Route path="/liste" element={
          <div className="bg-light">
            {products.length > 0 ? (
              <Products title={`Liste des produits`} products={products} onDelete={deleteProduct} onAdd={addProduct} onEdit={editProduct} />
              ) : (
                "Aucun produit enregistré"
            )}
          </div>
        } />
        <Route path="/a-propos" element={
          <div className="bg-light pb-3">
            <About />
          </div>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
