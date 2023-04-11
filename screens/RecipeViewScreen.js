import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/recipedata.js';

function RecipeViewScreen ({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // Displays the category grid title inside the Meal Item grid, next to All Categories
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
}

export default RecipeViewScreen;
