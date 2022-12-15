import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cadastro from "./src/pages/Cadastro/Cadastro";
import Login from "./src/pages/Login/Login";
import Home from "./src/pages/Home/Home";
import Perfil from "./src/pages/Perfil/Perfil";
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
