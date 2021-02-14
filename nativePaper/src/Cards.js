import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-paper'
import Cards from './Cards'

export default function Home() {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
      }}>
      <Text style={{ fontSize: 36, color: colors.primary }}>Native Paper</Text>
      <Text style={{ fontSize: 28, color: colors.accent }}>Vai ou Não Vai</Text>
      <Button
        icon="login"
        mode="contained"
        //color="#fff999"
        onPress={() => <Cards />}>
        Entrar
      </Button>
    </View>
  )
}
