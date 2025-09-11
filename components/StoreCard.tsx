import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

interface StoreCardProps {
  name: string;
  onDelete: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, onDelete }) => {
  const renderRightActions = (
    _progress: Animated.AnimatedInterpolation<number>
  ) => {
    return (
      <RectButton style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Swipeable>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: { fontSize: 18, fontWeight: 'bold' },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 60,
    marginBottom: 8,
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});
