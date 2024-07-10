import questoes from  '../bancoDeQuestoes'

export default function handler(req: any, res: any){

   const idSelecionado = +req.query.id

   const questaoRequisitada  = questoes.filter(questao => questao.id === idSelecionado)

   if(questaoRequisitada.length === 1){
        const questaoSelecionada = questaoRequisitada[0].embaralharRespostas()


        res.status(200).json(questaoSelecionada.converterParaObjeto())

        
   }else{

       res.status(204).send()

   }


}
  
