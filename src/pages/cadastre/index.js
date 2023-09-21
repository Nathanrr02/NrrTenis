import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Cadastre() {
const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <Animatable.View
    animation="fadeInLeft"
    delay={500}
    style={styles.containerHeader}
    >
        <Text style={styles.message}>Bem-vindo, Novo usuario (a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Telefone</Text>
        <TextInput placeholder="Digite um telefone" style={styles.input} />
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Cire sua senha" style={styles.input} />
        <Text style={styles.title}>Confirmar senha</Text>
        <TextInput placeholder="Confirme sua senha" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
          onPress={ () => navigation.navigate('nrr')}
          >Criar conta </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText} 
           onPress={ () => navigation.navigate('SignIn')}
          >já possui conta? Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'   
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#FF0000',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  registerText: {
  color: '#a1a1a1'
  }
})