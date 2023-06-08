import questoes from "../bancoDeQuestoes"

export default function handler(req, res) {
    const idSelecioando = +req.query.id

    const questaoOuNada = questoes.filter(questao => questao.id === idSelecioando)

    if(questaoOuNada.length > 0){
        const questaoSelecionada = questaoOuNada[0].embaralharRepostas()

        res.status(200).send(questaoSelecionada.paraObjeto())
    }else{
        res.status(204).send({ message: "Não há conteúdo com esse Id." })
    }

    res.status(200).send(questoes[0].paraObjeto())
}