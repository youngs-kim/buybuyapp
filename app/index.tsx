import AddStoreButton from '@/components/AddStoreButton';
import StoreCard from '@/components/StoreCard';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  const [stores, setStores] = useState<string[]>([]);

  const handleAddStore = (storeName: string) => {
    setStores((prev) => [...prev, storeName]);
  };

  const handleDeleteStore = (index: number) => {
    setStores((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.storeContainer}>
        {stores.map((store, index) => (
          <StoreCard
            key={index}
            name={store}
            onDelete={() => handleDeleteStore(index)}
          />
        ))}
      </ScrollView>

      <AddStoreButton onAddStore={handleAddStore} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  storeContainer: { paddingTop: 0, paddingBottom: 120, alignItems: 'stretch' },
});
