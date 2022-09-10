import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TextInput } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CartItem from '../components/Cartitem';
import carts from '../constants/cart';
import COLORS from '../constants/colors';
import SlideButton from '../components/Slidebutton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CartScreen = () => {

    const renderItem = (item) => {
        return <CartItem plant={item.item} />
    }

    return (
        <View style={{ backgroundColor: COLORS.light, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: "center" }}>
                <Ionicon name='arrow-back' size={38} color={COLORS.dark} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dark }}>My Cart</Text>
                <View></View>
            </View>
            <FlatList
                style={{ height: height * 0.58 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                data={carts}
                keyExtractor={item => item.id}
                renderItem={renderItem} />
            <View style={styles.priceContainer}>
                <Text>Have a coupon code? enter here</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Enter code' />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: COLORS.green }}>Available</Text>
                        <Ionicon name='checkmark-circle' color={COLORS.green} size={22} style={{ marginLeft: 3 }} />
                    </View>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Subtotal :</Text>
                    <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>$80.00</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Delivery Fee :</Text>
                    <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>$5.00</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Discount :</Text>
                    <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>50%</Text>
                </View>
                <View style={styles.dashedBorder}></View>
                <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Total :</Text>
                    <Text style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>$42.50</Text>
                </View>
                <SlideButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    priceContainer: {
        height: height * 0.37,
        backgroundColor: COLORS.white,
        width,
        padding: 10,
        justifyContent: 'space-around'
    },
    inputContainer: {
        borderColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: "center",
        padding: 3,
        justifyContent: 'space-between',
        minHeight: height * 0.06,
    },
    dashedBorder: {
        height: 0,
        borderWidth: 0.9,
        borderStyle: 'dashed',
        borderColor: 'grey'
    }
})

export default CartScreen;