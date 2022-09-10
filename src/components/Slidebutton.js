import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../constants/colors';
import Evilicon from 'react-native-vector-icons/EvilIcons';
import { Swipeable } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const SlideButton = () => {
    const leftSwipe = (progress, dragx) => {
        if (dragx != -0) {
            console.log('type', typeof (dragx))
        }
        return (
            <View style={[styles.container, styles.submitContainer]}>

            </View>
        )
    }
    return (
        <Swipeable
            renderLeftActions={leftSwipe}
            onEnded={() => console.log('ended')}
            onActivated={() => console.log("Activated")}
            onCancelled={() => console.log("Cancelled")}
        >
            <View style={styles.container}>
                <Icon name='rightcircle' size={30} color={COLORS.white} />
                <Text style={styles.title}>Swipe to Checkout</Text>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <Evilicon name='chevron-right' color={COLORS.white} size={16} />
                    <Evilicon name='chevron-right' color="#f5f5f5" size={16} />
                    <Evilicon name='chevron-right' color="#f0f0f0" size={16} />
                    <Evilicon name='chevron-right' color="#d4d3d2" size={16} />
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.green,
        height: height * 0.063,
        padding: 9,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 13,
        color: COLORS.white,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: COLORS.white,
    }
})

export default SlideButton;