import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  Chip,
  List,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";

import { Material3Switch } from "@/components/material3-switch";
import { MaterialTheme } from "@/constants/material-theme";

const days = [
  { key: "Lu", label: "L" },
  { key: "Ma", label: "M" },
  { key: "Mi", label: "M" },
  { key: "Ju", label: "J" },
  { key: "Vi", label: "V" },
  { key: "Sa", label: "S" },
  { key: "Do", label: "D" },
];

export default function CreateAlarmScreen() {
  const [hours, setHours] = useState("11");
  const [minutes, setMinutes] = useState("30");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [alarmName, setAlarmName] = useState("Desayuno");
  const [selectedDays, setSelectedDays] = useState<string[]>([
    "Lu",
    "Ma",
    "Mi",
  ]);
  const [vibration, setVibration] = useState(false);
  const [hoursInputFocused, setHoursInputFocused] = useState(false);
  const [minutesInputFocused, setMinutesInputFocused] = useState(false);

  const handleSave = () => {
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <Surface style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={handleCancel} />
        <Appbar.Content title="Crear alarma" titleStyle={styles.headerTitle} />
        <Appbar.Action icon="check" onPress={handleSave} />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.timePickerContainer}>
          <View style={styles.timePickerRow}>
            <View style={styles.timeInput}>
              <TextInput
                mode="outlined"
                value={hours}
                onChangeText={setHours}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  styles.timeTextInput,
                  hoursInputFocused && styles.timeTextInputFocused,
                ]}
                contentStyle={[
                  styles.timeTextContent,
                  hoursInputFocused && {
                    color: MaterialTheme.colors.onPrimaryContainer,
                  },
                ]}
                outlineStyle={styles.timeInputOutline}
                onFocus={() => setHoursInputFocused(true)}
                onBlur={() => setHoursInputFocused(false)}
              />
            </View>

            <Text style={styles.timeSeparator}>:</Text>

            <View style={styles.timeInput}>
              <TextInput
                mode="outlined"
                value={minutes}
                onChangeText={setMinutes}
                keyboardType="numeric"
                maxLength={2}
                style={[
                  styles.timeTextInput,
                  minutesInputFocused && styles.timeTextInputFocused,
                ]}
                contentStyle={styles.timeTextContent}
                outlineStyle={styles.timeInputOutline}
                onFocus={() => setMinutesInputFocused(true)}
                onBlur={() => setMinutesInputFocused(false)}
              />
            </View>

            <View style={styles.periodContainer}>
              <Button
                mode={period === "AM" ? "contained" : "outlined"}
                onPress={() => setPeriod("AM")}
                style={[
                  styles.periodButton,
                  styles.periodButtonTop,
                  period === "AM" && styles.periodButtonSelected,
                ]}
                labelStyle={[
                  styles.periodLabel,
                  period === "AM" && {
                    color: MaterialTheme.colors.onPrimaryContainer,
                  },
                ]}
                compact
              >
                AM
              </Button>
              <Button
                mode={period === "PM" ? "contained" : "outlined"}
                onPress={() => setPeriod("PM")}
                style={[
                  styles.periodButton,
                  styles.periodButtonBottom,
                  period === "PM" && styles.periodButtonSelected,
                ]}
                labelStyle={[
                  styles.periodLabel,
                  period === "PM" && {
                    color: MaterialTheme.colors.onPrimaryContainer,
                  },
                ]}
                compact
              >
                PM
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.daysContainer}>
          {days.map((day) => (
            <Chip
              key={day.key}
              mode={selectedDays.includes(day.key) ? "flat" : "outlined"}
              selected={selectedDays.includes(day.key)}
              onPress={() => toggleDay(day.key)}
              style={styles.dayChip}
              showSelectedCheck={false}
            >
              <Text style={styles.dayChipLabel}>{day.label}</Text>
            </Chip>
          ))}
        </View>

        <View style={styles.section}>
          <TextInput
            mode="outlined"
            label="Nombre"
            value={alarmName}
            onChangeText={setAlarmName}
            style={styles.nameInput}
          />
        </View>

        <List.Item
          title="Sonido"
          left={(props) => <List.Icon {...props} icon="music-note" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={styles.listItem}
          onPress={() => {
            router.push("/sound-selection");
          }}
        />

        <List.Item
          title="Vibracion"
          left={(props) => <List.Icon {...props} icon="vibrate" />}
          right={() => (
            <Material3Switch value={vibration} onValueChange={setVibration} />
          )}
          style={styles.listItem}
        />

        <List.Item
          title="Asignar equipo"
          left={(props) => (
            <List.Icon {...props} icon="account-group-outline" />
          )}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={styles.listItem}
          onPress={() => {
            router.push("/team-selection");
          }}
        />

        <List.Item
          title="Fecha de inicio"
          left={(props) => <List.Icon {...props} icon="calendar" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={styles.listItem}
          onPress={() => {}}
        />
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "#fff",
  },
  header: {
    elevation: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#191D17",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  timePickerContainer: {
    alignItems: "center",
    marginVertical: 32,
  },
  timePickerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  timeInput: {
    width: 108,
    height: 90,
  },
  timeTextInput: {
    backgroundColor: "#DEE3E5",
    height: 90,
    width: 108,
  },
  timeTextContent: {
    fontSize: 57,
    fontWeight: "bold",
    textAlign: "center",
  },
  timeInputOutline: {
    borderRadius: 12,
    borderWidth: 0,
  },
  timeSeparator: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#191D17",
  },
  periodContainer: {
    flexDirection: "column",
    gap: 0,
  },
  periodButton: {
    minWidth: 50,
    height: 45,
  },
  periodButtonTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  periodButtonBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  periodButtonSelected: {
    backgroundColor: MaterialTheme.colors.primaryContainer,
    borderWidth: 1,
    borderColor: MaterialTheme.colors.primary,
  },
  periodLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    marginBottom: 32,
  },
  dayChip: {
    minWidth: 36,
    maxWidth: 48,
  },
  dayChipLabel: {
    fontSize: 14,
    margin: 0,
    fontWeight: "500",
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#666",
  },
  nameInput: {
    backgroundColor: "transparent",
    height: 56,
  },
  timeTextInputFocused: {
    backgroundColor: MaterialTheme.colors.primaryContainer,
  },
  listItem: {
    paddingVertical: 12,
    backgroundColor: MaterialTheme.colors.surface,
    marginBottom: 20,
  },
});
