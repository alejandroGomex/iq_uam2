import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import ColorBar from "../Tools/ColorBar";
import { TiposInteligencia } from "./TiposInteligencia";
import React, { useState, useEffect } from "react";

export const RuedaInteligencia = ({ modalRueda, setModalRueda }) => {
  const [modalInteligencia, setModalInteligencia] = useState(false);

  return (
    <Modal animationType='slide' visible={modalRueda}>
      <View>
        <ColorBar></ColorBar>
        <Text style={styles.title}>
          ¿Sabías que... hay 8 tipos de inteligencia?
        </Text>
      </View>
      <View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/inteligencias.png")}
          />
          <Image
            style={styles.subimage}
            source={require("../../assets/acreditacion.png")}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            setModalInteligencia(true);
          }}>
          <TiposInteligencia
            modalInteligencia={modalInteligencia}
            setModalInteligencia={setModalInteligencia}></TiposInteligencia>

          <Text style={styles.subtitle}>Continuar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  backCover: {
    position: "absolute",
    marginTop: 100,
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    opacity: 0.6,
    backgroundColor: "rgba(52,52,52,alpha)",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 45,
    marginLeft: 120,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  image: {
    width: 400,
    height: 450,
    marginLeft: 10,
  },
  subimage: {
    width: 150,
    height: 40,
    marginLeft: 130,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
