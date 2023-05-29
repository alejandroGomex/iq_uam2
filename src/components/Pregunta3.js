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
  Alert
} from "react-native";

import ColorBar from "../Tools/ColorBar";
import Timer from "../Tools/Timer";
import { TiposInteligencia } from "./TiposInteligencia";
import React, { useState, useEffect } from "react";
import {Pregunta4} from "./Pregunta4";
export const Pregunta3 = ({ modalPregunta3, setModalPregunta3 }) => {
  const [modalInteligencia, setModalInteligencia] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalPregunta4, setModalPregunta4] = useState(false);
  const [value, setValue] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    Alert.alert(`Opción seleccionada: ${option}`);
  };

  const handleValue = (value) => {
    setValue(value);
    Alert.alert(`Valor opcion seleccionada: ${value}`);
  };


  const handleOption = (option)=>{
    if(option === null){
      alert('Seleccione una opción')
      setModalPregunta4(false)
    }else{
      setModalPregunta4(true)
    }
}



  return (
    <Modal animationType='slide' visible={modalPregunta3}>
      <View>
        <ColorBar></ColorBar>
      </View>
      <View>
      <Timer duration={30}  />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/questions/question3/p3.jpeg")}
        />
      </View>
      <View style={styles.containerIm}>
        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 1');
          handleValue('1');
        }
        }>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question3/1.jpeg")}

          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 2')
          handleValue('2');

        }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question3/2.jpeg")}

          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 3')
          handleValue('3');

        }}>
          <Image
            style={styles.subimage}
            source={require("../../assets/questions/question3/3.jpeg")}

          />
        </TouchableOpacity>

      </View>
      <View style={styles.containerIm}>
        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 4')
          handleValue('4');

        }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question3/4.png")}

          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 5')
          handleValue('5');

        }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question3/5.png")}


          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          handleOptionPress('Opción 6')
          handleValue('6');

        }}>
          <Image
            style={styles.subimagef2}
            source={require("../../assets/questions/question3/6.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            handleOption(selectedOption)

          }}>
          <Pregunta4
            modalPregunta4={modalPregunta4}
            setModalPregunta4={setModalPregunta4}></Pregunta4>

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
});
