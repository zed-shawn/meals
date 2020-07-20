import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { StyleSheet, View, Text } from "react-native";

export default function CategoryScreen(props) {
  const catID = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  if (displayedMeals.length === 0) {
    return(
    <View style={styles.fallback}>
      <Text style={styles.text}>
        Wow, so empty! Adjust filters to see some meals here.
      </Text>
    </View>)
  }
  return <MealList data={displayedMeals} navigation={props.navigation} />;
}

CategoryScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCat.title,
  };
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gray",
  },
});
