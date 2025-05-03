// screens/FavoriteScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function FavoriteScreen({ navigation }) {
  const favorites = [
    { title: 'Música Favorita 1', artist: 'Artista 1' },
    { title: 'Música Favorita 2', artist: 'Artista 2' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favorites.map((music, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>🎵 {music.title}</Text>
          <Text style={styles.artist}>{music.artist}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffe4e1',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#555',
  },
});
