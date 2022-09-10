import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import COLORS from "../constants/colors";
import plants from "../constants/plants";
import Ionicon from 'react-native-vector-icons/Ionicons';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerIconContainer}>
                <Ionicon name="arrow-back" size={38} color={COLORS.dark} />
                <Ionicon name="cart" size={38} color={COLORS.dark} />
            </View>
            <View style={{ height: 300, alignItems: "center", marginTop: 20 }}>
                <Image style={{ flex: 1, resizeMode: "contain" }} source={plants[1].img} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.detailsContainer}>
                    <View>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: COLORS.dark }}>
                            __ Best Choice
                        </Text>
                    </View>
                    <View style={styles.priceWrapper}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.dark }}>
                            Dragon Plant
                        </Text>
                        <View style={styles.priceButton}>
                            <Text style={{ fontWeight: '500', color: COLORS.white, fontSize: 13 }}>
                                $29.99
                            </Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 15, color: COLORS.dark, fontWeight: "bold" }}>About</Text>
                    <Text style={{ fontSize: 12, color: 'grey', lineHeight: 20, fontWeight: '400' }}>
                        Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.countWrapper}>
                            <View style={styles.countButton}>
                                <Text style={styles.countButtonText}>-</Text>
                            </View>
                            <Text style={{ marginHorizontal: 10 }}>1</Text>
                            <View style={styles.countButton}>
                                <Text style={styles.countButtonText}>+</Text>
                            </View>
                        </View>
                        <Pressable style={styles.buyButton}>
                            <Text style={{ color: COLORS.white, fontWeight: '500', fontSize: 17 }}>Buy</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 3,
        justifyContent: 'space-between'
    },
    headerIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsContainer: {
        width: '100%',
        height: 300,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginHorizontal: 8,
        padding: 10,
        justifyContent: 'space-around'
    },
    priceButton: {
        backgroundColor: COLORS.green,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 66,
        height: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    priceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    countButton: {
        backgroundColor: 'white',
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 1,
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: "center"
    },
    countButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.dark
    },
    buyButton: {
        backgroundColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: width * 0.25,
        height: height * 0.053
    }
})

export default DetailScreen;