import { Link, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-[1] items-center justify-center bg-white pt-8">
      <Text className="text-rose-300 text-4xl font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href='/home'>Go to home page</Link>
    </View>
  );
}
