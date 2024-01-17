# API_JSON_REACTNATIVE

<P>
  Vamos criar uma API simples em Node.js que lê um arquivo local chamado exemplo.json e permite sua leitura e modificação. Além disso, criaremos um aplicativo React Native básico que utiliza o Axios para consumir essa API.
</P>


<P>
Passo 1: Configurar a API em Node.js
Crie um novo diretório para o projeto Node.js, navegue até ele e execute os seguintes comandos no terminal:


</P>

<P>
  
npm init -y
npm install express body-parser
  
</P>

<P>

crie um arquivo chamado server.js
  
</P>


<br>

<P>
  Passo 2: Configurar o App React Native
</P>

<p>

npm install -g expo-cli
expo init Exemplo

cd Exemplo

</p>

<p>

  npm install axios

</p>

<p>
  Substitua o conteúdo do arquivo App.js pelo código App.js:
</p>

<P>
  crie o arquivo exemplo.json
</P>

<p>
  {
  "nome": "Exemplo",
  "idade": 25,
  "cidade": "Cidade Exemplo"
}

</p>


<p>
  expo start
  node server.js
</p>
