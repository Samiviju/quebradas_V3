import { Image, SafeAreaView, TextInput, View, Text } from "react-native";
import { styles } from "./Style";

export default function Cadastro() {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        height: 740,
        width: 400,
        bottom: -20,
      }}
    >
      <SafeAreaView style={{ marginTop: 20 }}>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{}}
            source={require("../../../assets/iconPesquisa.png")}
          />

          <TextInput style={styles.input} placeholder="Disponíveis"></TextInput>
        </SafeAreaView>

        <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Image style={{}} source={require("../../../assets/Cross.png")} />
            <SafeAreaView
              style={{ marginLeft: 10, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>
                Box Crossift
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>
                #Academias #Crossfit #Treinamento #GYM
              </Text>
              <SafeAreaView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  <Image
                    source={require("../../../assets/IconDisponivel.png")}
                  />
                  Disponivel
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  <Image source={require("../../../assets/iconReserva.png")} />
                  Fazer Sua Reserva
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Image style={{}} source={require("../../../assets/Quadra.png")} />
            <SafeAreaView
              style={{ marginLeft: 10, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>
                Poliesportivo
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>
                #Academias #Crossfit #Treinamento #GYM
              </Text>
              <SafeAreaView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  <Image
                    source={require("../../../assets/IconDisponivel.png")}
                  />
                  Disponivel
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  <Image source={require("../../../assets/iconReserva.png")} />
                  Fazer Sua Reserva
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Image
              style={{}}
              source={require("../../../assets/Basquete.png")}
            />
            <SafeAreaView
              style={{ marginLeft: 10, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>
                Quadra de Basquete
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>
                #Academias #Crossfit #Treinamento #GYM
              </Text>
              <SafeAreaView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  <Image
                    source={require("../../../assets/IconDisponivel.png")}
                  />
                  Disponivel
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  <Image source={require("../../../assets/iconReserva.png")} />
                  Fazer Sua Reserva
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: 10,

              borderRadius: 10,
            }}
          >
            <Image style={{}} source={require("../../../assets/Sociaty.png")} />
            <SafeAreaView
              style={{ marginLeft: 10, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>
                Society
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>
                #Academias #Crossfit #Treinamento #GYM
              </Text>
              <SafeAreaView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  <Image
                    source={require("../../../assets/IconDisponivel.png")}
                  />
                  Disponivel
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  <Image source={require("../../../assets/iconReserva.png")} />
                  Fazer Sua Reserva
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Image style={{}} source={require("../../../assets/Futebol.png")} />
            <SafeAreaView
              style={{ marginLeft: 10, justifyContent: "space-around" }}
            >
              <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>
                Campo de Futebol
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 10 }}>
                #Academias #Crossfit #Treinamento #GYM
              </Text>
              <SafeAreaView
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, marginBottom: 10 }}>
                  <Image
                    source={require("../../../assets/IconDisponivel.png")}
                  />
                  Disponivel
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  <Image source={require("../../../assets/iconReserva.png")} />
                  Fazer Sua Reserva
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </View>
        </SafeAreaView>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#fff",
            height: 60,
            bottom: -150,
          }}
        >
          <SafeAreaView
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/IconHome.png")} />
            <Text>Home</Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/IconReserv.png")} />
            <Text>Reservas</Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/IconPerfil.png")} />
            <Text>Perfil</Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
}
