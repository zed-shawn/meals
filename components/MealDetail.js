import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default function MealDetail(props) {
  return (
    <ScrollView>
      <View style={styles.screenRoot}>
        {/* View for Image */}
        <View style={styles.imageView}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
        </View>

        {/* View for TitleText */}
        <View style={styles.titleTextBox}>
          <Text style={styles.titleText}>{props.title.toUpperCase()}</Text>
        </View>

        {/* View for meal details */}
        <View style={styles.detailsHolder}>
          <Text style={styles.detailsText}>{props.time} mins</Text>
          <Text style={styles.detailsText}>
            {props.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsText}>{props.affordability}</Text>
        </View>

        {/* View for Ingredients */}
        <View>
          <Text style={styles.headerText}>INGREDIENTS</Text>
          {props.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.ingredient}>
              - {ingredient}
            </Text>
          ))}
        </View>

        {/* View for Procedure */}
        <View style={styles.procedure}>
          <Text style={styles.headerText}> PROCEDURE </Text>
          {props.steps.map((step) => (
            <Text key={step} style={styles.ingredient}>
              - {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
  },
  imageView: {
    width: "100%",
    height: 300,
    justifyContent: "flex-start",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleText: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "SenBold",
  },
  titleTextBox: {
    marginVertical: 20,
  },
  detailsHolder: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  detailsText: {
    fontFamily: "SenReg",
    fontSize: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "SenBold",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  ingredient: {
    marginHorizontal: 10,
    fontSize: 15,
    fontFamily: "SenReg",
    marginVertical:5,
  },
  procedure: {
    marginVertical: 20,
  },
});
