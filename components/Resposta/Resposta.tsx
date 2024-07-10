import RespostaModel from "../../model/resposta"
import styles from './Resposta.module.css'

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corBgLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps){
    const resposta = props.valor


  return (
    <div className={styles.resposta}
        onClick={()=> props.respostaFornecida(props.indice)}
    >
        <div className={styles.conteudoResposta}>

            
            {!resposta.revelada ? (
                <div className={styles.frente}>

                <div className={styles.letra}
                    style={{backgroundColor: props.corBgLetra}}
                >
                    {props.letra}
                </div>

                <div className={styles.valor}>
                    {resposta.valor}
                </div>

            </div>
            ):(
                <div className={styles.verso}>
                {resposta.certa ? (
                    <div className={styles.certa}>
                        <div>Resposta correta</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>

                ) : (
                    <div className={styles.errada}>
                        <div>Alternativa errada</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>

                )}
            </div>
            )}

            


            

        </div>
    </div>
  )
}
