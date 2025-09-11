import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // corresponds to App/index.tsx
        options={{ title: 'BuyBuy 🛒' }} // <-- top bar text
      />
    </Stack>
  );
}
