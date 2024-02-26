import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
const Home = () => {
  const router = useRouter();
  const handleStartStudy = () => {
    // Open location settings
    // startActivityAsync(ActivityAction.ZEN_MODE_SETTINGS);
    router.push("/tabs/study/StartStudy");
  };
  return (
    <View className={`flex-1 items-center justify-center bg-gray-300`}>
      <Text className={`text-3xl text-center text-gray-800 font-bold mb-8`}>
        Welcome
      </Text>
      <TouchableOpacity
        className={`bg-blue-500 px-6 py-3 rounded-lg`}
        onPress={handleStartStudy}
      >
        <Text className={`text-white text-lg font-semibold`}>Start Study</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
