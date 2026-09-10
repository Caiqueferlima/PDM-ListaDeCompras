import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export interface ShoppingItemData {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  completed?: boolean;
}

interface Props {
  item: ShoppingItemData;
  onDelete?: () => void;
  onToggle?: () => void;
}

export default function ShoppingItem({
  item,
  onDelete,
  onToggle,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          item.completed && styles.checkboxCompleted,
        ]}
        onPress={onToggle}
      >
        {item.completed && (
          <Text style={styles.check}>✓</Text>
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.name,
          item.completed && styles.completedText,
        ]}
      >
        {item.name}
      </Text>

      <View style={styles.quantity}>
        <Text style={styles.quantityText}>
          {item.quantity} {item.unit}
        </Text>
      </View>

      {onDelete && (
        <TouchableOpacity
          style={styles.delete}
          onPress={onDelete}
        >
          <Text style={styles.deleteText}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#17181d',
    borderRadius: 9,
    marginBottom: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 19,
    height: 19,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#565b66',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  checkboxCompleted: {
    backgroundColor: '#a4ed2c',
    borderColor: '#a4ed2c',
  },

  check: {
    color: '#10120c',
    fontSize: 12,
    fontWeight: 'bold',
  },

  name: {
    flex: 1,
    color: '#f0f0f0',
    fontSize: 14,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#767b84',
  },

  quantity: {
    backgroundColor: '#24262d',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 8,
  },

  quantityText: {
    color: '#c5c7cc',
    fontSize: 10,
  },

  delete: {
    width: 28,
    height: 28,
    backgroundColor: '#251519',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteText: {
    color: '#ff4d5d',
    fontSize: 18,
  },
});