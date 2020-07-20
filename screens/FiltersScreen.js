import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import { setFilters } from "../store/actions/meals";

const FilterItem = (props) => {
  return (
    <View style={styles.filterItemContainer}>
      <Text style={styles.filterTitle}>{props.title}</Text>
      <Switch
        value={props.state}
        onValueChange={props.change}
        trackColor={{ true: Colors.primary }}
        thumbColor={Colors.primary}
      />
    </View>
  );
};

export default function FiltersScreen(props) {
  const navigation = props.navigation;

  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  const dispatch = useDispatch();

  const SaveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: SaveFilters });
  }, [SaveFilters]);

  return (
    <View style={styles.screenRoot}>
      <Text style={styles.title}>Set Filters</Text>
      <FilterItem
        title="Gluten free"
        state={isGlutenFree}
        change={(newValue) => setGlutenFree(newValue)}
      />
      <FilterItem
        title="Lactose free"
        state={isLactoseFree}
        change={(newValue) => setLactoseFree(newValue)}
      />
      <FilterItem
        title="Vegan"
        state={isVegan}
        change={(newValue) => setVegan(newValue)}
      />
      <FilterItem
        title="Vegetarian"
        state={isVegetarian}
        change={(newValue) => setVegetarian(newValue)}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = (navData) => {
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    alignItems: "center",
  },
  filterItemContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 30,
    alignItems: "center",
  },
  title: {
    fontFamily: "SenBold",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    color: Colors.accent,
  },
  filterTitle: {
    fontFamily: "SenReg",
    fontSize: 20,
    color: Colors.accent,
  },
});
