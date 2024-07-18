import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View } from "react-native";
import HomeScreen from "./screnns/HomeScreen";
import TermsandPrivacy from "./screnns/TermsandPrivacy";
import Faqs from "./screnns/Faqs";
import UserList from "./screnns/UserList";
import Login from "./screnns/Login";
import SingUppersonal from "./screnns/SingUppersonal";
import SingUpempresa from "./screnns/SingUpempresa";
import RecoveryPass from "./screnns/RecoveryPass";
import NewPass from "./screnns/NewPass";
import EmailVerify from "./screnns/EmailVerify";
import LinkExpired from "./screnns/LinkExpired";
import Activated from "./screnns/Activated";
import ChangePass from "./screnns/ChangePass";
import EmailReady from "./screnns/EmailReady";
import Cuentas from "./screnns/Cuentas";
import AjustesPrivacidad from "./screnns/AjustesPrivacidad";
import AjustesNoticaciones from "./screnns/AjustesNotificaciones";

export default function App() {
  return (
    <View style={styles.container}>
      <AjustesNoticaciones />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
