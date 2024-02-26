import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function TabOneScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/tabs/study/");
    }, 1000);

    return () => clearTimeout(timer); // clear timer
  }, []);

  return (
    <View className={`flex-1 items-center justify-center bg-gray-300`}>
      <Text className={`text-3xl text-center text-gray-800 font-bold mb-8`}>
        Welcome to Study App
      </Text>
    </View>
  );
}
