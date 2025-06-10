import express from 'express'
import receitasRoutes from './src/routes/receitas.route.js'
import cors from 'cors'


const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  return res.json("Hello World!");
});

app.use(cors())

app.use(express.json())

app.use('/api/receitas', receitasRoutes)

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
    
})