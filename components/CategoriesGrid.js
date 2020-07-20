import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function CategoriesGrid(props) {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.screenRoot}>
      <Touchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View backgroundColor={props.color} style={styles.view}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomEndRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderTopLeftRadius: 15,
    overflow: "hidden",
    elevation: 8, 

  },
  text: {
    fontFamily: "SenBold",
    fontSize: 20,
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "flex-end",
    padding: 20,
    borderBottomEndRadius: 15,
    borderTopLeftRadius: 15,
    overflow: "hidden",
  },
});
