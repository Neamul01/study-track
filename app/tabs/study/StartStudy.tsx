import { View, Text, Alert, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "expo-router";

const signUpSchema = z.object({
  subject: z.string().min(1),
  topic: z.string().min(1),
  chapter: z.string().min(1),
  note: z.string().min(1),
});
type SignUpSchemaType = z.infer<typeof signUpSchema>;

const StartStudy = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) });
  const router = useRouter();

  const handleStartStudy = (data: SignUpSchemaType) => {
    Alert.alert(
      "Start Study",
      "Please turn on Do not disturb mode",
      [
        {
          text: "Done",
          onPress: () => router.push("/tabs/study/TrackStudy"),
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
    <View
      className={`flex-1 items-center justify-between bg-gray-100 px-5 py-4`}
    >
      <View className="mb-14 w-full gap-y-3">
        <Text className="text-3xl font-bold text-center mb-5">
          Study details
        </Text>

        <View>
          <Text className="mb-2 text-lg font-semibold">Subject</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                className={`rounded-xl border px-4 py-3 ${
                  errors.subject ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter your subject name"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name="subject"
            rules={{ required: false }}
          />
          {errors.subject && (
            <Text className="text-xs text-red-500">
              Please enter subject name
            </Text>
          )}
        </View>
        <View>
          <Text className="mb-2 text-lg font-semibold">Topic</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                className={`rounded-xl border px-4 py-3 ${
                  errors.topic ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter topic name"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name="topic"
            rules={{ required: false }}
          />
          {errors.topic && (
            <Text className="text-xs text-red-500">
              Please enter topic Name
            </Text>
          )}
        </View>
        <View>
          <Text className="mb-2 text-lg font-semibold">Chapter</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                className={`rounded-xl border px-4 py-3 ${
                  errors.chapter ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter chapter name"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name="chapter"
            rules={{ required: false }}
          />
          {errors.chapter && (
            <Text className="text-xs text-red-500">
              Please enter chapter Name
            </Text>
          )}
        </View>
        <View>
          <Text className="mb-2 text-lg font-semibold">Note</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                className={`rounded-xl border px-4 py-3 ${
                  errors.note ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter Note"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name="note"
            rules={{ required: false }}
          />
          {errors.note && (
            <Text className="text-xs text-red-500">Please enter note</Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        className={`bg-blue-500 px-6 py-4 rounded-lg w-full items-center justify-center`}
        onPress={handleSubmit(handleStartStudy)}
      >
        <Text className={`text-white text-xl font-semibold`}>Start Study</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartStudy;
