import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import ItemInput from './ItemInput';

interface StoreCardProps {
  name: string;
  onDelete: () => void;
  expanded: boolean;
  onToggle: () => void;
  onLongPress?: () => void; // 🔥 NEW
}

const StoreCard: React.FC<StoreCardProps> = ({
  name,
  onDelete,
  expanded,
  onToggle,
  onLongPress, // 🔥 NEW
}) => {
  const [items, setItems] = useState<string[]>([]);
  const [itemModalVisible, setItemModalVisible] = useState(false);

  const addItem = (item: string) => setItems([...items, item]);
  const deleteItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const renderRightActions = () => (
    <View style={styles.rightAction}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.header}
          onPress={onToggle}
          onLongPress={onLongPress} // 🔥 drag starts here
          delayLongPress={200} // optional: shorter hold time
        >
          <Text style={styles.storeName}>{name}</Text>
          {items.length > 0 && <View style={styles.redDot} />}
        </TouchableOpacity>

        {expanded && (
          <View style={styles.expandedSection}>
            <FlatList
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.itemRow}>
                  <Text style={styles.item}>{item}</Text>
                  <TouchableOpacity
                    onPress={() => deleteItem(index)}
                    style={styles.deleteItemButton}
                  >
                    <Text style={styles.deleteText}>x</Text>
                  </TouchableOpacity>
                </View>
              )}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setItemModalVisible(true)}
            >
              <Text style={styles.addText}>+ Add Item</Text>
            </TouchableOpacity>
          </View>
        )}

        <ItemInput
          visible={expanded && itemModalVisible}
          onClose={() => setItemModalVisible(false)}
          onSubmit={addItem}
        />
      </View>
    </Swipeable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeName: { fontSize: 18, fontWeight: 'bold' },
  rightAction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    width: 80,
    marginVertical: 8,
    borderRadius: 10,
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  expandedSection: { marginTop: 10 },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  item: { fontSize: 16 },
  deleteItemButton: {
    backgroundColor: '#e73d3dff',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteItemText: { color: '#fff', fontWeight: 'bold' },
  addButton: {
    marginTop: 10,
    backgroundColor: '#4628a7ff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addText: { color: '#fff', fontWeight: 'bold' },
  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e67171ff',
  },
});
