import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

import { MaterialTheme } from "@/constants/material-theme";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <PaperProvider theme={MaterialTheme}>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="verification" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="create-alarm" options={{ headerShown: false }} />
          <Stack.Screen name="sound-selection" options={{ headerShown: false }} />
          <Stack.Screen name="team-selection" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="light" />
      </ThemeProvider>
    </PaperProvider>
  );
}
