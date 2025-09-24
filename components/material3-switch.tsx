import { MaterialTheme } from "@/constants/material-theme";
import React from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

const Colors = MaterialTheme.colors;

interface Material3SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

export function Material3Switch({
  value,
  onValueChange,
  disabled = false,
}: Material3SwitchProps) {
  const animatedValue = React.useRef(new Animated.Value(value ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#DEE3E5", "#3B6939"], // Light gray when off, green when on
  });

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 24], // Position of the thumb
  });

  const thumbColor = value ? "#FFFFFF" : Colors.outline; // White when on, light gray when off

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.track,
          { backgroundColor: trackColor },
          !value && styles.disabledTrackBorder,
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              backgroundColor: thumbColor,
              transform: [{ translateX: thumbTranslateX }],
            },
          ]}
        >
          {value && <Icon source="check" size={14} color="#3B6939" />}
          {!value && <Icon source="close" size={14} color="#BDBDBD" />}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  track: {
    width: 52,
    height: 32,
    borderRadius: 18,
    justifyContent: "center",
    position: "relative",
  },
  disabledTrackBorder: {
    borderWidth: 2,
    borderColor: Colors.outline,
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
