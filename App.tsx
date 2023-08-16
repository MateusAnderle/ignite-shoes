import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import OneSignal from "react-native-onesignal";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";
import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";
import { CartContextProvider } from "./src/contexts/CartContext";
import { tagUserInfoCreate } from "./src/notifications/notificationsTags";
import { useEffect } from "react";

OneSignal.setAppId("7ed5d123-ab9d-407d-a499-d33a6d25743a");

OneSignal.setEmail("matsanderle@gmail.com");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate();

  useEffect(() => {
    const openMessage = OneSignal.setNotificationOpenedHandler((response) => {
      console.log("Message opened!");

      const { actionId } = response.action as any;
      if (actionId) {
        console.log(actionId);
      }
    });

    return () => openMessage;
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
