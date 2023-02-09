import { chatGPT } from "lib/hooks";
import { useState } from "react";


export function Chat(){
    const [respuesta, setRespuesta] = useState("")
    async function handleSubmit(e:any){
        e.preventDefault()
        console.log(e.target.text.value);
        const respuesta = await chatGPT(e.target.text.value)
        setRespuesta(respuesta) 
        
        
        
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="text"/>
            <button>redactar</button>
        </form>
        <div>{respuesta}</div>
    </div>
}