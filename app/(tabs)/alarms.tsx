import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Appbar, FAB, Surface } from "react-native-paper";
import { router } from "expo-router";

import { AlarmCard, AlarmData } from "@/components/alarm-card";

export default function AlarmsScreen() {
  const [alarms, setAlarms] = useState<AlarmData[]>([
    {
      id: "1",
      time: "6:30",
      period: "AM",
      label: "Alarma / Lu, Ma, Mi",
      enabled: true,
    },
    {
      id: "2",
      time: "8:45",
      period: "AM",
      label: "Trabajos / Lunes y Martes",
      enabled: true,
    },
    {
      id: "3",
      time: "10:00",
      period: "AM",
      label: "Rest / Semana",
      enabled: true,
    },
    {
      id: "4",
      time: "10:30",
      period: "PM",
      label: "Sleep / Lu, Ma, Ju",
      enabled: false,
    },
    {
      id: "5",
      time: "10:45",
      period: "PM",
      label: "Sleep / Viernes",
      enabled: false,
    },
  ]);

  const handleToggleAlarm = (id: string, enabled: boolean) => {
    setAlarms((prev) =>
      prev.map((alarm) => (alarm.id === id ? { ...alarm, enabled } : alarm))
    );
  };

  const handleAddAlarm = () => {
    router.push("/create-alarm");
  };

  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Alarmas" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {alarms.map((alarm) => (
          <AlarmCard
            key={alarm.id}
            alarm={alarm}
            onToggle={handleToggleAlarm}
          />
        ))}
      </ScrollView>

      <FAB icon="plus" style={styles.fab} onPress={handleAddAlarm} />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    elevation: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#191D17",
  },
  scrollView: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: "#FFFFFF",
    elevation: 0,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 16,
    backgroundColor: "#BCF0B4",
    elevation: 0,
    shadowOpacity: 0,
  },
});
