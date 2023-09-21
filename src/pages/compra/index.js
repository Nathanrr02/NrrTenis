import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pagamento() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome no Cartão"
      />
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade (MM/AA)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Código de Segurança"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Realizar Pagamento</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>voltar ao inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});