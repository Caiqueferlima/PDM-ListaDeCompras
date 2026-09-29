import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Temporizador iniciado');

    const intervalo = setInterval(() => {
      setContador(valorAtual => valorAtual + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log('Temporizador encerrado');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>

      <Text style={styles.contador}>
        {contador}
      </Text>

      <Button
        title="Zerar contador"
        onPress={() => setContador(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },

  contador: {
    fontSize: 50,
    marginBottom: 20,
  },
});