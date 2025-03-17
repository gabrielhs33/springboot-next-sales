import { Layout } from "@/components/layout"
import Link from "next/link"
import { ProductTable } from "./table"
import { Product } from "@/app/models/products"

export const ProductListing: React.FC = () => {

    const products: Product[] = [{
        id:"1",sku:"sadsaas",name:"nadsaas",price:250,
        
    },
    {
        id:"1",sku:"sadsaas",name:"nadsaas",price:250,
        
    }]

    return(
        <Layout title="Listagem Produtos">
            <Link href="/registrations/products">
                <button className="button is-warning">Novo</button>
            </Link>
           
            <br />
            <ProductTable products={products}/>

           
        </Layout>
    )
}