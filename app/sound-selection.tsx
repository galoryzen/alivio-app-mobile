import { MaterialTheme } from "@/constants/material-theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, List, Surface } from "react-native-paper";

const sounds = [
  { id: "bomb", name: "Bomb", icon: "music-note" },
  { id: "nuke", name: "Nuke", icon: "music-note" },
  { id: "birds", name: "Birds", icon: "music-note" },
  { id: "ducks", name: "Ducks", icon: "music-note" },
];

export default function SoundSelectionScreen() {
  const handleSoundSelect = () => {
    // Navigate back to create-alarm with selected sound
    router.back();
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title="Sonidos" titleStyle={styles.headerTitle} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          style={styles.headerAction}
        />
      </Appbar.Header>

      <View style={styles.listContainer}>
        {sounds.map((sound) => (
          <List.Item
            key={sound.id}
            title={sound.name}
            left={(props) => <List.Icon {...props} icon={sound.icon} />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            style={styles.listItem}
            onPress={() => handleSoundSelect()}
          />
        ))}
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    elevation: 0,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  headerAction: {
    opacity: 0,
  },
  listContainer: {
    paddingHorizontal: 24,
    marginTop: 36,
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: MaterialTheme.colors.surface,
  },
});
