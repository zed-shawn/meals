import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

export default function FavoritesScreen(props) {
  const displayedMeals = useSelector((state) => state.meals.favMeals);

  if (displayedMeals.length === 0 || !displayedMeals)
    return (
      <View style={styles.fallback}>
        <Text style={styles.text}>No favorite meals yet. Let's add some!</Text>
      </View>
    );

  return <MealList data={displayedMeals} navigation={props.navigation} />;
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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
