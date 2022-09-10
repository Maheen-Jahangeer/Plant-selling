import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
// import {IonIcons} from 'react-native-vector-icons/Ionicons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';
import plants from '../constants/plants';
// import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width / 2 - 30

const categoriesList = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHENTIC'];



const HomeScreen = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const CategoryList = () => {
        return (
            <View style={styles.categoryList}>
                {
                    categoriesList.map((category, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => setSelectedCategoryIndex(index)} activeOpacity={0.8}>
                                <Text style={[styles.categoryItem, selectedCategoryIndex == index && styles.categoryItemSelected]}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    const Card = ({ plant }) => {
        return (
            <TouchableOpacity onPress={() => console.log('Clicked on plant card', plant.name)}>
                <View style={styles.cardContainer}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={[styles.favouriteContainer, { backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0,0,0,0.2)' }]}>
                            <IonIcons name='heart' size={18} color={plant.like ? COLORS.red : COLORS.dark} />
                        </View>
                    </View>
                    <View style={{ height: 100, alignItems: 'center' }}>
                        <Image source={plant.img} style={{ flex: 1, resizeMode: 'contain' }} />
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginTop: 10 }}>{plant.name}</Text>
                    <View style={{ marginTop: 7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.dark }}>${plant.price}</Text>
                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 5,
                            backgroundColor: COLORS.green,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ fontSize: 22, fontWeight: '500', color: COLORS.white, textAlign: 'center' }}>+</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderItem = (item) => {
        return <Card plant={item.item} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={{ fontSize: 25, color: COLORS.dark, fontWeight: 'bold' }}>Welcome to </Text>
                    <Text style={{ fontSize: 38, color: COLORS.green, fontWeight: 'bold' }}>Plant Shop</Text>
                </View>
                <IonIcons name='cart' size={38} color={COLORS.dark} style={{ marginTop: 14 }} />
            </View>
            <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <IonIcons name='search' size={24} color={COLORS.dark} />
                    <TextInput placeholder='search' style={{ fontSize: 18, color: COLORS.dark, paddingLeft: 10 }} />
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcon name='sort' size={30} color={COLORS.white} />
                </View>
            </View>
            <CategoryList />
            <FlatList
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50
                }}
                numColumns={2}
                data={plants}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 3,
        flex: 1,
        // justifyContent:"flex-start"
        // justifyContent: 'center'
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    searchWrapper: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 36
        // alignItems:'center'
    },
    searchContainer: {
        borderRadius: 10,
        width: '100%',
        height: 50,
        paddingLeft: 10,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    sortBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    categoryList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
        // flex: 1,
        // marginBottom:10
    },
    categoryItem: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryItemSelected: {
        color: COLORS.green,
        paddingBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.green,
    },
    cardContainer: {
        height: 225,
        borderRadius: 10,
        width,
        backgroundColor: COLORS.light,
        marginHorizontal: 6,
        marginBottom: 20,
        padding: 15
    },
    favouriteContainer: {
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default HomeScreen;

