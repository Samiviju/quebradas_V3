import { View, Image, Text, TextInput, SafeAreaView, Button, Pressable, Alert } from "react-native";
import { styled } from "nativewind";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";


export default function Login() {
  return (
    <View>

      <LinearGradient colors={['rgb(180, 0, 198)', 'rgb(0,211,224)']} style={styles.backgroudFundo}>
        <Image style={styles.grafite1} source={require("../../../assets/Group1.png")} />
        <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
        <Text style={styles.bemVindo}>Bem-vindo(a) a</Text>
      </LinearGradient>

      <View style={styles.containerLogin}>
        <Text style={styles.textLogin}>Faça seu login</Text>
      </View>

      <SafeAreaView style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="seuemail@seudominio.com"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          keyboardType='twitter'
        />

        <Pressable style={styles.butao} onPress={alert}>
          <Text style={{ textAlign: 'center', fontSize: 16.24, fontWeight: "bold", color: '#fff', textShadowColor: 'black' }}>Login</Text>
        </Pressable>

        <Text style={{ fontSize: 12, }}>Esqueceu sua senha?</Text>
      </SafeAreaView>
      <Image style={styles.grafite2} source={require("../../../assets/path254.png")} />
    </View>


  );
}


// import { withExpoSnack } from 'nativewind';

// import { Text, View } from 'react-native';
// import { styled } from 'nativewind';

// const StyledView = styled(View)
// const StyledText = styled(Text)

// export default function Login() {
//   return (
//     <StyledView className="flex-1 items-center justify-center">
//       <StyledText className="text-slate-800">Try editing me! 🎉</StyledText>
//     </StyledView>
//   );
// }