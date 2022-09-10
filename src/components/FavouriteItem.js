import { View, Image, Dimensions, StyleSheet } from "react-native"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const FavouriteItem = ({ plant }) => {
    console.log('plant img', plant.img);
    return (
        <View style={styles.container}>
            <View style={styles.plantContainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ resizeMode: 'contain', flex: 1, width: width * 0.3, height: height * 0.04 }} source={plant.img} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: width - 30,
        height: height * 0.05,
    },
    plantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailContainer: {
        justifyContent: 'space-around'
    }
})

export default FavouriteItem;