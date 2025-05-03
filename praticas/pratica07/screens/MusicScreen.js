// screens/MusicScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function MusicScreen({ navigation }) {
  const musicList = [
    { title: 'Música 1', artist: 'Artista 1' },
    { title: 'Música 2', artist: 'Artista 2' },
    { title: 'Música 3', artist: 'Artista 3' },
    { title: 'Música 4', artist: 'Artista 4' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {musicList.map((music, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>🎵 {music.title}</Text>
          <Text style={styles.artist}>{music.artist}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
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
