import { useEffect, useRef, useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import { useRouter } from "next/router"

const questaoMock = new QuestaoModel(1, 'Qual é a Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const router = useRouter()

  const [idQuestoes, setIdQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)
  const [respostasCertas, setrespostasCertas] = useState<number>(0)

  const questaoRef = useRef<QuestaoModel>() //Utilizado para armazenar a última instância feita de "Questao"

  useEffect(() => { //Sempre que atualizar algo na página será chamado o useEffect para atualizar os dados desejados
    pesquisarIdsQuestoes()
  }, [])

  useEffect(() => {
    if (idQuestoes.length > 0) {
      carregarQuestao(idQuestoes[0])
    }
  }, [idQuestoes])

  async function pesquisarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idQuestoes = await resp.json()
    setIdQuestoes(idQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const questao = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(questao)
    setQuestao(novaQuestao)
  }

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou

    setrespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    const proximoIndice = idQuestoes.indexOf(questao.id) + 1
    return idQuestoes[proximoIndice]
  }

  function proximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irProximaQuestao(proximoId) : finalizar()
  }

  function irProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      proximoPasso={proximoPasso}
    />

  ) : false

}
