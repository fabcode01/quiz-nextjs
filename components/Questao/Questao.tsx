import QuestaoModel from "../../model/questao"
import Enunciado from "../Enunciado/Enunciado"
import Resposta from "../Resposta/Resposta"
import Temporizador from "../Temporizador/Temporizador"
import styles from './Questao.module.css'

const letras = [
  {valor: 'A', cor: '#A63232'},
  {valor: 'B', cor: '#3A7B4C'},
  {valor: 'C', cor: '#663838'},
  {valor: 'D', cor: '#633866'}
]

interface QuestaoProps{
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: ()=>void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderRespostas(){
      return questao.respostas.map((resposta, i)=>{
        return (
          <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corBgLetra={letras[i].cor}
          respostaFornecida={props.respostaFornecida}
          />
        )
      })
    }
  return (
    <div className={styles.questao}>
        <Enunciado texto={questao.enunciado}/>
        <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} 

        tempoEsgotado={props.tempoEsgotado}/>
        {renderRespostas()}
    </div>
  )
}

