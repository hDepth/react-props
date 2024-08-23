import { CabecalhoProps } from "../types"

export default function Cabecalho( {titulo, cap, aviso}: CabecalhoProps){

    return (
        <div>
            <h1>{cap}-{titulo}</h1>
            <button onClick={aviso}>Ler Aviso</button>
        </div>
    )
}