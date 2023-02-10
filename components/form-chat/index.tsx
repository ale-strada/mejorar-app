import { chatGPT, pedidoState } from "lib/hooks";
import { useState } from "react";
import { useRecoilValue } from "recoil";


export function Chat(){
    const [respuesta, setRespuesta] = useState("")
    const pedido = useRecoilValue(pedidoState)
    async function handleSubmit(e:any){
        e.preventDefault()
        const respuesta = await chatGPT(pedido)

        setRespuesta(respuesta) 
        
        
        
    }
    return <div>
        <form onSubmit={handleSubmit}>
            {/* <input type="text" name="text"/> */}
            <button>redactar</button>
        </form>
        <div>{respuesta}</div>
    </div>
}