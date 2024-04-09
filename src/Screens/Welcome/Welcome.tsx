import React from "react";
import applogo from "../../../assets/images/OIG3Hwbg1.png"
import DOLFIN from "../../../assets/images/DOLFIN.png"
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
    {/* <Text>{i18n.t(LocalizationKey.WELCOME)}</Text> */}
      <img style = {logostyles.container} src={applogo} alt="Image description" />
      <img style = {sublogostyles.container} src={DOLFIN} alt="Image description" />
      <Text style = {wordstyles.container}>{LocalizationKey.WELCOME}</Text>
      <Text style = {subwordstyles.container}>{LocalizationKey.SUBWELCOME}</Text>
      <StatusBar style="auto" />
      <Button style={{alignContent:"flex-end", marginTop:100, alignSelf: "flex-end"}}onPress={() => props.onNavigate(RootScreens.WELCOME1)}>
        {LocalizationKey.Continue}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "812px",
    width: "375px",
    padding: "40px",
  },
});
const logostyles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
});
const sublogostyles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
});

const wordstyles = StyleSheet.create({
  container: {
    fontSize:24,
    marginRight: "100px",
    marginBottom: 20,
    color: "#2685CA",
    width:"200px",
    fontWeight: "bold",
  },
});

const subwordstyles = StyleSheet.create({
  container: {
    fontSize:18,
    marginRight: "50px",
    marginBottom: 10,
    color: "#519DD5",
    width:"250px",
    fontWeight: "bold",
  },
});
