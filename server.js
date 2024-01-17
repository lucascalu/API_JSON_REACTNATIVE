const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/ler-arquivo', async (req, res) => {
  try {
    const data = await fs.readFile('exemplo.json', 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler o arquivo.' });
  }
});

app.post('/modificar-arquivo', async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile('exemplo.json', JSON.stringify(newData, null, 2));
    res.json({ success: true, message: 'Arquivo modificado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao modificar o arquivo.' });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
