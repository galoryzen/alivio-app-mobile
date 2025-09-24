import { MaterialTheme } from "@/constants/material-theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Material3Switch } from "./material3-switch";

const Colors = MaterialTheme.colors;

export interface AlarmData {
  id: string;
  time: string;
  period: "AM" | "PM";
  label: string;
  enabled: boolean;
}

interface AlarmCardProps {
  alarm: AlarmData;
  onToggle: (id: string, enabled: boolean) => void;
}

export function AlarmCard({ alarm, onToggle }: AlarmCardProps) {
  const cardStyle = alarm.enabled ? styles.enabledCard : styles.disabledCard;
  const timeStyle = alarm.enabled ? styles.enabledTime : styles.disabledTime;
  const labelStyle = alarm.enabled ? styles.enabledLabel : styles.disabledLabel;
  const periodStyle = alarm.enabled
    ? styles.enabledPeriod
    : styles.disabledPeriod;

  return (
    <Card style={[styles.card, cardStyle]}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.timeContainer}>
          <Text style={[styles.time, timeStyle]}>{alarm.time}</Text>
          <Text style={[styles.period, periodStyle]}>{alarm.period}</Text>
        </View>
        <Text style={[styles.label, labelStyle]}>{alarm.label}</Text>
        <Material3Switch
          value={alarm.enabled}
          onValueChange={(enabled) => onToggle(alarm.id, enabled)}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 0,
    height: 116,
  },
  enabledCard: {
    backgroundColor: Colors.primaryContainer,
  },
  disabledCard: {
    backgroundColor: "#E5E5E5",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  timeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
  },
  time: {
    fontSize: 57,
    fontWeight: "300",
    lineHeight: 56,
  },
  enabledTime: {
    color: Colors.onSurface,
  },
  disabledTime: {
    color: Colors.outline,
  },
  period: {
    fontSize: 24,
    marginLeft: 8,
  },
  enabledPeriod: {
    color: Colors.onSurface,
  },
  disabledPeriod: {
    color: Colors.outline,
  },
  label: {
    fontSize: 12,
    position: "absolute",
    bottom: 16,
    left: 20,
  },
  enabledLabel: {
    color: Colors.onSurface,
  },
  disabledLabel: {
    color: Colors.outline,
  },
});
