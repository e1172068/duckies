import { useState } from "react"
import Product from "./Product"
import Button from "./Button"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"


const Products = ({ products, onDelete, title, showAddForm, onAdd, onEdit }) => {
    const [showAddProduct, setShowAddProduct] = useState(false)
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [productToUpdate, setProductToUpdate] = useState("")

    const toggleAddForm= () => {
        if (showEditProduct) {
            setShowEditProduct(false)
        }
        setShowAddProduct(!showAddProduct) 
    }

    const toggleEditForm = (product) => {
        setProductToUpdate(product)
        setShowEditProduct(true)
        setShowAddProduct(false)
    } 

    const closeEditForm = () => {
        setShowEditProduct(false)
    }

    return (
        <div className="pt-5 pb-5 container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>{ title }</h1>
                <Button btnType={showAddForm ? "btn-dark" : "btn-warning"}  text={showAddForm ? "Fermer" : "Ajouter"} onClick={ toggleAddForm } />
            </div>
            {showAddProduct && <AddProduct onAdd={onAdd} />}
            {showEditProduct && <EditProduct key={productToUpdate.id} onEdit={onEdit} closeEditForm={closeEditForm} product={productToUpdate}/>} 
            <table disabled className="table table-warning table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <Product key={product.id} product={product} onDelete={onDelete} showEdit={toggleEditForm}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products