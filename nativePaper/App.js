import React, { Component } from 'react'
import { Appearance, StyleSheet } from 'react-native'
import Imc from './src/Imc'
import Cards from './src/Cards'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#131313',
    accent: '#ffd900',
    danger: '#ed1c24'
  }
}

const dark = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#131313',
    primary: '#fff',
    accent: 'blue',
    danger: '#ed1c24'
  }
}

const colorScheme = Appearance.getColorScheme()

export default function App() {
  console.log(colorScheme)
  return (
    <PaperProvider theme={colorScheme == 'dark' ? theme : dark}>
      <Imc />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  }
})
