import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function MealItem(props) {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.screenRoot}>
      <Touchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.afterRoot}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.bgImage}
          >
            <View style={styles.textTitleBox}>
              <Text style={styles.textTitle}>{props.title}</Text>
            </View>
            <View style={styles.textRowBox}>
              <Text style={styles.textRow}>
                {props.complexity.toUpperCase()}
              </Text>
              <Text style={styles.textRow}>{props.time} Min</Text>
              <Text style={styles.textRow}>{props.affordability}</Text>
            </View>
          </ImageBackground>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 300,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomEndRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderTopLeftRadius: 15,
    overflow: "hidden",
  },
  textRowBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: "15%",
    alignItems: "flex-end",
    paddingVertical: 10,
  },
  textTitleBox: {
    height: "85%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  afterRoot: {
    width: "100%",
    flex: 1,
  },
  textRow: {
    fontFamily: "SenReg",
    color: "white",
    backgroundColor:"rgba(0,0,0,0.3)"
  },
  textTitle: {
    fontFamily: "SenBold",
    fontSize: 20,
    color: "white",
    backgroundColor:"rgba(0,0,0,0.1)"
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
