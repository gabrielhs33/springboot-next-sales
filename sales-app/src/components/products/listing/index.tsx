import { Layout } from "@/components/layout"
import Link from "next/link"
import { ProductTable } from "./table"
import { Product } from "@/app/models/products"
import useSWR from "swr"
import { httpClient } from 'app/http'
import { AxiosResponse } from "axios"
import { Loader } from "@/components/common"

export const ProductListing: React.FC = () => {

    const products: Product[] = []
    const { data:result, error } = useSWR<AxiosResponse<Product[]>>('api/products', url => httpClient.get(url))
    const edit = (product:Product) => {

        console.log(product)
    }

    const delet = (product:Product) =>{
        console.log(product)
    }
    
    return(
        <Layout title="Listagem Produtos">
            <Link href="/registrations/products">
                <button className="button is-warning">Novo</button>
            </Link>
            <br />
            <br />
            <Loader show={!result}/>
            <ProductTable onEdit={edit} onDelete={delet} products={result?.data || []}/>

           
        </Layout>
    )
}