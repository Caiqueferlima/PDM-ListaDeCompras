import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface Props {
  onBack: () => void;
  onAdd: (item: {
    name: string;
    quantity: number;
    unit: string;
  }) => void;
}

export default function CreateScreen({ onBack, onAdd }: Props) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('un');

  function increase() {
    setQuantity(q => q + 1);
  }

  function decrease() {
    setQuantity(q => Math.max(1, q - 1));
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            Compras da semana
          </Text>

          <View style={styles.progress}>
            <View style={styles.progressActive} />
          </View>

          <View style={styles.editor}>
            <TextInput
              value={name}
              onChangeText={setName}
              autoFocus
              style={styles.nameInput}
              placeholder="Novo item..."
              placeholderTextColor="#777"
            />

            <TouchableOpacity
              style={styles.confirm}
              onPress={() => {
                if (name.trim()) {
                  onAdd({
                    name: name.trim(),
                    quantity,
                    unit,
                  });
                }
              }}
            >
              <Text style={styles.confirmText}>
                +
              </Text>
            </TouchableOpacity>

            <View style={styles.controls}>
              <TouchableOpacity
                onPress={decrease}
                style={styles.minus}
              >
                <Text style={styles.controlText}>
                  −
                </Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>
                {quantity}
              </Text>

              <TouchableOpacity
                onPress={increase}
                style={styles.plus}
              >
                <Text style={styles.controlText}>
                  +
                </Text>
              </TouchableOpacity>

              {['un', 'kg', 'cx', 'pct'].map(
                value => (
                  <TouchableOpacity
                    key={value}
                    onPress={() => setUnit(value)}
                    style={[
                      styles.unit,
                      unit === value &&
                        styles.selectedUnit,
                    ]}
                  >
                    <Text
                      style={[
                        styles.unitText,
                        unit === value &&
                          styles.selectedUnitText,
                      ]}
                    >
                      {value}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
  },

  keyboard: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 32,
  },

  title: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
  },

  progress: {
    height: 4,
    backgroundColor: '#25272d',
    borderRadius: 5,
    marginTop: 8,
  },

  progressActive: {
    width: '30%',
    height: 4,
    backgroundColor: '#a4ed2c',
    borderRadius: 5,
  },

  items: {
    marginTop: 16,
  },

  item: {
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
    borderWidth: 1.5,
    borderColor: '#565b66',
    borderRadius: 50,
    marginRight: 12,
  },

  itemName: {
    flex: 1,
    color: '#eee',
    fontSize: 13,
  },

  itemQuantity: {
    backgroundColor: '#24262d',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 8,
  },

  itemQuantityText: {
    color: '#c4c6cc',
    fontSize: 9,
  },

  delete: {
    color: '#ff4655',
    backgroundColor: '#251519',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: 17,
  },

  editor: {
    minHeight: 126,
    borderWidth: 1.5,
    borderColor: '#a4ed2c',
    backgroundColor: '#17191d',
    borderRadius: 10,
    padding: 10,
    marginTop: 24,
  },

  nameInput: {
    color: '#fff',
    fontSize: 15,
    height: 42,
    paddingHorizontal: 4,
  },

  confirm: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    backgroundColor: '#a4ed2c',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmText: {
    color: '#111',
    fontSize: 23,
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  minus: {
    width: 34,
    height: 34,
    backgroundColor: '#202228',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    width: 34,
    height: 34,
    backgroundColor: '#202228',
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlText: {
    color: '#a4ed2c',
    fontSize: 16,
  },

  quantity: {
    color: '#ddd',
    backgroundColor: '#202228',
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 9,
    fontSize: 11,
  },

  unit: {
    height: 34,
    minWidth: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    borderRadius: 5,
  },

  selectedUnit: {
    backgroundColor: '#a4ed2c',
  },

  unitText: {
    color: '#777b84',
    fontSize: 9,
  },

  selectedUnitText: {
    color: '#111',
    fontWeight: '700',
  },
});