import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";
import { formatReal } from 'app/util/money'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    id: string;
    onChange?: (value: string) => void; 
    label: string;
    columnClass?: string;
    currency?: boolean;
    error?: string;
}

export const Input:React.FC<InputProps> = ({
    onChange,
    label,
    columnClass,
    id,
    currency,
    error,
    ...inputProps

}:InputProps) =>{

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {

        let value =  event.target.value;
        if(value && currency){
            value = formatReal(value);
        }

        if(onChange){
            onChange(value) 
        }
    }

    return(
        <div className={`column ${columnClass}`}>

            <div className="field">
                <label className="label" htmlFor={id}>{label}</label>
                <div className="control">
                    <input className="input" 
                            id = {id} {...inputProps}
                            onChange={onInputChange}
                           />
                    {error && <p className="help is-danger">{error}</p>

                    }
                </div>
            </div>
        </div>
    )
}