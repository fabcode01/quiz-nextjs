import QuestaoModel from '../../model/questao'
import Botao from '../Botao/Botao'
import Questao from '../Questao/Questao'
import styles from './Questionario.module.css'

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void

}
export default function Questionario(props: QuestionarioProps){

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }

    }

    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao
                    valor={props.questao}
                    tempoPraResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irProximoPasso} />
                : false
            }

            <Botao onClick={props.irProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'} />


    </div>
     )
}