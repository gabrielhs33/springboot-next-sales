import { Layout } from "components";
import { useState } from "react";
import { Input } from "components";

export const ProductRegister:React.FC = () =>{

    const [sku, setSku] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    return(
       <Layout title = "Produtos">

            <div className="columns">

                <Input id="inputSKU" label="SKU *" columnClass="is-half" onChange={setSku} placeholder="Digite o SKU do produto"/>

                <Input id="inputPrice" label="Preço *" columnClass="is-half" onChange={setSku} placeholder="Digite o Preço do produto"/>
            
            
            </div>
            <div className="columns">
                <Input id="inputName" label="Nome *" columnClass="is-full" onChange={setSku} placeholder="Digite o Nome do produto"/>
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
                    <button className="button is-link"> Salvar </button>
                </div>
                <div className="control is-link">
                    <button className="button"> Voltar </button>
                </div>
            </div>
       </Layout>
    )
}