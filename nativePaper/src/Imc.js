import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function Imc() {
  const [peso, setPeso] = useState('')
  const [alt, setAlt] = useState('')

  function handleSubmit() {
    const altura = alt / 100
    const imc = peso / (altura * altura)

    if (imc < 18.6) {
      alert(`IMC = ${imc.toFixed(2)}. Você está abaixo do peso!`)
    } else if (imc >= 18.6 && imc < 24.9) {
      alert(`IMC = ${imc.toFixed(2)}. Você está no peso ideal!`)
    } else if (imc >= 24.9) {
      alert(`IMC = ${imc.toFixed(2)}. Você está acima do peso!`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (Kg)"
        placeholderTextColor="#fff5"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={alt}
        onChangeText={(alt) => setAlt(alt)}
        placeholder="Altura (cm)"
        placeholderTextColor="#fff5"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // esse cointainer vai pegar a tela inteira
    backgroundColor: '#ff0000',
    alignItems: 'center'
  },
  title: {
    //color: '#131313',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50
  },
  input: {
    backgroundColor: '#131313',
    width: 300,
    height: 70,
    borderRadius: 20,
    color: '#fff',
    padding: 20,
    fontSize: 30,
    margin: 15
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41a',
    margin: 15,
    padding: 10,
    width: 300
  },
  textButton: {
    fontSize: 35,
    color: '#fff'
  }
})
