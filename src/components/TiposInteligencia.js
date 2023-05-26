import { StatusBar } from "expo-status-bar";
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
import { Instrucciones } from "./Instrucciones";
import { RuedaInteligencia } from "./RuedaInteligencia";
import ColorBar from "../Tools/ColorBar";
import { Line } from "../Tools/Line";

export const TiposInteligencia = ({
  modalInteligencia,
  setModalInteligencia,
}) => {
  const [modalInstruccion, setModalInstruccion] = useState(false);
  const [modalRueda, setModalRueda] = useState(false);

  return (
    <Modal animationType='slide' visible={modalInteligencia}>
      <View>
        <ColorBar></ColorBar>
      </View>
      <ScrollView>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/corporal.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              la inteligencia corporal es la capacidad
              {"\n"}
              de conectar el cuerpo y la mente para
              {"\n"}
              lograr un cometido perfecto. va desde
              {"\n"}
              el control de los movimientos y luego se
              {"\n"}
              emplea el cuerpo de manera competente
            </Text>
          </View>
          <Line></Line>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/interpersonal.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia Interpersonal describe el
              {"\n"}
              poder concoerse mejor a si mismos .{"\n"}
              Esta inteligencia hace que las personas
              {"\n"}
              sean más autonomas.capacidad de
              {"\n"}comprender sentimientos emociones
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/verbal.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia verbal se rige por las
              {"\n"}
              preferencias de leer y expresarse .{"\n"}
              Se desarrolla la habilidad para aprender
              {"\n"}
              textos, aprender idiomas y fluidez
              {"\n"}verbal
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/logica.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia lógica o matemática es
              {"\n"}
              un tipo de inteligencia donde se puede
              {"\n"}
              evidenciar la habilidad con los números
              {"\n"} y con los problemas a solucionar por
              {"\n"}medio del analisis y la lógica
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/naturalista.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia naturalista se refiere a la
              {"\n"}
              capacidad de observar y comprender la
              {"\n"}
              naturaleza. Tiene la capacidad de
              {"\n"}
              observar, identificar y comprender los
              {"\n"} patrones y sistemas naturales, como:
              {"\n"} los seres vivos y el medio ambiente
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/intrapersonal.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia intrapersonal revela
              {"\n"}
              la capacidad de comprender y{"\n"}reflexionar sobre uno mismo,
              contando:{"\n"}
              pensamientos,y motivaciones .Las
              {"\n"}
              personas con esta inteligencia toman
              {"\n"}
              decisiones basadas en el yo mismo.
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/visual.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia visual denota la
              {"\n"}
              capacidad de comprender y crear
              {"\n"}
              imágenes visuales y espaciales. las
              {"\n"}
              personas con esta inteligencia pueden
              {"\n"}
              ser buenos artistas,diseñadores
              {"\n"} o ingenieros.
            </Text>
          </View>
          <Line></Line>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/musical.png")}
              style={styles.image}
            />
            <Text style={{ marginLeft: 10 }}>
              {"\n"}
              {"\n"}
              La inteligencia musical tiene
              {"\n"}
              capacidad de interpretar y crear
              {"\n"}
              melodías , ritmos y analisis de patrones
              {"\n"}
              personas con esta inteligencia la
              {"\n"}
              desarrollan por medio de la practica
            </Text>
          </View>
          <Line></Line>
          <View style={styles.buttons}>
            <Pressable
              style={[styles.btn, styles.btnAgregar]}
              onPress={() => {
                setModalRueda(true);
              }}>
              <RuedaInteligencia
                modalRueda={modalRueda}
                setModalRueda={setModalRueda}></RuedaInteligencia>

              <Text style={styles.subtitle}>Regresar</Text>
            </Pressable>

            <Pressable
              style={[styles.btn2, styles.btnAgregar]}
              onPress={() => {
                setModalInstruccion(true);
              }}>
              <Instrucciones
                modalInstruccion={modalInstruccion}
                setModalInstruccion={setModalInstruccion}></Instrucciones>

              <Text style={styles.subtitle}>Continuar</Text>
            </Pressable>
          </View>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
        </View>
      </ScrollView>
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
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    textAlign: "center",
  },

  text_btn_user_add: {
    color: "#FCFCFC",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
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
    marginTop: 40,
  },
  btn2: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 45,
    marginRight: 80,
    marginTop: 40,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderColor: "gray",
    marginTop: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
