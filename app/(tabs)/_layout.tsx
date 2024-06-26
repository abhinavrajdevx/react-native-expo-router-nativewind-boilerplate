import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/Feather";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const TabIcon = ({
    icon,
    color,
    name,
    focused,
  }: {
    icon: string;
    color: string;
    name: string;
    focused: boolean;
  }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Icon
          className="bg-blue-700"
          name={icon}
          size={25}
          color={focused ? color : "#aaaaaa"}
        />
        <Text
          className={`${
            focused ? "font-bold text-black" : "font-pregular text-[#aaaaaa] "
          } text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#0f0f0f",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 2,
          borderTopColor: "#232533",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Latest",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"home"}
              color={color}
              name={"Home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "People",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"users"}
              color={color}
              name={"People"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dev"
        options={{
          title: "Developer",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"code"}
              color={color}
              name={"Developer"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
