import { CabecalhoProps } from "../types"

export default function Cabecalho( {titulo, cap, aviso}: CabecalhoProps){


    const paragr = {
        color:'blue',
        fontSize: '75px'
    }
    return (
        <div>
            <h1>{cap}-{titulo}</h1>
            <p style={{
                color: 'red',
                backgroundColor:'#fcc'

            }}>AKSDHDASLHASKL </p>

            <p style={paragr} >Segundo akjslhdlkashfda</p>
            <button onClick={aviso}>Ler Aviso</button>
        </div>
    )
}