import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { styles } from "./styles";

export default function Cadastro() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.containerView}>
      <LinearGradient
        colors={["rgb(180, 0, 198)", "rgb(0,211,224)"]}
        style={styles.backgroudFundo}
      >
        <Text style={{ fontSize: 24.42, color: "#fff", fontWeight: "bold" }}>
          Crie a sua conta
        </Text>
      </LinearGradient>
      <SafeAreaView style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Data de nascimento" />
        <TextInput style={styles.input} placeholder="CPF" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          keyboardType="twitter"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={{ fontSize: 10 }}>
            Eu aceito o termo de
            <Text
              style={{ color: "#B400C6" }}
              onPress={() => Alert.alert("Pagina de Politica e Privacidade")}
            >
              Política e Privacidade
            </Text>
          </Text>
        </View>

        <Pressable style={styles.butao} onPress={alert}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16.24,
              fontWeight: "bold",
              color: "#fff",
              textShadowColor: "black",
            }}
          >
            Cadastrar
          </Text>
        </Pressable>

        <Text
          onPress={() => Alert.alert("Pagina para Reset de Senha")}
          style={{ fontSize: 12, fontWeight: "bold", margin: 10 }}
        >
          Já possui uma conta?
          <Text
            style={{ color: "#B400C6" }}
            onPress={() => Alert.alert("Pagina para Reset de Senha")}
          >
            Fazer Login
          </Text>
        </Text>
      </SafeAreaView>
    </View>
  );
}
