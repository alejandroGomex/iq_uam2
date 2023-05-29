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

import { Pregunta2 } from "./Pregunta2";
import React, { useState, useEffect } from "react";
import Timer from "../Tools/Timer";

export const Pregunta1 = ({ modalPregunta1, setModalPregunta }) => {
  const [modalPregunta2, setModalPregunta2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState(0);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    Alert.alert(`Opcion seleccionada: ${option}`);
  };
  const handleValue = (value) => {
    setValue(value);
    Alert.alert(`Valor opcion seleccionada: ${value}`);
  };

  const handleOption = (option) => {
    if (option === null) {
      Alert.alert("Seleccione una opcion");
      setModalPregunta2(false);
    } else {
      setModalPregunta2(true);
    }
  };

  return (
    <Modal animationType='slide' visible={modalPregunta1}>
      <View>
        <ColorBar></ColorBar>
      </View>
      <View>
        <Timer duration={30} />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/questions/question1/p1.png")}
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
            source={require("../../assets/questions/question1/r1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 2");
            handleValue("2");
          }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question1/r2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 3");
            handleValue("3");
          }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question1/r3.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerIm}>
        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 4");
            handleValue("4");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question1/r4.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 5");
            handleValue("5");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question1/r5.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleOptionPress("Opción 6");
            handleValue("6");
          }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question1/r6.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            handleOption(selectedOption);
          }}>
          <Pregunta2
            modalPregunta2={modalPregunta2}
            setModalPregunta2={setModalPregunta2}></Pregunta2>

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
  containerIm: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginLeft: 30,
  },
});
