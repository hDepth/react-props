
import './App.css'
import Cabecalho from "./components/Cabecalho"
import Alunos from "./components/Alunos"
import Professores from "./components/Professores"
import { ProfessoresProps } from "./types"

function App() {

  const titulo: string = "React asldsakjfasfja"
  
  const cap: number = 15

  const aviso = () => alert("ashdksdhksdksh")

  document.title = titulo
  
  const listaProf:ProfessoresProps[] = [
    {nome: 'Luis', disciplina:'Front-End', ano:1},
    {nome: 'Freitas', disciplina:'Software Design', ano:1},
    {nome: 'Déh s7', disciplina:'Aimbot', ano:2021},
  ]
  return (
    <>
      <Cabecalho titulo={titulo} cap={cap} aviso={aviso} /> 
      <Alunos>
        <h2>Lista de ASLKDJKLASD</h2>
        <ul>
          <li>joaO</li>
          <li>carloS</li>
          <li>marcoS</li>
          <li>mariA</li>
        </ul>
      </Alunos>
      {
        listaProf.map((prof,index)=>(
          <Professores index={index} nome={prof.nome} disciplina={prof.disciplina} ano={prof.ano} />
        ))
    
  }
    </>
  )
  
}

export default App
