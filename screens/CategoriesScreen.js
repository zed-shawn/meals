import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../components/CategoriesGrid";
import HeaderButton from "../components/HeaderButton";

export default function CategoriesScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <CategoriesGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "Category",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
    />
  );
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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
