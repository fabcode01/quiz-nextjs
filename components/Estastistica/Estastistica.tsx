interface EstastisticaProps{
    total: number
    certas: number
    percentualCorretas: number
}

export default function Estastistica({total,certas,percentualCorretas}:EstastisticaProps){
    return (

        <div>
            <h1>Resultado</h1>
            <div>Total de perguntas: <span>{total}</span></div>
            <div>Total de acertos: <span>{certas}</span></div>
            <div>Percentual: <span>{`${percentualCorretas}%`} </span></div>
        </div>
    )
}