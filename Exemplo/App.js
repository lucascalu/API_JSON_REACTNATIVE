import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

//Funciona apenas no mobile no web não roda

const API_URL = 'http://192.168.137.1:3000';//trocar pelo ip da rede 

const App = () => {
  const [data, setData] = useState({});
  const [modifiedData, setModifiedData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/ler-arquivo`);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };

  const modifyData = async () => {
    try {
      const response = await axios.post(`${API_URL}/modificar-arquivo`, modifiedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      fetchData(); // Atualiza os dados após a modificação
    } catch (error) {
      console.error('Erro ao modificar dados via API:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Dados do Arquivo JSON:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>

      <Text style={styles.label}>Novos Dados (JSON):</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira novos dados no formato JSON"
        onChangeText={(text) => setModifiedData(text)}
        value={modifiedData}
      />

      <Button title="Modificar Arquivo" onPress={modifyData} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
