import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Image, Text } from "react-native";

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
      <LinearGradient
        colors={["rgb(180, 0, 198)", "rgb(120,0,132)"]}
        style={{
          height: 210,
          borderBottomRightRadius: 36,
          borderBottomLeftRadius: 36,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            top: 20,
            right: 160,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Perfil
        </Text>
        <Image
          style={{ right: -130, top: 30 }}
          source={require("../../../assets/Group2.png")}
        />
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Image source={require("../../../assets/Perfil.png")} />
          <SafeAreaView style={{ paddingLeft: 10 }}>
            <Text
              style={{ color: "#fff", fontSize: 18.74, fontWeight: "bold" }}
            >
              Samuel Vieira
            </Text>
            <Text style={{ color: "#fff" }}>Araxá/MG</Text>
            <Text style={{ color: "#fff" }}>141 Avaliações</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 8, margin: 5 }}>Nota:</Text>
          <Text style={{ color: "#fff", fontSize: 17.85 }}>4.6/5.0</Text>
          <Image
            style={{ marginLeft: 7 }}
            source={require("../../../assets/Estrela.png")}
          />
        </SafeAreaView>
      </LinearGradient>

      <SafeAreaView style={{ marginTop: 20 }}>
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
                  Reserva Novamente
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
                  Reserva Novamente
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
                Spciety
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
                  Reserva Novamente
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
                Poloesportivo
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
                  Reserva Novamente
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
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          height: 60,
          bottom: 45,
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
    </View>
  );
}
