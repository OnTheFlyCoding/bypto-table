import { ChangeEventHandler } from "react"

type InputProps = {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>

}

export default function Input(props:InputProps){
    //Props will be the value given in for input.
    //Short for property of input.
    return(

        <input  type="text" 
                value={props.value} 
                onChange={props.onChange} />
    
    )
}