import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Appbar, Button, Surface, TextInput } from "react-native-paper";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    router.replace("/");
  };

  const handleGoBack = () => {
    router.back();
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
          <Appbar.Content title="Registro" titleStyle={styles.headerTitle} />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => {}}
            style={styles.headerAction}
          />
        </Appbar.Header>

        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Nombre"
              value={name}
              onChangeText={setName}
              mode="outlined"
              style={styles.input}
            />
          </View>

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

          <View style={styles.inputContainer}>
            <TextInput
              label="Correo"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoComplete="email"
              mode="outlined"
              style={styles.input}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.registerButton}
            >
              Guardar
            </Button>
          </View>
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
    paddingTop: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: "transparent",
    height: 56,
  },
  buttonContainer: {
    alignSelf: "center",
  },
  registerButton: {
    paddingVertical: 1,
  },
});
