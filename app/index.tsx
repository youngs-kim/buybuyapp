import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddStoreButton from '../components/AddStoreButton';
import StoreCard from '../components/StoreCard';

export default function App() {
  const [stores, setStores] = useState<string[]>([]);

  const addStore = (store: string) => {
    setStores([...stores, store]);
  };

  const deleteStore = (index: number) => {
    setStores(stores.filter((_, i) => i !== index));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={stores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <StoreCard name={item} onDelete={() => deleteStore(index)} />
          )}
        />

        {/* Use the reusable AddStoreButton component */}
        <AddStoreButton onAddStore={addStore} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
