import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    id: string
    onChange?: (value: any) => void;
    label: string;
    columnClass?: string;
}

export const Input:React.FC<InputProps> = ({
    onChange,
    label,
    columnClass,
    id,
    ...inputProps

}:InputProps) =>{

    return(
        <div className={`column ${columnClass}`}>

            <div className="field">
                <label className="label" htmlFor={id}>{label}</label>
                <div className="control">
                    <input className="input" 
                            id = {id} {...inputProps}
                            onChange={event => {
                                if(onChange){
                                    onChange(event.target.value)
                                }
                            }}
                            placeholder={inputProps.placeholder}/>
                </div>
            </div>
        </div>
    )
}