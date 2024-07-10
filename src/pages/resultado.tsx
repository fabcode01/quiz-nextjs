import Head from "next/head"
import { useRouter } from "next/router"
import styles from '../styles/resultado.module.css'
import Botao from "../../components/Botao/Botao"
import Estastistica from "../../components/Estastistica/Estastistica"
import { useEffect, useState } from "react"





export default function Resultado(){

    const router = useRouter()

    const { certas } = router.query
    const { total } = router.query

    const[Qcertas, setQCertas] = useState<any>()
    const[Qtotal, setQTotal] = useState<any>()

   useEffect(()=>{
        if(certas && total){
            setQCertas(+certas)
            setQTotal(+total)
        }
   },[certas, total])
    
  

    

    const Percentual = Math.round((Qcertas / Qtotal) * 100)


    return (
        <div className={styles.resultado}>
            <Head>
                <title>Resultados</title>
            </Head>
           
           <Estastistica
                total={Qtotal}
                certas={Qcertas}
                percentualCorretas={Percentual}

           />

            <Botao
                texto="Reiniciar"
                href="/"
            />
        </div>
    )
}