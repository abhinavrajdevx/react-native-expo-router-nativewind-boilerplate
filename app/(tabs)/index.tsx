import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1  justify-center px-3 bg-green-700">
      <Text className="text-4xl text-white font-black">
        Native wind with Expo router initialized Successfully !!!
      </Text>
      <Text className="w-full text-gray-200 text-lg font-bold my-9 tracking-widest">
        expo-router, react-native-safe-area-context, react-native-screens,
        expo-linking, expo-constants, expo-status-bar
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
