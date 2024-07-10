
import questoes from '../bancoDeQuestoes'
import { embaralhar } from '../../../../functions/arrays'

export default function handler(req: any, res: any){

    const ids = questoes.map(questaoId => questaoId.id)
   
    

    res.status(200).json(embaralhar(ids))
}