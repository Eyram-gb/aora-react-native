import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              className="w-[130px] h-[84px]"
              source={images.logo}
              resizeMode="contain"
            />
            <Image
              className="max-w-[380px] w-full h-[300px]"
              source={images.cards}
              resizeMode="contain"
            />
            <View className="relative mt-1">
              <Text className="text-2xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[86px] h-[15px] absolute -bottom-2 -right-5"
                resizeMode="comtain"
              />
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
            <CustomButton
              title="Continue with email"
              handlePress={() => {
                router.push("/sign-in");
              }}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="#161622" />
    </>
  );
}
