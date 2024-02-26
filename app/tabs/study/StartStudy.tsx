import { View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";

const StartStudy = () => {
  const handleStartStudy = () => {
    Alert.alert(
      "Start Study",
      "Please turn on Do not disturb mode",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => startActivityAsync(ActivityAction.ZEN_MODE_SETTINGS),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View className={`flex-1 items-center justify-center bg-gray-100`}>
      <Text>StartStudy</Text>
      <TouchableOpacity
        className={`bg-blue-500 px-6 py-3 rounded-lg`}
        onPress={handleStartStudy}
      >
        <Text className={`text-white text-lg font-semibold`}>Start Study</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartStudy;
