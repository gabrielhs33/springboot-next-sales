import { Layout, Input, Message } from "components";
import { use, useState } from "react";
import { useProductService } from 'app/services'
import { Product } from 'app/models/products'
import { convertToBigDecimal } from 'app/util/money'
import { Alert } from 'components/common/messages'
import { text } from "stream/consumers";


export const ProductRegister:React.FC = () =>{

    const service = useProductService()
    const [sku, setSku] = useState('')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState<string>()
    const [registration, setRegistration] = useState<string>()
    const [messages, setMessages] = useState<Array<Alert>>([])

    const submit = () =>{ 
        const product: Product = {
            id,
            sku,
            price: convertToBigDecimal(price),
            name,
            description
        }
        if(id){

            service.update(product)
            .then(response => setMessages([{type:"success",text:"Produto atualizado com sucesso!"}]))
        }
        service.save(product)
        .then(productResponse => {
            setId(productResponse.id)
            setRegistration(productResponse.registration)
        })
    }

    return(
       <Layout title = "Produtos" messages={messages}>
        
            { id &&

                <div className="columns">

                    <Input id="inputCodigo" 
                    value={id} label="Código: " 
                    columnClass="is-half" 
                    disabled/>

                    <Input id="inputDate" 
                    value={registration} 
                    label="Data de cadastro: " 
                    columnClass="is-half" 
                    disabled/>

                </div>
            }
            <div className="columns">

                <Input id="inputSKU" 
                label="SKU *" 
                columnClass="is-half" 
                onChange={setSku} 
                placeholder="Digite o SKU do produto"/>

                <Input id="inputPrice" 
                label="Preço *" 
                currency columnClass="is-half" 
                value={price}
                onChange={setPrice} 
                maxLength={16} 
                placeholder="Digite o Preço do produto"/>
            
            
            </div>
            <div className="columns">
                <Input id="inputName" 
                label="Nome *" 
                columnClass="is-full" 
                onChange={setName} 
                placeholder="Digite o Nome do produto"/>
            </div>
            <div className="columns">
                <div className="column is-full">

                    <div className="field">
                        <label className="label" htmlFor="inputDescription">Descrição: *</label>
                        <div className="control">
                            <input className="textarea" 
                                    id = "inputDescription" value={description}
                                    onChange={event => setDescription(event.target.value)}
                                    placeholder="Digite a Descrição detalhada do produto"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">   
                         {id ? "Atualizar" : "Salvar"}                   
                    </button>
                </div>
             
                <div className="control is-link">
                    <button className="button"> Voltar </button>
                </div>
            </div>
       </Layout>
    )
}