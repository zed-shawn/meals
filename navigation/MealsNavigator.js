import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";

const defaultStackNav = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "white",
  headerTitleStyle:{
    fontFamily: 'SenBold'
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Category: CategoryScreen,
    MealDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNav
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNav,
  }
);

const FilterStack = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultStackNav
  }
);

const MealFavNavigator = createBottomTabNavigator(
  {
    MealStack: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel: "Meals",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
      labelStyle:{
        fontFamily:"SenBold",
        fontSize:12
      }
    },
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Meals: {
      screen: MealFavNavigator,
      navigationOptions: { drawerLabel: "Meals" },
    },
    Filter: FilterStack,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "SenReg",
        fontWeight: "normal",
      },
    },
  }
);

export default createAppContainer(AppNavigator);
