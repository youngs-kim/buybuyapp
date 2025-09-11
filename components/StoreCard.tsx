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
    backgroundColor: 'hsla(164, 31%, 33%, 1.00)',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 0,
    elevation: 3,
    borderWidth: 0.3,
    borderColor: '#888888ff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#ff1313ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 60,
    marginBottom: 8,
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});
