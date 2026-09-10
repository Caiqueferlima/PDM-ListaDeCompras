import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import ShoppingItem, {
  ShoppingItemData,
} from '../../components/ShoppingItem';

interface Props {
  initialItems: ShoppingItemData[];
  onCreate: () => void;
  onEmpty: () => void;
}

export default function ListScreen({
  initialItems,
  onCreate,
  onEmpty,
}: Props) {
  const [items, setItems] = useState<ShoppingItemData[]>(initialItems);

  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState(1);
  const [newUnit, setNewUnit] = useState('un');

  function toggleItem(id: number) {
    setItems(current =>
      current.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  }

  function deleteItem(id: number) {
    setItems(current => {
      const nextItems = current.filter(item => item.id !== id);

      if (nextItems.length === 0) {
        onEmpty();
      }

      return nextItems;
    });
  }

  function addItem() {
    if (!newItem.trim()) return;

    setItems(current => [
      ...current,
      {
        id: Date.now(),
        name: newItem,
        quantity: newQuantity,
        unit: newUnit,
      },
    ]);

    setNewItem('');
    setNewQuantity(1);
    setNewUnit('un');
  }

  const pending = items.filter(item => !item.completed);
  const completed = items.filter(item => item.completed);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>MINHA LISTA</Text>

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Compras da semana
            </Text>

            <Text style={styles.subtitle}>
              {pending.length} pendentes
            </Text>
          </View>

          <TouchableOpacity style={styles.share}>
            <Text style={styles.shareText}>↑</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progress,
              {
                width: `${Math.max(
                  15,
                  (completed.length / items.length) * 100
                )}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.cartCounter}>
          {completed.length} de {items.length} no carrinho
        </Text>

        <View style={styles.list}>
          {pending.map(item => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={() => toggleItem(item.id)}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
        </View>

        {completed.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>
              NO CARRINHO · {completed.length}
            </Text>

            {completed.map(item => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={() => toggleItem(item.id)}
                onDelete={() => deleteItem(item.id)}
              />
            ))}
          </>
        )}

        <View style={styles.addContainer}>
          <TextInput
            value={newItem}
            onChangeText={setNewItem}
            placeholder="Novo item..."
            placeholderTextColor="#60636b"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={addItem}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() =>
              setNewQuantity(quantity => Math.max(1, quantity - 1))
            }
          >
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.number}>{newQuantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => setNewQuantity(quantity => quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>

          {['un', 'kg', 'cx', 'pct'].map(unit => (
            <TouchableOpacity
              key={unit}
              style={[
                styles.unit,
                newUnit === unit && styles.unitSelected,
              ]}
              onPress={() => setNewUnit(unit)}
            >
              <Text
                style={[
                  styles.unitText,
                  newUnit === unit && styles.unitSelectedText,
                ]}
              >
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },

  content: {
    padding: 16,
    paddingTop: 32,
    paddingBottom: 42,
  },

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

  list: {
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#646870',
    fontSize: 8,
    letterSpacing: 1.3,
    marginTop: 8,
    marginBottom: 8,
  },

  addContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: '#a4ed2c',
    backgroundColor: '#17191d',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 8,
  },

  input: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
  },

  addButton: {
    width: 32,
    height: 32,
    backgroundColor: '#a4ed2c',
    borderRadius: 8,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    color: '#111',
    fontSize: 24,
    fontWeight: '600',
  },

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