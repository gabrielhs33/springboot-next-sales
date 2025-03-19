import { Layout } from "@/components/layout"
import Link from "next/link"
import { ProductTable } from "./table"
import { Product } from "@/app/models/products"
import useSWR from "swr"
import { httpClient } from 'app/http'
import { AxiosResponse } from "axios"

export const ProductListing: React.FC = () => {

    const products: Product[] = []
    const { data:result, error } = useSWR<AxiosResponse<Product[]>>('api/products', url => httpClient.get(url))

    if (!result) return <Layout title="Carregando...">Carregando...</Layout>

    return(
        <Layout title="Listagem Produtos">
            <Link href="/registrations/products">
                <button className="button is-warning">Novo</button>
            </Link>
           
            <br />
            <ProductTable products={result.data}/>

           
        </Layout>
    )
}