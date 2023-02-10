import { chatGPT, pedidoState } from "lib/hooks";
import { useState } from "react"
// import { useRecoilState } from "recoil";

export function CaracteristicasForm(){
    const [respuesta, setRespuesta] = useState("")
    const [list, setList]=useState([""])
    // const [pedido, setPedido] = useRecoilState(pedidoState);
    
    function handleSubmit(e:any){
        e.preventDefault()
        const caracteristica: string = e.target.caracteristica.value
        setList(list.concat(caracteristica))
        e.target.caracteristica.value = ""
    }

    async function handleClick(e:any){
        e.preventDefault()
        const nombre = e.target.nombre.value
        console.log(nombre);
        
        const textoPedido = "redacta un informe de 500 caracteres sobre "+ nombre +" con las siguientes caracteristicas:" + list.toString() 
        

        const respuesta = await chatGPT(textoPedido)

        setRespuesta(respuesta)
    }


    
    return <div>
        <form onSubmit={handleSubmit}>
            <label> caracteristicas
                <input type="text" name="caracteristica" />
            </label>
            <button>agregar</button>
            <div>caracteristicas:{list.map((c)=>{
            return <p>{c}</p>
        })}</div>
        </form>  
        <form onSubmit={handleClick}>
            <label>Nombre del alumno
                <input type="text" name="nombre"  />
            </label>
            <button>redactar</button>
        </form>
        <div>{respuesta}</div>
    </div>
}

