import { ChangeEventHandler } from "react"
//Types
export type InputProps = {
    value: string;
    //onChange expects an event and the event target is HTML
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string;

}
//Input Controller:
export default function Input(props:InputProps){
    //Props will be the value given in for input.
    //Short for property of input.
    return (
        <input 
        //default class css but is adaptable to take more in the future
        className={"border border-teal-400 bg-gray-900 p-2 " + props.className}
        type="text" 
        value={props.value} 
        onChange={props.onChange}/>
        
    
    );
}