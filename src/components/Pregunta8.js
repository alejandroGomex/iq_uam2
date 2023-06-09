import {
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import ColorBar from "../Tools/ColorBar";
import Timer from "../Tools/Timer";
import { TiposInteligencia } from "./TiposInteligencia";
import React, { useState, useEffect } from "react";
import { Resultado } from "./Resultado";
import { Pregunta } from "./Pregunta8";
export const Pregunta8 = ({ modalPregunta8, setModalPregunta8 }) => {
  const [modalInteligencia, setModalInteligencia] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalResultado, setModalResultado] = useState(false);
  const [value, setValue] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    Alert.alert(`Opción seleccionada: ${option}`);
  };

  const handleValue = (value) => {
    setValue(value);
    Alert.alert(`Valor opcion seleccionada: ${value}`);
  };

  const handleOption = (option) => {
    if (option === null) {
      alert("Seleccione una opción");
      setModalResultado(false);
    } else {
      setModalResultado(true);
    }
  };

  return (
    <Modal animationType='slide' visible={modalPregunta8}>
      <View>
        <ColorBar></ColorBar>
      </View>
      <View>
        <Timer duration={30} />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/questions/question9/p9.png")}
        />
      </View>
      <View style={styles.containerIm}>
        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 1");
            handleValue("1");
          }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question9/1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 2");
            handleValue("3");
          }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question9/2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 3");
            handleValue("4");
          }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question9/3.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerIm}>
        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 4");
            handleValue("5");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question9/4.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 5");
            handleValue("6");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question9/5.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 6");
            handleValue("8");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question9/6.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            handleOption(selectedOption);
          }}>
          <Resultado
            modalResultado={modalResultado}
            setModalResultado={setModalResultado}></Resultado>

          <Text style={styles.subtitle}>Terminar</Text>
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
    marginTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 45,
    marginLeft: 120,
    marginTop: 35,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },

  image: {
    marginTop: 40,
    width: 300,
    height: 350,
    marginLeft: 50,
  },
  containerIm: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginLeft: 30,
  },
  subimage: {
    marginTop: 20,
    width: 100,
    height: 75,
  },
  subimagef2: {
    marginTop: 20,
    width: 100,
    height: 75,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
