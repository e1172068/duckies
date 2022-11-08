import { useState } from "react"

const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!(name && description && price && category)) {
            alert("Veuillez remplir tous les champs")
        } else {
            onAdd({ name, description, price, category })
            setName("")
            setDescription("")
            setPrice("")
            setCategory("")
        }
    }

    return (
        <div className="container pt-5">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nom du produit</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
            </form>
        </div>
    )
}

export default AddProduct