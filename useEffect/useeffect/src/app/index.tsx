import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

import { Colors } from '@/constants/theme';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const primeiraExecucao = useRef(true);
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = Colors[colorScheme];

  useEffect(() => {
    if (primeiraExecucao.current) {
      primeiraExecucao.current = false;
      return;
    }

    setMensagem('O nome foi alterado!');

    const timer = setTimeout(() => {
      setMensagem('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [nome]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Digite seu nome:</Text>

      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.textSecondary }]}
        placeholder="Seu nome"
        placeholderTextColor={colors.textSecondary}
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
        autoCorrect={false}
      />

      <Text style={{ color: colors.text }}>Olá, {nome}!</Text>

      <Text style={{ color: colors.text }}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  input: {
    width: '100%',
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});