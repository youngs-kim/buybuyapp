import React, { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ItemInputProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (itemName: string) => void;
}

const ItemInput: React.FC<ItemInputProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if (!visible) setItemName('');
  }, [visible]);

  const handleSubmit = () => {
    if (itemName.trim().length > 0) {
      onSubmit(itemName);
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item..."
            value={itemName}
            onChangeText={setItemName}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ItemInput;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: '#4628a7ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitText: { color: '#fff', fontWeight: 'bold' },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  closeText: { color: '#fff', fontWeight: 'bold' },
});
