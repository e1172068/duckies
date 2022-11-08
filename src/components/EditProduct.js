import { useState } from "react"

const EditProduct = ({ onEdit, product, closeEditForm }) => {
    const [name, setProduct] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    const [id, setId] = useState(product.id)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!(name && description && price && category)) {
            alert("Veuillez remplir tous les champs")
        } else {
            onEdit({ name, description, price, category, id })
        }
    }

    return (
        <div className="container pt-5">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nom du produit</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setProduct(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Prix</label>
                    <input className="form-control" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Catégorie</label>
                    <input className="form-control" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <input className="btn btn-success" type="submit" value="Soumettre"/>
                <input className="btn btn-dark" type="button" value="Fermer" onClick={closeEditForm} />
            </form>
        </div>
    )
}

export default EditProduct