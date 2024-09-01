import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  ImageBackground,
  Image,
} from "react-native";

const image = { uri: "../assets/pback.png" };

function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titletext}> Good Morning! </Text>
        <Text style={styles.basetext}> Sandul </Text>

        <Image
          source={require("../assets/Rectangle.png")}
          style={{ width: 350, height: 180, borderRadius: 30, margin: 10 }}
        />
        <Text style={styles.bodytext}> Catergory </Text>
        <Text style={styles.downtext}> Top Brands </Text>

        <View style={{ padding: 10 }}>
          <View
            style={{
              display: "flex",
              gap: 20,
              borderRadius: 20,
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#C3D8E2",
              marginBottom:15
            }}
          >
            <Image
              style={{ width: 80, height: 100, objectFit: "contain" }}
              source={require("../assets/blue.png")}
            />
            <View>
              <Text style={{ fontSize: 22, color: "#0F517E",fontWeight: 'bold', }}>Nike</Text>
              <Text style={{ fontSize: 18, color: "black" ,fontWeight: 'bold',}}>Shoes Store</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              gap: 20,
              borderRadius: 20,
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#C3D8E2",
              marginBottom:20,
            }}
          >
            <Image
              style={{ width: 75, height: 100, objectFit: "contain" }}
              source={require("../assets/green.png")}
            />
            <View>
              <Text style={{ fontSize: 22, color: "#0F517E",fontWeight: 'bold', }}>Nike</Text>
              <Text style={{ fontSize: 18, color: "black",fontWeight: 'bold', }}>Shoes Store</Text>
            </View>
          </View>

        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex",
  },
  titletext: {
    color: "#0F517E",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "abhayalibre",
    marginTop: 25,
  },
  basetext: {
    color: "#0F517E",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "abhayalibre",
    textAlignVertical: "center",
    marginTop: 10,
  },
  bodytext: {
    color: "#0F517E",
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Lemon",
    marginTop: 10,
    fontWeight: "bold",
  },
  downtext: {
    color: "#847E7E",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Lemon",
    marginTop: 5,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#C3D8E2",
    padding: 40,
    width: 200,
  },
});


  export default Profile