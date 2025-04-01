import { StyleSheet, ScrollView, View } from "react-native";
import { Appbar, Text, Switch, Checkbox, RadioButton } from "react-native-paper";
import { useState } from "react";

function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);
  const [pushChecked, setPushChecked] = useState(true);
  const [language, setLanguage] = useState('pt');

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Configurações" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Definir tema</Text>
        <View style={styles.switchItem}>
          <Text>Modo Escuro</Text>
          <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
        </View>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <View>
          <Checkbox.Item
            label="SMS"
            status={smsChecked ? "checked" : "unchecked"}
            onPress={() => setSmsChecked(!smsChecked)}
          />
          <Checkbox.Item
            label="Push"
            status={pushChecked ? "checked" : "unchecked"}
            onPress={() => setPushChecked(!pushChecked)}
          />
        </View>
        <Text style={styles.sectionTitle}>Selecione seu idioma</Text>
        <RadioButton.Group onValueChange={setLanguage} value={language}>
          <View style={styles.radioItem}>
            <RadioButton value="pt" />
            <Text>Português</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="en" />
            <Text>Inglês</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="es" />
            <Text>Espanhol</Text>
          </View>
        </RadioButton.Group>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionContainer: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 8 },
  switchItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 16 },
  radioItem: { flexDirection: "row", alignItems: "center" }
});

export default SettingsScreen;
