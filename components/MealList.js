import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

export default function MealList(props) {
  const favMeals = useSelector((state) => state.meals.favMeals);

  const mealsRenderHandler = (itemData) => {
    const isFavCheck=favMeals.some((meal) => meal.id === itemData.item.id)
    return (
      <MealItem
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
        time={itemData.item.duration}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavCheck,
            },
          })
        }
      />
    );
  };
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => item.id}
      renderItem={mealsRenderHandler}
      style={{ width: "100%" }}
    />
  );
}
