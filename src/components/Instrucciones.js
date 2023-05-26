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
import { TiposInteligencia } from "./TiposInteligencia";
import { Terminos } from "./Terminos";
import React, { useState, useEffect } from "react";
import ColorBar from "../Tools/ColorBar";
export const Instrucciones = ({ modalInstruccion, setModalInstruccion }) => {
  const [modalInteligencia, setModalInteligencia] = useState(false);
  const [modalTerminos, setModalTerminos] = useState(false);

  return (
    <Modal animationType='slide' visible={modalInstruccion}>
      <ColorBar></ColorBar>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/danger.png")}
          style={{ width: 50, height: 50, marginLeft: 90, marginTop: 30 }}
        />
        <Text style={styles.title}>Instrucciones :</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/clock.png")}
          style={styles.imageInst}
        />
        <Text style={{ marginLeft: 10 }}>
          {"\n"}
          {"\n"}
          Se dispondrán de 20 minutos para
          {"\n"}
          realizar la prueba en su totalidad . las{"\n"}
          preguntas que no sean respondidas ,{"\n"}
          contarán como incorrectas
          {"\n"}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/question.png")}
          style={styles.imageInst}
        />
        <Text style={{ marginLeft: 10 }}>
          {"\n"}
          {"\n"}
          La pantalla le mostrará al usuario
          {"\n"}
          una pregunta con 6 opciones para {"\n"}
          responder de las cuales podrá solo,{"\n"}
          seleccionar una
          {"\n"}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/answer.png")}
          style={styles.imageInst}
        />
        <Text style={{ marginLeft: 10 }}>
          {"\n"}
          {"\n"}
          Al responder la ultima pregunta
          {"\n"}
          se arrojarán los resultados con{"\n"}
          el puntaje de IQ alcanzado y la{"\n"}
          cantidad de preguntas correctas{"\n"}e incorrectas.Por esta razón el
          {"\n"}
          test puede realizarse solo una vez.
        </Text>
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

          <Text style={styles.subtitle}>Regresar</Text>
        </Pressable>
        <Pressable
          style={[styles.btn2, styles.btnAgregar]}
          onPress={() => {
            setModalTerminos(true);
          }}>
          <Terminos
            modalTerminos={modalTerminos}
            setModalTerminos={setModalTerminos}></Terminos>

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
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 70,
    marginLeft: 20,
    marginRight: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,

    borderColor: "gray",
    marginTop: 60,
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
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  campoUsuario: {
    marginTop: 20,
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
    marginTop: 20,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 45,
    marginRight: 70,
    marginLeft: 30,
    marginTop: 70,
  },
  btn2: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 45,
    marginRight: 80,
    marginTop: 70,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  imageInst: {
    width: 60,
    height: 60,
    marginLeft: 50,
    borderColor: "gray",
    marginTop: 35,
  },
});
