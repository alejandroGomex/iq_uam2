import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { RuedaInteligencia } from "./src/components/RuedaInteligencia";
//import { TiposInteligencia } from "./src/components/TiposInteligencia";
import { Login } from "./src/components/Login";

export default function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [modalRegistro, setModalRegistro] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRueda, setModalRueda] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [user, setUser] = useState(null);
  /* const fields = {
    "Nombre Usuario": userName,
    "Contraseña": userPassword,

  };
    const emptyFields = Object.entries(fields)
      .filter(([, value]) => value === "")
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      console.log("Error: Hay campos sin diligenciar:", emptyFields.join(", "));
      Alert.alert("Error", "Hay campos sin diligenciar", [{ text: "Aceptar", onPress: () => console.log("Alerta cerrada") }])
      return;
    }


    if (![userName, userPassword].every(field => field !== "")) {
      console.log("Error: Hay campos sin diligenciar");
      setTimeout(() => {
        Alert.alert("Error", "Hay campos sin diligenciar");
      }, 100);
      return;
    }
   */

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          IQ TEST {""}
          <Text style={styles.titleBold}>UAM® {"  "}</Text>
          <Image
            style={styles.logo}
            source={require("./assets/logo-uam.png")}
          />
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          {"\n"}
          {"\n"}
          Familia UAM {"\n"} tenenmos para ti este nuevo reto de {"\n"}
          desafíos mentales que pondrán a prueba{"\n"}tus habilidades
          cognitivas.
          {"\n"}
          {"\n"}
          <Text style={styles.titleBold}>¿ESTÁS LISTO?</Text>
        </Text>
        <Image style={styles.image} source={require("./assets/MentalI.png")} />
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => {
          setModalLogin(true);
        }}>
        <Login modalLogin={modalLogin} setModalLogin={setModalLogin}></Login>

        <Text style={styles.subtitle}>INICIAR TEST</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, styles.btnAgregar]}
        onPress={() => {
          setModalRueda(true);
        }}>
   {/*      <RuedaInteligencia
          modalRueda={modalRueda}
          setModalRueda={setModalRueda}></RuedaInteligencia>

        <Text style={styles.text}>Ingresar</Text> */}
      </Pressable>
      {/*<Pressable
            onPress={() => {
              setModalRegistro(true);
            }}
            style={[styles.btn, styles.btnRegistrar]}>
            <Text style={styles.text}>Registrarse</Text>
          </Pressable>
        </View>
        {/*<Registro
        modalRegistro={modalRegistro}
        setModalRegistro={setModalRegistro}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}
        user={user}
        setUser={setUser}></Registro>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0069a3",
    flex: 1,
    marginTop: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "800",
    marginTop: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 20,
  },
  titleBold: {
    fontWeight: "900",
    color: "#f4d73b",
    alignContent: "center",
  },
  backCover: {
    position: "absolute",
    marginTop: 100,
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    opacity: 0.7,
    backgroundColor: "rgba(52,52,52,alpha)",
  },
  square: {
    width: 500,
    height: 150,
    justifyContent: "center",
    backgroundColor: "#0069A3",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text_btn_user_add: {
    color: "#FCFCFC",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  campoUsuario: {
    marginTop: 250,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: "black",
  },
  campoContraseña: {
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#f4d73b",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F9C91A",
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  btnGoogle: {
    backgroundColor: "#F4D73B",
  },
  image: {
    width: 400,
    height: 400,
    marginLeft: 25,
  },
  logo: {
    width: 80,
    height: 60,
    alignItems: "center",
  },
});
