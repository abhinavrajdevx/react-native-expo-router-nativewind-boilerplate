import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View className="flex-1 bg-white justify-center px-3">
      <View className="w-full pb-9 items-center">
        <Icon name="rocket" size={100} color="#000" />
      </View>
      <Text className="text-4xl text-black font-black">
        Native wind with Expo router initialized Successfully !!!
      </Text>
      <Text className="w-full text-gray-700 text-lg font-bold my-9 tracking-widest">
        expo-router, react-native-safe-area-context, react-native-screens,
        expo-linking, expo-constants, expo-status-bar, react-native-vector-icons
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
