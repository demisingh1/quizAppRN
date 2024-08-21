import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { QuizProvider } from "../hooks/quizContext";

const _layout = () => {
  return (
    <QuizProvider>
      <Stack>
        <Stack.Screen name="quizPage" />
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="EndQuizPage" /> */}
      </Stack>
    </QuizProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
