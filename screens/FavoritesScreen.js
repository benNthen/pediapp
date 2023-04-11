import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/recipedata';

function FavoritesScreen() {
    // this is used to label a specific meal as a 'Favorite'
    // create const state 'favoriteMealIds' using react-redux's useSelector
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    // filter will return an array of meals with matching ids from favoriteMealsCtx
    const favoriteMeals = MEALS.filter(meal => 
        favoriteMealIds.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have not selected any favorites meals yet. </Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

