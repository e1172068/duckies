import { MdDeleteForever, MdEditNote } from "react-icons/md"

const Product = ({ product, onDelete, showEdit }) => {
    return (
        <tr>
            <td style={{whiteSpace: "nowrap"}}>{product.name}</td>
            <td>{product.description}</td>
            <td style={{whiteSpace: "nowrap"}}>{product.price}</td>
            <td style={{whiteSpace: "nowrap"}}>{product.category}</td>
            <td style={{whiteSpace: "nowrap"}}>
                <MdEditNote style={{cursor: "pointer"}} onClick={() => showEdit(product)}/>
                <MdDeleteForever onClick={() => onDelete(product.id)} style={{cursor: "pointer"}} />
            </td>
        </tr>
    )
}

export default Product