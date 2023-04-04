import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import RecipeViewScreen from './screens/RecipeViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title:'All Categories',
            }}
          />
          <Stack.Screen name="RecipeOverview" component={RecipeViewScreen} />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailScreen} 
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {},
});
