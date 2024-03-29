import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="StartStudy" options={{ headerShown: false }} />
      <Stack.Screen
        name="TrackStudy"
        options={{ title: "Study", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
