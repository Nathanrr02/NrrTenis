import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CarrinhoDeCompras() {
  const navigation = useNavigation();
  const [cartItems] = useState([
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
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <ScrollView contentContainerStyle={styles.cartItemList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItemContainer}>
            <View style={styles.cartItemInfo}>
              <View style={styles.cartItemLeft}>
                <Image source={item.image} style={styles.cartItemImage} />
              </View>
              <View style={styles.cartItemRight}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>{item.price}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('compra')}
      >
        <Text style={styles.buttonText}>Finalizar Compra</Text>
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
  cartItemList: {
    alignItems: 'flex-start',
  },
  cartItemContainer: {
    marginBottom: 24,
  },
  cartItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  cartItemLeft: {
    width: '30%',
    marginRight: 16,
  },
  cartItemImage: {
    width: '100%',
    height: 100, 
    resizeMode: 'contain',
  },
  cartItemRight: {
    width: '60%',
  },
  cartItemName: {
    fontSize: 18,
    marginTop: 8,
  },
  cartItemPrice: {
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