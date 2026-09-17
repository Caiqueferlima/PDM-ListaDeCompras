import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export interface HeaderProps {
  pendingCount: number;
  completedCount: number;
  totalCount: number;
}

export default function Header({
  pendingCount,
  completedCount,
  totalCount,
}: HeaderProps) {
  const progress = totalCount === 0
    ? 0
    : (completedCount / totalCount) * 100;

  return (
    <>
      <Text style={styles.label}>MINHA LISTA</Text>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Compras da semana</Text>
          <Text style={styles.subtitle}>{pendingCount} pendentes</Text>
        </View>

        <TouchableOpacity style={styles.share}>
          <Text style={styles.shareText}>↑</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progress,
            { width: `${Math.max(15, progress)}%` },
          ]}
        />
      </View>

      <Text style={styles.cartCounter}>
        {completedCount} de {totalCount} no carrinho
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#9be629',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    color: '#a8abb2',
    fontSize: 11,
    marginTop: 4,
  },
  share: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#30333a',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    color: '#9ca0a8',
    fontSize: 18,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#25272c',
    borderRadius: 5,
    marginTop: 7,
  },
  progress: {
    height: 4,
    backgroundColor: '#a4ed2c',
    borderRadius: 5,
  },
  cartCounter: {
    color: '#858991',
    fontSize: 10,
    textAlign: 'right',
    marginTop: -1,
    marginBottom: 12,
  },
});