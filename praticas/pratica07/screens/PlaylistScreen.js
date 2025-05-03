// screens/PlaylistScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function PlaylistScreen({ navigation }) {
  const playlists = [
    { title: 'Playlist 1', songs: 10 },
    { title: 'Playlist 2', songs: 5 },
    { title: 'Playlist 3', songs: 8 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {playlists.map((playlist, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>🎼 {playlist.title}</Text>
          <Text style={styles.subtitle}>{playlist.songs} músicas</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#e6e6fa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
