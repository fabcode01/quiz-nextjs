
import { useEffect, useState } from "react";
import QuestaoModel from "../../model/questao";
import Head from "next/head";
import Questionario from "../../components/Questionario/Questionario";
import { useRouter } from "next/router";

const BASE_URL = '/api'

export default function Home() {
  const router = useRouter()

  const[idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])

  const[questao, setQuestao] = useState<QuestaoModel>()
  const[respostasCertas, setRespostasCertas] = useState<number>(0)


  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
   


  }

  async function carregarQuestao(idQuestao: number) {

    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    console.log(json)
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)


  }

  useEffect(()=>{
    carregarIdsDasQuestoes()
    
  },[])

  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
    
  },[idsDasQuestoes])


 function questaoRespondida(questaoRespondida: QuestaoModel){
  setQuestao(questaoRespondida)
  const acertou = questaoRespondida.acertou
  setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
 
 }

 function idProximaPergunta(){
    if(questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice] 
    }
    
 }

 function irProximoPasso(){
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
 }

 function irPraProximaQuestao(proximoId: number){
    carregarQuestao(proximoId)
 }

 function finalizar(){
  router.push({
    pathname: '/resultado',
    query: {
      total: idsDasQuestoes.length,
      certas: respostasCertas
    }
  })
 }

  return (

    <>
    <Head>
      <title>Quiz NextJs</title>
      
    </Head>


    {!questao && <p>Carregando</p>}
    {questao && <Questionario
          questao={questao}
          ultima={idProximaPergunta() === undefined}
          questaoRespondida={questaoRespondida}
          irProximoPasso={irProximoPasso}
        />}
        

      
    
    </>
   
  );
}
