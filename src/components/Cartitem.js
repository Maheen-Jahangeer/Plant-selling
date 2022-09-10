import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import COLORS from '../constants/colors';
// import Animated from 'react-native-reanimated';
// import Swipeble from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import GestureRecognizer from 'react-native-swipe-gestures';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CartItem = ({ plant }) => {

  const renderLeftActions = (progress, dragx) => {
    const scale = dragx.interpolate({
      inputRange: [0, 110],
      outputRange: [0, 3],
      extrapolate: 'clamp'
    })
    console.log("progress", progress);
    return (
      <View style={{ justifyContent: 'center' }}>
        <Animated.View style={[styles.deleteContainer, { transform: [{ scale: scale }] }]}>
          <Icon name='delete' size={18} color={COLORS.red} />
        </Animated.View>
      </View>
    )
  }
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 5
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              alignContent: 'center'
            }}>
              <Image source={plant.img} style={{ resizeMode: 'contain', width: width * 0.2, height: height * 0.08 }} />
            </View>
            <View style={{ justifyContent: 'space-around' }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark }}>
                {plant.name}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.green }}>
                ${plant.price}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[
                styles.countButton,
                {
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.green,
                  borderWidth: 1,
                },
              ]}>
              <Text style={[styles.countButtonText, { color: COLORS.green }]}>
                -
              </Text>
            </View>
            <Text style={styles.count}>{plant.quantity}</Text>
            <View style={[styles.countButton, { backgroundColor: COLORS.green }]}>
              <Text style={[styles.countButtonText, { color: COLORS.white }]}>
                +
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: width - 30,
    height: height * 0.1,
    marginTop: 10,
    justifyContent: 'center',
    // flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 14,
  },
  countButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.dark,
    marginHorizontal: 9,
  },
  deleteContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(245, 42, 42, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default CartItem;
