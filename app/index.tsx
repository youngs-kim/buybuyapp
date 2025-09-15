import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AddStoreButton from '../components/AddStoreButton';
import StoreCard from '../components/StoreCard';

interface Store {
  id: string;
  name: string;
}

export default function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const addStore = (storeName: string) => {
    const newStore: Store = { id: Date.now().toString(), name: storeName };
    setStores([...stores, newStore]);
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
        <DraggableFlatList
          data={stores}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setStores(data)}
          renderItem={({
            item,
            getIndex,
            drag,
            isActive,
          }: RenderItemParams<Store>) => {
            const index = getIndex();
            if (index === undefined) return null;

            return (
              <StoreCard
                name={item.name}
                onDelete={() => deleteStore(index)}
                expanded={expandedCardIndex === index}
                onToggle={() => toggleCard(index)}
                onLongPress={drag} // user can long press to drag
              />
            );
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        />

        <AddStoreButton onAddStore={addStore} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
