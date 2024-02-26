import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  const handleStartStudy = () => {
    // Add logic to start studying
  };

  return (
    <View className={`flex-1 items-center justify-center bg-gray-300`}>
      <Text className={`text-3xl text-center text-gray-800 font-bold mb-8`}>
        Welcome to Study App
      </Text>
      <TouchableOpacity
        className={`bg-blue-500 px-6 py-3 rounded-lg`}
        onPress={handleStartStudy}
      >
        <Text className={`text-white text-lg font-semibold`}>Start Study</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
