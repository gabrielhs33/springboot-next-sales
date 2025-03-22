import { Product } from "@/app/models/products"

interface ProductTableProps{

    products: Array<Product>;
    onEdit: (product:Product) => void;
    onDelete: (product:Product) =>void;
}

export const ProductTable:React.FC <ProductTableProps> = ({

    products,
    onDelete,
    onEdit
}) =>{

    return(

        <table className="table is-striped is-hoverable">
          <thead>
                <tr>
                    <th>Código</th>
                    <th>SKU</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
          </thead>
          <tbody>
            {
                products.map(product => <ProductRow onDelete={onDelete} 
                                                    onEdit = {onEdit} 
                                                    key={ product.id } 
                                                    product={product}/>
                            )
            }
          </tbody>
        </table>
    )
}

interface ProductRowProps{

    product:Product;
    onEdit: (product:Product) => void;
    onDelete: (product:Product) =>void;
}

const ProductRow:React.FC <ProductRowProps> = ({
    product,
    onEdit,
    onDelete
}) =>{

    return(
        <tr>
            <td>{product.id}</td>
            <td>{product.sku}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={e => onEdit(product)} className="button is-success is-rounded is-small">Editar</button>
                <button onClick={e => onDelete(product)} className="button is-danger is-rounded is-small">Deletar</button>
            </td>
        </tr>
    )
}