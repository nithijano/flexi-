import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from "react-native";

const image = { uri: "../assets/s3.png" };

function Home({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titletext}> Hello </Text>
        <Text style={styles.titletext}> Welcome </Text>

        <View style={styles.formWrapper}>
          <Text style={styles.formHeading}>Sign In</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text>Email</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.inputWrapper}>
          <Text>Password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.newWrapper}>
          <Button
            title="Sign in"
            color="#0F517E"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
        <View style={{display:'flex', marginTop: 10, marginLeft:10, flexDirection:'row',alignItems:'center',gap:10}}>
          <View style={{ backgroundColor: "#c2c2c2", height: 1, width:150 }}></View>
          <Text style={{ marginBottom: 10 }}>OR</Text>
          <View style={{ backgroundColor: "#c2c2c2", height: 1, width:150 }}></View>
        </View>

        <View style={styles.newWrappertwo}>
          <Button
            title="Continue with Google"
            color="#c4d4e2"
            onPress={() => Alert.alert("press")}
          />
        </View>
        <Text style={styles.textfonts}>Don’t have Account</Text>
        <Text style={styles.textfont}>Sign up</Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
   
  },
  titletext: {
    color: "#0F517E",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "abhayalibre",
  },

  text: {
    color: "#0F517E",
    lineHeight: 70,
    fontSize: 26,
    textAlign: "center",
    fontFamily: "abhayalibre",
  },
  formHeading: {
    color: "#0F517E",
    lineHeight: 40,
    fontSize: 26,
    textAlign: "center",
    fontFamily: "abhayalibre",
  },
  input: {
    height: 40,
    margin: 2,
    borderWidth: 0,
    paddingTop: 5,
    backgroundColor: "#ebf1f5",
  },
  inputWrapper: {
    marginBottom: 2,
    padding: 20,
  },
  inputText: {
    marginBottom: 40,
    paddingTop: 10,
    color: "DBF0F9",
    fontsize: 20,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  newWrapper: {
    lineheigt: 20,
    fontFamily: "abhayalibre",
    justifyContent: "center",
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textfonts: {
    textAlign: "center",
    color: "#0F517E",
    fontSize: 16,
  },
  textfont: {
    textAlign: "center",
    color: "#0F517E",
    fontSize: 16,
    fontWeight: "bold",
  },
  newWrappertwo: {
    textAlign: "center",
    fontFamily: "abhayalibre",
    justifyContent: "center",
    height: 30,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Home

