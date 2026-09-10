import React, { useState } from 'react';
import { View } from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import ListScreen from './src/screens/ListScreen';
import CreateScreen from './src/screens/CreateScreen';
import EmptyScreen from './src/screens/EmptyScreen';

export type Screen = 'splash' | 'list' | 'create' | 'empty';

interface NewItem {
  name: string;
  quantity: number;
  unit: string;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('empty');
  const [items, setItems] = useState<NewItem[]>([]);

  function addItem(item: NewItem) {
    setItems(current => [...current, item]);
    setScreen('list');
  }

  return (
    <View style={{ flex: 1 }}>
      {screen === 'splash' && (
        <SplashScreen />
      )}

      {screen === 'list' && (
        <ListScreen
          initialItems={items.map((item, index) => ({
            ...item,
            id: index + 1,
          }))}
          onCreate={() => setScreen('create')}
          onEmpty={() => {
            setItems([]);
            setScreen('empty');
          }}
        />
      )}

      {screen === 'create' && (
        <CreateScreen
          onBack={() => setScreen('list')}
          onAdd={addItem}
        />
      )}

      {screen === 'empty' && (
        <EmptyScreen
          onCreate={() => setScreen('create')}
        />
      )}
    </View>
  );
}