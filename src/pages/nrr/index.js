import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NrrStore() {
  const navigation = useNavigation();
  const sneakers = [
    {
      id: 1,
      name: 'Nike Air Max',
      price: '$129.99',
      image: require('../../assets/nike_air_max.jpg'),
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: '$149.99',
      image: require('../../assets/adidas_ultraboost.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NRR Store</Text>
      <ScrollView contentContainerStyle={styles.sneakerList}>
        {sneakers.map((sneaker) => (
          <TouchableOpacity
            key={sneaker.id}
            style={styles.sneakerContainer}
          >
            <Image source={sneaker.image} style={styles.sneakerImage} />
            <Text style={styles.sneakerName}>{sneaker.name}</Text>
            <Text style={styles.sneakerPrice}>{sneaker.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('config')}
      >
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('carrinho')}
      >
        <Text style={styles.buttonText}>Carrinho de Compras</Text>
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
  sneakerList: {
    alignItems: 'center',
  },
  sneakerContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  sneakerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  sneakerName: {
    fontSize: 18,
    marginTop: 8,
  },
  sneakerPrice: {
    fontSize: 16,
    color: '#FF0000',
    fontWeight: 'bold',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});