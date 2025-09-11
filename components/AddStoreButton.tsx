import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StoreInput from './StoreInput';

interface AddStoreButtonProps {
  onAddStore: (storeName: string) => void;
  size?: number;
  color?: string;
  icon?: string;
}

const AddStoreButton: React.FC<AddStoreButtonProps> = ({
  onAddStore,
  size = 60,
  color = '#FF6B6B',
  icon = '+',
}) => {
  const [storeInputVisible, setStoreInputVisible] = useState(false);

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
        ]}
        onPress={() => setStoreInputVisible(true)}
      >
        <Text style={styles.text}>{icon}</Text>
      </TouchableOpacity>

      <StoreInput
        visible={storeInputVisible}
        onClose={() => setStoreInputVisible(false)}
        onSubmit={onAddStore}
      />
    </View>
  );
};

export default AddStoreButton;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
