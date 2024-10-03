import Input, { InputProps } from "./input";
export default function AmountInput(props:InputProps){
    return (
        <div>
        <Input 
        value={props.value} 
        onChange={props.onChange}/>
        USD
        </div>
    )
}