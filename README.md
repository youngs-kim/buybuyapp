🛒 BuyBuy App

A React Native app for managing stores and items, helping users plan and organize their future shopping efficiently.



✨ Features

Add, delete, and manage multiple stores.

Swipe left on a store card to reveal a delete button.

Expand store cards to add, view, or remove items.

Modal input for adding store names and items.

Only one item input modal opens at a time for a smooth UX.

Clean and responsive UI with touch-friendly buttons.



📸 Screenshots / Demo

(Include GIFs or screenshots here)



🚀 Getting Started
Requirements

Node.js (v18+ recommended)

Expo CLI (for easy testing)

npm install -g expo-cli

Installation
git clone https://github.com/yourusername/store-item-app.git
cd store-item-app
npm install
expo start


Scan the QR code with the Expo Go app (iOS/Android) to test the app on your phone.

📁 Project Structure
/components
  ├─ AddStoreButton.tsx     # Floating button to add stores
  ├─ StoreCard.tsx          # Displays store, swipeable delete button, expandable item list
  ├─ StoreInput.tsx         # Modal to add a store
  ├─ ItemInput.tsx          # Modal to add items
App.tsx



🔮 Future Improvements

Persist stores and items with local storage or Firebase.

Add search and filter functionality.

Improve animations for better UX.
