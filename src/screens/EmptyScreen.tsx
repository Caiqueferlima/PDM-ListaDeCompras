import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

interface Props {
  onCreate: () => void;
}

export default function EmptyScreen({
  onCreate,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>
          MINHA LISTA
        </Text>

        <Text style={styles.title}>
          Compras da semana
        </Text>

        <View style={styles.emptyArea}>
          <View style={styles.emptyIcon}>
            <View style={styles.circle} />
          </View>

          <Text style={styles.emptyTitle}>
            Nada na lista ainda
          </Text>

          <Text style={styles.description}>
            Escreva o primeiro item na barra abaixo.
            {'\n'}
            Fica salvo no aparelho, mesmo sem
            internet.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Adicionar novo item"
          onPress={onCreate}
          hitSlop={6}
          style={({ pressed }) => [
            styles.addBar,
            pressed && styles.addBarPressed,
          ]}
        >
          <Text style={styles.placeholder}>
            Novo item...
          </Text>

          <View style={styles.button}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },

  content: {
    flex: 1,
    padding: 16,
    paddingTop: 36,
    paddingBottom: 28,
  },

  label: {
    color: '#9be629',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 5,
  },

  title: {
    color: '#f5f5f5',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 2,
  },

  emptyArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },

  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#30343c',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  circle: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#555a64',
    borderRadius: 50,
  },

  emptyTitle: {
    color: '#dddfe3',
    fontSize: 14,
    fontWeight: '700',
  },

  description: {
    color: '#686c74',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 6,
  },

  addBar: {
    height: 56,
    backgroundColor: '#17181d',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 0,
  },

  addBarPressed: {
    opacity: 0.75,
  },

  placeholder: {
    flex: 1,
    color: '#5e626b',
    fontSize: 12,
  },

  button: {
    width: 40,
    height: 40,
    backgroundColor: '#24262b',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#555962',
    fontSize: 25,
  },
});