import { MaterialTheme } from "@/constants/material-theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, List, Surface } from "react-native-paper";

const teams = [
  {
    id: "pediatrico",
    name: "Equipo pediatrico",
    icon: "account-group-outline",
  },
  { id: "gym-fans", name: "Gym fans", icon: "account-group-outline" },
  { id: "rotacion-2", name: "Rotacion 2", icon: "account-group-outline" },
  { id: "plastica-1", name: "Plastica 1", icon: "account-group-outline" },
];

export default function TeamSelectionScreen() {
  const handleTeamSelect = () => {
    router.back();
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title="Equipos" titleStyle={styles.headerTitle} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          style={styles.headerAction}
        />
      </Appbar.Header>

      <View style={styles.listContainer}>
        {teams.map((team) => (
          <List.Item
            key={team.id}
            title={team.name}
            left={(props) => <List.Icon {...props} icon={team.icon} />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            style={styles.listItem}
            onPress={() => handleTeamSelect()}
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
