import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Appbar, Button, Surface, Text, TextInput } from "react-native-paper";

export default function VerificationScreen() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<any[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all digits are entered
    const fullCode = [...newCode];
    if (fullCode.every((digit) => digit !== "") && index === 4) {
      // Navigate to main app after verification
      setTimeout(() => router.replace("/(tabs)/alarms"), 200);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    // Handle backspace to go to previous input
    if (key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleResendCode = () => {
    // Reset code and show resend logic
    setCode(["", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <ImageBackground
      source={require("@/assets/images/texture.jpg")}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <Surface style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={handleGoBack} />
          <Appbar.Content
            title="Verificacion"
            titleStyle={styles.headerTitle}
          />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => {}}
            style={styles.headerAction}
          />
        </Appbar.Header>

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text variant="headlineMedium" style={styles.title}>
              Ingresa el codigo
            </Text>
            <Text variant="bodySmall" style={styles.subtitle}>
              Enviamos un código de verificacion a{"\n"}
              <Text style={styles.phoneNumber}>+57 123 456 789</Text>
            </Text>
          </View>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref: any) => (inputRefs.current[index] = ref)}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, index)
                }
                keyboardType="numeric"
                maxLength={1}
                mode="outlined"
                style={styles.codeInput}
                contentStyle={styles.codeInputContent}
                outlineStyle={styles.codeInputOutline}
              />
            ))}
          </View>

          <Button
            mode="text"
            onPress={handleResendCode}
            style={styles.resendButton}
          >
            Reenviar el codigo
          </Button>
        </View>
      </Surface>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
  },
  headerAction: {
    opacity: 0,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  titleContainer: {
    marginBottom: 48,
  },
  title: {
    textAlign: "center",
    marginBottom: 4,
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    color: "#6F797A",
    lineHeight: 20,
    opacity: 0.8,
  },
  phoneNumber: {
    fontWeight: "bold",
    color: "#6F797A",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
    paddingHorizontal: 8,
  },
  codeInput: {
    width: 56,
    height: 56,
    backgroundColor: "#CAE6FF",
    margin: 0,
    padding: 0,
  },
  codeInputContent: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    margin: 0,
    padding: 0,
  },
  codeInputOutline: {
    borderRadius: 12,
    borderWidth: 0,
  },
  resendButton: {
    alignSelf: "center",
  },
});
