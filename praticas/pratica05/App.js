import { SafeAreaProvider } from "react-native-safe-area-context";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <SafeAreaProvider>
      {/* <SettingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ChatScreen /> */}
      <ProfileScreen />
    </SafeAreaProvider>
  );
}

export default App;