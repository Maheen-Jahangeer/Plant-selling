import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FavouriteItem from '../components/FavouriteItem';
import favourites from '../constants/favourites';

const FavouritesScreen = () => {
    const renderItem = (item) => {
        return <FavouriteItem plant={item.item} />
    }
    return (
        <FlatList
            data={favourites}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({

})

export default FavouritesScreen;