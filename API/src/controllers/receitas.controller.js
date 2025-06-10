import obterRespostaReceita from '../services/gemini.service.js'

export const perguntarReceita = async (req, res) => {

    try {
        const { pergunta } = req.body

        if (!pergunta) {
            return res.status(400).json({
                erro: 'Pergunta é obrigatória'
            })
        }

        const resposta = await obterRespostaReceita(pergunta)

        res.json({ resposta })

    } catch (err) {
        res.status(500).json({
            erro: 'Erro ao obter resposta da receita'
        })
    }
}