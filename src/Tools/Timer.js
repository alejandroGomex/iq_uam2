import React, { useState, useEffect } from 'react';
import { View, Text,Alert,StyleSheet } from 'react-native';
import {Resultado} from '../components/Resultado';
const Timer = () => {
  const [modalResultado, setModalResultado] = useState(false);  
  const totalSeconds = 15; // Cambia este valor según tus necesidades
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      Alert.alert('¡Tiempo agotado!');
      setModalResultado(true);
      console.log('¡Tiempo agotado!');
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;


  return (
    <View style={styles.container}>
      <Text style={styles.timer} >{minutes}:{remainingSeconds < 10 ? '0' : ''}
        {remainingSeconds}</Text>


        <Resultado
              modalResultado={modalResultado}
              setModalResultado={setModalResultado}></Resultado>
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});



export default Timer;
