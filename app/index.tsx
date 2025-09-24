import { router } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Button, Surface, Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    router.push("/verification");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <ImageBackground
      source={require("@/assets/images/texture.jpg")}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <Surface style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text variant="headlineLarge" style={styles.title}>
            Bienvenido
          </Text>
          <Text variant="bodySmall" style={styles.subtitle}>
            Para continuar, ingresa tu número de teléfono
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              label="Teléfono"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              autoComplete="tel"
              mode="outlined"
              style={styles.input}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
            >
              Iniciar Sesion
            </Button>
          </View>
        </View>

        <View style={styles.footer}>
          <Button mode="text" onPress={handleRegister}>
            ¿No tienes una cuenta? Regístrate
          </Button>
        </View>
      </Surface>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "transparent",
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  contentContainer: {
    flex: 0.5,
    justifyContent: "flex-start",
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 700,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 16,
    color: "#6F797A",
  },
  inputContainer: {
    marginBottom: 32,
  },
  input: {
    backgroundColor: "transparent",
    height: 56,
  },
  loginButton: {
    paddingVertical: 1,
  },
  footer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});
