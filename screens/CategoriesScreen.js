import { FlatList } from 'react-native';
import CategoryGrid from '../components/CategoryGrid';

import { CATEGORIES} from '../data/recipedata';

function CategoriesScreen ({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler () {   
            navigation.navigate('RecipeOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return (
            <CategoryGrid 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler} 
                navigation={navigation}
            />
        );
    }

    return ( 
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem.bind()}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;