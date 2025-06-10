import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

const obterRespostaReceita = async (pergunta) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Você é um assistente culinário especializado em ajudar pessoas leigas a cozinharem receitas deliciosas com base em um ingrediente informado pelo usuário.
Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender, como se estivesse explicando para alguém que está começando a cozinhar.

Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:

- Use quebra de linha entre as seções (nome da receita, ingredientes, modo de preparo, dicas, etc.)
- Apresente os ingredientes em lista, com um item por linha
- Divida o modo de preparo em passos numerados, simples e objetivos
- Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável

A receita sugerida deve ser saborosa, fácil de preparar e bem explicada, mesmo para quem não tem experiência na cozinha.

Ingrediente: ${pergunta}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (err) {
    console.error("Erro ao obter resposta da Gemini", err);
    throw new Error("Erro ao chamar API da Gemini");
  }
};

export default obterRespostaReceita;
