import Head from "next/head"
import { useRouter } from "next/router"
import styles from '../styles/resultado.module.css'
import Botao from "../../components/Botao/Botao"


export default function Resultado(){
    const router = useRouter()

    const certas = router.query.certas
    const total = router.query.total


    function percentual(){
        if(certas && total) {
        return Math.round((+certas / +total * 100))
    }

    const percentualCorretas = percentual()

    return (
        <div className={styles.resultado}>
            <Head>
                <title>Resultados</title>
            </Head>
           
            <h1>Resultado</h1>
            <div>Total de perguntas: <span>{total}</span></div>
            <div>Total de acertos: <span>{certas}</span></div>
            <div>Percentual: <span>{`${percentualCorretas}%`} </span></div>

            <Botao
                texto="Reiniciar"
                href="/"
            />
        </div>
    )
}}