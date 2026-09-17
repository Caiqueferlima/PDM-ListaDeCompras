import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export interface ItemCounterProps {
  quantity: number;
  unit: string;
  units: string[];
  onDecrease: () => void;
  onIncrease: () => void;
  onUnitChange: (unit: string) => void;
}

export default function ItemCounter({
  quantity,
  unit,
  units,
  onDecrease,
  onIncrease,
  onUnitChange,
}: ItemCounterProps) {
  return (
    <View style={styles.quantityRow}>
      <TouchableOpacity style={styles.quantityButton} onPress={onDecrease}>
        <Text style={styles.quantityButtonText}>−</Text>
      </TouchableOpacity>

      <Text style={styles.number}>{quantity}</Text>

      <TouchableOpacity style={styles.quantityButton} onPress={onIncrease}>
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>

      {units.map(currentUnit => (
        <TouchableOpacity
          key={currentUnit}
          style={[
            styles.unit,
            unit === currentUnit && styles.unitSelected,
          ]}
          onPress={() => onUnitChange(currentUnit)}
        >
          <Text
            style={[
              styles.unitText,
              unit === currentUnit && styles.unitSelectedText,
            ]}
          >
            {currentUnit}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 25,
    height: 28,
    backgroundColor: '#202228',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#9da0a8',
    fontSize: 16,
  },
  number: {
    width: 28,
    textAlign: 'center',
    color: '#ddd',
    backgroundColor: '#202228',
    height: 28,
    paddingTop: 6,
    fontSize: 11,
  },
  unitSelected: {
    height: 28,
    paddingHorizontal: 11,
    backgroundColor: '#a4ed2c',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 6,
  },
  unitSelectedText: {
    color: '#10120c',
    fontSize: 10,
    fontWeight: '700',
  },
  unit: {
    height: 28,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  unitText: {
    color: '#666a73',
    fontSize: 10,
  },
});