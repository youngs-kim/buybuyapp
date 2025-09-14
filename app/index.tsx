import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddStoreButton from '../components/AddStoreButton';
import StoreCard from '../components/StoreCard';

export default function App() {
  const [stores, setStores] = useState<string[]>([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const addStore = (store: string) => {
    setStores([...stores, store]);
  };

  const deleteStore = (index: number) => {
    setStores(stores.filter((_, i) => i !== index));
    if (expandedCardIndex === index) setExpandedCardIndex(null);
  };

  const toggleCard = (index: number) => {
    setExpandedCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={stores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <StoreCard
              name={item}
              onDelete={() => deleteStore(index)}
              expanded={expandedCardIndex === index}
              onToggle={() => toggleCard(index)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }} // <-- add extra padding for footer
        />

        <AddStoreButton onAddStore={addStore} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
