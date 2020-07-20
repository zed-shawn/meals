import React, { useEffect, useCallback } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import MealDetail from "../components/MealDetail";
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

export default function MealDetailsScreen(props) {
  const mealID = props.navigation.getParam("mealId");

  const availableMeal = useSelector((state) => state.meals.meals);
  const displayedMeal = availableMeal.find((meal) => meal.id === mealID);
  const isFavCheck = useSelector((state) =>
    state.meals.favMeals.some((meal) => meal.id === mealID)
  );

  const dispatch = useDispatch();

  const favHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: favHandler });
  }, [favHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isFavCheck });
  }, [isFavCheck]);



  return (
    <MealDetail
      title={displayedMeal.title}
      affordability={displayedMeal.affordability}
      complexity={displayedMeal.complexity}
      imageUrl={displayedMeal.imageUrl}
      time={displayedMeal.duration}
      ingredients={displayedMeal.ingredients}
      steps={displayedMeal.steps}
    />
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavHeader= navigationData.navigation.getParam('isFav')

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorites" iconName={isFavHeader?'ios-star':'ios-star-outline'} onPress={toggleFavorite} />
      </HeaderButtons>
    ),
  };
};
