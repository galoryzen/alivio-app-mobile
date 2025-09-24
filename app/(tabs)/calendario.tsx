import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";

export default function CalendarioScreen() {
  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Calendario" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <Text variant="headlineSmall" style={styles.comingSoon}>
        Próximamente...
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  header: {
    backgroundColor: "transparent",
    elevation: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#191D17",
  },
  comingSoon: {
    textAlign: "center",
    color: "#6F797A",
  },
});
