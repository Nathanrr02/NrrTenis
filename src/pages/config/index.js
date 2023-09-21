import React, { useState } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Configuracoes() {
  const navigation = useNavigation();
  const [userName,] = useState('Seu Nome');
  const [userEmail,] = useState('seuemail@example.com');
  const [userFavorites,] = useState(['Tênis 1', 'Tênis 2']);
  const [userPaymentMethods,] = useState(['Cartão de Crédito', 'PayPal']);
  const [userPhoto,] = useState(require('../../assets/foto.jpg'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.userInfoContainer}>
        <Image source={userPhoto} style={styles.userPhoto} />
        <Text style={styles.userInfo}>Nome: {userName}</Text>
        <Text style={styles.userInfo}>Email: {userEmail}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meus Favoritos</Text>
        {userFavorites.map((favorite, index) => (
          <Text key={index} style={styles.listItem}>
            {favorite}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Minhas Formas de Pagamento</Text>
        {userPaymentMethods.map((paymentMethod, index) => (
          <Text key={index} style={styles.listItem}>
            {paymentMethod}
          </Text>
        ))}
      </View>
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
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  editButton: {
    backgroundColor: '#FF0000',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});